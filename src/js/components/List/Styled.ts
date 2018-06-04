import styled from "styled-components"
import { List, Button } from "antd"

const Item = List.Item

export const ListWrapper = styled(List)`
  margin: 15px auto !important;
  max-width: 400px;
`

export const ItemWrapper = styled(Item)`
  background: ${({ selected }: { selected: boolean }) =>
    selected ? "#5eb2ed" : "#fff"};
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
    color: ${({ selected }: { selected: boolean }) =>
      selected ? "#fff" : "#000"};
  }
  .ant-btn {
    font-weight: 500;
    background: ${({ selected }: { selected: boolean }) =>
      selected ? "#fff" : "#5eb2ed"};
    color: ${({ selected }: { selected: boolean }) =>
      selected ? "#000" : "#fff"};
  }
`
