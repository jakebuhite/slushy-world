import ProductModel from "src/models/Product"
import CarouselProduct from "./CarouselProduct"
import PropTypes from 'prop-types'

export default function PCarousel({ products }) {
    PCarousel.propTypes = {
        products: PropTypes.arrayOf(PropTypes.instanceOf(ProductModel))
    }

    return (
        <section className="py-4 mt-5 position-relative" style={{ backgroundColor: "#f5f5f5" }}>
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-6">
                        <h2 className="text-dark fadeIn2 fadeInBottom pt-4 mb-2 fs-1 fw-bolder">PREMIUM QUALITY AND FROSTY PERFECTION.</h2>
                    </div>
                    <div className="col-md-6 text-md-end">
                        <p className="mb-4 text-dark">Indulge in our top-tier, long-lasting slushies, transforming your space  into a tropical paradise right at home. Let every sip transport you to  lush, wild, and natural flavors!</p>
                    </div>
                </div>
            </div>        
            <div id="carousel-products" className="carousel slide carousel-team">
                <div className="carousel-inner">
                    { products.map((product, index) => { 
                        if (index == 0) {
                            return <CarouselProduct key={ index } product={ product } isActive={true} /> 
                        } else {
                            return <CarouselProduct key={ index } product={ product } isActive={false} /> 
                        }
                    }) }
                </div>
                <a className="carousel-control-prev text-dark" href="#carousel-products" role="button" data-bs-slide="prev">
                    <i className="fas fa-chevron-left" aria-hidden="true"></i>
                    <span className="text-dark sr-only">&larr;</span>
                </a>
                <a className="carousel-control-next text-dark" href="#carousel-products" role="button" data-bs-slide="next">
                    <i className="fas fa-chevron-right" aria-hidden="true"></i>
                    <span className="text-dark sr-only">&rarr;</span>
                </a>
            </div>
        </section>
    )
}