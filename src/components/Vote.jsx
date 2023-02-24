import starImg from '../assets/icon-star.svg'
const headingText = 'How did we do?'
const paraText = 'Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!'
import {VoteContainer, StarBox, Star, Heading, Paragraph, ButtonBox, Button, Submit} from '@components'

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

export default Vote;