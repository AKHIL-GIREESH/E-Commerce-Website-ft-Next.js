import { useRouter } from 'next/dist/client/router';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';


export default function Home() {

  const router = useRouter();
  let navi = ()=> router.push("/items")

  return (
  <div className={styles.loadingPage}>
    <div className={styles.loadingGlass}>
    </div>
    <div className={styles.mainTextContainer}>
    <h1 className={styles.mainHeading}>E-Commerce Website</h1>
    <p className={styles.arrowHead} onClick={navi}>➔</p>
    </div>
  </div>)
}

Home.onlyFooter = (page)=>{
  return(
    <>
      {page}
      <Footer/>
    </>
  )
}