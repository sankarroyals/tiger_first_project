import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

const Widget = ({ name,percentage,depo }) => {
  let data;

  //temporary
  const amount = 8;


 

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{name}</span>
        <span className="counter">
          {depo}
        </span>
        <span className="link"></span>
        <div className="percentage positive">
        {percentage}
        </div>
      </div>
      <div className="right">
        
          
          <div className="inR">
          <i class="fa-solid fa-arrows-rotate"></i>
          </div>
        
       
      </div>
    </div>
  );
};

export default Widget;
