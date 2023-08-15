import React from "react";
import "./home.scss";
import TopBox from "../../components/topBox/TopBox";
import ChartBox from "../../components/chartBox/ChartBox";
import {
  barChartBoxIncome,
  barChartBoxVisit,
  chartBoxConversion,
  chartBoxGames,
  chartBoxIncome,
  chartBoxUser,
} from "../../data";
import BarChartBox from "../../components/barChartBox/BarChartBox";
import PieChartBox from "../../components/pieChartBox/PieChartBox";

const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        <TopBox />
      </div>
      <div className="box box2">
        <ChartBox {...chartBoxConversion} />
      </div>
      <div className="box box3">
        <ChartBox {...chartBoxIncome} />
      </div>
      <div className="box box4">
        <PieChartBox />
      </div>
      <div className="box box5">
        <ChartBox {...chartBoxUser} />
      </div>
      <div className="box box6">
        <ChartBox {...chartBoxGames} />
      </div>
      <div className="box box7">Box 7</div>
      <div className="box box8">
        <BarChartBox {...barChartBoxVisit} />
      </div>
      <div className="box box9">
        <BarChartBox {...barChartBoxIncome} />
      </div>
    </div>
  );
};

export default Home;
