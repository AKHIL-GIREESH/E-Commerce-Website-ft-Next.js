import React from 'react';
import itemList from "../../components/itemList";
import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";

export default function Productdesc(){
    let productt = useRouter().query.product
    let productdesc = itemList[productt-1]  
    const [Cart,setCart] = React.useState(productdesc.cart)

    const addToCart = ()=> {
        setCart(prev=>!prev)
    }

    productdesc.cart = Cart

    return(
        <div className={styles.itemPageContainer}>
        <div className={styles.itemContainer}>
            <img src={`${productdesc.imgg}`} height="200px" className={styles.imgg}/>
            <p>{productdesc.Name}</p>
            <p>{productdesc.price}</p>
            <p>{productdesc.Rating}•(5)</p>
            <p>{productdesc.About}</p>
            <p onClick={addToCart} className={styles.addToCart}>CART : {Cart?"ADDED":"ADD"}</p>
        </div>
        </div>
    )
    
}