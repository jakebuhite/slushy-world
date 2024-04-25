import PropTypes from 'prop-types'
import ImageModel from 'src/models/Image'
import parseTitle from 'src/utils/parseTitle'

function Header({ title, subtitle, img }) {
    Header.propTypes = {
        title: PropTypes.string,
        subtitle: PropTypes.string,
        img: PropTypes.instanceOf(ImageModel)
    }

    return (
        <header>
            <div className="page-header min-vh-50 m-3 p-4 border-radius-xl py-9">
                <span className="mask bg-gradient-dark opacity-9"></span>
                <div className="container h-100">
                    <div className="row">
                        <div className="col-lg-6 mt-auto mx-auto text-center justify-content-bottom my-auto">
                            <HeaderTitle title={title} />
                            <p className="mb-4 h5" style={{color: "#EE6C4D"}}>{ subtitle }</p>
                            <HeaderImage img={img} />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

function HeaderTitle({ title }) {
    HeaderTitle.propTypes = {
        title: PropTypes.string
    }

    let t = parseTitle(title)
    return <h1 className="text-white fadeIn2 fadeInBottom mb-2 display-4 fw-bolder">{t[0]} <span style={{color: "#98C1D9"}}>{t[1]}</span></h1>
}

function HeaderImage({ img }) {
    HeaderImage.propTypes = {
        img: PropTypes.instanceOf(ImageModel)
    }

    if (img != undefined) {
        return <img className="mw-100" src={img.path} alt={img.alt} />
    }
    return null
}

export default Header