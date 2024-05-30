import React from "react";
import "./Team.css";
import image_1 from "../../assets/pic-1.png";
import image_2 from "../../assets/pic-1.png";
import image_3 from "../../assets/pic-1.png";

const Team = () => {
  const teamData = [
    {
      name: "Mouamar Gambo",
      image: image_1,
      title: "CEO",
    },
    {
      name: "Abdulkareem Kusi",
      image: image_2,
      title: "Managing Director",
    },
    {
      name: "Kolawole Peters",
      image: image_3,
      title: "Engineering Manager",
    }
  ];

  return (
    // <section className="team-members">
    //   <h2>Our Team</h2>
    <div className="team-container">
      {teamData.map((member) => (
        <div key={member.name} className="team-member">
          <img
            src={member.image}
            alt={`${member.name} - Team Member`}
            className="team-member-img"
          />
          <div className="team-member-info">
            <h3>{member.name}</h3>
            <p>{member.title}</p>
          </div>
        </div>
      ))}
    </div>
    // </section>
  );
};

export default Team;
