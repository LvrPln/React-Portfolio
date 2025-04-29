
const SkillBar = ({ label, percent }) => (
    <div className="skill-bar">
        <div className="label-row">
            <span>{label}</span>
            <span>{percent}%</span>
            </div>
            <div className="bar-bg">
            <div className="bar-fill" style={{ width: `${percent}%` }}></div>
        </div>
    </div>
);

export default SkillBar;