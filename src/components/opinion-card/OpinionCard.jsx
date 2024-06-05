import CARD_DATA from '../../constants/card-data';
import {
  StyledCard,
  StyledHeaderCard,
  StyledOpinion,
  StyledUserImg,
  StyledUserName,
  StyledVerifiedTitle
} from './opinion-card.style';

const OpinionCard = () => {
  return (
    <>
      {CARD_DATA.map(user => (
        <StyledCard key={user.id} $margin={user.margin}>
          <StyledHeaderCard>
            <StyledUserImg src={user.img} alt={user.name} />
            <div>
              <StyledUserName>{user.name}</StyledUserName>
              <StyledVerifiedTitle>Verified Buyer</StyledVerifiedTitle>
            </div>
          </StyledHeaderCard>
          <StyledOpinion>{user.opinion}</StyledOpinion>
        </StyledCard>
      ))}
    </>
  );
};

export default OpinionCard;
