// layout
import Sidebar from "@layout/Sidebar";
import Navbar from "@layout/Navbar";
import IndicesPanel from "@layout/IndicesPanel";

const Dashboard = () => {
  return (
    <div>
    <div><Navbar/></div>
    <div className='dashboard-content-box'>
        <div style={{ borderRight: "1px solid #ddd" }}><Sidebar/></div>
        <div className="w-100"><IndicesPanel/></div>
    </div>
</div>
  )
}

export default Dashboard;