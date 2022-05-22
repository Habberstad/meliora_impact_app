import "../../../styles/npo-profile-page-styles/key-info-styles.css";
import expenses_piechart from "../npo-media/expenses_piechart.png";
import collected_piechart from "../npo-media/collected_piechart.png";
import financial_table from "../npo-media/financial-table.png";

const KeyInformationTab = () => {
  return (
    <div className="key-info-main-container">
      <div className="data-card-section">
        <div className="data-card">
          <div className="data-card-title">
            <div style={{ margin: "0 30px 0 20px" }}>Admin Expenses</div>
            <div> 12,5%</div>
          </div>
          <div className="rate-text">Rate: Good</div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "35px",
            }}
          >
            <img src={expenses_piechart} alt="pie chart" />
          </div>
        </div>
        <div style={{ margin: "0 20px" }} className="data-card">
          <div className="data-card-title">
            <div style={{ margin: "0 75px 0 20px" }}>Collected</div>
            <div> 87,5%</div>
          </div>
          <div className="rate-text">Rate: Good</div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "35px",
            }}
          >
            <img src={collected_piechart} alt="pie chart" />
          </div>
        </div>
        <div className="insights-card">
          <div
            style={{ marginTop: "20px", fontWeight: "500", fontSize: "14px" }}
          >
            Key Insights
          </div>
        </div>
      </div>
      <div style={{}}>
        <img src={financial_table} alt="pie chart" />
      </div>
    </div>
  );
};

export default KeyInformationTab;
