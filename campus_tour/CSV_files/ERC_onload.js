function ERC1_CSV_to_Array() {
    var xhr = new XMLHttpRequest();// Create a new XMLHttpRequest object
    
    xhr.onload = function() {// Set the onload callback function
      if (xhr.status === 200) {
        var lines = xhr.responseText.split('\n');// Parse the CSV data
        var dataArray = [];
        for (var i = 0; i < lines.length; i++) {
          var values = lines[i].split(',');
          var obj = {
            RoomName: values[0],
            XCoord: values[1],
            YCoord: values[2],
            Path: values[3],
            Display: values[4]
          };
          dataArray.push(obj);
        }
        
        localStorage.setItem('ER1_Array', JSON.stringify(dataArray));// Store the array in localStorage

        console.log('ERC1 First element:', dataArray[1]);
  
      }
    };
    
    var file = './campus_tour/CSV_files/ERC_first_floor_table.csv';  // Set the default file path

    xhr.open('GET', file, true);// Open the file and send the request
    xhr.send();
  }
  
  function ERC2_CSV_to_Array() {
    var xhr = new XMLHttpRequest();// Create a new XMLHttpRequest object
    
    xhr.onload = function() {// Set the onload callback function
      if (xhr.status === 200) {
        var lines = xhr.responseText.split('\n');// Parse the CSV data
        var dataArray = [];
        for (var i = 0; i < lines.length; i++) {
          var values = lines[i].split(',');
          var obj = {
            RoomName: values[0],
            XCoord: values[1],
            YCoord: values[2],
            Path: values[3],
            Display: values[4]
          };
          dataArray.push(obj);
        }
        
        localStorage.setItem('ER2_Array', JSON.stringify(dataArray));// Store the array in localStorage

        console.log('ERC2 First element:', dataArray[1]);
      }
    };
    
    var file = './campus_tour/CSV_files/ERC_second_floor_table.csv';  // Set the default file path

    xhr.open('GET', file, true);// Open the file and send the request
    xhr.send();
  }