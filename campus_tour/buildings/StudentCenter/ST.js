var roomName;

function searchbar() {
    roomName = document.getElementById('searchTXT').value;
    document.getElementById("popupSearch").style.display = "block";
}

function goTo(){
    var searchValue = roomName; 
    var prefix = searchValue.slice(0, 2); // extr   act the first two characters of the search value
    var realRoomName = searchValue.substring(2);
    var filename;
    if (prefix === "CA") {
        filename = "../../CSV_files/CAMP.csv"; 
    } else if (prefix === "SC") {
        filename = "../../CSV_files/StudentCenter.csv";
    } else if(prefix === "SN"){
        filename = "../../CSV_files/Snell.csv";
    } else if(prefix === "ST"){
       filename === "../../CSV_files/StudentCenter.csv"
    } else if(prefix === "ER"){
        filename ==="../../CSV_files/ERC.csv";
    } else if(prefix === "RO"){
        filename === "../../CSV_files/Rowley.csv"
    } else{
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
<<<<<<< Updated upstream
            //var display = row[displayIndex];
            row[displayIndex] = "TRUE"; // change the value in the display column to "TRUE"
            window.location.href = window.location.href = path.replace(/"/g, '');;
            return [coords, path];
=======
            var display = row[displayIndex];
            console.log(coords);
            //alert(window.location.href);
            //alert(path);
            //window.location.href = "../../CAMP/CAMP_one.html";
            window.location.replace(path);
            
            return [coords, path, display];
>>>>>>> Stashed changes
        }
    }

    return null;
}


function closeForm() {
    document.getElementById("popupSearch").style.display = "none";
}