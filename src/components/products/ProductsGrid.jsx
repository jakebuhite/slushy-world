import ProductCard from './ProductCard'
import ProductModel from "src/models/Product"
import PropTypes from 'prop-types'

export default function ProductsGrid({ products }) {
    ProductsGrid.propTypes = {
        products: PropTypes.arrayOf(PropTypes.instanceOf(ProductModel))
    }
    
    if (!products) return null
    return (
        <div className="container mt-5">
            <div className="row">
                { products.map((product) => <ProductCard key={ product.id } product={ product } />) }
            </div>
        </div>
    )
}