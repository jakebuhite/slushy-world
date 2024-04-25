import PropTypes from 'prop-types'

export default function OrderSummary({ subtotal }) {
    OrderSummary.propTypes = {
        subtotal: PropTypes.number
    }
  
    let updatedSubtotal = (subtotal != undefined) ? subtotal : 0
    let tax = (updatedSubtotal * .06).toFixed(2)
    let total = (Number(updatedSubtotal) + Number(tax)).toFixed(2)

    return (
        <div className="container my-5 d-flex justify-content-end">
            <div className="card w-50">
                <div className="card-body">
                    <h5 className="card-title">Order Summary</h5>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            Subtotal
                            <span>${updatedSubtotal}</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            Taxes
                            <span>${tax}</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            Total
                            <span>${total}</span>
                        </li>
                    </ul>
                    <button type="button" className="btn btn-primary mt-3">Checkout</button>
                </div>
            </div>
        </div>
    )
}