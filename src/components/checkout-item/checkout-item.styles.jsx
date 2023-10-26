import styled from "styled-components";
import { ReactComponent as IncreaseSVG } from '../../assets/arrow-right-bold.svg';
import { ReactComponent as DecreaseSVG } from '../../assets/arrow-left-bold.svg';
import { ReactComponent as RemoveSVG } from '../../assets/x-bold.svg';

export const SpannableLabel = styled.span
export const SpannableImage = styled.img
export const IncreaseIcon = styled(IncreaseSVG)
export const DecreaseIcon = styled(DecreaseSVG)

export const QuantityContainer = styled.div`
  display: flex;
  ${IncreaseIcon}, ${DecreaseIcon} {
    cursor: pointer;
  }
  ${SpannableLabel} {
    margin: 0 10px;
  }

`
export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
  ${SpannableImage} {
    width: 100%;
    height: 100%;
  }
`

export const RemoveIcon = styled(RemoveSVG) `
  padding-left: 12px;
  cursor: pointer;
`

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
  ${SpannableLabel}, ${QuantityContainer} {
    width: 23%;
  }
  `
