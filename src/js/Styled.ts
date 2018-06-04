import styled from "styled-components"
import { Button } from "antd"

export const HeaderTitle = styled.div`
  position: relative;
  h3 {
    font-size: 18px;
    color: #253778;
    font-weight: 700;
    text-align: center;
    margin: 0;
  }
  .action {
    position: absolute;
    right: 0;
    top: 0;
    display: flex;
    align-items: center;
    .cart-total {
      margin: 0 15px;
      img {
        height: 20px;
      }
    }
    .total-sum {
      color: #253778;
      font-size: 18px;
      font-weight: 700;
    }
  }
`

export const EmptyButton = styled(Button)`
  border-color: #253778 !important;
  color: #253778 !important;
`
