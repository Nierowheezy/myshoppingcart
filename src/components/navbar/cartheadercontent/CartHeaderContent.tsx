import sweat_shirt1 from '../../../images/sweat_shirt1.png'

type Props = {}

const CartHeaderContent = (props: Props) => {
    return (
        <div>
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
    )
}

export default CartHeaderContent