import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Table from "../../components/table/Table";
import Widget from "../../components/widget/Widget";

const Home = () => {
  const rows = [
    {
      id: 1143155,
      name: "Wind Energy Forest",
      parent_project_name: "Weather Forecast",
      status: "approved",
      pipeline_status: "approved",
      performance_status: "approved",
      last_run_status: "04-Apr-2022 11:03 AM",
      developer: "Smith White"

    },
    {
      id: 1143156,
      name: "Wind Energy Forest",
      parent_project_name: "Weather Forecast",
      status: "canceled",
      pipeline_status: "approved",
      performance_status: "approved",
      last_run_status: "04-Apr-2022 11:03 AM",
      developer: "Smith White"

    },
    {
      id: 1143157,
      name: "Wind Energy Forest",
      parent_project_name: "Weather Forecast",
      status: "pending",
      pipeline_status: "approved",
      performance_status: "approved",
      last_run_status: "04-Apr-2022 11:03 AM",
      developer: "Smith White"

    },
    {
      id: 1143158,
      name: "Wind Energy Forest",
      parent_project_name: "Weather Forecast",
      status: "approved",
      pipeline_status: "approved",
      performance_status: "canceled",
      last_run_status: "04-Apr-2022 11:03 AM",
      developer: "Smith White"

    },
    {
      id: 1143159,
      name: "Wind Energy Forest",
      parent_project_name: "Weather Forecast",
      status: "approved",
      pipeline_status: "approved",
      performance_status: "approved",
      last_run_status: "04-Apr-2022 11:03 AM",
      developer: "Smith White"

    },
  ];

  return (
    <div className="home">
      
      <div className="homeContainer">
        
        <div className="d">
        <h6 style={{margin:"10px 50px"}}>Overview</h6>
        <div className="widgets">
          <Widget name="Active Deployments" depo="8" percentage="2.3%" />
          <Widget name="Service Health Summary" />
          <Widget name="Data Rift Summary" />
          <Widget name="Accuracy Summary" />
        </div>
        
        <div className="listContainer">
          
          <Table rows={rows}/>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
