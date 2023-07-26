import { Doughnut } from "react-chartjs-2";

const DoughnutChart = () => {
  const data = {
    labels: false,
    datasets: [
      {
        data: [250, 78],
        backgroundColor: ["yellowGreen", "crimson"],
        hoverBackgroundColor: ["yellowGreen", "crimson"],
        borderWidth: 0.5,
      },
    ],
  };

  return (
    <>
      <Doughnut data={data} />
    </>
  );
};

export default DoughnutChart;
