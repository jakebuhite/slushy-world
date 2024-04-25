export default function Newsletter() {
    return (
        <div className="py-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 mt-auto mx-auto text-center justify-content-bottom my-auto">
                        <h1 className="text-white fadeIn2 fadeInBottom mb-2 display-4 fw-bolder">BECOME PART OF OUR NEWSLETTER</h1>
                        <p className="mb-4 text-white">Sign up now on the new SlushieWorld website and receive 15% off your first purchase!</p>
                        <div className="input-group mb-3">
                            <input type="email" className="form-control" placeholder="Your Email" aria-label="Your Email" aria-describedby="send-button" />
                            <button className="btn btn-primary" type="button" id="send-button">JOIN US</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}