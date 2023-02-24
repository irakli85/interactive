import styled from "styled-components"
import GlobalStyles from "./components/GlobalStyles";
import starImg from './assets/icon-star.svg'
import ilustration from './assets/illustration-thank-you.svg'

const headingText = 'How did we do?'
const paraText = 'Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!'
const submitText = 'We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!'

function App() {

  return (
    <>
      <GlobalStyles/>
      <Vote/>
      {/* <SubmitPage/> */}
    </>
  )
}

export default App

// VOTECONTAINER

const VoteContainer = styled.div`
  width: 32.7rem;
  height: 36rem;
  background: radial-gradient(98.96% 98.96% at 50% 0%, #232A34 0%, #181E27 100%);
  border-radius: 1.5rem;
  padding: 2.4rem; 
`;

const StarBox = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background: #262E38;
  display: flex;
  justify-content: center;
  align-items: center;  
`;

const Star = styled.img``;

const Heading = styled.h1`
  margin-top: 1.6rem;
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 3rem;
  color: #FFFFFF;
`;

const Paragraph = styled.p`
  margin-top: 1rem;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2.2rem;
  color: #969FAD;
`;

const ButtonBox = styled.div`
  display: flex;
  margin-top: 2.4rem;
  gap: 1.7rem;
`;

const Button = styled.div`
  width: 4.2rem;
  height: 4.2rem;
  border-radius: 50%;
  background: #262E38;
  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 700;
  font-size: 1.4rem;
  color: #7C8798;
  cursor: pointer;
  &:hover{
    background: #FC7614;
    color: #fff;
  }
`;

const Submit = styled.div`
  margin-top: 2.4rem;
  width: 27.9rem;
  height: 4.5rem;
  background: #FC7614;
  border-radius: 2.25rem;
  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 700;
  font-size: 1.4rem;
  letter-spacing: 1.86667px;
  color: #FFFFFF;
  cursor: pointer;
  &:hover{
    color: #FC7614;
    background: #FFFFFF;
  }
`;

const Vote = () => {
  return(
    <VoteContainer>
        <StarBox>
          <Star src={starImg} alt="star"/>
        </StarBox>
        <Heading>{headingText}</Heading>
        <Paragraph>{paraText}</Paragraph>
        <ButtonBox>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>4</Button>
          <Button>5</Button>
        </ButtonBox>
        <Submit>SUBMIT</Submit>
      </VoteContainer>
  )
}

// SUBMIT CONTAINER

const SubmitContainer = styled(VoteContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Ilustration = styled.img`
  margin-top: 1rem;
`;

const Selected = styled.div`
  margin-top: 2.4rem;
  width: 16.8rem;
  height: 3.2rem;
  background: #262E38;
  border-radius: 2.25rem;
  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 400;
  font-size: 1.4rem;
  color: #FC7614;
`;

const ThankYou = styled.h2`
  margin-top: 2.4rem;
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 3rem;
  color: #FFFFFF;
`;

const SubmitPara = styled.p`
  margin-top: 1rem;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2.2rem;
  color: #969FAD;
`;

const SubmitPage = () => {
  return(
    <SubmitContainer>
      <Ilustration src={ilustration} alt='ilustration'/>
      <Selected>You selected {} out of 5</Selected>
      <ThankYou>Thank you!</ThankYou>
      <SubmitPara>{submitText}</SubmitPara>
    </SubmitContainer>
  )
}