import React from "react";
import styles from "./Third.module.css";
import { Button, Typography } from "@mui/material";
import GiftImg from "../../assets/GiftImg.png";


const Third = () => {
  return (
    <div className={styles.Third}>
      <div className={styles.thirdWrapper}>
        <div className={styles.headWrapper}>
          <Typography variant="h5" gutterBottom className={styles.headText}>
            Why Choose us?
          </Typography>
        </div>
        <div className={styles.bodyWrapper}>
          <div className={styles.cardWrapper1}>
            <img
              src={GiftImg}
              alt="Gift"
              style={{
                width: "101px",
                height: "101px",
                marginTop: "25px",
                marginLeft: "25px",
              }}
            />
            <Typography
              variant="h5"
              gutterBottom
              className={styles.cardMainText}
            >
              98% Success Rate
            </Typography>
            <div className={styles.cardPTextWrapper}>
              <Typography variant="p" gutterBottom>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequatduis enim velit mollit Exer.
              </Typography>
            </div>
            <Button variant="contained" className={styles.btn}>Read More</Button>
          </div>
          <div className={styles.cardWrapper2}>
            <img
              src={GiftImg}
              alt="Gift"
              style={{
                width: "101px",
                height: "101px",
                marginTop: "25px",
                marginLeft: "25px",
              }}
            />
            <Typography
              variant="h5"
              gutterBottom
              className={styles.cardMainText}
            >
              100% Success Rate
            </Typography>
            <div className={styles.cardPTextWrapper}>
              <Typography variant="p" gutterBottom>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequatduis enim velit mollit Exer.
              </Typography>
            </div>
            <Button variant="contained" className={styles.btn}>Read More</Button>
          </div>
          <div className={styles.cardWrapper3}>
            <img
              src={GiftImg}
              alt="Gift"
              style={{
                width: "101px",
                height: "101px",
                marginTop: "25px",
                marginLeft: "25px",
              }}
            />
            <Typography
              variant="h5"
              gutterBottom
              className={styles.cardMainText}
            >
              100% Success Rate
            </Typography>
            <div className={styles.cardPTextWrapper}>
              <Typography variant="p" gutterBottom>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequatduis enim velit mollit Exer.
              </Typography>
            </div>
            <Button variant="contained" className={styles.btn}>Read More</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Third;
