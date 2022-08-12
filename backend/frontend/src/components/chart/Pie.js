import React from 'react'
import ReactECharts from 'echarts-for-react';

const Pie = ({data,labels}) => {
    const options = {
        grid: { top: 8, right: 8, bottom: 24, left: 36 },
        xAxis: {
          type: 'value',
         
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            data: data,
            type: 'pie',
            smooth: true,
            
          },
        ],
        tooltip: {
          trigger: 'item',
        },
      };
    
      return <ReactECharts option={options} />;
  
  
}

export default Pie