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
        if (floor === 1) {
            filename = "../../CSV_files/CAMP1.csv";
        } else if (floor === 2) {
            filename = "../../CSV_files/CAMP2.csv";
        } else if (floor === 3) {
            filename = "../../CSV_files/CAMP3.csv";
        } else{
            return null;
        }
    } else if (prefix === "SC") {
        if (floor === 1) {
            filename = "../../CSV_files/ScienceCenter1.csv";
        } else if (floor === 2) {
            filename = "../../CSV_files/ScienceCenter2.csv";
        } else if (floor === 3) {
            filename = "../../CSV_files/ScienceCenter3.csv";
        } else {
            return null;
        }
    } else if (prefix === "SN") {
        if (floor === 'B') {
            filename = "../../CSV_files/SnellB.csv";
        } else if (floor === 1) {
            filename = "../../CSV_files/Snell1.csv";
        } else if (floor === 2) {
            filename = "../../CSV_files/Snell2.csv";
        } else if (floor === 3) {
            filename = "../../CSV_files/Snell2.csv";
        } else {
            return null;
        }
    } else if (prefix === "ST") {
        if (floor === 'B') {
            filename = "../../CSV_files/StudentCenterB.csv";
        } else if (floor === 1) {
            filename = "../../CSV_files/StudentCenter2.csv";
        } else if (floor === 2) {
            filename = "../../CSV_files/StudentCenter3.csv";
        } else {
            return null;
        }
    } else if (prefix === "ER") {
        if (floor === 1) {
            filename = "../../CSV_files/ERC1.csv";
        } else if (floor === 2) {
            filename = "../../CSV_files/ERC2.csv";
        } else {
            return null;
        }
    } else if (prefix === "RO") {
        if (floor === 1) {
            filename = "../../CSV_files/Rowley1.csv";
        } else if (floor === 2) {
            filename = "../../CSV_files/Rowley2.csv";
        } else {
            return null;
        }
    } else {
        return null;
    }

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