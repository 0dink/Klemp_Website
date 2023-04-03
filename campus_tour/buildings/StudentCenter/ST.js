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
        if (floor === 1) {
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
        if (floor === 1) {
            filename = "../../CSV_files/ERC_first_floor_table.csv";
        } else if (floor === '2') {
            filename = "../../CSV_files/ERC_second_floor_table.csv";
        } else {
            return null;
        }
    } else if (prefix === "RO") {
        if (floor === 1) {
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