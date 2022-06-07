const TemplateProjectCard = ({ data }) => (
  <div className="template-project-card">
    <div>
      <img src={data.header_image} alt="header image" />
    </div>
    <div>
      <div className="template-content-card-title">{data.name}</div>
      <div
        style={{
          fontSize: "14px",
          fontWeight: "400",
          color: "#454545",
          margin: "5px 0px 5px 35px",
        }}
      >
        {data.description}
      </div>
    </div>
  </div>
);

export default TemplateProjectCard;
