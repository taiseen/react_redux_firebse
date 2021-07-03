import { connect } from "react-redux";

const UserInfo = ({ userEmail, userInfo }) => {

    const { firstName, lastName } = userInfo;
    const { email, lastLoginAt } = userEmail;

    const timestamp = lastLoginAt;

    const lastLogin = new Intl.DateTimeFormat('en-IN', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(timestamp);

    return (
        <div className="dashboard container">
            <h4>Your info</h4>
            <p>First Name: <strong>{firstName}</strong></p>
            <p>Last Name: <strong>{lastName}</strong></p>
            <p>Email: <strong>{email}</strong></p>
            <p>Session Start: <strong>{lastLogin}</strong></p>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        userEmail: state.firebaseAuth.auth,
        userInfo: state.firebaseAuth.profile
    }
}

export default connect(mapStateToProps)(UserInfo);