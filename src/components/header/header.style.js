import styled from 'styled-components';

const StyledHeader = styled.header`
  margin-top: 82px;
  margin-inline: auto;
  width: 327px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 50%;
    text-align: start;
    justify-content: center;
    padding-inline: 20px;
    box-sizing: border-box;
  }
`;

const StyledTitle = styled.h1`
  color: #512051;
  font-size: 40px;
  font-weight: bold;
  padding-inline: 20px;
  margin: 0;

  @media screen and (min-width: 768px) {
    padding: 0px;
    padding-right: 120px;
  }
`;

const StyledSubTitle = styled.p`
  color: #927b91;
  font-size: 19px;
`;

export { StyledHeader, StyledTitle, StyledSubTitle };
