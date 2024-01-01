import React from "react";
import styles from "./Second.module.css"
import { Typography } from "@mui/material";

const Second = () =>{
    return(
        <div className={styles.second}>
            <div className={styles.wrapper}>
                <div className={styles.textWrapper1}>
                    <Typography variant="h3" gutterBottom className={styles.text1} >Let's Introduce Ourself</Typography>
                </div>
                <div className={styles.line}></div>
                <div className={styles.textWrapper2}>
                    <Typography variant="h5" gutterBottom className={styles.text2}>Criminal Lawyer</Typography>
                    <div className={styles.textWrapper3}>
                    <Typography variant="p" gutterBottom style={{fontWeight :500 , fontSize:"18px"}}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus excepturi culpa ut maxime illum sed quia placeat ipsa architecto cupiditate ex est explicabo magni esse, et ipsum nam repellat dignissimos.
                    </Typography>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Second;