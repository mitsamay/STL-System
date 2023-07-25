//rafce
import React, { useState } from "react";
import Papa from "papaparse";

const AircraftCSV = () => {
  const [data, setData] = useState(null);

  function groupKey(data) {
    const groupedData = Object.values(data).reduce(function (acc, cur) {
      const groupKey = cur.callsign; // Group by ...
      acc[groupKey] = acc[groupKey] || [];
      acc[groupKey].push(cur);
      return acc;
    }, {});
    return groupedData;
  }

  const handleSelectFile = (event) => {
    const file = event.target.files[0];
    Papa.parse(file, {
      header: true,
      complete: (results) => {
        const filterData = results.data.filter(
          (item) =>
            item.latitude !== null &&
            item.latitude !== undefined &&
            item.latitude !== "" &&
            item.longitude !== null &&
            item.longitude !== undefined &&
            item.longitude !== ""
        );

        const groupData = groupKey(filterData);
        console.log(groupData);
      },
    });
  };
  return (
    <div>
      <input type={"file"} onChange={handleSelectFile} />
    </div>
  );
};

export default AircraftCSV;
