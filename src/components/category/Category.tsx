import CategoryItems from "./CategoryItems";


import sweatShirt1 from '../../images/sweat_shirt1.png';
import sweatShirt2 from '../../images/sweat_shirt2.png';
import sweatShirt3 from '../../images/sweat_shirt3.png';
import sweatShirt4 from '../../images/sweat_shirt4.png';
import sweatShirt5 from '../../images/sweat_shirt5.png';

import './category.css';


const Category = () => {
    return (
        <>
            <h1 className="text-3xl mb-24 ml-16 mt-28">Category name</h1>
            <div className="category mb-24">
                <CategoryItems
                    id={1}
                    title={'Apollo Running Short'}
                    price={'$50.00'}
                    image={sweatShirt1}
                />
                <CategoryItems
                    id={2}
                    title={'Apollo Running Short'}
                    price={'$50.00'}
                    image={sweatShirt2}
                />
                <CategoryItems
                    id={3}
                    title={'Apollo Running Short'}
                    price={'$50.00'}
                    image={sweatShirt3}
                />
            </div>
            <div className="category">
                <CategoryItems
                    id={4}
                    title={'Apollo Running Short'}
                    price={'$50.00'}
                    image={sweatShirt4}
                />
                <CategoryItems
                    id={5}
                    title={'Apollo Running Short'}
                    price={'$50.00'}
                    image={sweatShirt1}
                />
                <CategoryItems
                    id={6}
                    title={'Apollo Running Short'}
                    price={'$50.00'}
                    image={sweatShirt5}
                />
            </div>
        </>
    )
}

export default Category