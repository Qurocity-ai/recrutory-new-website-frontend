import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import styles from "./MiddleSection.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

const MiddleSection = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://recrutory-new-website-backend.onrender.com/user")
      .then((response) => {
        setUsers(response.data);
        console.log(users)
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className={styles.carouselContainer}>
      <Slider {...settings}>
        {users.map((user, index) => (
          <div key={index} className={styles.cardWrapper}>
            <div className={styles.card}  onClick={() => navigate(`/details/${user.id}`, { state: { user } })}>
              <img
                src={user.profile_image || "https://via.placeholder.com/150"}
                alt={user.name}
                className={styles.profileImage}
              />
              <h3 className={styles.name}>{user.name}</h3>
              <p className={styles.language}>
                {user.languages_spoken?.[0]} | <span>{user.proficiency}</span>
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

// Custom arrow components
const CustomNextArrow = (props) => {
  const { className, onClick } = props;
  return <div className={`${className} ${styles.nextArrow}`} onClick={onClick} />;
};

const CustomPrevArrow = (props) => {
  const { className, onClick } = props;
  return <div className={`${className} ${styles.prevArrow}`} onClick={onClick} />;
};

export default MiddleSection;
