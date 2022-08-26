import { useRouter } from 'next/dist/client/router';

export default function Header(){
    let Navigating
    let router = useRouter()
    if (router.route != '/items'){
        Navigating = () => router.push("cart")
    }else{
    Navigating = () => router.push("items/cart")
    }

    let NaviHome = () => router.push("/items")
    return(
    <div className="Header">
        <p onClick={NaviHome} className="Homebutton">Home</p>
        <p onClick={Navigating} className="Cartbutton">Cart</p>
    </div>
)}