import React from "react";
import styles from "./Fourth.module.css";

const Fourth = () => {
  return (
    <div className={styles.fourth}>
      <div className={styles.wrapper}>
        <div className={styles.textWrapper}>Area of Practices</div>
        <div style={{ display: "flex" }}>
          <div className={styles.LaptopImg}>
            <p style={{ color: "white" }}>Business Law</p>
          </div>
          <div className={styles.HandShakeImg}>
            <p style={{ color: "white" }}>Partnership Law</p>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div className={styles.BuildingImg}>
            <p style={{ color: "white" }}>Real Estate Law</p>
          </div>
          <div className={styles.Paper}>
            <p style={{ color: "white" }}>Busniess Law</p>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div className={styles.SunImg}>
            <p style={{ color: "white" }}>LandLord Disputes</p>
          </div>
          <div className={styles.FreindsImg}>
            <p style={{ color: "white" }}>ELDER ABUSES</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fourth;
