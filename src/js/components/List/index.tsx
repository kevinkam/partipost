import * as React from "react"
import { Icon, Spin, Button } from "antd"
import { ListWrapper, ItemWrapper } from "./Styled"

interface IState {
  loading: boolean
  partiposters: Array<{
    id: number
    fee: number
    image_url: string
    name: string
    user_name: string
  }>
}
const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />

class List extends React.PureComponent<{}, IState> {
  readonly state = {
    loading: true,
    partiposters: []
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
  render() {
    const { loading, partiposters } = this.state
    return (
      <ListWrapper>
        {loading ? (
          <ItemWrapper>
            <div style={{ textAlign: "center", width: "100%" }}>
              <Spin indicator={antIcon} />
            </div>
          </ItemWrapper>
        ) : (
          partiposters.map((p, i) => (
            <ItemWrapper key={i} actions={[<Button>Select</Button>]}>
              <img src={p.image_url} />
              <span className="info">
                {p.name} · ${p.fee}
              </span>
            </ItemWrapper>
          ))
        )}
      </ListWrapper>
    )
  }
}

export default List
