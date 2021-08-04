import React from 'react'
import { Line } from "react-chartjs-2";
import Chart from "react-apexcharts";
import '../css/table.css'
function Table(props) {
  var x=props.labx
  var y= props.laby
  console.log("x",x)
  console.log("y",y)


  const options= {
    chart: {
      id: "basic-bar"
    },
    xaxis: {
      categories: x,
      title: {
        text: 'Time  [seconds]',
      },

      
    },
    yaxis: {
      title: {
        text: 'Position [m]',
      },
  },
    
  }
  const series= [
    {
      
      data: y
    }
  ]

    return (
        <div>
        <Chart options={options} series={series}  type="line"
              width="500"/>
        </div>
    )
}

export default Table
