import styled from 'styled-components';

const StyledRating = styled.div`
  margin-inline: auto;
  width: 327px;
  height: 78px;
  text-align: center;
  background-color: #f7f2f7;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;

  @media screen and (min-width: 768px) {
    margin-left: ${({ $margin }) => $margin};
  }
`;

const StyledStars = styled.div`
  margin-top: 16px;
  width: 116px;
  height: 16px;
  display: flex;
  justify-content: space-between;
`;

const StyledMagazin = styled.p`
  color: #512051;
  font-size: 17px;
  font-weight: bold;
  display: grid;
  align-content: center;
`;

export { StyledRating, StyledStars, StyledMagazin };
