import "@babel/polyfill"
import * as React from "react"
import ReactDOM from "react-dom"
import { Card, Button } from "antd"
import { HeaderTitle } from "./Styled"
import cartImg from "images/cart.svg"
import List from "./components/List"

import "css/antdesign-overwrite.css"

class App extends React.PureComponent {
  render() {
    return (
      <Card
        title={
          <HeaderTitle>
            <h3>Select Partiposters to Invite</h3>
            <div className="action">
              <Button ghost size="small" type="primary">
                EMPTY CART
              </Button>
              <img src={cartImg} />
            </div>
          </HeaderTitle>
        }
      >
        <List />
      </Card>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"))
