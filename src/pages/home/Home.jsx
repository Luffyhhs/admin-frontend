import React from "react";
import "./home.scss";

import ChartBox from "../../components/chartBox/ChartBox";
import {
  barChartBoxVisit,
  chartBoxConversion,
  chartBoxIncome,
  chartBoxUser,
} from "../../data";
import BarChartBox from "../../components/barChartBox/BarChartBox";

const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <ChartBox {...chartBoxConversion} />
      </div>
      <div className="box box2">
        <ChartBox {...chartBoxIncome} />
      </div>
      <div className="box box3">
        <ChartBox {...chartBoxUser} />
      </div>

      <div className="box box4">
        <BarChartBox {...barChartBoxVisit} />
      </div>
    </div>
  );
};

export default Home;
