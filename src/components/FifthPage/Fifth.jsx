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
    key : 1,
    img: FirstImg,
    name: "Jane Cooper",
    role: "Ceo of Hunt",
    details:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia",
  },
  {
    key: 2,
    img: SecondImg,
    name: "Devon Lane",
    role: "Ceo of Hunt",
    details:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia",
  },
  {
    key: 3,
    img: ThirdImg,
    name: "Robert Fox",
    role: "Ceo of Hunt",
    details:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia",
  },
  {
    key : 4,
    img: FirstImg,
    name: "Jane Cooper",
    role: "Ceo of Hunt",
    details:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia",
  },
  {
    key: 5,
    img: SecondImg,
    name: "Devon Lane",
    role: "Ceo of Hunt",
    details:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia",
  },
  {
    key: 6,
    img: ThirdImg,
    name: "Robert Fox",
    role: "Ceo of Hunt",
    details:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. sit aliqua dolor do amet sint. Velit officia",
  },
];

const Fifth = () => {
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
          modules={[Navigation, Pagination]}
          loop={true}
          className="myswiper"
        >
          <div className={styles.bodyWrapper}>
            {/* ----------------------use map to iterate data of team members details (to reduce code length) */}
            {data.map((item) => {
              return (
                <SwiperSlide key={item.key}>
                  <div className={styles.cardWrapper1}>
                    <img
                      src={item.img}
                      alt={item.name}
                      className={styles.image}
                    />
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
              );
            })}
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Fifth;
