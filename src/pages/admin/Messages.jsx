import AdminRoot from "src/components/root/AdminRoot"

export default function Messages() {
    return (
        <>
        <AdminRoot pageName={ "Messages" } active={ "messages" } >
            <div className="table-responsive">
              <table className="table table-striped table-sm">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Date</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>26 March 2020, 12:42 AM</td>
                    <td>John Doe</td>
                    <td>john.doe@example.com</td>
                    <td>
                      <a href="/admin/messages/1" className="btn btn-primary">View</a>
                      <a href="#" className="btn btn-danger">Remove</a>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>26 March 2020, 12:42 AM</td>
                    <td>John Doe</td>
                    <td>john.doe@example.com</td>
                    <td>
                      <a href="/admin/messages/2" className="btn btn-primary">View</a>
                      <a href="#" className="btn btn-danger">Remove</a>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>26 March 2020, 12:42 AM</td>
                    <td>John Doe</td>
                    <td>john.doe@example.com</td>
                    <td>
                      <a href="/admin/messages/3" className="btn btn-primary">View</a>
                      <a href="#" className="btn btn-danger">Remove</a>
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>26 March 2020, 12:42 AM</td>
                    <td>John Doe</td>
                    <td>john.doe@example.com</td>
                    <td>
                      <a href="/admin/messages/4" className="btn btn-primary">View</a>
                      <a href="#" className="btn btn-danger">Remove</a>
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>26 March 2020, 12:42 AM</td>
                    <td>John Doe</td>
                    <td>john.doe@example.com</td>
                    <td>
                      <a href="/admin/messages/5" className="btn btn-primary">View</a>
                      <a href="#" className="btn btn-danger">Remove</a>
                    </td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>6 June 2020, 11:34 AM</td>
                    <td>John Doe</td>
                    <td>john.doe@example.com</td>
                    <td>
                      <a href="/admin/messages/6" className="btn btn-primary">View</a>
                      <a href="#" className="btn btn-danger">Remove</a>
                    </td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>2 February 2021, 06:42 PM</td>
                    <td>John Doe</td>
                    <td>john.doe@example.com</td>
                    <td>
                      <a href="/admin/messages/7" className="btn btn-primary">View</a>
                      <a href="#" className="btn btn-danger">Remove</a>
                    </td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>31 July 2021, 05:30 PM</td>
                    <td>John Doe</td>
                    <td>john.doe@example.com</td>
                    <td>
                      <a href="/admin/messages/8" className="btn btn-primary">View</a>
                      <a href="#" className="btn btn-danger">Remove</a>
                    </td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>13 November 2021, 12:03 PM</td>
                    <td>John Doe</td>
                    <td>john.doe@example.com</td>
                    <td>
                      <a href="/admin/messages/9" className="btn btn-primary">View</a>
                      <a href="#" className="btn btn-danger">Remove</a>
                    </td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>26 December 2021, 07:32 PM</td>
                    <td>John Doe</td>
                    <td>john.doe@example.com</td>
                    <td>
                      <a href="/admin/messages/10" className="btn btn-primary">View</a>
                      <a href="#" className="btn btn-danger">Remove</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
        </AdminRoot>
        </>
    )
}