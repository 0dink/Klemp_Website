var roomName;

function searchbar() {
    roomName = document.getElementById('searchTXT').value;
    document.getElementById("popupSearch").style.display = "block";
}

function goTo(){
  var prefix = roomName.slice(0, 2); // extract the first two characters of the search value
  var floor = roomName.slice(2, 3);
  var realRoomName = roomName.substring(2);

  var filename;
  if (prefix === "CA") {
      if (floor === '1') {
          filename = "../../CSV_files/CAMP_first_floor_table.csv";
      } else if (floor === '2') {
          filename = "../../CSV_files/CAMP_second_floor_table.csv";
      } else if (floor === '3') {
          filename = "../../CSV_files/CAMP_third_floor_table.csv";
      } else{
          return null;
      }
  } else if (prefix === "SC") {
      if (floor === '1') {
          filename = "../../CSV_files/ScienceCenter_first_floor_table.csv";
      } else if (floor === '2') {
          filename = "../../CSV_files/ScienceCenter_second_floor_table.csv";
      } else if (floor === '3') {
          filename = "../../CSV_files/ScienceCenter_third_floor_table.csv";
      } else {
          return null;
      }
  } else if (prefix === "SN") {
      if (floor === 'B') {
          filename = "../../CSV_files/Snell_zero_floor_table.csv";
      } else if (floor === '1') {
          filename = "../../CSV_files/Snell_first_floor_table.csv";
      } else if (floor === '2') {
          filename = "../../CSV_files/Snell_second_floor_table.csv";
      } else if (floor === '3') {
          filename = "../../CSV_files/Snell_third_floor_table.csv";
      } else {
          return null;
      }
  } else if (prefix === "ST") {
      if (floor === 'B') {
          filename = "../../CSV_files/StudentCenter_zero_floor_table.csv";
      } else if (floor === '1') {
          filename = "../../CSV_files/StudentCenter_first_floor_table.csv";
      } else if (floor === '2') {
          filename = "../../CSV_files/StudentCenter_second_floor_table.csv";
      } else {
          return null;
      }
  } else if (prefix === "ER") {
      if (floor === '1') {
          filename = "../../CSV_files/ERC_first_floor_table.csv";
      } else if (floor === '2') {
          filename = "../../CSV_files/ERC_second_floor_table.csv";
      } else {
          return null;
      }
  } else if (prefix === "RO") {
      if (floor === '1') {
          filename = "../../CSV_files/Rowley_first_floor_table.csv";
      } else if (floor === '2') {
          filename = "../../CSV_files/Rowley_second_floor_table.csv";
      } else {
          return null;
      }
  } else {
      return null;
  }
  alert(filename)
  var xhr = new XMLHttpRequest();
  xhr.open("GET", filename, false); 
  xhr.send(null);

  var rows = xhr.responseText.split("\n");
  var headerRow = rows[0].split(",");
  var roomNameIndex = headerRow.indexOf("RoomName");
  var xCoordIndex = headerRow.indexOf("XCoord");
  var yCoordIndex = headerRow.indexOf("YCoord");
  var pathIndex = headerRow.indexOf("Path");
  var displayIndex = headerRow.indexOf("Display");

  for (var i = 1; i < rows.length; i++) {
      var row = rows[i].split(",");
      if (row[roomNameIndex] === realRoomName) {
          var coords = [row[xCoordIndex], row[yCoordIndex]];
          var path = row[pathIndex];
          //var display = row[displayIndex];
          row[displayIndex] = "TRUE"; // change the value in the display column to "TRUE"
          window.location.href = window.location.href = path.replace(/"/g, '');;
          return [coords, path];
      }
  }

  return null;
}



function closeForm() {
    document.getElementById("popupSearch").style.display = "none";
}

function createHTMLElementAtCoordinatePair(xPercent, yPercent, parentElement) {
  const element = document.createElement('div');
  element.style.position = 'absolute';
  //element.style.width = `${parentElement.offsetWidth * 0.1}px`;
  //element.style.height = `${parentElement.offsetHeight * 0.1}px`;
  element.style.width = `${10}px`;
  element.style.height = `${10}px`;
  element.style.backgroundColor = 'black';
  parentElement.appendChild(element);
  
  // Add an event listener to adjust the element's size when the parent element is resized
  //window.addEventListener('resize', () => {
  //  element.style.width = `${parentElement.offsetWidth * 0.1}px`;
  //  element.style.height = `${parentElement.offsetHeight * 0.1}px`;
  //});

  // Get the current dimensions of the parent element
  const parentWidth = parentElement.offsetWidth;
  const parentHeight = parentElement.offsetHeight;

  // Calculate the fixed pixel values for the element's position based on the percentages
  const xPixel = Math.round((xPercent / 100) * parentWidth) - (element.offsetWidth / 2);
  const yPixel = Math.round((yPercent / 100) * parentHeight) - (element.offsetHeight / 2);

  // Set the fixed pixel values for the element's position
  element.style.left = `${xPixel}px`;
  element.style.top = `${yPixel}px`;

  // Add an event listener to adjust the element's position when the parent element is resized
  window.addEventListener('resize', () => {
    const newParentWidth = parentElement.offsetWidth;
    const newParentHeight = parentElement.offsetHeight;

    // Recalculate the fixed pixel values for the element's position based on the new dimensions
    const newXPixel = Math.round((xPercent / 100) * newParentWidth) - (element.offsetWidth / 2);
    const newYPixel = Math.round((yPercent / 100) * newParentHeight) - (element.offsetHeight / 2);

    // Set the new fixed pixel values for the element's position
    element.style.left = `${newXPixel}px`;
    element.style.top = `${newYPixel}px`;
  });
}

async function openCSV1(elementID) {
  const response = await fetch('../../CSV_files/CAMP_first_floor_table.csv');
  const text = await response.text();
  const results = Papa.parse(text, { header: true }).data;

  const filteredResults = results.filter((row) => {
    return row.Display === 'TRUE';
    
  });

    filteredResults.forEach((row) => {
    const x = row.XCoord;
    const y = row.YCoord;
    //processCoordinates(x, y);
    createHTMLElementAtCoordinatePair(x, y, elementID)
  });
}
async function openCSV2(elementID) {
  const response = await fetch('../../CSV_files/CAMP_second_floor_table.csv');
  const text = await response.text();
  const results = Papa.parse(text, { header: true }).data;

  const filteredResults = results.filter((row) => {
    return row.Display === 'TRUE';
    
  });

    filteredResults.forEach((row) => {
    const x = row.XCoord;
    const y = row.YCoord;
    //processCoordinates(x, y);
    createHTMLElementAtCoordinatePair(x, y, elementID)
  });
}
async function openCSV3(elementID) {
  const response = await fetch('../../CSV_files/CAMP_third_floor_table.csv');
  const text = await response.text();
  const results = Papa.parse(text, { header: true }).data;

  const filteredResults = results.filter((row) => {
    return row.Display === 'TRUE';
    
  });

    filteredResults.forEach((row) => {
    const x = row.XCoord;
    const y = row.YCoord;
    //processCoordinates(x, y);
    createHTMLElementAtCoordinatePair(x, y, elementID)
  });
}