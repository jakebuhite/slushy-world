export default function Form() {
    return (
        <section className="bg-light py-3 py-md-5">
            <div className="container">
                <div className="row justify-content-lg-center">
                    <div className="col-12 col-lg-9">
                        <div className="bg-white border rounded shadow-sm overflow-hidden">
                            <form action="#!">
                                <div className="row gy-4 gy-xl-5 p-4 p-xl-5">
                                    <div className="col-12">
                                        <label htmlFor="name" className="form-label">Name <span className="text-danger">*</span></label>
                                        <input type="text" className="form-control" id="name" name="name" value="" required />
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="email" className="form-label">Email <span className="text-danger">*</span></label>
                                        <div className="input-group">
                                            <span className="input-group-text">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                                                </svg>
                                            </span>
                                            <input type="email" className="form-control" id="email" name="email" value="" required />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="message" className="form-label">Message <span className="text-danger">*</span></label>
                                        <textarea className="form-control" id="message" name="message" rows="3" required></textarea>
                                    </div>
                                    <div className="col-12">
                                        <div className="d-grid">
                                            <button className="btn btn-primary btn-lg" type="submit">Send Message</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}