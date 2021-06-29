import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOntLinks from './SignedOntLinks';
import { connect } from 'react-redux';

const Navbar = (props) => {

    return (
        <nav className='nav-wrapper grey darken-3'>
            <div className='container'>
                <Link to='/' className='brand-logo'>MyPlan</Link>
                <SignedInLinks />
                <SignedOntLinks />
            </div>
        </nav>
    );
};

const mapStateToProps = (state) => {

    return {
        userAuth : state.firebaseAuth
    }
}

export default connect(mapStateToProps)(Navbar);