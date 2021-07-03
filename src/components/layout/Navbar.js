import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOntLinks from './SignedOntLinks';
import { connect } from 'react-redux';

const Navbar = (props) => {

    
    const { uid } = props.userAuth;

    const links = uid ? <SignedInLinks /> : <SignedOntLinks />
    
    return (
        <nav className='nav-wrapper grey darken-3'>
            <div className='container'>
                <Link to='/' className='brand-logo'>My Posts</Link>
                {links}
            </div>
        </nav>
    );
};

const mapStateToProps = (state) => {
    console.log(state)
    return {
        userAuth: state.firebaseAuth.auth
    }
}

export default connect(mapStateToProps)(Navbar);