/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ImageGallery from './imageGallery';
import Descriptions from './descriptions';
import ComparissonModal from './comparissonModal';
import ProductContainer from '../styledComponents/styledRelated/productContainer';
import RelatedAction from '../styledComponents/styledRelated/relatedAction';

const ProductCard = ({
  productInfo, getProduct, mainFeatures, mainName,
}) => {
  const [isPressed, setPressed] = useState(false);
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

  const comparisonModal = (event, bool, mainFeat, relatedFeat) => {
    if (bool) {
      setPressed(false);
    } else {
      setPressed(true);
    }
    if (!combinedFeatures.length) {
      combiner(mainFeat, relatedFeat);
    }
    event.stopPropagation();
  };

  return (
    <ProductContainer className="productContainer" onClick={() => getProduct(productInfo.id)}>
      <RelatedAction type="button" onClick={(event) => comparisonModal(event, isPressed, mainFeatures, productInfo.features)}>☆</RelatedAction>
      <ImageGallery photos={productInfo.photos} category={productInfo.category} />
      <Descriptions productInfo={productInfo} />
      {isPressed ? (
        <ComparissonModal
          combinedFeatures={combinedFeatures}
          product1={mainName}
          product2={productInfo.name}
          comparisonModal={comparisonModal}
        />
      ) : null}
    </ProductContainer>
  );
};

export default ProductCard;

ProductCard.propTypes = {
  productInfo: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    slogan: PropTypes.string,
    description: PropTypes.string,
    category: PropTypes.string,
    defaultPrice: PropTypes.string,
    features: PropTypes.arrayOf(PropTypes.object),
    salePrice: PropTypes.string,
    default: PropTypes.bool,
    photos: PropTypes.arrayOf(PropTypes.object),
    styleId: PropTypes.number,
    style: PropTypes.string,
    reviews: PropTypes.arrayOf(PropTypes.object),
  }),
  getProduct: PropTypes.func,
  mainFeatures: PropTypes.arrayOf(PropTypes.object),
  mainName: PropTypes.string,
};

ProductCard.defaultProps = {
  productInfo: null,
  getProduct: PropTypes.func,
  mainFeatures: PropTypes.arrayOf(PropTypes.object),
  mainName: PropTypes.string,
};
