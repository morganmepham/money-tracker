import './PieChart.css'

import { Pie } from "react-chartjs-2";



const PieChart = () => {
  const data = localStorage.getItem('ActiveUser')
  const user = JSON.parse(data)

const spent = user.totalSpent
const budget = user.budget
let remaining = budget - spent
if(remaining < 0){
  remaining = 0
}

const labels = ['Spent', 'Remaining']
const colors = ['#034B24', '#0EC663']
const pieData = [spent, remaining]


const dataTest = {
    labels: labels,
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: colors,
        borderColor: "#000",
        data: pieData,
      },
    ],
  };
  const options = {
    plugins: {
      title: {
          display: true,
          text: 'Budget',
          font: {
            size: 40
          }
      }
  }

  }
    return (
        <div className='pie-chart'>
          <Pie data={dataTest} options={options}/>
        </div>
      );
};

export default PieChart