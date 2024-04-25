// Important
import { useEffect, useMemo, useState } from "react"

import CartList from "src/components/cart/CartList"
import Header from "src/components/header/Header"
import OrderSummary from "src/components/order/OrderSummary"
import Root from "src/components/root/Root"
import PropTypes from 'prop-types'

// May update these
import ProductModel from "src/models/Product"
import ImageModel from "src/models/Image"

export default function Cart() {
  const cart = useMemo(() => [new ProductModel("id1", "Tropical Tango Twist", "A zesty fusion of exotic fruit", new ImageModel("src/assets/slushy-1.png", "A slushy"), 2.99, true), new ProductModel("id2", "Fizzy Peach Paradise", "Peach kissed with sparkling delight", new ImageModel("src/assets/slushy-1.png", "A slushy"), 3.99, false)], [])
  const [subtotal, setSubtotal] = useState(0)

  useEffect(() => {
    var newSubtotal = 0
    for (let i = 0; i < cart.length; i++) {
      newSubtotal += cart[i].price
    }

    setSubtotal(newSubtotal)
  }, [cart])

  return (
    <Root>
      <Header title="CART" subtitle="Manage items in your cart and checkout." />
      <CartList products={ cart } />
      <CheckOrder cartSize={ cart.length } subtotal={ subtotal } />
    </Root>
  )
}

function CheckOrder({ cartSize, subtotal }) {
  CheckOrder.propTypes = {
    cartSize: PropTypes.number,
    subtotal: PropTypes.number
  }

  if (cartSize > 0) {
    return <OrderSummary subtotal={ subtotal } />
  }
  return null
}