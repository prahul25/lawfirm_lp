import React from "react";
import styles from "./Navbar.module.css"
import Logo from "../../assets/Logo.png"
import Button from '@mui/material/Button';
const Navbar = () => {
    return <div className={styles.wrapper}>
        <img src={Logo} alt="Logo img" style={{height:"30px" ,width:"143px"}}/>
        <div className={styles.items}>
            <p>Home</p>
            <p>Attorneys</p>
            <p>Practice Areas</p>
            <p>About Us</p>
        </div>
        <Button variant="outlined" className={styles.btn}>Contact Now</Button>

    </div>
}
export default Navbar