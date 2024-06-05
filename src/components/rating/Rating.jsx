import { StyledMagazin, StyledRating, StyledStars } from './rating.style';

const Rating = ({ web, margin }) => {
  return (
    <StyledRating $margin={margin}>
      <StyledStars>
        <img src="../../../public/images/icon-star.svg" alt="star" />
        <img src="../../../public/images/icon-star.svg" alt="star" />
        <img src="../../../public/images/icon-star.svg" alt="star" />
        <img src="../../../public/images/icon-star.svg" alt="star" />
        <img src="../../../public/images/icon-star.svg" alt="star" />
      </StyledStars>
      <StyledMagazin>Rated 5 Stars in {web}</StyledMagazin>
    </StyledRating>
  );
};

export default Rating;
