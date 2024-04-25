import PropTypes from 'prop-types'
import ProductModel from 'src/models/Product'
import ImageModel from 'src/models/Image'

export default function CarouselProduct({ product, isActive }) {
    CarouselProduct.propTypes = {
        product: PropTypes.instanceOf(ProductModel),
        isActive: PropTypes.bool
    }

    let activeClass = (isActive) ? "active" : ""
    return (
        <div className={`carousel-item ${activeClass}`}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-5 text-center ms-lg-auto">
                        <div>
                            <ProductImage img={ product.img } />
                        </div>
                    </div>
                    <div className="col-md-5 text-center me-lg-auto position-relative">
                        <ProductType isNew={ product.isNew } />
                        <h3 className="text-dark" spellCheck="false">{ product.name }</h3>
                        <div className="price">
                            <small className="text-danger">${ product.price }</small>
                        </div>
                        <p className="text-dark my-3">
                            <i>{ product.description }</i>
                        </p>
                        <div className="author align-items-center">
                            <div className="name ps-2">
                                <button type="button" className="btn btn-info">Order now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function ProductType({ isNew }) {
    ProductType.propTypes = {
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
    }

    if (img != undefined) {
        return <img className="w-75 border-radius-md" src={ img.path } alt={ img.alt } />
    }
    return null
}