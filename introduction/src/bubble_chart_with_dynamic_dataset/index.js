import Chart from "chart.js/auto";
import getDimensions from "./api";

(async function () {
  const data = await getDimensions();

  console.log("Dantum : ", data);

  new Chart(document.getElementById("dimensions"), {
    type: "bubble",
    data: {
      labels: "",
      datasets: [
        {
          label: "Dimensions",
          data: data.map((row) => ({
            x: row.width,
            y: row.height,
            r: row.count,
          })),
        },
      ],
    },
  });
})();
