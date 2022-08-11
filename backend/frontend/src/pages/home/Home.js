import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Table from "../../components/table/Table";
import Widget from "../../components/widget/Widget";
// added home
const Home = () => {


  return (
    <div className="home">

      <div className="homeContainer">

        <div className="d">

          <div className="innerD">

            
              <h6 style={{ margin: "" }}>Overview</h6>

            

            <div className="widgets">

              <Widget name="Active Deployments" depo="8" percentage="2.3%" />
              <Widget name="Service Health Summary" />
              <Widget name="Data Rift Summary" />
              <Widget name="Accuracy Summary" />


            </div>
            <Table />



          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
