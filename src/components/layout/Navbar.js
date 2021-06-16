import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOntLinks from './SignedOntLinks';

const Navbar = () => {

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

export default Navbar;