import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>AdbulQuadri Musa</h3>
                  <span>Acme Manufacturing, Nigeria</span>
                </div>
              </div>
              <p>
                NJM's heat treatment expertise took our equipment to the next
                level. Improved strength and wear resistance - a game-changer
                for our production line.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Sarah Oluwole</h3>
                  <span>Green Tech Solution, Nigeria</span>
                </div>
              </div>
              <p>
                Flawless NDT inspections from NJM give us peace of mind. We
                trust their expertise to ensure the safety and integrity of our
                critical components.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>David Chukwuma</h3>
                  <span>Star Engineering Nigeria</span>
                </div>
              </div>
              <p>
                From heat treatment recommendations to NDT testing, NJM is a
                one-stop shop for all our metal needs. Their professionalism and
                quality are unmatched.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Maria Mukaila</h3>
                  <span>Sun City Construction, Nigeria</span>
                </div>
              </div>
              <p>
                Thanks to NJM's heat treatment solutions, our project deadlines
                are met with confidence. Increased component durability
                translates to fewer maintenance headaches.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Testimonials;
