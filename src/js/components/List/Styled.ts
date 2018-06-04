import styled from "styled-components"
import { List } from "antd"

const Item = List.Item

export const ListWrapper = styled(List)`
  margin: 15px auto !important;
  max-width: 400px;
`

export const ItemWrapper = styled(Item)`
  background: #fff;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 10px;
  img {
    width: 50px;
    height: 50px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    margin-right: 10px;
  }
  .info {
    font-weight: 700;
    line-height: 50px;
  }
`
