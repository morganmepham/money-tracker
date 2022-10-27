import BarChart from '../BarChart/BarChart';
import PieChart from '../PieChart/PieChart';
import Chart from "chart.js/auto";
import './AnalyticsBody.css'

const AnalyticsBody = () => {

    return (
        <div className="analytics-body-div">
            <h1 className="analytics-title">Analytics</h1>
            <p className="pie-title">Budget</p>
            <p className="bar-title">Top Contacts</p>
            <PieChart />
            <BarChart />
        </div>
    );
}
 
export default AnalyticsBody;