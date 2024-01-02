import React from "react";
import styles from "./Sixth.module.css";

import First from "../../assets/FirstTeamMem.png";
import Second from "../../assets/SecondTeamMem.png";
import Third from "../../assets/ThirdTeamMem.png";
import Forth from "../../assets/FourthTeamMem.png";
import Fifth from "../../assets/FifthTeamMem.png";
import SixthIma from "../../assets/SixthTeamMem.png";
import { Typography } from "@mui/material";
const Sixth = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.cardWrapper}>
        <div className={styles.headWrapper}>
          <Typography variant="p" gutterBottom>
            Our Team
          </Typography>
        </div>
        <div style={{ marginTop: "100px", width: "100%" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className={styles.innerCardWrapper}>
              <img src={First} alt="" />
              <div className={styles.contentWrapper}>
                <Typography
                  variant="p"
                  gutterBottom
                  style={{fontSize: "24px",
                    fontWeight: "600",
                    lineHeight: "24px",
                    letterSpacing: "0em",
                    color: "#FFFFFF",
                    marginBottom: "2px"}}
                >
                  Daniel Def
                </Typography>
                <Typography variant="p" gutterBottom style={{
                    fontSize: "14px",
                    fontWeight: "400",
                    lineHeight: "24px",
                    letteSpacing: "0em",
                    opacity:"30%",
                    color:"#FFFFFF"
                  }}>
                  301 Cases
                </Typography>
              </div>
            </div>
            <div
              style={{
                width: "344px",
                height: "109px",
                backgroundColor: "#E3B748",
                borderRadius: "14px",
                display: "flex",
              }}
            >
              <img
                src={Second}
                alt=""
                style={{
                  width: "68px",
                  height: "68px",
                  marginTop: "20px",
                  marginLeft: "20px",
                }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "20px",
                  marginLeft: "20px",
                }}
              >
                <Typography
                  variant="p"
                  gutterBottom
                  style={{
                    fontWeight: "600",
                    fontSize: "24px",
                    color: "#373737",
                    marginBottom: "2px",
                  }}
                >
                  Sanfole
                </Typography>
                <Typography
                  variant="p"
                  gutterBottom
                  style={{
                    fontWeight: "400",
                    fontSize: "14px",
                    opacity: "40%",
                    color: "#000000",
                  }}
                >
                  850 Cases
                </Typography>
              </div>
            </div>
            <div className={styles.innerCardWrapper}>
              <img src={Third} alt="" />
              <div className={styles.contentWrapper}>
                <Typography
                  variant="p"
                  gutterBottom
                  style={{
                    fontSize: "24px",
                    fontWeight: "600",
                    lineHeight: "24px",
                    letterSpacing: "0em",
                    color: "#FFFFFF",
                    marginBottom: "2px",
                  }}
                >
                  Casforila
                </Typography>
                <Typography variant="p" gutterBottom style={{
                    fontSize: "14px",
                    fontWeight: "400",
                    lineHeight: "24px",
                    letteSpacing: "0em",
                    opacity:"30%",
                    color:"#FFFFFF"
                  }}>
                  421 Cases
                </Typography>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "75px",
            }}
          >
            <div className={styles.innerCardWrapper}>
              <img src={Forth} alt="" />
              <div className={styles.contentWrapper}>
                <Typography
                  variant="p"
                  gutterBottom
                  style={{
                    fontSize: "24px",
                    fontWeight: "600",
                    lineHeight: "24px",
                    letterSpacing: "0em",
                    color: "#FFFFFF",
                    marginBottom: "2px",
                  }}
                >
                  Colleen
                </Typography>
                <Typography variant="p" gutterBottom style={{
                    fontSize: "14px",
                    fontWeight: "400",
                    lineHeight: "24px",
                    letteSpacing: "0em",
                    opacity:"30%",
                    color:"#FFFFFF"
                  }}>
                  701 Cases
                </Typography>
              </div>
            </div>
            <div className={styles.innerCardWrapper}>
              <img src={Fifth} alt="" />
              <div className={styles.contentWrapper}>
                <Typography
                  variant="p"
                  gutterBottom
                  style={{
                    fontSize: "24px",
                    fontWeight: "600",
                    lineHeight: "24px",
                    letterSpacing: "0em",
                    color: "#FFFFFF",
                    marginBottom: "2px",
                  }}
                >
                  Haldone
                </Typography>
                <Typography variant="p" gutterBottom style={{
                    fontSize: "14px",
                    fontWeight: "400",
                    lineHeight: "24px",
                    letteSpacing: "0em",
                    opacity:"30%",
                    color:"#FFFFFF"
                  }}>
                  712 Cases
                </Typography>
              </div>
            </div>
            <div className={styles.innerCardWrapper}>
              <img src={SixthIma} alt="" />
              <div className={styles.contentWrapper}>
                <Typography
                  variant="p"
                  gutterBottom
                  style={{
                    fontSize: "24px",
                    fontWeight: "600",
                    lineHeight: "24px",
                    letterSpacing: "0em",
                    color: "#FFFFFF",
                    marginBottom: "2px",
                  }}
                >
                  Nike Joe
                </Typography>
                <Typography
                  variant="p"
                  gutterBottom
                  style={{
                    fontSize: "14px",
                    fontWeight: "400",
                    lineHeight: "24px",
                    letteSpacing: "0em",
                    opacity:"30%",
                    color:"#FFFFFF"
                  }}
                >
                  350 Cases
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sixth;
