import "./chart.scss";

import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import Line from "./Line";
import Bar from "./Bar";
import Pie from "./Pie";
import { useNavigate } from "react-router";
import pptxgen from "pptxgenjs";



const Chart = ({ title }) => {
  
  const [data,setData] = useState([820, 932, 901, 934, 1290, 1330, 1320]);
  const [labels,setLabels] = useState(['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'])

  //adding pptxgen
  let pres = new pptxgen();

  const [chartV, setChartV] = useState('bar')


  useEffect(() => {
    console.log(chartV)
  }, [chartV])


  const pptF = (e) => {

    let slide = pres.addSlide();


    let dataChartAreaLine = [
      {
        name: "Deployments",
        labels: labels,
        values: data,
      }
    ];


    //  pres.ChartType.bar, pres.ChartType.line   these are used  to download line,bar graphs
    if(chartV === 'bar'){
      slide.addChart(pres.ChartType.bar, dataChartAreaLine, { x: 2, y: 2, w: 6, h: 3, showLegend: true });

    }
    else if(chartV === 'line'){
      slide.addChart(pres.ChartType.line, dataChartAreaLine, { x: 2, y: 2, w: 6, h: 3, showLegend: true });

    }
    else{
      slide.addChart(pres.ChartType.pie, dataChartAreaLine, { x: 2, y: 2, w: 6, h: 3, showLegend: true });

    }

    pres.writeFile({ fileName: `Charts-${chartV}.pptx` });
  }




  const navigate = useNavigate()
  const navi = (e) => {
    navigate('/publish')
  }


  return (
    <div className="chartD">
      <div className="chart" style={{ position: "relative" }}>
        <div style={{ position: "absolute", right: "0" }}>
          <Button className="cBS" onClick={pptF}>PPT</Button>
          <Button className="cBS"
            onClick={navi}>PUBLISH</Button>
        </div>
        {/* change here */}
        <div className="title">{title}</div>


        {chartV === 'line' && <Line data={data} labels={labels} />}
        {chartV === 'bar' && <Bar data={data} labels={labels} />}
        {chartV === 'pie' && <Pie data={data} labels={labels} />}


      </div>




      <div className="cB">
        <div>
          <Button className="cBS" onClick={(e) => {
            setChartV('line')
          }}>Line</Button>
        </div>
        <div>
          <Button className="cBS" onClick={(e) => {
            setChartV('bar')
          }}>Bar</Button>
        </div>
        <div>
          <Button className="cBS" onClick={(e) => {
            setChartV('pie')

          }}>Pie</Button>
        </div>
      </div>

    </div>
  );
};

export default Chart;
