import PropTypes from 'prop-types'
import Navigation from "src/components/navigation/Navigation"
import Footer from "src/components/footer/Footer"

export default function Root({ children }) {
    Root.propTypes = {
        children: PropTypes.any
    }

    return (
        <>
            <Navigation />
            { children }
            <Footer />
        </>
    )
}