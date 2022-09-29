import sweat_shirt1 from '../../images/sweat_shirt1.png'
import './productDetails.css'

type Props = {}

const ProductDetails = (props: Props) => {
    return (
        <>
            <article>
                <section className='details mt-40'>
                    <div className='details_content'>
                        <div className='details_content_images'>
                            <img src={sweat_shirt1} alt='' />
                            <img src={sweat_shirt1} alt='' />
                            <img src={sweat_shirt1} alt='' />
                        </div>
                        <div className='details_content_img'>
                            <img src={sweat_shirt1} alt='' />
                        </div>
                        <div className='details_content_detail'>
                            <h1>Apollo</h1>
                            <p className='details__subhead'>Running Short</p>
                            <h3>SIZE:</h3>
                            <div className='details__sizes'>
                                <div className='details__xs'>XS</div>
                                <div className='details__s'>S</div>
                                <div className='details__m'>M</div>
                                <div className='details__l'>L</div>
                            </div>

                            <h3>COLOR:</h3>
                            <div className='details__sizes'>
                                <div className='details_col1'></div>
                                <div className='details_col2'></div>
                                <div className='details_col3'></div>
                            </div>

                            <h3>PIRCE</h3>
                            <h4>$50.00</h4>
                            <button className='button__addtocart'>Add To Cart</button>

                            <p className='details__decsription'>
                                Find stunning women's cocktail dresses and party dresses.
                                Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.
                            </p>
                        </div>
                    </div>

                </section>
            </article>
        </>
    )
}

export default ProductDetails