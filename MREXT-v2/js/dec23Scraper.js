const decemberData = rawData.querySelector("#december-2023");
const decemberComp = compData.querySelector("#december-2023");
let decemberDay = decemberData.querySelectorAll(".dmrday");
let decemberDesc = decemberData.querySelectorAll(".dmrds");
let decemberReadings = decemberData.querySelectorAll(".dmrrs");

decemberDay.forEach((day, i) => {
  let row = decemberComp.querySelector("#row-" + (i + 1));
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

decemberDesc.forEach((desc, i) => {
  let row = decemberComp.querySelector("#row-" + (i + 1));
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

decemberReadings.forEach((readings, i) => {
  let row = decemberComp.querySelector("#row-" + (i + 1));
  if (row) {
    let cell = row.querySelector(".cell-3");
    cell.appendChild(readings);
  } else {
    console.log("Error: readings-row not found at index " + i);
  }
});

/*

dmrrs.forEach((readings, i) => {
  // CREATE <td> PER <strong>
  let strongs = readings.querySelectorAll("strong");
  let numberOfStrongs = strongs.length;
  let row = decemberComp.querySelector("#row-" + (i + 1));
  let j = 1;
  while (row && j <= numberOfStrongs) {
    let newCell = document.createElement("td");
    newCell.classList.add("cell-" + (j + 2));
    row.appendChild(newCell);

    j++;
  }

  // APPEND TEXT TO <td>
  strongs.forEach((strong, i) => {
    let readingContent = [];
    let siblingElement = strong.nextSibling;

    // Orphaned text nodes
    while (siblingElement && siblingElement.nodeType === 3) {
      readingContent.push(siblingElement.textContent.trim());

      siblingElement = siblingElement.nextSibling;
    }

    // Text nodes with element casings
    while (
      siblingElement &&
      siblingElement.tagName.toLowerCase() !== "strong"
    ) {
      if (siblingElement.nextSibling.nodeType === 3 || siblingElement.nodeType === 1) {
        readingContent.push(siblingElement.textContent.trim());
      }

      siblingElement = siblingElement.nextSibling;

      while (siblingElement && siblingElement.nodeType === 3) {
        siblingElement = siblingElement.nextSibling;
      }
    }
    let textTotal = strong.textContent.trim() + " " + readingContent.join("");

    let cellForStrong = row.querySelector(".cell-" + (i + 3));
    cellForStrong.textContent = textTotal;
  });
}); */

// TESTS
console.log(decemberData, decemberDay, decemberDesc, decemberReadings);
