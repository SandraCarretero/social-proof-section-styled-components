import styled from 'styled-components';

const StyledCard = styled.article`
  width: 327px;
  height: 248px;
  padding-inline: 32px;
  padding-block: 40px;
  background-color: #512051;
  margin-inline: 0;
  border-radius: 10px;
  box-sizing: border-box;

  @media screen and (min-width: 768px) {
    margin-top: ${({ $margin }) => $margin};
  }
`;

const StyledHeaderCard = styled.header`
  display: flex;
  align-items: center;
  height: 40px;
`;

const StyledUserImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const StyledUserName = styled.p`
  margin: 0;
  padding-left: 23px;
  color: white;
  font-size: 17px;
  font-weight: bold;
`;

const StyledVerifiedTitle = styled.p`
  margin: 0;
  margin-top: 4px;
  padding-left: 23px;
  color: #ee69a4;
`;

const StyledOpinion = styled.p`
  color: white;
  font-size: 17px;
  line-height: 22px;
  margin-top: 23px;
`;

export {
  StyledCard,
  StyledHeaderCard,
  StyledUserImg,
  StyledUserName,
  StyledVerifiedTitle,
  StyledOpinion
};
