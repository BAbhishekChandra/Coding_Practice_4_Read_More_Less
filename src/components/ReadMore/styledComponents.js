// Style your elements here

import styled from 'styled-components'

export const ReadMoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 40px 50px 40px 50px;
`

export const ReactHooksHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 28px;
  font-weight: 500;
  color: #1e293b;
  margin: 30px 0 0 0;
  @media screen and (min-width: 576px) {
    font-size: 36px;
  }
`

export const ReadMoreParagraph = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  color: #334155;
  margin: 20px 0 30px 0;
  @media screen and (min-width: 576px) {
    font-size: 18px;
  }
`

export const HookImage = styled.img`
  width: 100%;
`

export const DescriptionParagraph = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
  color: #334155;
  line-height: 2;
  text-align: justify;
  @media screen and (min-width: 576px) {
    font-size: 14px;
  }
`

export const ReadButton = styled.button`
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
  margin: 10px 0 20px 0;
  padding: 10px 25px 10px 25px;
  background-color: #1f81ff;
  color: #ffffff;
  border-radius: 5px;
  border: none;
  align-self: flex-start;
  @media screen and (min-width: 576px) {
    align-self: center;
    font-size: 14px;
  }
`
