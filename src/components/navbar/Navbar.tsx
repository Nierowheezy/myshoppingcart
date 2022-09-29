
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import arrow_down from '../../images/arrow_down.png'
import empty_cart from '../../images/empty_cart.png'
import logo from '../../images/logo.png'
import CartHeaderContent from './cartheadercontent/CartHeaderContent'
import './Navbar.css'




type Props = {}

const Navbar = (props: Props) => {


    const navigate = useNavigate();

    const cart = useSelector((state: any) => state.cart)

    const getTotalQuantity = () => {
        let total = 0;
        cart.forEach((item: any) => {
            total += item.quantity
        })
        return total
    }

    const [showCurrency, setShowCurrency] = useState(false);
    const [showCartItems, setShowCartItems] = useState(false);

    const handleCloses = () => {
        setShowCurrency(false);
        setShowCartItems(false)
    };

    return (
        <>
            {/* <nav>
                <ul className='navbar__navlinks'>
                    <li> <a href="">WOMEN</a></li>
                    <li> <a href="">MEN</a></li>
                    <li> <a href="">KIDS</a></li>
                </ul>
                <div className='navbar__logo'>
                <img src={logo} alt="logo" />
                $ <img src={arrow_down} alt="arrow_down" />
                </div>
            </nav> */}
            <div className='navbar__container'>
                <nav id="navbar" className="">
                    <div className="nav__wrapper">

                        <ul id="menu">
                            <div className='navbar__menu__item'>
                                <li><Link to="/">Women</Link></li>
                                <li><Link to="/">Men</Link></li>
                                <li><Link to="/">Kids</Link></li>
                            </div>

                            <div className='navbar__logo'>
                                <img src={logo} alt="logo" onClick={() => navigate('/cart')} />
                            </div>

                            <div className='navbar__cart'>
                                <span>$</span>
                                <img src={arrow_down} className='arrow_down ml-2 mr-4' onClick={() => setShowCurrency(!showCurrency)} alt="arrow_down" />
                                <img src={empty_cart} className='empty_cart' onClick={() => setShowCartItems(!showCartItems)} alt="empty_cart" />
                                <p className='navbar__item__count' onClick={() => navigate('/cart')}>{getTotalQuantity() || 0}</p>
                            </div>


                        </ul>
                    </div>

                </nav>

                <div className={showCurrency ? "showCurrency" : "hideCurrency"}>
                    <section className="currency">
                        <div className="currency__title">
                            <h5>$ USD</h5>
                            <h5>€ EUR</h5>
                            <h5>¥ JPY</h5>
                        </div>
                    </section>
                </div>

                {/* cart  */}

                <div className={showCartItems ? "showCartItems" : "hideCartItems"}>
                    <CartHeaderContent />
                </div>
            </div>
        </>
    )
}

export default Navbar