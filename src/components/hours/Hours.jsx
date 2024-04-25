export default function Hours() {
    return (
        <div className="information py-4">
            <div className="container">
                <div className="row">
                    <div className="container mb-4 text-center">
                        <h2 className="text-white fadeIn2 fadeInBottom pt-4 mb-2 fs-1 fw-bolder">USEFUL <span style={{color: "#98C1D9"}}>INFORMATION</span></h2>
                    </div> 
                    <div className="col-md-6 offset-md-3">
                        <div className="card">
                            <div className="card-body" style={{color: "#03081F"}}>
                                <h5 className="card-title">Hours of Operation:</h5>
                                <ul className="list-group">
                                    <li className="list-group-item">Monday: 12:00 PM–10:00 PM</li>
                                    <li className="list-group-item">Tuesday: 12:00 PM–10:00 PM</li>
                                    <li className="list-group-item">Wednesday: 12:00 PM–10:00 PM</li>
                                    <li className="list-group-item">Thursday: 12:00 PM–10:00 PM</li>
                                    <li className="list-group-item">Friday: 12:00 PM–12:00 AM</li>
                                    <li className="list-group-item">Saturday: 12:00 PM–12:00 AM</li>
                                    <li className="list-group-item">Sunday: Closed</li>
                                </ul>
                                <div className="estimated mt-2">
                                    <strong>Estimated Time of Delivery:</strong> 20 min
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}