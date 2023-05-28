import "./sectionTitle.css";

const SectionTitle = ({icon,title}) => {
  return (
    <div className="section-title">
      <span>{icon}</span>
      <h2>{title}</h2>
    </div>
  );
};

export default SectionTitle;