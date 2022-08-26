import itemList from "../../components/itemList";
import Item from "../../components/item";
import styles from "../../styles/Home.module.css";
import React from "react";

export default function Allitems(){
    
    const [val,setVal] = React.useState("")

    function Searchresult(event){
        setVal(event.target.value)


    }
    return(
    <div className={styles.mainPage}>
    <div>
    <input type="text" placeholder=" Search" name="mainSearch" className={styles.inputField} onChange={Searchresult}></input>
    </div>
    <div class={styles.mainContainer}>
        {itemList.map(item =>{
            if(val.length===0){
            return(
                <Item key={item.id} {...item}/>
            )
        }else if(item.Name.toLowerCase().includes(val)){
            return(
                <Item key={item.id} {...item}/>)
        }
        })}
    </div>
    </div>
)}