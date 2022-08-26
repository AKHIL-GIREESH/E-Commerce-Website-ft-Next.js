import { useRouter } from 'next/dist/client/router';
import styles from "../styles/Home.module.css";


export default function Item(props){
    const router = useRouter()
    const handleClick = () => router.push(`../../items/${props.id}`)
    return(
        <div onClick={handleClick} className={styles.preViewBox}>
            <img src={`${props.imgg} width=100`} height="100px" className={styles.imgg}/>
            <p>{props.Name}</p>
            <p>{props.price}</p>
            <p>{props.Rating}•(5)</p>
        </div>
    )
}