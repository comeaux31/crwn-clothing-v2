import styled from "styled-components";
import Button from "../button/button.component";

export const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative; `

export const Image = styled.img `
    width: 100%;
    height: 95%;
    object-fit: cover;
    margin-bottom: 5px;
    &:hover {
      opacity: 0.8;
    }
  `

export const ProductCardButton = styled(Button)`
    width: 75%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    // display: none;
    &:hover {
      opacity: 0.85;
      display: flex;
    }
  `

export const Footer = styled.div `
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
`

export const Name = styled.span `
      width: 90%;
      margin-bottom: 15px;
    `

export const Price = styled.span `
      width: 10%;
      `
