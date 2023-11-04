import { CubejsApi } from "@cubejs-client/core";

const apiUrl =
  "https://heavy-lansford.gcp-us-central1.cubecloudapp.dev/cubejs-api/v1";
const cubeToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjEwMDAwMDAwMDAsImV4cCI6NTAwMDAwMDAwMH0.OHZOpOBVKr-sCwn8sbZ5UFsqI3uCs6e4omT7P6WVMFw";

const cubeApi = new CubejsApi(cubeToken, { apiUrl });

async function getAquisitionsByYear() {
  const acquisitionsByYearQuery = {
    dimensions: ["Artworks.yearAcquired"],
    measures: ["Artworks.count"],
    filters: [
      {
        member: "Artworks.yearAcquired",
        operator: "set",
      },
    ],
    order: {
      "Artworks.yearAcquired": "asc",
    },
  };

  const resultSet = await cubeApi.load(acquisitionsByYearQuery);

  return resultSet.tablePivot().map((row) => ({
    year: parseInt(row["Artworks.yearAcquired"]),
    count: parseInt(row["Artworks.count"]),
  }));
}

export default getAquisitionsByYear;
