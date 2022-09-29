
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import arrow_down from '../../images/arrow_down.png'
import empty_cart from '../../images/empty_cart.png'
import logo from '../../images/logo.png'
import sweat_shirt1 from '../../images/sweat_shirt1.png'
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
                                <li><a href="#home">Women</a></li>
                                <li><a href="#services">Men</a></li>
                                <li><a href="#about">Kids</a></li>
                            </div>

                            <div className='navbar__logo'>
                                <img src={logo} alt="logo" />
                            </div>

                            <div className='navbar__cart'>
                                <span>$</span>
                                <img src={arrow_down} className='arrow_down ml-2 mr-4' onClick={() => setShowCurrency(!showCurrency)} alt="arrow_down" />
                                <img src={empty_cart} className='empty_cart' onClick={() => setShowCartItems(!showCartItems)} alt="empty_cart" />
                                <p className='navbar__item__count'>{getTotalQuantity() || 0}</p>
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
                    <div className="cart_header_content">
                        <div className="cart_header_content_detail">
                            <h1>Apollo</h1>
                            <p className="cart_header__subhead">Running Short</p>
                            <h4>$50.00</h4>

                            <h3 className="cart_header__h3">SIZE:</h3>
                            <div className="cart_header__sizes">
                                <div className="cart_header__xs">XS</div>
                                <div className="cart_header__s">S</div>
                                <div className="cart_header__m">M</div>
                                <div className="cart_header__l">L</div>
                            </div>

                            <h3 className="cart_header__h3">COLOR:</h3>
                            <div className="cart_header__sizes">
                                <div className="cart_header_col1"></div>
                                <div className="cart_header_col2"></div>
                                <div className="cart_header_col3"></div>
                            </div>
                        </div>

                        <div className="cart_header_content_calc">
                            <div className="cart_header_add mt-4">+</div>
                            <div className="cart_header_count">1</div>
                            <div className="cart_header_subtract mb-4">-</div>
                        </div>
                        <div className="cart_header_content_img mt-4">
                            <img src={sweat_shirt1} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar