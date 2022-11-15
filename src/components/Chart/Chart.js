import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
    const dataPointValues = props.datapoints.map(datapoint => datapoint.value);

    const totalMaximum = Math.max(...dataPointValues);


    return <div className="chart">
        {props.datapoints.map(datapoints => {
            return(
            <ChartBar 
                key={datapoints.label}
                value={datapoints.value}
                label={datapoints.label}
                maxValue={totalMaximum}
            />
            )
        })}
    </div>
};

export default Chart;