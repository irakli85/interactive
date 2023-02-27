import { useState } from "react";
import GlobalStyles from "./components/GlobalStyles";
import styled from "styled-components";
import ilustration from './assets/illustration-thank-you.svg'
import starImg from './assets/icon-star.svg'

function App() {
  const [clicked, setClicked] =useState(0)

  const handleClickOne = ()=>{
    setClicked(1)
    console.log(clicked)
  }

  const handleClicktwo = ()=>{
    setClicked(2)
    console.log(clicked)
  }

  const handleClickThree = ()=>{
    setClicked(3)
    console.log(clicked)
  }

  const handleClickFour = ()=>{
    setClicked(4)
    console.log(clicked)
  }

  const handleClickFive = ()=>{
    setClicked(5)
    console.log(clicked)
  }
  

  return (
    <>
      <GlobalStyles/>
      <Vote clickOne={handleClickOne}
      clickTwo={handleClicktwo}
      clickThree={handleClickThree}
      clickFour = {handleClickFour}
      clickFive = {handleClickFive}
      />
      {/* <SubmitPage/> */}
    </>
  )
}

export default App

const Button = styled.div`
  width: 4.2rem;
  height: 4.2rem;
  border-radius: 50%;
  background: ${props => props.selected ? '#7C8798' : '#262E38'};
  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: 700;
  font-size: 1.4rem;
  color: ${props => props.selected ? '#FFFFFF' : '#7C8798'};
  cursor: pointer;
  &:hover{
    background: #FC7614;
    color: #fff;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  margin-top: 2.4rem;
  gap: 1.7rem;
`;

const Heading = styled.h1`
  margin-top: 1.6rem;
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 3rem;
  color: #FFFFFF;
`;

const Ilustration = styled.img`
  margin-top: 1rem;
`;

const Paragraph = styled.p`
  margin-top: 1rem;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2.2rem;
  color: #969FAD;
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

const Star = styled.img``;

const StarBox = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background: #262E38;
  display: flex;
  justify-content: center;
  align-items: center;  
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



const submitText = 'We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!'

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

const SubmitPara = styled.p`
  margin-top: 1rem;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2.2rem;
  color: #969FAD;
`;

const ThankYou = styled.h2`
  margin-top: 2.4rem;
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 3rem;
  color: #FFFFFF;
`;

const VoteContainer = styled.div`
  width: 32.7rem;
  height: 36rem;
  background: radial-gradient(98.96% 98.96% at 50% 0%, #232A34 0%, #181E27 100%);
  border-radius: 1.5rem;
  padding: 2.4rem; 
`;


const headingText = 'How did we do?'
const paraText = 'Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!'

const Vote = ({clickOne, clickTwo, clickThree, clickFour, clickFive}) => {
  return(
    <VoteContainer>
        <StarBox>
          <Star src={starImg} alt="star"/>
        </StarBox>
        <Heading>{headingText}</Heading>
        <Paragraph>{paraText}</Paragraph>
        <ButtonBox>
          <Button onClick = {clickOne} >1</Button>
          <Button onClick={clickTwo}>2</Button>
          <Button onClick={clickThree}>3</Button>
          <Button onClick={clickFour}>4</Button>
          <Button onClick={clickFive}>5</Button>
        </ButtonBox>
        <Submit>SUBMIT</Submit>
      </VoteContainer>
  )
}

const SubmitContainer = styled(VoteContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;












