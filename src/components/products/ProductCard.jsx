import ProductModel from "src/models/Product"
import ImageModel from "src/models/Image"
import PropTypes from 'prop-types'

import './Products.css'

export default function ProductCard({ product }) {
    ProductCard.propTypes = {
        product: PropTypes.instanceOf(ProductModel)
    }
  
    return (
        <div className="col-md-4">
            <div className="product-card text-center">
                <ProductImage img={ product.img } />
                <ProductHeader isNew={product.isNew} />
                <h3 className="mb-3">{product.name}</h3>
                <p className="product-price"><strong>${product.price}</strong></p>
                <p><i>{product.description}</i></p>
                <button className="btn btn-info">Add to Cart</button>
            </div>
        </div>
    )
}

function ProductHeader({ isNew }) {
    ProductHeader.propTypes = {
        isNew: PropTypes.bool
    }

    if (isNew != undefined && isNew) {
        return <p className="text-sm text-info fw-bold mb-1">NEW</p>
    }
    return <p className="text-sm text-info fw-bold mb-1">Classic</p>
}

function ProductImage({ img }) {
    ProductImage.propTypes = {
        img: PropTypes.instanceOf(ImageModel)
    };

    if (img != undefined) {
        return <img src={img.path} className="img-fluid mb-3" alt={img.alt} />;
    }
    return null;
}