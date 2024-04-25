import ProductModel from "src/models/Product"
import ImageModel from "src/models/Image"
import PropTypes from 'prop-types'
import './Cart.css'

export default function CartItem({ product }) {
    CartItem.propTypes = {
        product: PropTypes.instanceOf(ProductModel)
    }

    return (
        <li className="product-item">
            <div className="row align-items-center">
                <div className="col-md-2">
                    <ProductImage img={ product.img } />
                </div>
                <div className="col-md-6">
                    <strong>{ product.name }</strong>
                    <br />
                    <span className="product-price">Price: ${ product.price }</span>
                </div>
                <div className="col-md-4">
                    <button type="button" className="btn btn-danger remove-button">Remove</button>
                </div>
            </div>
        </li>
    )
}


function ProductImage({ img }) {
    ProductImage.propTypes = {
        img: PropTypes.instanceOf(ImageModel)
    }

    if (img != undefined) {
        return <img className="product-image" src={img.path} alt={img.alt} />
    }
    return null
}