import { Link } from "react-router-dom";
import "./navbar.scss";


const Navbar = () => {


  return (
    <div className="navbar">
      <div className="wrapper">
        <Link to="/" style={{textDecoration:"none"}}>
        <h6><strong style={{fontSize:"15px",fontWeight:"bold",cursor:"pointer"}}>TURING</strong></h6>
        </Link>
        <div className="items">
          <div className="item">
            <p> Predictive model for MCK</p>
          </div>
          <div className="item">
          <p> Overview</p>
          </div>
          <div className="item">
          <p> Prepare Data</p>
          </div>
          <div className="item">
          <p> Explore</p>
          </div>
          <div className="item">
          <p> Train</p>
          </div>
          <div className="item">
          <p>Interpret</p>
          </div>
          <div className="item">
          <p>Data Prep Inference</p>
          </div>
          <div className="item">
          <p>Model Monitor</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
