/* eslint-disable no-undef */
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount, shallow } from 'enzyme';
import Overview from '../../../client/src/components/Overview/Overview';
import RatingsReviews from '../../../client/src/components/RatingsReviews/RatingsReviews';
import AppComponent from '../../../client/src/components/appComponent';
import App from '../../../client/src/components/app';
import ProductCard from '../../../client/src/components/RelatedItemsOutfit/RelatedItems/productCard';
import ImageGallery from '../../../client/src/components/RelatedItemsOutfit/RelatedItems/imageGallery';
import RelatedItemsList from '../../../client/src/components/RelatedItemsOutfit/RelatedItems/relatedItemsList';
import ComparisonModal from '../../../client/src/components/RelatedItemsOutfit/RelatedItems/comparisonModal';
import OutfitList from '../../../client/src/components/RelatedItemsOutfit/Outfit/outfitList';
import OutfitCard from '../../../client/src/components/RelatedItemsOutfit/Outfit/outfitCard';
import Descriptions from '../../../client/src/components/RelatedItemsOutfit/RelatedItems/descriptions';
import ImageCarousel from '../../../client/src/components/RelatedItemsOutfit/sharedComponents/imageCarousel';

const photo = {
  url: '',
  thumbnail_url: '',
};
const props = {
  category: 'Skirt',
  defaultPrice: '473.00',
  features: [],
  id: 14755,
  name: '',
  reviews: [],
  styleId: 13232,
  style: '',
  salePrice: '222.00',
  default: false,
  photos: [photo],
};

const style = {
  style_id: 0,
  name: '',
  original_price: '',
  sale_price: '',
  'default?': false,
  photos: [photo],
};

describe('AppComponent', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<AppComponent />);
  });
  test('it renders', () => {
    expect(wrapper).not.toBeNull();
  });
  test('is rendering three widgets', () => {
    expect(wrapper.find('relatedItemsOutfit')).toHaveLength(1);
    expect(wrapper.find(Overview)).toHaveLength(1);
    expect(wrapper.find(RatingsReviews)).toHaveLength(1);
  });
  test('should have correct props', () => {
    expect(wrapper.find('appComponent')).toHaveProp('location');
  });
});

describe('RelatedItemsOutfit Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<App />);
  });
  test('it renders RelatedItemsOutfit Component', () => {
    expect('relatedItemsOutfit').not.toBeNull();
  });
  test('is rendering both carousels', () => {
    expect(wrapper.find('#carousel1')).toExist();
    expect(wrapper.find('#carousel2')).toExist();
  });
  test('should have correct props', () => {
    expect(wrapper.find('relatedItemsOutfit')).toHaveProp('product');
    expect(wrapper.find('relatedItemsOutfit')).toHaveProp('getProduct');
    expect(wrapper.find('relatedItemsOutfit')).toHaveProp('currentStyle');
    expect(wrapper.find('relatedItemsOutfit')).toHaveProp('comparisonModal');
  });
  test('has a title for the carousels', () => {
    expect(wrapper.find('title')).toExist();
  });
});

describe('ProductCard Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<MemoryRouter><ProductCard productInfo={props} /></MemoryRouter>);
  });
  test('it renders', () => {
    expect(wrapper).not.toBeNull();
  });
  test('it renders Product Link', () => {
    expect(wrapper.find('productContainer')).toHaveLength(1);
  });
  test('it renders Related Action Button', () => {
    expect(wrapper.find('relatedAction')).toHaveLength(1);
  });
  test('it renders Descriptions', () => {
    expect(wrapper.find('descriptions')).toHaveLength(1);
  });
  test('it renders ImageGallery', () => {
    expect(wrapper.find('imageGallery')).toHaveLength(1);
  });
  test('should have correct props', () => {
    expect(wrapper.find('productCard')).toHaveProp('productInfo');
    expect(wrapper.find('productCard')).toHaveProp('getProduct');
    expect(wrapper.find('productCard')).toHaveProp('comparisonModal');
    expect(wrapper.find('productCard')).toHaveProp('trackInteraction');
  });
});

describe('RelateditemsList Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<MemoryRouter><RelatedItemsList related={[props]} /></MemoryRouter>);
  });
  test('it renders', () => {
    expect(wrapper.find('relatedItemsList')).not.toBeNull();
  });
  test('it renders related items carousel when provided related products', () => {
    expect(wrapper).toContainMatchingElement('#slider');
  });
  test('it renders related product card when provided related products', () => {
    expect(wrapper).toContainMatchingElement('.product');
  });
  test('should have correct props', () => {
    expect(wrapper.find('relatedItemsList')).toHaveProp('related');
    expect(wrapper.find('relatedItemsList')).toHaveProp('getProduct');
    expect(wrapper.find('relatedItemsList')).toHaveProp('comparisonModal');
    expect(wrapper.find('relatedItemsList')).toHaveProp('trackInteraction');
  });
});

describe('Image Gallery', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<ImageGallery photos={[photo]} category="sample" />);
  });
  test('it renders', () => {
    expect(wrapper).not.toBeNull();
  });
  test('should have correct props', () => {
    expect(wrapper).toHaveProp('category');
    expect(wrapper).toHaveProp('photos');
    expect(wrapper).toHaveProp('trackInteraction');
    expect(wrapper).toHaveProp('productId');
  });
  test('should have correct states', () => {
    expect(wrapper).toHaveState('imageFocus');
    expect(wrapper).toHaveState('photo');
  });
  test('renders Image Container', () => {
    expect(wrapper).toContainMatchingElement('imageContainer');
  });
  test('renders Image', () => {
    expect(wrapper).toContainMatchingElement('image');
  });
});

describe('ComparisonModal Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<ComparisonModal combinedFeatures={['sample', 'feature', 'sample']} product1="sample1" product2="sample2" />);
  });
  test('it renders', () => {
    expect(wrapper).not.toBeNull();
  });
  test('should have correct props', () => {
    expect(wrapper).toHaveProp('combinedFeatures');
    expect(wrapper).toHaveProp('product1');
    expect(wrapper).toHaveProp('product2');
    expect(wrapper).toHaveProp('comparisonModal');
  });
  test('renders Modal', () => {
    expect(wrapper).toContainMatchingElement('modal');
  });
  test('renders Modal Container', () => {
    expect(wrapper).toContainMatchingElement('modalContainer');
  });
  test('renders Title Container', () => {
    expect(wrapper).toContainMatchingElement('titleContainer');
  });
  test('renders Compare Box', () => {
    expect(wrapper).toContainMatchingElement('.compareBox');
  });
  test('renders CompareContainer', () => {
    expect(wrapper).toContainMatchingElement('compareContainer');
  });
  test('should render features if provided combinedFeatures', () => {
    expect(wrapper).toContainMatchingElement('.features');
  });
});

describe('OutfitList Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<OutfitList product={props} currentStyle={style} updateButton={() => {}} />);
  });
  test('it renders', () => {
    expect(wrapper).not.toBeNull();
  });
  test('should have correct props', () => {
    expect(wrapper).toHaveProp('currentStyle');
    expect(wrapper).toHaveProp('getProduct');
    expect(wrapper).toHaveProp('product');
    expect(wrapper).toHaveProp('updateButton');
    expect(wrapper).toHaveProp('trackInteraction');
  });
  test('renders OutfitItemsContainer', () => {
    expect(wrapper).toContainMatchingElement('#slider2');
  });
  test('renders AddOutfitContainer', () => {
    expect(wrapper).toContainMatchingElement('.addOutfit');
  });
  test('renders AddOutfitText', () => {
    expect(wrapper).toContainMatchingElement('addOutfitText');
  });
  test('renders plus sign div', () => {
    expect(wrapper).toContainMatchingElement('.plus');
  });
  test('renders plus add div', () => {
    expect(wrapper).toContainMatchingElement('.add');
  });
});

describe('OutfitCard Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<MemoryRouter><OutfitCard productInfo={props} /></MemoryRouter>);
  });
  test('it renders', () => {
    expect(wrapper.find('outfitCard')).not.toBeNull();
  });
  test('should have correct Props', () => {
    expect(wrapper.find('outfitCard')).toHaveProp('productInfo');
    expect(wrapper.find('outfitCard')).toHaveProp('getProduct');
    expect(wrapper.find('outfitCard')).toHaveProp('deleteOutfit');
    expect(wrapper.find('outfitCard')).toHaveProp('trackInteraction');
  });
  test('renders ProductContainer', () => {
    expect(wrapper).toContainMatchingElement('productContainer');
  });
  test('renders OutfitAction', () => {
    expect(wrapper).toContainMatchingElement('outfitAction');
  });
  test('renders ImageGallery', () => {
    expect(wrapper).toContainMatchingElement('imageGallery');
  });
  test('renders Descriptions', () => {
    expect(wrapper).toContainMatchingElement('descriptions');
  });
});

describe('Descriptions Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Descriptions productInfo={props} />);
  });
  test('it renders', () => {
    expect(wrapper).not.toBeNull();
  });
  test('should have correct Props', () => {
    expect(wrapper).toHaveProp('productInfo');
  });
  test('renders DescriptionsContainer', () => {
    expect(wrapper).toContainMatchingElement('descriptionsContainer');
  });
  test('renders Name', () => {
    expect(wrapper).toContainMatchingElement('.name');
  });
  test('renders Category', () => {
    expect(wrapper).toContainMatchingElement('.category');
  });
  test('renders Style', () => {
    expect(wrapper).toContainMatchingElement('.style');
  });
  test('does not render default when default is set to false', () => {
    expect(wrapper).not.toContainMatchingElement('.default');
  });
  test('renders SalePrice when default is set to false', () => {
    expect(wrapper).toContainMatchingElement('.salePrice');
  });
  test('renders StarReviews', () => {
    expect(wrapper).toContainMatchingElement('starReviews');
  });
});

describe('ImageCarousel Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<ImageCarousel photos={[photo]} id={1} />);
  });
  test('it renders', () => {
    expect(wrapper).not.toBeNull();
  });
  test('should have correct Props', () => {
    expect(wrapper).toHaveProp('photos');
    expect(wrapper).toHaveProp('setPhoto');
    expect(wrapper).toHaveProp('id');
    expect(wrapper).toHaveProp('trackInteraction');
  });
  test('renders imageButtonContainer', () => {
    expect(wrapper).toContainMatchingElement('.imageButtonContainer');
  });
  test('renders carouselContainer', () => {
    expect(wrapper).toContainMatchingElement('.carouselContainer');
  });
});
