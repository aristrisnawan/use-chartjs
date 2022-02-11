import axios from "axios";
import { useState, useEffect } from "react";
import BarChart from "./components/BarChart";
import { UserData } from "./components/Data";
import LineChar from "./components/LineChar";

function App() {
  const [userData, setUserData] = useState({
    labels: UserData.map((items) => items.year),
    datasets: [
      {
        label: "User Gained",
        data: UserData.map((items) => items.userGain),
        backgroundColor: ["#c4ab1d", "red", "blue"],
      },
    ],
  });
  const [iniChart, setIniChart] = useState({});
  useEffect(() => {
    axios.get("https://api.coincap.io/v2/assets/?limit=5").then((res) => {
      const untukChart = res.data.data;
      // console.log(untukChart);
      setIniChart(untukChart);
    });
  }, []);
  console.log(userData);
  return (
    <div>
      {/* <BarChart chartData={userData} /> */}
      <div className="grid grid-cols-2 gap-x-5 mt-4 px-2">
        <div className="w-full h-96 drop-shadow-xl border-2 border-blue-500">
          <BarChart chartData={userData} />
        </div>
        <div className="w-full h-96 drop-shadow-xl border-2 border-blue-500">
          <LineChar line={userData} />
        </div>
        {/* {iniChart.map((items) => items.name)} */}
      </div>
    </div>
  );
}

export default App;
