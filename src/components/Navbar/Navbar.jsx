import {useState} from "react"; 
import styles from "./Navbar.module.css";
import { FaBars, FaTimes } from "react-icons/fa";


export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className={styles.navbar}>
        <div className={styles.menuIcon} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul
            className={`${styles.menuItems} ${menuOpen ? styles.open : ""}`}
        >
            <li>
                <a href='#about'>About</a>
            </li>
            <li>
                <a href='#experience'>Experience</a>
            </li>
            <li>
                <a href='#research'>Research</a>
            </li>
            <li>
                <a href='#projects'>Projects</a>
            </li>
            <li>
                <a href='#skills'>Skills</a>
            </li>
            <li>
                <a href='#contact'>Contact</a>
            </li>
        </ul>
    </nav>
    );
};
