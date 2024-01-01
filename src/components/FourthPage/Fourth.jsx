import React from "react";
import styles from "./Fourth.module.css";


const Fourth = () => {
  return (
    <div className={styles.fourth}>
      <div className={styles.wrapper}>
        <div className={styles.textWrapper}>Area of Practices</div>
        <div style={{display:"flex"}}>
          <div
            className={styles.LaptopImg}
          >
            <p style={{color:"white"}}>Business Law</p>
          </div>
          <div
            className={styles.HandShakeImg}
          >
            <p style={{color:"white"}}>Partnership Law</p>
          </div>
          </div>
          <div style={{display:"flex"}}>
          <div
            className={styles.BuildingImg}
          >
            <p style={{color:"white"}}>Real Estate Law</p>
          </div>
          <div
            className={styles.Paper}
          >
            <p style={{color:"white"}}>Busniess Law</p>
          </div>
          </div>
          <div style={{display:"flex"}}>
          <div
            className={styles.SunImg}
          >
            <p style={{color:"white"}}>LandLord Disputes</p>
          </div>
          <div
            className={styles.FreindsImg}
          >
            <p style={{color:"white"}}>ELDER ABUSES</p>
          </div>
          </div>

          
          {/* <img src={Laptop} alt="LaptopImg" style={{marginTop:"50px" , marginLeft:"10px" , marginRight:"10px" ,marginBottom:"20px"}}/> */}
          {/* <img src={HandShakeImg} alt="HandShakeImg" style={{marginBottom:"20px"}}/> */}
          {/* <img src={BuildingImg} alt="BuildingImg" style={{marginLeft:"10px" , marginRight:"10px" }}/> */}
          {/* <img src={Paper} alt="PaperImg"/> */}
          {/* <img src={SunImg} alt="SunImg" style={{marginLeft:"10px" , marginRight:"10px", marginTop:"20px"}}/> */}
          {/* <img src={FreindsImg} alt="FreindsImg" style={{marginTop:"20px"}}/> */}
      </div>
    </div>
  );
};

export default Fourth;
