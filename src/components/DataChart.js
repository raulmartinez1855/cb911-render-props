import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import Loading from "./Loading";
import axios from "axios";

export default function DataChart() {
  const [loading, setLoading] = useState(true);
  const [series, setSeries] = useState([]);
  const [options, setOptions] = useState({
    chart: {
      foreColor: "#fff",
      toolbar: {
        show: false
      }
    },
    title: {
      text: "Microsoft Sample Stock Data",
      align: "center",
      style: {
        fontSize: "15px"
      }
    },
    colors: ["#F44336"]
  });

  useEffect(() => {
    const grabSampleData = async () => {
      const grabSample = await axios.get(
        "https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=MSFT&apikey=demo"
      );
      const dates = Object.keys(grabSample.data["Monthly Time Series"]).filter(
        date => date.match(/2019|2018/g)
      );
      const closingPrices = dates.map(
        key => grabSample.data["Monthly Time Series"][key]["4. close"]
      );
      await setOptions(o => {
        return { ...o, xaxis: { categories: dates } };
      });
      await setSeries([{ name: "Dates", data: closingPrices }]);
      await setLoading(false);
    };

    grabSampleData();
  }, []);

  if (loading) return <Loading />;
  return (
    <div className="flex-center">
      <Chart
        series={series}
        options={options}
        type="line"
        height="450"
        width="600"
      />
    </div>
  );
}
