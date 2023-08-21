
import './navigation.styles.scss';
import { Outlet, Link } from 'react-router-dom';
import { Fragment, useContext } from 'react';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../../components/cart-icon/cart-icon.component';

const Navigation = () => {
    const {currentUser, setCurrentUser} = useContext(UserContext);
    const signOutHandler = async () => {
      signOutUser();
      setCurrentUser(null);
    }
    return (
      <Fragment>
        <div className='navigation'>
         < Link className='logo-container' to='/'>
          <CrwnLogo className='logo'/>
          </Link>
          <div className='nav-links-container'>
              <Link className='nav-link' to='/shop'>
                SHOP
              </Link>
              {
                currentUser ? (
                  <span className='nav-link' onClick={signOutHandler}>SIGN OUT {currentUser.email}</span>)
                  : (<Link className='nav-link' to='/auth'>
                SIGN-IN
              </Link>
                )
              }
              <CartIcon/>
          </div>
          
        </div>
        <Outlet />
      </Fragment>
      
    )
  }

  export default Navigation;