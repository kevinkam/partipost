import * as React from "react"
import { Icon, Spin, Button } from "antd"
import { ListWrapper, ItemWrapper } from "./Styled"

interface ExposeProps {
  toggleCart: (item) => void
  carts: Array<number>
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

const List = ({ toggleCart, carts, loading, partiposters }: ExposeProps) => (
  <ListWrapper>
    {loading ? (
      <ItemWrapper>
        <div style={{ textAlign: "center", width: "100%" }}>
          <Spin indicator={antIcon} />
        </div>
      </ItemWrapper>
    ) : (
      partiposters.map((p, i) => {
        const selected = carts.includes(p.id)
        return (
          <ItemWrapper
            key={i}
            actions={[
              <Button onClick={toggleCart.bind(null, p.id)}>
                {selected ? "DESELECT" : "SELECT"}
              </Button>
            ]}
            selected={selected}
          >
            <img src={p.image_url} />
            <span className="info">
              {p.name} · ${p.fee}
            </span>
          </ItemWrapper>
        )
      })
    )}
  </ListWrapper>
)

export default List as React.SFC<ExposeProps>
