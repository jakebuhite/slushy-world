import CartItem from "./CartItem"
import ProductModel from "src/models/Product"
import PropTypes from 'prop-types'
import './Cart.css'

export default function CartList({ products }) {
    CartList.propTypes = {
        products: PropTypes.arrayOf(PropTypes.instanceOf(ProductModel))
    }
    
    if (!products) return null
    return (
        <div className="container">
            <ul className="product-list">
            { products.map((product) => <CartItem key={ product.id } product={ product } />) }
            </ul>
        </div>
    )
}