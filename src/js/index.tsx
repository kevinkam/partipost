import "@babel/polyfill"
import * as React from "react"
import ReactDOM from "react-dom"
import { Card, Badge } from "antd"
import { HeaderTitle, EmptyButton } from "./Styled"
import cartImg from "images/cart.svg"
import List from "./components/List"

import "css/antdesign-overwrite.css"

interface IState {
  loading: boolean
  partiposters: Array<{
    id: number
    fee: number
    image_url: string
    name: string
    user_name: string
  }>
  carts: Array<number>
}

class App extends React.PureComponent<{}, IState> {
  readonly state = {
    loading: true,
    partiposters: [],
    carts: []
  }
  getData = () => {
    setTimeout(async () => {
      const {
        default: { partiposters }
      } = await import("data/db.json")
      this.setState({
        loading: false,
        partiposters
      })
    }, 1000)
  }
  componentDidMount() {
    this.getData()
  }
  toggleCart = item => {
    this.setState(({ carts }) => {
      let newCarts = Array.from(carts)
      if (carts.includes(item)) {
        const index = carts.indexOf(item)
        newCarts.splice(index, 1)
      } else {
        newCarts.push(item)
      }
      return { carts: newCarts }
    })
  }
  emptyCart = () => {
    this.setState({ carts: [] })
  }
  render() {
    const { carts, partiposters, loading } = this.state
    const total = carts.reduce(
      (r, item) =>
        (partiposters.find(({ id }) => id === item).fee * 1000 + r * 1000) /
        1000,
      0
    )
    return (
      <Card
        title={
          <HeaderTitle>
            <h3>Select Partiposters to Invite</h3>
            <div className="action">
              <EmptyButton
                ghost
                size="small"
                type="primary"
                onClick={this.emptyCart}
              >
                EMPTY CART
              </EmptyButton>
              <Badge count={carts.length} className="cart-total">
                <img src={cartImg} />
              </Badge>
              <span className="total-sum">${total}</span>
            </div>
          </HeaderTitle>
        }
      >
        <List
          carts={carts}
          toggleCart={this.toggleCart}
          loading={loading}
          partiposters={partiposters}
        />
      </Card>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"))
