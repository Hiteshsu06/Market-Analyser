// layout
import Sidebar from "@layout/Sidebar";
import Navbar from "@layout/Navbar";
import IndicesPanel from "@layout/IndicesPanel";

const Dashboard = () => {
  return (
    <div>
      <div className="position-fixed w-100 z-2" style={{ top: 0, left: 0 }}>
        <Navbar />
      </div>
      <div className="dashboard-content-box">
        <div
          style={{ top: "9%", left: 0 }}
          className="h-100 position-fixed z-1"
        >
          <Sidebar />
        </div>
        <div className="w-100" style={{ marginLeft: "20%", marginTop: "5%" }}>
          <IndicesPanel />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
