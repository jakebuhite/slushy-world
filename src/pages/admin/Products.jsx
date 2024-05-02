import AdminRoot from "src/components/root/AdminRoot"

export default function Products() {
    return (
        <>
        <AdminRoot pageName={ "Products" } active={ "products" } >
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                        <th scope="col">Status</th>
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Slushy</td>
                        <td>The best slushy you could ever buy!</td>
                        <td>2</td>
                        <td>$3.50</td>
                        <td><span className="badge bg-primary">New</span></td>
                        <td>
                          <button type="button" className="btn btn-success">Edit</button>
                          <button type="button" className="btn btn-danger">Remove</button>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Slushy</td>
                        <td>The best slushy you could ever buy!</td>
                        <td>2</td>
                        <td>$3.50</td>
                        <td><span className="badge bg-primary">New</span></td>
                        <td>
                          <button type="button" className="btn btn-success">Edit</button>
                          <button type="button" className="btn btn-danger">Remove</button>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Slushy</td>
                        <td>The best slushy you could ever buy!</td>
                        <td>2</td>
                        <td>$3.50</td>
                        <td><span className="badge bg-warning">Classic</span></td>
                        <td>
                          <button type="button" className="btn btn-success">Edit</button>
                          <button type="button" className="btn btn-danger">Remove</button>
                        </td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Slushy</td>
                        <td>The best slushy you could ever buy!</td>
                        <td>2</td>
                        <td>$3.50</td>
                        <td><span className="badge bg-primary">New</span></td>
                        <td>
                          <button type="button" className="btn btn-success">Edit</button>
                          <button type="button" className="btn btn-danger">Remove</button>
                        </td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>Slushy</td>
                        <td>The best slushy you could ever buy!</td>
                        <td>2</td>
                        <td>$3.50</td>
                        <td><span className="badge bg-warning">Classic</span></td>
                        <td>
                          <button type="button" className="btn btn-success">Edit</button>
                          <button type="button" className="btn btn-danger">Remove</button>
                        </td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>Slushy</td>
                        <td>The best slushy you could ever buy!</td>
                        <td>2</td>
                        <td>$3.50</td>
                        <td><span className="badge bg-primary">New</span></td>
                        <td>
                          <button type="button" className="btn btn-success">Edit</button>
                          <button type="button" className="btn btn-danger">Remove</button>
                        </td>
                      </tr>
                      <tr>
                        <td>7</td>
                        <td>Slushy</td>
                        <td>The best slushy you could ever buy!</td>
                        <td>2</td>
                        <td>$3.50</td>
                        <td><span className="badge bg-primary">New</span></td>
                        <td>
                          <button type="button" className="btn btn-success">Edit</button>
                          <button type="button" className="btn btn-danger">Remove</button>
                        </td>
                      </tr>
                      <tr>
                        <td>8</td>
                        <td>Slushy</td>
                        <td>The best slushy you could ever buy!</td>
                        <td>2</td>
                        <td>$3.50</td>
                        <td><span className="badge bg-primary">New</span></td>
                        <td>
                          <button type="button" className="btn btn-success">Edit</button>
                          <button type="button" className="btn btn-danger">Remove</button>
                        </td>
                      </tr>
                      <tr>
                        <td>9</td>
                        <td>Slushy</td>
                        <td>The best slushy you could ever buy!</td>
                        <td>2</td>
                        <td>$3.50</td>
                        <td><span className="badge bg-primary">New</span></td>
                        <td>
                          <button type="button" className="btn btn-success">Edit</button>
                          <button type="button" className="btn btn-danger">Remove</button>
                        </td>
                      </tr>
                      <tr>
                        <td>10</td>
                        <td>Slushy</td>
                        <td>The best slushy you could ever buy!</td>
                        <td>2</td>
                        <td>$3.50</td>
                        <td><span className="badge bg-primary">New</span></td>
                        <td>
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