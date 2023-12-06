const januaryData = rawData.querySelector("#january-2024");
const januaryComp = compData.querySelector("#january-2024");
let januaryDay = januaryData.querySelectorAll(".dmrday");
let januaryDesc = januaryData.querySelectorAll(".dmrds");
let januaryReadings = januaryData.querySelectorAll(".dmrrs");

januaryDay.forEach((day, i) => {
  let row = januaryComp.querySelector("#row-" + (i + 1));
  if (row) {
    // Read from right to left: Trim day then extract character at index[0] and create a textNode with it
    dayText = document.createTextNode(day.textContent.trim().substring(0, 2));
    // Finally, append textNode to cell
    let cell = row.querySelector(".cell-1");
    cell.appendChild(dayText);
  } else {
    console.log("Error: day-row not found at index " + i);
  }
});

januaryDesc.forEach((desc, i) => {
  let row = januaryComp.querySelector("#row-" + (i + 1));
  if (row) {
    let cell = row.querySelector(".cell-2");
    if (desc.textContent.toLowerCase().includes("ordinary")) {
      if (desc.textContent.toLowerCase().includes("optional")) {
        cell.textContent = desc.textContent.replace("Ordinary Weekday/", "");
      } else {
        cell.textContent = "Ordinary";
      }
    } else if (desc.textContent.toLowerCase().includes("advent")) {
      if (desc.textContent.toLowerCase().includes("/")) {
        cell.textContent = desc.textContent.replace("Weekday", "-");
      } else {
        cell.textContent = desc.textContent.replace("Advent", "ADV.");
      }
    } else {
      cell.textContent = desc.textContent;
    }
  } else {
    console.log("Error: desc-row not found at index " + i);
  }
});

januaryReadings.forEach((readings, i) => {
  let row = januaryComp.querySelector("#row-" + (i + 1));
  if (row) {
    let cell = row.querySelector(".cell-3");
    cell.appendChild(readings);
  } else {
    console.log("Error: readings-row not found at index " + i);
  }
});
