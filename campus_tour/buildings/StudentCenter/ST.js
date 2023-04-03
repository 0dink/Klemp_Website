var roomName;

function searchbar() {
    roomName = document.getElementById('searchTXT').value;
    document.getElementById("popupSearch").style.display = "block";
}

function goTo(){
    var searchValue = roomName; 
    var prefix = searchValue.slice(0, 2); // extract the first two characters of the search value
    var realRoomName = searchValue.substring(2);;

    var filename;
    if (prefix === "CA") {
        filename = "CAMP_first_floor_table.csv"; 
    } else if (prefix === "SC") {
        filename = "file2.csv";
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
            var display = row[displayIndex];
            console.log(coords);
            window.location.href = path;
            return [coords, path, display];
        }
    }

    return null;
}


function closeForm() {
    document.getElementById("popupSearch").style.display = "none";
}