
import { NavigationContainer, LogoContainer, NavLinksContainer, NavLink } from './navigation.styles';
import { Outlet, Link } from 'react-router-dom';
import { Fragment, useContext } from 'react';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { CartContext } from '../../contexts/cart.context';

const Navigation = () => {
    const {currentUser, setCurrentUser} = useContext(UserContext);
    const {isCartOpen, setIsCartOpen} = useContext(CartContext);
    const signOutHandler = async () => {
      signOutUser();
      setCurrentUser(null);
    }
    return (
      <Fragment>
        <NavigationContainer>
         <LogoContainer to='/'>
          <CrwnLogo className='logo'/>
        </LogoContainer>
          <NavLinksContainer>
              <NavLink to='/shop'>
                SHOP
              </NavLink>
              {
                currentUser ? (
                  <NavLink as='span' onClick={signOutHandler}>SIGN OUT {currentUser.email}</NavLink>)
                  : (<NavLink to='/auth'>
                SIGN-IN
              </NavLink>
                )
              }
              <CartIcon/>
          </NavLinksContainer>
          {
            isCartOpen && (
              <CartDropdown/>
            )
          }
          
          </NavigationContainer>
        <Outlet />
      </Fragment>
      
    )
  }

  export default Navigation;