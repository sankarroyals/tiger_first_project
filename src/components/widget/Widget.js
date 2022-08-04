import "./widget.scss";


const Widget = ({ name,percentage,depo }) => {
  


 

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
