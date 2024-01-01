import React from "react";
import Styles from "./Seven.module.css";
import {Typography } from "@mui/material";
import AddIcon from "../../assets/AddIcon.png";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

const Seven = () => {
  return (
    <div className={Styles.seven}>
      <div className={Styles.wrapper}>
        <Typography
          variant="h5"
          gutterBottom
          style={{
            fontSize: "54px",
            fontWeight: "600",
            lineHeight: "75px",
            letterSpacing: "0em",
            color: "#FFFFFF",
          }}
        >
          FAQ
        </Typography>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div className={Styles.layout1}>
            <Typography
              variant="p"
              gutterBottom
              style={{
                fontSize: "18px",
                fontWeight: "500",
                lineHeight: "30px",
              }}
            >
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.
            </Typography>
          </div>
          <div className={Styles.layout2}>
            <Typography
              variant="p"
              gutterBottom
              style={{
                color: "#FFFFFF",
                fontSize: "24px",
                fontWeight: " 600",
                lineHeight: "24px",
                letterSpacing: " 0em",
              }}
            >
              Do I need a personal injury report?
            </Typography>
            <div style={{ width: "557px", height: "145px" }}>
              <Typography
                variant="p"
                gutterBottom
                style={{
                  fontSize: "18px",
                  fontWeight: "500",
                  lineHeight: "29px",
                  letteSrpacing: "0em",
                  color: "#606060",
                }}
              >
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequatduis enim velit mollit Exer.
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequatduis enim velit mollit Exer.
              </Typography>
            </div>
            <div className={Styles.line}></div>
            <Accordion style={{ marginBottom: "20px", marginTop: "20px" }}>
              <AccordionSummary
                className={Styles.accodSummary}
              >
                <div className={Styles.textWrapper}>
                  <Typography variant="p" gutterBottom>
                    How much is my case worth?
                  </Typography>
                  <img
                    src={AddIcon}
                    alt="Icon img"
                    style={{marginLeft:"172px" , height: "28px" }}
                  />
                </div>
              </AccordionSummary>
              <AccordionDetails className={Styles.details}>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <div className={Styles.line}></div>
            <Accordion style={{ marginBottom: "20px", marginTop: "20px" }}>
              <AccordionSummary className={Styles.accodSummary}>
              <div className={Styles.textWrapper}>
                <Typography variant="p" gutterBottom>
                  What should I do right after car accidect
                </Typography>
                <img
                  src={AddIcon}
                  alt="Icon img"
                  style={{marginLeft:"50px" , height: "28px" }}
                />
              </div>
              </AccordionSummary>
              <AccordionDetails className={Styles.details}>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <div className={Styles.line}></div>
            <Accordion style={{ marginBottom: "20px", marginTop: "20px" }}>
              <AccordionSummary className={Styles.accodSummary}>
            <div className={Styles.textWrapper}>
              <Typography variant="p" gutterBottom>
                How much is my case worth?
              </Typography>
              <img
                src={AddIcon}
                alt="Icon img"
                style={{marginLeft:"175px" , height: "28px" }}
              />
            </div>
            </AccordionSummary>
            <AccordionDetails className={Styles.details}>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seven;
