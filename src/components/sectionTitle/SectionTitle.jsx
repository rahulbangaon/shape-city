import "./sectionTitle.css";

const SectionTitle = ({icon,title,className}) => {
  return (
    <div className={`section-title ${className}`}>
      <span>{icon}</span>
      <h2>{title}</h2>
    </div>
  );
};

export default SectionTitle;