import uniqid from "uniqid";

import { skills } from "../../data";
import "./skills.css";

const Skills = () => {
  if (!skills.length) return null;

  return (
    <section className="section skills fade-in" id="skills">
      <h2 className="section__title">Hobbies</h2>
      <ul className="skills__list">
        {skills.map((skill) => (
          <li key={uniqid()} className="skills__list-item btn btn--plain">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
