import React from 'react'
import{Line} from "react-chartjs-2"
import{
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";
import { border } from '@chakra-ui/react';

ChartJS.register(CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend);
const Chart = ({arr=[],currency,days}) => {
    const prices=[1,2,34];
    const date=["12/2/23","23/3/24","21/3/22"];
    // const data=



  return (
    <Line 
    options={{
        responsive: true
    }} 
    data={{
        labels: date,
        datasets:[{
            label:`price in ${currency}`,
            data: prices,
            borderColor:"rgb(255,99,132)",
            backgroundColor:"rgba(255,99,132,0.5)"
        }]
    }}
    />
  )
}

export default Chart