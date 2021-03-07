import React, {
  useState, useEffect, useRef, useLayoutEffect,
} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import PropTypes from 'prop-types';
import RelatedItemsList from './RelatedItems/relatedItemsList';
import Left from './styledComponents/styledRelated/left';
import Right from './styledComponents/styledRelated/right';
import RelatedContainer from './styledComponents/styledRelated/relatedContainer';
import SvgArrowR from './styledComponents/styledRelated/svgArrowR';
import SvgArrowL from './styledComponents/styledRelated/svgArrowL';
import OutfitContainer from './styledComponents/styledOutfit/outfitContainer';
import OutfitList from './Outfit/outfitList';
import Title from './styledComponents/styledRelated/title';
import ButtonContainer from './styledComponents/sharedStyledC/buttonContainer';
import ComparissonModal from './RelatedItems/comparissonModal';

const Div = styled.div`
@keyframes fadein {
  from { opacity: 0; }
  to   { opacity: 1; }
}
animation: fadein 4s;
transform: translateY(${({ animate }) => (animate ? '0vh' : '60vh')});
transition: transform 1.8s;

`;

const RelatedItemsOutfit = ({ getProduct, product, currentStyle }) => {
  const [isPressed, setPressed] = useState(false);
  const [related, setRelated] = useState([]);
  const [hasRelatedNext, setHasRelatedNext] = useState(false);
  const [hasRelatedPrevious, setHasRelatedPrevious] = useState(false);
  const [hasOutfitNext, setHasOutfitNext] = useState(false);
  const [hasOutfitPrevious, setHasOutfitPrevious] = useState(false);
  const [relatedName, setRelatedName] = useState('');
  const [show, doShow] = useState({
    itemOne: false,
    itemTwo: false,
  });

  const [combinedFeatures, setCombinedFeatures] = useState([]);
  const combiner = (feat1, feat2) => {
    const combined = {};
    for (let i = 0; i < feat1.length; i += 1) {
      if (combined[feat1[i].feature] === undefined) {
        combined[feat1[i].feature] = [(feat1[i].value ? feat1[i].value : '✓'), null];
      }
    }
    for (let j = 0; j < feat2.length; j += 1) {
      if (combined[feat2[j].feature] === undefined) {
        combined[feat2[j].feature] = [null, (feat2[j].value ? feat2[j].value : '✓')];
      } else {
        combined[feat2[j].feature][1] = (feat2[j].value ? feat2[j].value : '✓');
      }
    }
    const final = [];
    const feats = Object.keys(combined);
    const values = Object.values(combined);
    for (let k = 0; k < feats.length; k += 1) {
      final.push(values[k][0], feats[k], values[k][1]);
    }
    setCombinedFeatures(final);
  };
  const comparisonModal = (event, relatedFeat, relatedProduct) => {
    event.preventDefault();
    event.stopPropagation();
    if (isPressed) {
      setPressed(false);
    } else {
      setPressed(true);
    }
    setRelatedName(relatedProduct);
    if (!combinedFeatures.length) {
      combiner(product.features, relatedFeat);
    }
  };

  const ourRef = useRef(null);
  const anotherRef = useRef(null);

  useLayoutEffect(() => {
    const topPos = (element) => {
      if (element) {
        return element.getBoundingClientRect().top;
      }
      return null;
    };

    const div1Pos = topPos(ourRef.current);
    const div2Pos = topPos(anotherRef.current);
    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight;
      if (div1Pos < scrollPos) {
        doShow((state) => ({ ...state, itemOne: true }));
      } else if (div2Pos < scrollPos) {
        doShow((state) => ({ ...state, itemTwo: true }));
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const getRelated = (id) => {
    axios.get(`/products/${id}/related`)
      .then((response) => {
        setRelated(response.data);
        setHasRelatedPrevious(false);
      });
    const slider = document.getElementById('slider');
    const slider2 = document.getElementById('slider2');
    slider.scrollLeft = 0;
    slider2.scrollLeft = 0;
  };

  const updateButton = () => {
    const relatedSlider = document.getElementById('slider');
    const outfitSlider = document.getElementById('slider2');
    const outfitWidth = outfitSlider.scrollWidth - outfitSlider.clientWidth;
    const relatedWidth = relatedSlider.scrollWidth - relatedSlider.clientWidth;
    if (outfitWidth) {
      setHasOutfitNext(true);
    } else {
      setHasOutfitPrevious(false);
      setHasOutfitNext(false);
    }
    if (relatedWidth) {
      setHasRelatedNext(true);
    } else {
      setHasRelatedPrevious(false);
      setHasRelatedNext(false);
    }
  };

  useEffect(() => {
    if (product.id !== undefined) {
      getRelated(product.id);
      updateButton();
    }
  }, [product]);

  useEffect(() => {
    updateButton();
  }, [related]);

  useEffect(() => {
    let unmounted = false;
    setTimeout(() => {
      if (!unmounted) {
        window.addEventListener('resize', updateButton);
      }
    }, 50);
    return () => {
      unmounted = true;
      window.removeEventListener('resize', updateButton);
    };
  }, []);

  const right = (carousel) => {
    let slider;
    if (carousel === 'relatedRight') {
      slider = document.getElementById('slider');
      const relatedWidth = slider.scrollWidth - slider.clientWidth;
      if (relatedWidth) {
        setHasRelatedNext(true);
        setHasRelatedPrevious(true);
        slider.scrollLeft += 242;
        if (slider.scrollLeft > relatedWidth - 484) {
          slider.scrollLeft += relatedWidth - slider.scrollLeft;
          setHasRelatedNext(false);
        }
        if (slider.scrollLeft >= relatedWidth - 242) {
          setHasRelatedNext(false);
        }
      } else {
        setHasRelatedPrevious(false);
        setHasRelatedNext(false);
      }
    } else {
      slider = document.getElementById('slider2');
      const outfitWidth = slider.scrollWidth - slider.clientWidth;
      if (outfitWidth) {
        setHasOutfitNext(true);
        setHasOutfitPrevious(true);
        slider.scrollLeft += 242;
        if (slider.scrollLeft > outfitWidth - 484) {
          slider.scrollLeft += outfitWidth - slider.scrollLeft;
          setHasOutfitNext(false);
        }
        if (slider.scrollLeft >= outfitWidth - 242) {
          setHasOutfitNext(false);
        }
      } else {
        setHasOutfitPrevious(false);
        setHasOutfitNext(false);
      }
    }
  };

  const left = (carousel) => {
    let slider;
    if (carousel === 'relatedLeft') {
      slider = document.getElementById('slider');
      const relatedWidth = slider.scrollWidth - slider.clientWidth;
      if (relatedWidth) {
        setHasRelatedNext(true);
        slider.scrollLeft -= 242;
        if (slider.scrollLeft < 484) {
          slider.scrollLeft -= slider.scrollLeft;
          setHasRelatedPrevious(false);
        }
        setHasRelatedNext(true);
      } else {
        setHasRelatedPrevious(false);
        setHasRelatedNext(false);
      }
    } else {
      slider = document.getElementById('slider2');
      const outfitWidth = slider.scrollWidth - slider.clientWidth;
      if (outfitWidth) {
        setHasOutfitNext(true);
        slider.scrollLeft -= 242;
        if (slider.scrollLeft < 484) {
          slider.scrollLeft -= slider.scrollLeft;
          setHasOutfitPrevious(false);
        }
        setHasOutfitNext(true);
      } else {
        setHasOutfitPrevious(false);
        setHasOutfitNext(false);
      }
    }
  };

  return (
    <>
      {isPressed ? (
        <ComparissonModal
          combinedFeatures={combinedFeatures}
          product1={product.name}
          product2={relatedName}
          comparisonModal={comparisonModal}
        />
      ) : null}
      <Div animate={show.itemTwo} ref={anotherRef}>
        <RelatedContainer>
          <Title>COMPLETE THE LOOK</Title>
          {hasRelatedPrevious ? <Left type="button" onClick={() => left('relatedLeft')}><SvgArrowL width="60" height="60"><path d="M 20 10 L 30 0 L 60 30 L 30 60 L 20 50 L 40 30 L 10 0" /></SvgArrowL></Left> : null}
          <RelatedItemsList
            related={related}
            getProduct={getProduct}
            comparisonModal={comparisonModal}
          />
          {hasRelatedNext ? <ButtonContainer /> : null}
          {hasRelatedNext ? <Right type="button" onClick={() => right('relatedRight')}><SvgArrowR width="60" height="60"><path d="M 20 10 L 30 0 L 60 30 L 30 60 L 20 50 L 40 30 L 10 0" /></SvgArrowR></Right> : null}
        </RelatedContainer>
      </Div>
      <Div animate={show.itemOne} ref={ourRef}>
        <OutfitContainer>
          <Title>YOUR OUTFIT</Title>
          {hasOutfitPrevious ? <Left type="button" onClick={left}><SvgArrowL width="60" height="60"><path d="M 20 10 L 30 0 L 60 30 L 30 60 L 20 50 L 40 30 L 10 0" /></SvgArrowL></Left> : null}
          <OutfitList
            currentStyle={currentStyle}
            getProduct={getProduct}
            product={product}
            updateButton={updateButton}
          />
          {hasOutfitNext ? <ButtonContainer /> : null}
          {hasOutfitNext ? <Right type="button" onClick={right}><SvgArrowR width="60" height="60"><path d="M 20 10 L 30 0 L 60 30 L 30 60 L 20 50 L 40 30 L 10 0" /></SvgArrowR></Right> : null}
        </OutfitContainer>
      </Div>
    </>
  );
};

export default RelatedItemsOutfit;

RelatedItemsOutfit.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    campus: PropTypes.string,
    name: PropTypes.string,
    slogan: PropTypes.string,
    description: PropTypes.string,
    category: PropTypes.string,
    default_price: PropTypes.string,
    created_at: PropTypes.string,
    updated_at: PropTypes.string,
    features: PropTypes.arrayOf(PropTypes.object),
  }),
  currentStyle: PropTypes.shape({
    style_id: PropTypes.number,
    name: PropTypes.string,
    original_price: PropTypes.string,
    sale_price: PropTypes.string,
    'default?': PropTypes.bool,
    photos: PropTypes.arrayOf(PropTypes.object),
  }),
  getProduct: PropTypes.func,
};

RelatedItemsOutfit.defaultProps = {
  product: null,
  getProduct: PropTypes.func,
  currentStyle: null,
};
