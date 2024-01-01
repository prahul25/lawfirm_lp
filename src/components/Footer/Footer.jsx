import React from "react";
import styles from "./Footer.module.css";
import Logo from "../../assets/Logo.png";
import { Typography } from "@mui/material";
import InstaIcon from "../../assets/Instagram.png";
import FbIcon from "../../assets/Facebook.png";
import TwiterIcon from "../../assets/Twitter.png";
import PinterestIcon from "../../assets/Pinterest.png";


const Footer = () => {
    return <div className={styles.footer}>
        <div className={styles.wrapper}>
            <img src={Logo} alt="Logo Icon" style={{marginBottom:"120px"}}/>
            <div className={styles.contentWrapper}>
                <div className={styles.itemWrapper}>
                <div className={styles.item1}>
                    <Typography variant="p" gutterBottom>HOME</Typography>
                    <Typography variant="p" gutterBottom>ATTORNEYS</Typography>
                    <Typography variant="p" gutterBottom>PRACTICE AREAS</Typography>
                    <Typography variant="p" gutterBottom>ABOUT US</Typography>
                </div>
                <div className={styles.item2}>
                    <img src={InstaIcon} alt="Insta icon" />
                    <img src={FbIcon} alt="Fb icon" />
                    <img src={TwiterIcon} alt="Twiter icon" />
                    <img src={PinterestIcon} alt="Pinterset icon" />
                </div>
                </div>
                <div className={styles.item3}>
                    <Typography variant="p" gutterBottom>© 2020 Acme. All right reserved.</Typography>
                    <Typography variant="p" gutterBottom>Privacy Policy</Typography>
                    <Typography variant="p" gutterBottom>Terms of Service</Typography>
                </div>
            </div>
        </div>
    </div>
}

export default Footer;