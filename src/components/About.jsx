import SkillBar from "./Skills";
import "../index.css"; // Assuming your styles are here

const SkillsExperience = () => {
    return (
    <section className="skills-work">
        <h1 className="section-title">Skills and Work</h1>

        <div className="skills-experience">
        <div className="section">
            <h2 className="subsection-title">Skills</h2>
            <SkillBar label="Animation" percent={30} />
            <SkillBar label="Photoshop" percent={20} />
            <SkillBar label="Video Editing" percent={50} />
        </div>

        <div className="section">
            <h2 className="subsection-title">Work Experience</h2>
            <SkillBar label="Encoder" percent={30} />
            <SkillBar label="ESL Teacher" percent={70} />
        </div>
        </div>
    </section>
    );
};

export default SkillsExperience;
