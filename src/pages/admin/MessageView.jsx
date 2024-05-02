import AdminRoot from "src/components/root/AdminRoot"
import PropTypes from 'prop-types'

export default function MessageView() {
    MessageView.propTypes = {
        messageId: PropTypes.string
    }

    return (
        <>
        <AdminRoot pageName={ `Messages` } active={ "messages" } >
            <a href="/admin/messages" className="btn btn-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                </svg>
                Back
            </a>
            <div className="mt-4">
                <div className="card">
                    <div className="card-header">
                        <h5 className="card-title">John Doe</h5>
                    </div>
                    <div className="card-body">
                        <p className="card-text"><strong>Email:</strong> john@example.com</p>
                        <p className="card-text"><strong>Message:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu ultrices vitae auctor eu augue. Magna fringilla urna porttitor rhoncus dolor. Varius morbi enim nunc faucibus a. Integer quis auctor elit sed vulputate mi sit amet. Phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet enim. Blandit aliquam etiam erat velit. Turpis tincidunt id aliquet risus feugiat in ante metus dictum. Purus faucibus ornare suspendisse sed nisi lacus. Ut aliquam purus sit amet luctus. At auctor urna nunc id cursus metus aliquam eleifend mi. Quam vulputate dignissim suspendisse in est ante in nibh mauris. Elit pellentesque habitant morbi tristique senectus et netus et malesuada. Consequat interdum varius sit amet mattis vulputate enim nulla.</p>
                        <p className="card-text"><small className="text-muted">Sent on May 2, 2024</small></p>
                    </div>
                </div>
            </div>
        </AdminRoot>
        </>
    )
}