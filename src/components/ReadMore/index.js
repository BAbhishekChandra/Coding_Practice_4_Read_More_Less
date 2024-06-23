// Write your code here
import {useState} from 'react'
import {
  ReadMoreContainer,
  ReactHooksHeading,
  ReadMoreParagraph,
  HookImage,
  DescriptionParagraph,
  ReadButton,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  // console.log(reactHooksDescription)

  const [buttonReadState, setUpdateButtonState] = useState(true)
  const descriptionText = buttonReadState
    ? reactHooksDescription.slice(0, 171)
    : reactHooksDescription

  const buttonText = buttonReadState ? 'Read More' : 'Read Less'

  const onClickReadButton = () => {
    setUpdateButtonState(prevState => !prevState)
  }

  return (
    <ReadMoreContainer>
      <ReactHooksHeading>React Hooks</ReactHooksHeading>
      <ReadMoreParagraph>Hooks are a new addition to React</ReadMoreParagraph>
      <HookImage
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      <DescriptionParagraph>{descriptionText}</DescriptionParagraph>
      <ReadButton type="button" onClick={onClickReadButton}>
        {buttonText}
      </ReadButton>
    </ReadMoreContainer>
  )
}

export default ReadMore
