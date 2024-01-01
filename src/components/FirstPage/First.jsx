import React from "react";
import styles from "./First.module.css";
import Navbar from "../Navbar/Navbar";
import Image from "../../assets/ProfileImg.png";
import Typography from "@mui/material/Typography";
import Message from "../../assets/Message 35.png";
import Button from "@mui/material/Button";

const FirstPage = () => {
  return (
    <div className={styles.first}>
      <div className={styles.wrapper}>
        <Navbar />
        <div className={styles.contentWrapper}>
          <div className={styles.text}>
            <div className={styles.wrapperText}>
              <Typography variant="h2" gutterBottom className={styles.text1}>
                You don’t have to
              </Typography>
              <Typography variant="h2" gutterBottom className={styles.text2}>
                Fight them Alone.
              </Typography>
            </div>
            <div className={styles.wrapperText3}>
              <Typography variant="p" gutterBottom>
                A lawyer has earned a degree in law, and has a license to
                practice law in a particular area. If people have any problem
                regarding the law, they can contact a lawyer for advice
              </Typography>
            </div>
            <div className={styles.input}>
              <div className={styles.inputText}>
                <img
                  src={Message}
                  alt="message icon"
                  style={{ width: "30px", height: "25px", marginTop: "20px" }}
                />
                <p style={{ marginLeft: "20px" }}>Enter your eamil address</p>
              </div>
              <Button variant="outlined" className={styles.btn}>
                Let's talk
              </Button>
            </div>
          </div>
          <img src={Image} alt="ProfileImg" />
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
