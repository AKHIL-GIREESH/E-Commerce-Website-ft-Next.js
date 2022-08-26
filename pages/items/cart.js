import itemList from "../../components/itemList";
import styles from "../../styles/Home.module.css";

export default function Cart(){
    let count = 0;
    let cartItems= itemList.map(item => {
        if(item.cart){
            count++;
            return (
                <div className={styles.cartItem}>
                    <img src={`${item.imgg}`} height="100px" className={styles.imgg}/>
                    <p>{item.Name}</p>
                    <p>{item.price}</p>
                    <p>{item.About}</p>
                    <p>{item.Rating}•(5)</p>
                </div>
            )
        }           
    })
    return (
        <div className={styles.cartContainer}>
            {count?cartItems:"Your Cart Is Empty !"}
        </div>
        )
}