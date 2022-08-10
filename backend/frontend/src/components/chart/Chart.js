import "./chart.scss";

import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import Line from "./Line";
import Bar from "./Bar";
import Pie from "./Pie";
import { useNavigate } from "react-router";
import pptxgen from "pptxgenjs";
import {DndProvider} from  "react-dnd"
import  {HTML5Backend}  from "react-dnd-html5-backend";
import { useDrag } from "react-dnd";



const Chart = ({ title }) => {
  



//   {
//     "fixed_acidity": 6.3,
//     "volatile_acidity": 0.39,
//     "citric_acid": 0.16,
//     "residual_sugar": 1.4,
//     "chlorides": 0.08,
//     "free_sulfur_dioxide": 11,
//     "total_sulfur_dioxide": 23,
//     "density": 0.9955,
//     "pH": 3.34,
//     "sulphates": 0.56,
//     "alcohol": 9.3,
//     "quality": 5,
//     "timestamp": "1659710898745561",
//     "date": "08-05-2022",
//     "id": 26
//   },
//   {
//     "fixed_acidity": 7.6,
//     "volatile_acidity": 0.41,
//     "citric_acid": 0.24,
//     "residual_sugar": 1.8,
//     "chlorides": 0.08,
//     "free_sulfur_dioxide": 4,
//     "total_sulfur_dioxide": 11,
//     "density": 0.9962,
//     "pH": 3.28,
//     "sulphates": 0.59,
//     "alcohol": 9.5,
//     "quality": 5,
//     "timestamp": "1659710898745561",
//     "date": "08-05-2022",
//     "id": 27
//   },
//   {
//     "fixed_acidity": 7.9,
//     "volatile_acidity": 0.43,
//     "citric_acid": 0.21,
//     "residual_sugar": 1.6,
//     "chlorides": 0.106,
//     "free_sulfur_dioxide": 10,
//     "total_sulfur_dioxide": 37,
//     "density": 0.9966,
//     "pH": 3.17,
//     "sulphates": 0.91,
//     "alcohol": 9.5,
//     "quality": 5,
//     "timestamp": "1659710898745561",
//     "date": "08-05-2022",
//     "id": 28
//   },
//   {
//     "fixed_acidity": 7.1,
//     "volatile_acidity": 0.71,
//     "citric_acid": 0,
//     "residual_sugar": 1.9,
//     "chlorides": 0.08,
//     "free_sulfur_dioxide": 14,
//     "total_sulfur_dioxide": 35,
//     "density": 0.9972,
//     "pH": 3.47,
//     "sulphates": 0.55,
//     "alcohol": 9.4,
//     "quality": 5,
//     "timestamp": "1659710898745561",
//     "date": "08-05-2022",
//     "id": 29
//   },
//   {
//     "fixed_acidity": 7.8,
//     "volatile_acidity": 0.645,
//     "citric_acid": 0,
//     "residual_sugar": 2,
//     "chlorides": 0.08199999999999999,
//     "free_sulfur_dioxide": 8,
//     "total_sulfur_dioxide": 16,
//     "density": 0.9964,
//     "pH": 3.38,
//     "sulphates": 0.59,
//     "alcohol": 9.8,
//     "quality": 6,
//     "timestamp": "1659710898745561",
//     "date": "08-05-2022",
//     "id": 30
//   },
//   {
//     "fixed_acidity": 6.7,
//     "volatile_acidity": 0.675,
//     "citric_acid": 0.07,
//     "residual_sugar": 2.4,
//     "chlorides": 0.08900000000000001,
//     "free_sulfur_dioxide": 17,
//     "total_sulfur_dioxide": 82,
//     "density": 0.9958,
//     "pH": 3.35,
//     "sulphates": 0.54,
//     "alcohol": 10.1,
//     "quality": 5,
//     "timestamp": "1659710898745561",
//     "date": "08-05-2022",
//     "id": 31
//   },
//   {
//     "fixed_acidity": 6.9,
//     "volatile_acidity": 0.685,
//     "citric_acid": 0,
//     "residual_sugar": 2.5,
//     "chlorides": 0.105,
//     "free_sulfur_dioxide": 22,
//     "total_sulfur_dioxide": 37,
//     "density": 0.9966,
//     "pH": 3.46,
//     "sulphates": 0.57,
//     "alcohol": 10.6,
//     "quality": 6,
//     "timestamp": "1659710898745561",
//     "date": "08-05-2022",
//     "id": 32
//   },
//   {
//     "fixed_acidity": 8.3,
//     "volatile_acidity": 0.655,
//     "citric_acid": 0.12,
//     "residual_sugar": 2.3,
//     "chlorides": 0.083,
//     "free_sulfur_dioxide": 15,
//     "total_sulfur_dioxide": 113,
//     "density": 0.9966,
//     "pH": 3.17,
//     "sulphates": 0.66,
//     "alcohol": 9.8,
//     "quality": 5,
//     "timestamp": "1659710898745561",
//     "date": "08-05-2022",
//     "id": 33
//   },
//   {
//     "fixed_acidity": 6.9,
//     "volatile_acidity": 0.605,
//     "citric_acid": 0.12,
//     "residual_sugar": 10.7,
//     "chlorides": 0.073,
//     "free_sulfur_dioxide": 40,
//     "total_sulfur_dioxide": 83,
//     "density": 0.9993,
//     "pH": 3.45,
//     "sulphates": 0.52,
//     "alcohol": 9.4,
//     "quality": 6,
//     "timestamp": "1659710898745561",
//     "date": "08-05-2022",
//     "id": 34
//   },
//   {
//     "fixed_acidity": 5.2,
//     "volatile_acidity": 0.32,
//     "citric_acid": 0.25,
//     "residual_sugar": 1.8,
//     "chlorides": 0.10300000000000001,
//     "free_sulfur_dioxide": 13,
//     "total_sulfur_dioxide": 50,
//     "density": 0.9957,
//     "pH": 3.38,
//     "sulphates": 0.55,
//     "alcohol": 9.2,
//     "quality": 5,
//     "timestamp": "1659710898745561",
//     "date": "08-05-2022",
//     "id": 35
//   },
//   {
//     "fixed_acidity": 7.8,
//     "volatile_acidity": 0.645,
//     "citric_acid": 0,
//     "residual_sugar": 5.5,
//     "chlorides": 0.086,
//     "free_sulfur_dioxide": 5,
//     "total_sulfur_dioxide": 18,
//     "density": 0.9986,
//     "pH": 3.4,
//     "sulphates": 0.55,
//     "alcohol": 9.6,
//     "quality": 6,
//     "timestamp": "1659710898745561",
//     "date": "08-05-2022",
//     "id": 36
//   },
//   {
//     "fixed_acidity": 7.8,
//     "volatile_acidity": 0.6,
//     "citric_acid": 0.14,
//     "residual_sugar": 2.4,
//     "chlorides": 0.086,
//     "free_sulfur_dioxide": 3,
//     "total_sulfur_dioxide": 15,
//     "density": 0.9975,
//     "pH": 3.42,
//     "sulphates": 0.6,
//     "alcohol": 10.8,
//     "quality": 6,
//     "timestamp": "1659710898745561",
//     "date": "08-05-2022",
//     "id": 37
//   },
//   {
//     "fixed_acidity": 8.1,
//     "volatile_acidity": 0.38,
//     "citric_acid": 0.28,
//     "residual_sugar": 2.1,
//     "chlorides": 0.066,
//     "free_sulfur_dioxide": 13,
//     "total_sulfur_dioxide": 30,
//     "density": 0.9968,
//     "pH": 3.23,
//     "sulphates": 0.73,
//     "alcohol": 9.7,
//     "quality": 7,
//     "timestamp": "1659710898745561",
//     "date": "08-05-2022",
//     "id": 38
//   },
//   {
//     "fixed_acidity": 5.7,
//     "volatile_acidity": 1.13,
//     "citric_acid": 0.09,
//     "residual_sugar": 1.5,
//     "chlorides": 0.172,
//     "free_sulfur_dioxide": 7,
//     "total_sulfur_dioxide": 19,
//     "density": 0.9940000000000001,
//     "pH": 3.5,
//     "sulphates": 0.48,
//     "alcohol": 9.8,
//     "quality": 4,
//     "timestamp": "1659710898745561",
//     "date": "08-05-2022",
//     "id": 39
//   },
//   {
//     "fixed_acidity": 7.3,
//     "volatile_acidity": 0.45,
//     "citric_acid": 0.36,
//     "residual_sugar": 5.9,
//     "chlorides": 0.07400000000000001,
//     "free_sulfur_dioxide": 12,
//     "total_sulfur_dioxide": 87,
//     "density": 0.9978,
//     "pH": 3.33,
//     "sulphates": 0.83,
//     "alcohol": 10.5,
//     "quality": 5,
//     "timestamp": "1659710898745561",
//     "date": "08-05-2022",
//     "id": 40
//   },
//   {
//     "fixed_acidity": 7.3,
//     "volatile_acidity": 0.45,
//     "citric_acid": 0.36,
//     "residual_sugar": 5.9,
//     "chlorides": 0.07400000000000001,
//     "free_sulfur_dioxide": 12,
//     "total_sulfur_dioxide": 87,
//     "density": 0.9978,
//     "pH": 3.33,
//     "sulphates": 0.83,
//     "alcohol": 10.5,
//     "quality": 5,
//     "timestamp": "1659710898745561",
//     "date": "08-05-2022",
//     "id": 41
//   },
//   {
//     "fixed_acidity": 8.8,
//     "volatile_acidity": 0.61,
//     "citric_acid": 0.3,
//     "residual_sugar": 2.8,
//     "chlorides": 0.08800000000000001,
//     "free_sulfur_dioxide": 17,
//     "total_sulfur_dioxide": 46,
//     "density": 0.9976,
//     "pH": 3.26,
//     "sulphates": 0.51,
//     "alcohol": 9.3,
//     "quality": 4,
//     "timestamp": "1659710898745561",
//     "date": "08-05-2022",
//     "id": 42
//   },
//   {
//     "fixed_acidity": 7.5,
//     "volatile_acidity": 0.49,
//     "citric_acid": 0.2,
//     "residual_sugar": 2.6,
//     "chlorides": 0.332,
//     "free_sulfur_dioxide": 8,
//     "total_sulfur_dioxide": 14,
//     "density": 0.9968,
//     "pH": 3.21,
//     "sulphates": 0.9,
//     "alcohol": 10.5,
//     "quality": 6,
//     "timestamp": "1659710898745561",
//     "date": "08-05-2022",
//     "id": 43
//   },
//   {
//     "fixed_acidity": 8.1,
//     "volatile_acidity": 0.66,
//     "citric_acid": 0.22,
//     "residual_sugar": 2.2,
//     "chlorides": 0.069,
//     "free_sulfur_dioxide": 9,
//     "total_sulfur_dioxide": 23,
//     "density": 0.9968,
//     "pH": 3.3,
//     "sulphates": 1.2,
//     "alcohol": 10.3,
//     "quality": 5,
//     "timestamp": "1659710898745561",
//     "date": "08-05-2022",
//     "id": 44
//   },
//   {
//     "fixed_acidity": 6.8,
//     "volatile_acidity": 0.67,
//     "citric_acid": 0.02,
//     "residual_sugar": 1.8,
//     "chlorides": 0.05,
//     "free_sulfur_dioxide": 5,
//     "total_sulfur_dioxide": 11,
//     "density": 0.9962,
//     "pH": 3.48,
//     "sulphates": 0.52,
//     "alcohol": 9.5,
//     "quality": 5,
//     "timestamp": "1659710898745561",
//     "date": "08-05-2022",
//     "id": 45
//   },
//   {
//     "fixed_acidity": 4.6,
//     "volatile_acidity": 0.52,
//     "citric_acid": 0.15,
//     "residual_sugar": 2.1,
//     "chlorides": 0.054000000000000006,
//     "free_sulfur_dioxide": 8,
//     "total_sulfur_dioxide": 65,
//     "density": 0.9934,
//     "pH": 3.9,
//     "sulphates": 0.56,
//     "alcohol": 13.1,
//     "quality": 4,
//     "timestamp": "1659710898745561",
//     "date": "08-05-2022",
//     "id": 46
//   },
//   {
//     "fixed_acidity": 7.7,
//     "volatile_acidity": 0.935,
//     "citric_acid": 0.43,
//     "residual_sugar": 2.2,
//     "chlorides": 0.114,
//     "free_sulfur_dioxide": 22,
//     "total_sulfur_dioxide": 114,
//     "density": 0.997,
//     "pH": 3.25,
//     "sulphates": 0.73,
//     "alcohol": 9.2,
//     "quality": 5,
//     "timestamp": "1659710898745561",
//     "date": "08-05-2022",
//     "id": 47
//   },
//   {
//     "fixed_acidity": 8.7,
//     "volatile_acidity": 0.29,
//     "citric_acid": 0.52,
//     "residual_sugar": 1.6,
//     "chlorides": 0.113,
//     "free_sulfur_dioxide": 12,
//     "total_sulfur_dioxide": 37,
//     "density": 0.9969,
//     "pH": 3.25,
//     "sulphates": 0.58,
//     "alcohol": 9.5,
//     "quality": 5,
//     "timestamp": "1659710898745561",
//     "date": "08-05-2022",
//     "id": 48
//   },
//   {
//     "fixed_acidity": 6.4,
//     "volatile_acidity": 0.4,
//     "citric_acid": 0.23,
//     "residual_sugar": 1.6,
//     "chlorides": 0.066,
//     "free_sulfur_dioxide": 5,
//     "total_sulfur_dioxide": 12,
//     "density": 0.9958,
//     "pH": 3.34,
//     "sulphates": 0.56,
//     "alcohol": 9.2,
//     "quality": 5,
//     "timestamp": "1659710898745561",
//     "date": "08-05-2022",
//     "id": 49
//   },
//   {
//     "fixed_acidity": 5.6,
//     "volatile_acidity": 0.31,
//     "citric_acid": 0.37,
//     "residual_sugar": 1.4,
//     "chlorides": 0.07400000000000001,
//     "free_sulfur_dioxide": 12,
//     "total_sulfur_dioxide": 96,
//     "density": 0.9954,
//     "pH": 3.32,
//     "sulphates": 0.58,
//     "alcohol": 9.2,
//     "quality": 5,
//     "timestamp": "1659710898745561",
//     "date": "08-05-2022",
//     "id": 50
//   }
// ]
  
  const [data,setData] = useState([820, 932, 901, 934, 1290, 1330, 1320]);
  const [labels,setLabels] = useState(['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'])

  //adding pptxgen
  let pres = new pptxgen();

  const [chartV, setChartV] = useState('')
  const values=[]
  for(let i=0;i<7;i++){
         values.push(200*i)
  }
 console.log(values)

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
      slide.addChart(pres.ChartType.bar, dataChartAreaLine, { x: 2, y: 2, w: 6, h: 3, showLegend: true});

    }
    else if(chartV === 'line'){
      slide.addChart(pres.ChartType.line, dataChartAreaLine, { x: 2, y: 2, w: 6, h: 3, showLegend: true});

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
        {chartV !== '' && 
        <div style={{ position: "absolute", right: "0" }}>
          <Button className="cBS" onClick={pptF}>PPT</Button>
          <Button className="cBS"
            onClick={navi}>PUBLISH</Button>
        </div>}
        {/* change here */}
        <div className="title"><span style={{color:"black",fontWeight:"bold"}}>{`${chartV.toUpperCase()}`}</span>{` Graph for The ${title}  `}</div>

        {chartV === '' && <div 
        style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"100%",fontSize:"25px"}}
        >Drag the chart type to built chart</div>}
        {chartV === 'line' && <Line data={data} labels={labels} values={values}/>}
        {chartV === 'bar' && <Bar data={data} labels={labels} values={values} />}
        {chartV === 'pie' && <Pie data={data} labels={labels} values={values}/>}


      </div>




      <div className="cB">
      
       
      
      <div>
          <Button className="cBS" onClick={(e) => {
            setChartV('line')
          }} >Line</Button>
        </div>  
        
        <div>
          <Button className="cBS" 
          
          onClick={(e) => {
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
