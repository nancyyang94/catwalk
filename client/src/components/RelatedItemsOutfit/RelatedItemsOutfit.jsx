import React, { useState, useEffect } from 'react';
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

const RelatedItemsOutfit = ({ getProduct, product, currentStyle }) => {
  const [related, setRelated] = useState([]);
  const [hasRelatedNext, setHasRelatedNext] = useState(false);
  const [hasRelatedPrevious, setHasRelatedPrevious] = useState(false);
  const [hasOutfitNext, setHasOutfitNext] = useState(false);
  const [hasOutfitPrevious, setHasOutfitPrevious] = useState(false);

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

  const right = (event) => {
    let slider;
    if (event.target.name === 'relatedRight') {
      slider = document.getElementById('slider');
      setHasRelatedPrevious(true);
      const scrollLeftMax = slider.scrollWidth - slider.clientWidth;
      slider.scrollLeft += 312;
      if (slider.scrollLeft >= scrollLeftMax - 312) {
        setHasRelatedNext(false);
      }
    } else {
      slider = document.getElementById('slider2');
      setHasOutfitPrevious(true);
      const scrollLeftMax = slider.scrollWidth - slider.clientWidth;
      slider.scrollLeft += 312;
      if (slider.scrollLeft >= scrollLeftMax - 312) {
        setHasOutfitNext(false);
      }
    }
  };

  const left = (event) => {
    let slider;
    if (event.target.name === 'relatedLeft') {
      slider = document.getElementById('slider');
      if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth - 312) {
        slider.scrollLeft -= 307;
        setHasRelatedNext(true);
      } else {
        slider.scrollLeft -= 312;
        setHasRelatedNext(true);
        if (slider.scrollLeft <= 312) {
          setHasRelatedPrevious(false);
        }
      }
    } else {
      slider = document.getElementById('slider2');
      slider.scrollLeft -= 312;
      setHasOutfitNext(true);
      if (slider.scrollLeft <= 312) {
        setHasOutfitPrevious(false);
      }
    }
  };

  return (
    <div>
      <RelatedContainer className="carousel">
        <Title>RELATED PRODUCTS</Title>
        {hasRelatedPrevious ? <Left type="button" name="relatedLeft" onClick={(event) => left(event)}><SvgArrowL width="60" height="60"><path d="M 20 10 L 30 0 L 60 30 L 30 60 L 20 50 L 40 30 L 10 0" /></SvgArrowL></Left> : null}
        <RelatedItemsList
          related={related}
          getProduct={getProduct}
          mainFeatures={product.features}
          mainName={product.name}
        />
        {hasRelatedNext ? <ButtonContainer /> : null}
        {hasRelatedNext ? <Right type="button" name="relatedRight" onClick={(event) => right(event)}><SvgArrowR width="60" height="60"><path d="M 20 10 L 30 0 L 60 30 L 30 60 L 20 50 L 40 30 L 10 0" /></SvgArrowR></Right> : null}
      </RelatedContainer>
      <OutfitContainer>
        <Title>YOUR OUTFIT</Title>
        {hasOutfitPrevious ? <Left type="button" id="goLeft" onClick={left}><SvgArrowL width="60" height="60"><path d="M 20 10 L 30 0 L 60 30 L 30 60 L 20 50 L 40 30 L 10 0" /></SvgArrowL></Left> : null}
        <OutfitList
          currentStyle={currentStyle}
          getProduct={getProduct}
          product={product}
          updateButton={updateButton}
        />
        {hasOutfitNext ? <ButtonContainer /> : null}
        {hasOutfitNext ? <Right type="button" id="goRight" onClick={right}><SvgArrowR width="60" height="60"><path d="M 20 10 L 30 0 L 60 30 L 30 60 L 20 50 L 40 30 L 10 0" /></SvgArrowR></Right> : null}
      </OutfitContainer>
    </div>
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
