function Directions_CSV_to_Array() {
    var xhr = new XMLHttpRequest();// Create a new XMLHttpRequest object
    
    xhr.onload = function() {// Set the onload callback function
      if (xhr.status === 200) {
        var lines = xhr.responseText.split('\n');// Parse the CSV data
        var dataArray = [];
        for (var i = 0; i < lines.length; i++) {
          var values = lines[i].split(',');
          var obj = {
            ControlPoints: values[0],
            BuildingName1: values[1],
            BuildingName2: values[2],
            Display: values[3],
          };
          dataArray.push(obj);
        }
        
        localStorage.setItem('Directions_Array', JSON.stringify(dataArray));// Store the array in localStorage

        console.log('Directions First element:', dataArray[1]);
  
      }
    };
    
    var file = './campus_tour/CSV_files/directions_table.csv';  // Set the default file path

    xhr.open('GET', file, true);// Open the file and send the request
    xhr.send();
  }