import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
// import Widget from "../../components/widget/Widget";
// import Featured from "../../components/featured/Featured";
// import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import Widget from "../../components/widget/Widget";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="d">
        <h6 style={{margin:"10px 50px"}}>Overview</h6>
        <div className="widgets">
          <Widget name="Active Deployments" depo="8" percentage="2.3%" />
          <Widget type="Service Health Summary" />
          <Widget type="Data Rift Summary" />
          <Widget type="Accuracy Summary" />
        </div>
        
        <div className="listContainer">
          
          <Table />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
