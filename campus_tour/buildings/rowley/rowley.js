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
  var saveto;
  if (prefix === "CA") {
      if (floor === '1') {
          //filename = "../../CSV_files/CAMP_first_floor_table.csv";
           filename = JSON.parse(localStorage.getItem('CAMP1_Array'));
           saveto = 'CAMP1_Array';
      } else if (floor === '2') {
          //filename = "../../CSV_files/CAMP_second_floor_table.csv";
          filename = JSON.parse(localStorage.getItem('CAMP2_Array'));
          saveto = 'CAMP2_Array';
      } else if (floor === '3') {
          //filename = "../../CSV_files/CAMP_third_floor_table.csv";
          filename = JSON.parse(localStorage.getItem('CAMP3_Array'));
          saveto = 'CAMP3_Array'
      } else{
          return null;
      }
  } else if (prefix === "SC") {
      console.log("sc condition met")
      if (floor === '1') {
          //filename = "../../CSV_files/ScienceCenter_first_floor_table.csv";
          filename = JSON.parse(localStorage.getItem('SC1_Array'));
          saveto = 'SC1_Array';
      } else if (floor === '2') {
          filename = JSON.parse(localStorage.getItem('SC2_Array'));
          saveto = 'SC2_Array';
          //filename = "../../CSV_files/ScienceCenter_second_floor_table.csv";
      } else if (floor === '3') {
          console.log("second condition met")
          filename = JSON.parse(localStorage.getItem('SC3_Array'));
          saveto = 'SC3_Array';
          console.log("got to here")
          //filename = "../../CSV_files/ScienceCenter_third_floor_table.csv";
      } else {
          return null;
      }
  } else if (prefix === "SN") {
      if (floor === 'B') {
          filename = JSON.parse(localStorage.getItem('SNB_Array'));
          saveto = 'SNB_Array';
          //filename = "../../CSV_files/Snell_zero_floor_table.csv";
      } else if (floor === '1') {
        filename = JSON.parse(localStorage.getItem('SN1_Array'));
        saveto = 'SN1_Array';
          //filename = "../../CSV_files/Snell_first_floor_table.csv";
      } else if (floor === '2') {
        filename = JSON.parse(localStorage.getItem('SN2_Array'));
        saveto = 'SN2_Array';
          //filename = "../../CSV_files/Snell_second_floor_table.csv";
      } else if (floor === '3') {
        filename = JSON.parse(localStorage.getItem('SN3_Array'));
        saveto = 'SN3_Array';
          //filename = "../../CSV_files/Snell_third_floor_table.csv";
      } else {
          return null;
      }
  } else if (prefix === "ST") {
      if (floor === 'B') {
        filename = JSON.parse(localStorage.getItem('STB_Array'));
        saveto = 'STB_Array';
          //filename = "../../CSV_files/StudentCenter_zero_floor_table.csv";
      } else if (floor === '1') {
        filename = JSON.parse(localStorage.getItem('ST1_Array'));
        saveto = 'ST1_Array';
          //filename = "../../CSV_files/StudentCenter_first_floor_table.csv";
      } else if (floor === '2') {
        filename = JSON.parse(localStorage.getItem('ST2_Array'));
        saveto = 'ST2_Array';
          //filename = "../../CSV_files/StudentCenter_second_floor_table.csv";
      } else {
          return null;
      }
  } else if (prefix === "ER") {
      if (floor === '1') {
        filename = JSON.parse(localStorage.getItem('ER1_Array'));
        saveto = 'ER1_Array';
          //filename = "../../CSV_files/ERC_first_floor_table.csv";
      } else if (floor === '2') {
        filename = JSON.parse(localStorage.getItem('ER2_Array'));
        saveto = 'ER2_Array';
          //filename = "../../CSV_files/ERC_second_floor_table.csv";
      } else {
          return null;
      }
  } else if (prefix === "RO") {
      if (floor === '1') {
        filename = JSON.parse(localStorage.getItem('RO1_Array'));
        saveto = 'RO1_Array';
          //filename = "../../CSV_files/Rowley_first_floor_table.csv";
      } else if (floor === '2') {
        filename = JSON.parse(localStorage.getItem('RO2_Array'));
        saveto = 'RO2_Array';
          //filename = "../../CSV_files/Rowley_second_floor_table.csv";
      } else {
          return null;
      }
  } else {
      return null;
  }
  console.log(typeof filename)
  for (var i = 0; i < filename.length; i++){
    if (filename[i].RoomName === realRoomName) {
        filename[i].Display = 'true';
        console.log(filename)
        localStorage.setItem(saveto, JSON.stringify(filename)); // Save the updated dataArray back to localStorage
        window.location.href = window.location.href = filename[i].Path.replace(/"/g, '');
    }
  } 
  return null;
}

function closeForm() {
    document.getElementById("popupSearch").style.display = "none";
}
let count = 0; // Variable to keep track of the count


function createHTMLElementAtCoordinatePair(xPercent, yPercent, parentElement) {
  const element = document.createElement('div');
  element.style.position = 'absolute';

  element.style.width = `${10}px`;
  element.style.height = `${10}px`;
  element.style.backgroundColor = 'black';
  parentElement.appendChild(element);
  
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

function searchAndCreate1(element_ID) {
    // Retrieve the array from localStorage
    console.log("search and create ran")
    var dataArray = JSON.parse(localStorage.getItem('RO1_Array'));
    console.log(dataArray[1])
    // Check if dataArray is not null or undefined
    if (dataArray) {
      // Loop through the array and call createHTMLElementAtCoordinatePair for elements with Display set to true
      for (var i = 0; i < dataArray.length; i++) {
        //console.log(i)
        var displayValue = dataArray[i].Display.trim().toLowerCase(); // Convert to lowercase and remove leading/trailing spaces
        if (displayValue === 'true' || displayValue === 'true\r') {
            var x = parseInt(dataArray[i].XCoord);
            var y = parseInt(dataArray[i].YCoord);
            console.log(dataArray[i].RoomName)
          createHTMLElementAtCoordinatePair(x, y,element_ID);
        }
      }
    } else {
      console.log('myDataArray is null or undefined. Please load CSV data first.');
    }
}
  function searchAndCreate2(element_ID) {
    // Retrieve the array from localStorage
    var dataArray = JSON.parse(localStorage.getItem('RO2_Array'));
    console.log(dataArray[1])
    // Check if dataArray is not null or undefined
    if (dataArray) {
      // Loop through the array and call createHTMLElementAtCoordinatePair for elements with Display set to true
      for (var i = 0; i < dataArray.length; i++) {
        var displayValue = dataArray[i].Display.trim().toLowerCase(); // Convert to lowercase and remove leading/trailing spaces
        if (displayValue === 'true' || displayValue === 'true\r') {
            var x = parseInt(dataArray[i].XCoord);
            var y = parseInt(dataArray[i].YCoord);
            console.log(dataArray[i].RoomName)
          createHTMLElementAtCoordinatePair(x, y,element_ID);
        }
      }
    } else {
      console.log('myDataArray is null or undefined. Please load CSV data first.');
    }
  }

  function makefalse1() {

    var dataArray = JSON.parse(localStorage.getItem('RO1_Array'));// Retrieve the array from localStorage
    
    if (dataArray) { // Check if dataArray is not null or undefined

      for (var i = 0; i < dataArray.length; i++) {// Loop through the array and set the Display property to true
       dataArray[i].Display = 'false';
      }
  
      localStorage.setItem('RO1_Array', JSON.stringify(dataArray)); // Save the updated dataArray back to localStorage
    } else {
      console.log('RO1_Array is null or undefined. Please load CSV data first.');
    }
  }
  function makefalse2() {

    var dataArray = JSON.parse(localStorage.getItem('RO2_Array'));// Retrieve the array from localStorage
    
    if (dataArray) { // Check if dataArray is not null or undefined

      for (var i = 0; i < dataArray.length; i++) {// Loop through the array and set the Display property to true
       dataArray[i].Display = 'false';
      }
  
      localStorage.setItem('RO2_Array', JSON.stringify(dataArray)); // Save the updated dataArray back to localStorage
    } else {
      console.log('RO2_Array is null or undefined. Please load CSV data first.');
    }
  }
 