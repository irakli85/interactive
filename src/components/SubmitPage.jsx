import ilustration from '../assets/illustration-thank-you.svg'

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

export default SubmitPage;