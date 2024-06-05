import Header from '../header/Header';
import OpinionCard from '../opinion-card/OpinionCard';
import Rating from '../rating/Rating';
import {
  StyledMainContainer,
  StyledOpinionContainer,
  StyledRatingContainer
} from './maincontainer.style';

const MainContainer = () => {
  return (
    <StyledMainContainer>
      <Header />
      <StyledRatingContainer>
        <Rating web="Reviews" margin="-32px" />
        <Rating web="Report Guru" margin="32px" />
        <Rating web="BestTech" />
      </StyledRatingContainer>
      <StyledOpinionContainer>
        <OpinionCard />
      </StyledOpinionContainer>
    </StyledMainContainer>
  );
};

export default MainContainer;
