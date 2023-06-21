import { URLS } from '../../../config';
import DISCOUNT_SLIDES from '../../../data/discountSlides';
import { useDiscounts } from '../../../hooks/useDiscounts';
import Carousel from '../../carousel/Carousel';
import Slider from '../../slider/Slider';
import './Discount.css';

const DiscountComponent = () => {
  const { discounts } = useDiscounts();

  return (
    <div className="Discount">
      <Carousel items={DISCOUNT_SLIDES} />
      <div className="slides">
        {discounts.map((value, index) => (
          <div className="slider-container" key={index}>
            <p>{value.category}</p>
            <Slider
              items={value.items}
              link={URLS.DISCOUNTS + value.id + '/'}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscountComponent;
