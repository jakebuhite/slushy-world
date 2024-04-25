import ReviewModel from "src/models/Review"
import Testimonial from "./Testimonial"
import PropTypes from 'prop-types'
import chunkify from "src/utils/chunkify"

export default function TCarousel({ reviews }) {
    TCarousel.propTypes = {
        reviews: PropTypes.arrayOf(PropTypes.instanceOf(ReviewModel))
    }

    return (
        <section className="pb-5 mt-3 position-relative">
            <div className="container mb-4 text-center">
                <h2 className="text-white fadeIn2 fadeInBottom pt-4 mb-2 fs-1 fw-bolder">WHAT OUR <span style={{ color: "#98C1D9" }}>CUSTOMERS</span> THINK</h2>
            </div> 
            <div id="carousel-testimonials" className="carousel slide carousel-team">
                <div className="carousel-inner">
                    { chunkify(reviews).map((reviewChunk, index) => { 
                        if (index == 0) {
                            return <Testimonial key={index} reviews={ reviewChunk } isActive={true} /> 
                        } else {
                            return <Testimonial key={index} reviews={ reviewChunk } isActive={false} /> 
                        }
                    }) }
                </div>
                <a className="carousel-control-prev text-dark" href="#carousel-testimonials" role="button" data-bs-slide="prev">
                    <i className="fas fa-chevron-left" aria-hidden="true"></i>
                    <span className="text-light sr-only">&larr;</span>
                </a>
                <a className="carousel-control-next text-dark" href="#carousel-testimonials" role="button" data-bs-slide="next">
                    <i className="fas fa-chevron-right" aria-hidden="true"></i>
                    <span className="text-light sr-only">&rarr;</span>
                </a>
            </div>
        </section>
    )
}