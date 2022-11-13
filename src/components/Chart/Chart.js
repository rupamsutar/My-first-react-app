import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = () => {
    return <div className="chart">
        {props.datapoints.map(datapoints => {
            <ChartBar 
                key={datapoints.label}
                value={datapoints.value}
                label={datapoints.label}
                maxValue={null}

            />
        })}
    </div>
};

export default Chart;