import React from "react";
import styles from "./Eigth.module.css";
import { Button, Typography } from "@mui/material";


const Eight = () => {
  return (
    <div className={styles.eight}>
      <div className={styles.wrapper}>
        <div className={styles.cardWrapper}>
          <Typography
            variant="p"
            gutterBottom
            style={{
              fontFamily: "Helvetica",
              fontSize: "55px",
              fontWeight: " 500",
              lineHeight: "75px",
              letterSpacing: " 0em",
              color: "#FFFFFF",
            }}
          >
            Subscribe Our Newsletter
          </Typography>
          <div style={{ display: "flex", columnGap: "5px" }}>
            <div className={styles.inputText1}>
              <p style={{ marginLeft: "20px" }}>Name</p>{" "}
            </div>
            <div className={styles.inputText2}>
              <p style={{ marginLeft: "20px" }}>Enter your Email</p>{" "}
            </div>
            <Button variant="contained" className={styles.btn}>Send</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eight;
