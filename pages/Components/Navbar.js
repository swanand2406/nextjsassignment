import { useRouter } from 'next/router'
import styles from '../../styles/Navbar.module.css'
// import Searchbox from './Searchbox';

const Navbar = () => {

    const router = useRouter();

    return (

        <>

       
        <div className={styles.main}>

            {/* <div onClick={() => router.push('/')}><b>Home</b></div> */}

            <div onClick={() => router.push('/')}><b>Top Headline</b></div>

            <div onClick={() => router.push('/top-sources')}><b>Top Sources</b></div>

            <div onClick={() => router.push('/Components/Search')}><b>Search News</b></div>

        </div>

        </>

    );

}

 

export default Navbar;