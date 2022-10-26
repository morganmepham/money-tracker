import './BarChart.css'


import { Bar } from "react-chartjs-2";

const BarChart = () => {
    const data = localStorage.getItem('ActiveUser')
    const user = JSON.parse(data)
    const contacts = user.fullContactList
    contacts.sort(function(a,b){
        let keyA = a.total
        let keyB = b.total
        return keyB - keyA
    })
    let topSix =[]
    let length = 5
    if(contacts.length < 5){
        length = contacts.length
    }
    
    for(let i = 0; i < length; i++){
        topSix.push(contacts[i])
    }

    const labels = [];
    for(let i = 0; i < topSix.length; i++){
        labels.push(topSix[i].contact)
    }
    const values = []
    for(let i = 0; i < topSix.length; i++){
        values.push(topSix[i].total)
        }

    const colors = ['#119B5D', '#17AD6A']
    const dataBar = {
    labels: labels,
    datasets: [
      {
        label: "Contact",
        backgroundColor: colors,
        borderColor: "#000",
        data: values,
      },
    ],
  };

  const options = {
    plugins: {
      title: {
          display: true,
          text: 'Top Contacts',
          font: {
            size: 40
          }
      },
      legend: {
        display: false
      }
  },
    scales: {
      y: {
        ticks: {
          font: {
            size: 20,
          }
        }
      },
      x: {
        ticks: {
          font: {
            size: 25
          }
        }
      }
    }
  }
  return (
    <div className='bar-chart'>
      <Bar data={dataBar} options={options}/>
    </div>
  );
};

export default BarChart;