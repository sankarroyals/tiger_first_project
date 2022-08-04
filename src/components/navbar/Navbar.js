import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";

import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";


const Navbar = () => {


  return (
    <div className="navbar">
      <div className="wrapper">
        <h6><strong style={{fontSize:"15px",fontWeight:"bold",cursor:"pointer"}}>TURING</strong></h6>
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
