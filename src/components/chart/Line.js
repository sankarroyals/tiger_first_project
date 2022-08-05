import React from 'react'
import ReactECharts from 'echarts-for-react';

const Line = ({data,labels}) => {
  const options = {
    grid: { top: 8, right: 8, bottom: 24, left: 36 },
    xAxis: {
      type: 'category',
      data: labels,
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: data,
        type: 'line',
        smooth: true,
      },
    ],
    tooltip: {
      trigger: 'axis',
    },
  };

  return <ReactECharts option={options} />;
}

export default Line