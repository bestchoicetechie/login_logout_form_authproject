import Nav from '../Navigation/Nav';
import styles from './Header.module.css';

const Header = (props) =>{
    return (
        <header className={styles["main-header"]}>
            <h1>Auth App</h1>
            <Nav logged={props.userLogged} onLogout={props.onLogout} />
            
        </header>

    );
};
export default Header;