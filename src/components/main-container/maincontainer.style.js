import styled from 'styled-components';

const StyledMainContainer = styled.main`
  font-family: 'League Spartan', sans-serif;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 1110px;
    margin: auto;
  }
`;

const StyledRatingContainer = styled.section`
  margin-top: 39px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 768px) {
    width: 50%;
  }
`;

const StyledOpinionContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-top: 46px;

  @media screen and (min-width: 768px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export { StyledMainContainer, StyledRatingContainer, StyledOpinionContainer };
