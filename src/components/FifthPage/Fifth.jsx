import React from "react";
import styles from "./Fifth.module.css";
import LeftIcon from "../../assets/LeftIcon.png";
import RightIcon from "../../assets/RightIcon.png";
import { Button, Typography } from "@mui/material";
import FirstImg from "../../assets/FirstImg.png";
import SecondImg from "../../assets/SecondImg.png";
import ThirdImg from "../../assets/ThirdImg.png";
import "swiper/swiper.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

const data = [
  {
    img: (FirstImg) ,
    name: "Jane Cooper",
    role: "Ceo of Hunt",
    details:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia",
  },
  {
    img: (SecondImg),
    name : "Devon Lane",
    role : "Ceo of Hunt",
    details:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia",
  },
  {
    img: (ThirdImg),
    name: "Robert Fox",
    role : "Ceo of Hunt",
    details:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia",
  },
];

const Fifth = () => {
  console.log(data)
  return (
    <div className={styles.Fifth}>
      <div className={styles.FifthWrapper}>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div className={styles.headWrapper}>
            <Typography variant="p" gutterBottom className={styles.headText}>
              What say's our happy Clients
            </Typography>
          </div>
          <div style={{ marginTop: "40px", width: "200px", height: "92px" }}>
            {/* <Left />
            <Right /> */}
            <Button className={styles.btn1} variant="contained">
              <img src={LeftIcon} alt="left icon" className="prev" />
            </Button>
            <Button className={styles.btn2} variant="contained">
              <img src={RightIcon} alt="rigth icon" className="next" />
            </Button>
          </div>
        </div>
        {/* -------------------------------------------------------Carousel starts from here--------------------------------------- */}
        <Swiper
          spaceBetween={50}
          style={{ width: "100%", marginTop: "75px" }}
          slidesPerView={3}
          navigation={{ nextEl: `.next`, prevEl: `.prev` }}
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
          allowTouchMove
        >
          <div className={styles.bodyWrapper}>
            {/* ----------------------use map to iterate data of team members details (to reduce code length) */}
            {data.map((item) => {
              return <SwiperSlide key={item.name}>
                <div className={styles.cardWrapper1}><img src={item.image} alt={item.name} className={styles.image} />
                <Typography
                  variant="h5"
                  gutterBottom
                  className={styles.cardMainText}
                >
                  {item.name}
                </Typography>
                <Typography
                  variant="p"
                  gutterBottom
                  className={styles.cardMainTextPost}
                >
                 {item.role}
                </Typography>
                <div className={styles.cardPTextWrapper}>
                  <Typography variant="p" gutterBottom>
                    {item.details}
                  </Typography>
                </div>
                </div>
              </SwiperSlide>
            })}
            {/* -----------------------This is lengthy way show team members details */}
            <SwiperSlide>
              <div className={styles.cardWrapper1}>
                <img
                  src={FirstImg}
                  alt="Gift"
                  className={styles.image}
                />
                <Typography
                  variant="h5"
                  gutterBottom
                  className={styles.cardMainText}
                >
                  Jane Cooper
                </Typography>
                <Typography
                  variant="p"
                  gutterBottom
                  className={styles.cardMainTextPost}
                >
                  Ceo of Hunt
                </Typography>
                <div className={styles.cardPTextWrapper}>
                  <Typography variant="p" gutterBottom>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequatduis enim velit mollit
                    Exer. sit aliqua dolor do amet sint. Velit officia
                  </Typography>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.cardWrapper2}>
                <img
                  src={SecondImg}
                  alt="Gift"
                  className={styles.image}
                />
                <Typography
                  variant="h5"
                  gutterBottom
                  className={styles.cardMainText}
                >
                  Devon Lane
                </Typography>
                <Typography
                  variant="p"
                  gutterBottom
                  className={styles.cardMainTextPost}
                >
                  Ceo of Hunt
                </Typography>
                <div className={styles.cardPTextWrapper}>
                  <Typography variant="p" gutterBottom>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequatduis enim velit mollit
                    Exer. sit aliqua dolor do amet sint. Velit officia
                  </Typography>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className={styles.cardWrapper3}>
                <img
                  src={ThirdImg}
                  alt="Gift"
                  className={styles.image}
                />
                <Typography
                  variant="h5"
                  gutterBottom
                  className={styles.cardMainText}
                >
                  Robert Fox
                </Typography>
                <Typography
                  variant="p"
                  gutterBottom
                  className={styles.cardMainTextPost}
                >
                  Ceo of Hunt
                </Typography>
                <div className={styles.cardPTextWrapper}>
                  <Typography variant="p" gutterBottom>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequatduis enim velit mollit
                    Exer. sit aliqua dolor do amet sint. Velit officia
                  </Typography>
                </div>
              </div>
            </SwiperSlide>
            {/* ---------------------------------------lslide 4-------------------------------- */}
            <SwiperSlide>
              <div className={styles.cardWrapper1}>
                <img
                  src={FirstImg}
                  alt="Gift"
                  className={styles.image}
                />
                <Typography
                  variant="h5"
                  gutterBottom
                  className={styles.cardMainText}
                >
                  Jane Cooper
                </Typography>
                <Typography
                  variant="p"
                  gutterBottom
                  className={styles.cardMainTextPost}
                >
                  Ceo of Hunt
                </Typography>
                <div className={styles.cardPTextWrapper}>
                  <Typography variant="p" gutterBottom>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequatduis enim velit mollit
                    Exer. sit aliqua dolor do amet sint. Velit officia
                  </Typography>
                </div>
              </div>
            </SwiperSlide>
            {/* --------------------------------------------slide 5 ----------------------------------------- */}
            <SwiperSlide>
              <div className={styles.cardWrapper2}>
                <img
                  src={SecondImg}
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
                  Devon Lane
                </Typography>
                <Typography
                  variant="p"
                  gutterBottom
                  className={styles.cardMainTextPost}
                >
                  Ceo of Hunt
                </Typography>
                <div className={styles.cardPTextWrapper}>
                  <Typography variant="p" gutterBottom>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequatduis enim velit mollit
                    Exer. sit aliqua dolor do amet sint. Velit officia
                  </Typography>
                </div>
              </div>
            </SwiperSlide>
            {/* ----------------------------------6 slide-------------------- */}
            <SwiperSlide>
              <div className={styles.cardWrapper3}>
                <img
                  src={ThirdImg}
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
                  Robert Fox
                </Typography>
                <Typography
                  variant="p"
                  gutterBottom
                  className={styles.cardMainTextPost}
                >
                  Ceo of Hunt
                </Typography>
                <div className={styles.cardPTextWrapper}>
                  <Typography variant="p" gutterBottom>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequatduis enim velit mollit
                    Exer. sit aliqua dolor do amet sint. Velit officia
                  </Typography>
                </div>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Fifth;
