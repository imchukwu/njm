import React from "react";
import "./TrainingCards.css";

const TrainingCards = () => {
  return (
    <div className="training">
      <ul className="training-cards">
        {" "}
        {/* Added class for styling */}
        <li className="training-card">
          {" "}
          {/* Added class for styling */}
          <div className="slide">
            <div className="user-info">
              <div>
                <h3>Training School Facility</h3>
                {/* <span>Acme Manufacturing, Nigeria</span> */}
              </div>
            </div>
            <p>
              NJM have partnered with a South African approved training facility
              UTC Training school, where comprehensive training modules are
              tailor-made and designed for specific client requirements. Our
              training elements range from new recruits (trainees) to re-qualify
              and up-skill training services. It is the only government approved
              training qualification in the field of heat treatment in Africa.
            </p>
          </div>
        </li>
        <li className="training-card">
          {" "}
          {/* Added class for styling */}
          <div className="slide">
            <div className="user-info">
              <div>
                <h3>Capabilities</h3>
                {/* <span>Green Tech Solution, Nigeria</span> */}
              </div>
            </div>
            <p>
              NJM have the capacity to man, manage and operate any technical,
              outage, shutdown, project, or small assignments that are desired.
              We have successfully completed major annual shutdowns utilizing
              over 1500 NDT and Heat Treatment personnel with a 100% successes
              rate and achieving contractor of the outage SASOL SSF 2023.
            </p>
          </div>
        </li>
        <li className="training-card">
          {" "}
          {/* Added class for styling */}
          <div className="slide">
            <div className="user-info">
              <div>
                <h3>Equipments</h3>
                {/* <span>Star Engineering Nigeria</span> */}
              </div>
            </div>
            <p>
              NJM have a significant asset base, having over two hundred (200)
              60KVa heat treatment units with consumables, forty-two (42)
              isotope containers, twenty (20) ultrasonic units, sixty (60) wall
              thickness ultrasonic units, eight (8) portable darkroom facilities
              as well as many other assets needed to perform as per our client’s
              demand.
            </p>
          </div>
        </li>
        <li className="training-card">
          {" "}
          {/* Added class for styling */}
          <div className="slide">
            <div className="user-info">
              <div>
                <h3>Commitment</h3>
                {/* <span>Sun City Construction, Nigeria</span> */}
              </div>
            </div>
            <p>
              NJM have also committed to establishing a similar training
              facility in Nigeria to which works are ongoing to secure the
              necessary permits and approvals for establishment. Having this
              type of facility in Nigeria will greatly improve capacity
              development and skill acquisition within the industry.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default TrainingCards;
