import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown.png'
import Item from '../Components/Item/Item'
const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext);
  return (
<div className='shop-category'>
    <img src={props.banner} alt="" className="shopcategory-banner" />
    <div className="shopcategory-indexSort">
        <p>
            <span>Showing 1-6</span> out of 6 products
        </p>
        <div className="shopcategory-sort">
            Sort by <img src={dropdown_icon} alt="" />
        </div>
    </div>
    <div className="shopcategory-products">
        {all_product.map((item, i) => {
            console.log("Product category:", item.category);
            console.log("Selected category:", props.category); 
            if (props.category.toLowerCase() === item.category.toLowerCase()) {
                return (
                    <Item 
                        key={i} 
                        id={item.id} 
                        name={item.name} 
                        image={item.image} 
                        new_price={item.new_price} 
                        old_price={item.old_price} 
                    />
                );
            } else {
                return null;
            }
        })}
    </div>
</div>
  )
}

export default ShopCategory