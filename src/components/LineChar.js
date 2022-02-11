import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
// import axios from "axios";

export default function LineChar({ line }) {
  // const [data, setData] = useState({});

  // useEffect(() => {dataCahrt});
  return (
    <div>
      <Line data={line} />
    </div>
  );
}
