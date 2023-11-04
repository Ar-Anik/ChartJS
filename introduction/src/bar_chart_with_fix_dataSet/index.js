import Chart from "chart.js/auto";

(async function () {
  const data = [
    {
      year: 2010,
      count: 10,
    },
    {
      year: 2011,
      count: 20,
    },
    {
      year: 2012,
      count: 15,
    },
    {
      year: 2013,
      count: 25,
    },
    {
      year: 2014,
      count: 22,
    },
    {
      year: 2015,
      count: 30,
    },
    {
      year: 2020,
      count: 40,
    },
    {
      year: 2023,
      count: 45,
    },
  ];

  new Chart(document.getElementById("acquisitions"), {
    type: "bar",
    data: {
      labels: data.map((row) => row.year),
      datasets: [
        {
          label: "Acquisitions By Year",
          data: data.map((row) => row.count),
        },
      ],
    },
  });
})();
