import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { signOut } from '../../store/actions/authActions';

const SignedInLinks = ({ signOut, userInfo }) => {

    return (
        <ul className="right">
            <li><NavLink to='/create'>New Project</NavLink></li>
            <li><Link to='/' onClick={signOut}>Log Out</Link></li>
            <li><NavLink to='/userInfo' className='btn btn-floating pink lighten-1'>{userInfo.initials}</NavLink></li>
        </ul>
    );
};

const mapStateToProps = (state) => {
    return {
        userInfo: state.firebaseAuth.profile
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignedInLinks);