import AdminRoot from "src/components/root/AdminRoot"

export default function Orders() {
    return (
        <>
        <AdminRoot pageName={ "Orders" } active={ "orders" } >
        <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Date</th>
              <th scope="col">Total</th>
              <th scope="col">Completed?</th>
              <th scope="col">Payment Status</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>26 March 2020, 12:42 AM</td>
              <td>$10.52</td>
              <td>Yes</td>
              <td><span className="badge bg-success">Paid</span></td>
              <td>
                <button type="button" className="btn btn-primary">Complete</button>
                <button type="button" className="btn btn-success">Edit</button>
                <button type="button" className="btn btn-danger">Remove</button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>26 March 2020, 12:42 AM</td>
              <td>$10.52</td>
              <td>Yes</td>
              <td><span className="badge bg-success">Paid</span></td>
              <td>
                <button type="button" className="btn btn-primary">Complete</button>
                <button type="button" className="btn btn-success">Edit</button>
                <button type="button" className="btn btn-danger">Remove</button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>26 March 2020, 12:42 AM</td>
              <td>$10.52</td>
              <td>Yes</td>
              <td><span className="badge bg-success">Paid</span></td>
              <td>
                <button type="button" className="btn btn-primary">Complete</button>
                <button type="button" className="btn btn-success">Edit</button>
                <button type="button" className="btn btn-danger">Remove</button>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>26 March 2020, 12:42 AM</td>
              <td>$10.52</td>
              <td>Yes</td>
              <td><span className="badge bg-success">Paid</span></td>
              <td>
                <button type="button" className="btn btn-primary">Complete</button>
                <button type="button" className="btn btn-success">Edit</button>
                <button type="button" className="btn btn-danger">Remove</button>
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>26 March 2020, 12:42 AM</td>
              <td>$10.52</td>
              <td>Yes</td>
              <td><span className="badge bg-success">Paid</span></td>
              <td>
                <button type="button" className="btn btn-primary">Complete</button>
                <button type="button" className="btn btn-success">Edit</button>
                <button type="button" className="btn btn-danger">Remove</button>
              </td>
            </tr>
            <tr>
              <td>6</td>
              <td>6 June 2020, 11:34 AM</td>
              <td>$33.17</td>
              <td>Yes</td>
              <td><span className="badge bg-warning">Canceled</span></td>
              <td>
                <button type="button" className="btn btn-primary">Complete</button>
                <button type="button" className="btn btn-success">Edit</button>
                <button type="button" className="btn btn-danger">Remove</button>
              </td>
            </tr>
            <tr>
              <td>7</td>
              <td>2 February 2021, 06:42 PM</td>
              <td>$10.52</td>
              <td>Yes</td>
              <td><span className="badge bg-success">Paid</span></td>
              <td>
                <button type="button" className="btn btn-primary">Complete</button>
                <button type="button" className="btn btn-success">Edit</button>
                <button type="button" className="btn btn-danger">Remove</button>
              </td>
            </tr>
            <tr>
              <td>8</td>
              <td>31 July 2021, 05:30 PM</td>
              <td>$27.38</td>
              <td>Yes</td>
              <td><span className="badge bg-success">Paid</span></td>
              <td>
                <button type="button" className="btn btn-primary">Complete</button>
                <button type="button" className="btn btn-success">Edit</button>
                <button type="button" className="btn btn-danger">Remove</button>
              </td>
            </tr>
            <tr>
              <td>9</td>
              <td>13 November 2021, 12:03 PM</td>
              <td>$5.52</td>
              <td>No</td>
              <td><span className="badge bg-danger">Not paid</span></td>
              <td>
                <button type="button" className="btn btn-primary">Complete</button>
                <button type="button" className="btn btn-success">Edit</button>
                <button type="button" className="btn btn-danger">Remove</button>
              </td>
            </tr>
            <tr>
              <td>10</td>
              <td>26 December 2021, 07:32 PM</td>
              <td>$160.52</td>
              <td>No</td>
              <td><span className="badge bg-danger">Not paid</span></td>
              <td>
                <button type="button" className="btn btn-primary">Complete</button>
                <button type="button" className="btn btn-success">Edit</button>
                <button type="button" className="btn btn-danger">Remove</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
        </AdminRoot>
        </>
    )
}