var roomName;

function dispLocation(locations) {
    //building checks
    let snell = locations.includes("Bertrand");
    let sc = locations.includes("Science");
    let camp = locations.includes("CAMP");
    let ro = locations.includes("Rowley");
    let cheel = locations.includes("Cheel");
    let quad = locations.includes("Quad");
    let price = locations.includes("Price");

    //image declarations
    let snellImg = document.getElementById("snellPin");
    let scImg = document.getElementById("scPin");
    let campImg = document.getElementById("campPin");
    let roImg = document.getElementById("rowleyPin");
    let cheelImg = document.getElementById("cheelPin");
    let quadImg = document.getElementById("quadPin");
    let priceImg = document.getElementById("pricePin");
  
    if(snell)
    {
      snellImg.style.display = 'block';
    }
    if(sc)
    {
      scImg.style.display = 'block';
    }
    if(camp)
    {
      campImg.style.display = 'block';
    }
    if(ro)
    {
      roImg.style.display = 'block';
    }
    if(cheel)
    {
      cheelImg.style.display = 'block';
    }
    if(quad)
    {
      quadImg.style.display = 'block';
    }
    if(price)
    {
      priceImg.style.display = 'block';
    }
}

function changeSpan(locations,names)
{
  //array lengths
  var locationLength = locations.length;

  //vars from html code
  var snell = document.getElementById("snellSpan");
  var sc = document.getElementById("scSpan");
  var camp = document.getElementById("campSpan");
  var rowley = document.getElementById("roSpan");
  var cheel = document.getElementById("cheelSpan");
  //var quad = docuement.getElementById("quadSpan");
  var price = document.getElementById("priceSpan");

  //vars for new spans
  var snellList = 'none';
  var scList = 'none';
  var campList = 'none';
  var roList = 'none';
  var cheelList = 'none';
  //var quadList = 'none';
  var priceList = 'none';

  //get new text
  for(i=0; i<locationLength; i++)
  {
     let curBuilding = locations[i];
     
     if (curBuilding.includes("Bertrand"))
     {
       snellList += names[i] + ' ';
     }
     if(curBuilding.includes("Science"))
     {
       scList += names[i] + ' ';
     }
     if(curBuilding.includes("CAMP"))
     {
      campList += names[i] + ' ';
     }
     if(curBuilding.includes("Rowley"))
     {
      roList += names[i] + ' ';
     }
     if(curBuilding.includes("Cheel"))
     {
      cheelList += names[i] + ' ';
     }
     /*if(curBuilding.includes("Quad"))
     {
      quadList += names[i] + ' ';
     }*/
     if(curBuilding.includes("Price"))
     {
      priceList += names[i] + ' ';
     }
  }

  //set new text only if needed
  if(snellList != "none")
  {
    snell.innerText = snellList.slice(4);
  }
  if(scList != "none")
  {
    sc.innerText = scList.slice(4);
  }
  if(campList != "none")
  {
    camp.innerText =campList.slice(4);
  }
  if(roList != "none")
  {
    rowley.innerText = roList.slice(4);
  }
  if(cheelList != "none")
  {
    cheel.innerText = cheelList.slice(4);
  }
  /*if(quadList != "none")
  {
    quad.innerText = quadList.slice(4);
  }*/
  if(priceList != "none")
  {
    price.innerText = priceList.slice(4);
  }
  
}

function dispFile(contents)
{
  let numClasses = count(contents,"DESCRIPTION:");
  let locationList = [];
  let nameList = [];
  var locations;

  for(i =0; i < numClasses; i++)
  {
    classNamePos = contents.search("DESCRIPTION:") + 12;
    endClassNamePos = contents.search("FREQ=WEEKLY;")-6;
    className = contents.slice(classNamePos, endClassNamePos);
    console.log(classNamePos + ' ' + endClassNamePos + ' ' + className);

    locationPos = contents.search("LOCATION:") + 9;
    endLocationPos = contents.search("SUMMARY");
    classLocation = contents.slice(locationPos, endLocationPos);
    console.log(locationPos + ' ' + endLocationPos + ' ' + classLocation);

    contents = contents.slice(endLocationPos + 3);
    locationList[i] = classLocation;
    nameList[i] = className;
    locations += classLocation + ' ';
  }
 
  dispLocation(locations);
  changeSpan(locationList,nameList);
}

function clickElem(elem)
{
  var eventMouse = document.createEvent("MouseEvents")
  eventMouse.initMouseEvent("click",true,false,window,0, 0, 0, 0, 0, false, false, false, false, 0, null)
  elem.dispatchEvent(eventMouse)
}

function openFile(func)
{
  readFile = function(e){
    var file = e.target.files[0];
    if(!file){
      return;
    }
    var reader = new FileReader();
    reader.onload = function(e){
      var contents = e.target.result;
      fileInput.func(contents)
      document.body.removeChild(fileInput)
    }
    reader.readAsText(file)
  }
  fileInput = document.createElement("input")
  fileInput.type='file'
  fileInput.style.display = 'none'
  fileInput.onchange = readFile
  fileInput.func=func
  document.body.appendChild(fileInput)
  clickElem(fileInput)
}

function count(main_str, sub_str) 
{
  main_str += '';
  sub_str += '';

  if (sub_str.length <= 0) 
  {
    return main_str.length + 1;
  }

  subStr = sub_str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return (main_str.match(new RegExp(subStr, 'gi')) || []).length;
}

function resetMap()
{
  //resets all the pins not not display
  let snellImg = document.getElementById("snellPin");
  let scImg = document.getElementById("scPin");
  let campImg = document.getElementById("campPin");
  let roImg = document.getElementById("rowleyPin");
  let cheelImg = document.getElementById("cheelPin");
  let quadImg = document.getElementById("quadPin");
  let priceImg = document.getElementById("pricePin");
 
  snellImg.style.display = 'none';
  scImg.style.display = 'none';
  campImg.style.display = 'none';
  roImg.style.display = 'none';
  cheelImg.style.display = 'none';
  quadImg.style.display = 'none';
  priceImg.style.display = 'none';

  //resets the spans to original text
  var snellSpan = document.getElementById("snellSpan");
  var scSpan = document.getElementById("scSpan");
  var campSpan = document.getElementById("campSpan");
  var rowleySpan = document.getElementById("roSpan");
  var cheelSpan = document.getElementById("cheelSpan");
  //var quadSpan = docuement.getElementById("quadSpan");
  var priceSpan = document.getElementById("priceSpan");

  snellSpan.innerText = "Bertrand H. Snell Hall is home to the David D.Reh School of Business,the Department of Communication, Media, and Design, the Department of Humanities and Social Studies and our Engineering and Management program.This building also contains collaborative learning environments including a design lab, computer lab, an art studio, and a teaching lab.";
  scSpan.innerText = "The Cora and Bayard Clarkson Science Center houses many departments including biology, biomolecular science, chemistry, computer science, data science, mathematics, physics, and psycology. The President's Office is also located in the Science Center in room 321 and can be contacted at president@clarkson.edu or (315)268-6444. Concrete Cafe, a grab and go dining location, can be found on the third floor.";
  campSpan.innerText = "The Center for Advanced Materials Processing is home to Clarkson's Wallace H. Coulter School of Engineering which contains all of our enginnering programs. CAMP also is a research center in material proccesing, synthesis, functionalization, and characterization.In additon, Clarkson's 12 SPEED teams are also housed here, giving student the opportunity to work in collaborative project teams and compete with them.";
  rowleySpan.innerText = "Rowly Labs is connected to CAMP and houses many computer and research labs. Many professors offices in the enginnering department can be found in Rowley.";
  cheelSpan.innerText = "Cheel Campus Center is the current home ice for Clarkson men's and women's Division 1 hockey teams, where students can get free admission to games. Cheel also contanains Yianoukos Fitness Center which is a newly rennovated fitness center including a climbing wall.There is also a grab and go dining option available at the Disefano's Family Cafe housed in Cheel. ";
  //quadSpan.innerText = Quad's origianl tooltip
  priceSpan.innerText = "Price Hall is made of four wings: Farrisee, Thomas, Newell, and Ormsby. Each wing can house 60 mainly upperclass students in two bedroom suites housing four students. Price Hall also contains the Clarkson School and the Honors Office which are housed in the Newell and Ormsby wings.";

}

function createSpline(parentElement) {
  // Create a new SVG element
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

  // Set the width and height of the SVG element to 100%
  svg.setAttribute("width", "100%");
  svg.setAttribute("height", "100%");

  // Create a path element
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");

  // Define the control points for the spline
  const controlPoints = [
    { x: 50, y: 50 },
    { x: 150, y: 150 },
    { x: 250, y: 50 },
    { x: 350, y: 150 },
    { x: 450, y: 50 },
    { x: 550, y: 150 }
  ];

  // Generate the path data from the control points
  let pathData = `M${controlPoints[0].x} ${controlPoints[0].y}`;

  // Loop through the control points and add cubic Bezier curves
  for (let i = 1; i < controlPoints.length - 2; i++) {
    const curr = controlPoints[i];
    const next = controlPoints[i + 1];
    const x1 = curr.x + (next.x - controlPoints[i - 1].x) / 3;
    const y1 = curr.y + (next.y - controlPoints[i - 1].y) / 3;
    const x2 = next.x - (controlPoints[i + 2].x - curr.x) / 3;
    const y2 = next.y - (controlPoints[i + 2].y - curr.y) / 3;

    pathData += ` C${x1} ${y1}, ${x2} ${y2}, ${next.x} ${next.y}`;
  }

  // Set the d attribute of the path element
  path.setAttribute("d", pathData);

  // Set the stroke properties of the path element
  path.setAttribute("stroke", "red");
  path.setAttribute("stroke-width", "2");
  path.setAttribute("fill", "none");

  // Set the CSS property 'position' of the parent element to 'relative'
  parentElement.style.position = "relative";

  // Set the CSS property 'position' of the SVG element to 'absolute'
  svg.style.position = "absolute";
  svg.style.top = "0";
  svg.style.left = "0";
  svg.style.zIndex = "9999"; // Set a high z-index to ensure the SVG element is on top of other child elements of the parent element

  // Append the path element to the SVG element
  svg.appendChild(path);

  // Append the SVG element to the parent element
  parentElement.appendChild(svg);
}


function searchbar() {
  roomName = document.getElementById('searchTXT').value;
  document.getElementById("popupSearch").style.display = "block";
}

function closeForm() {
document.getElementById("popupSearch").style.display = "none";
}

function goTo() {
  console.log("what")
  var prefix = roomName.slice(0, 2); // extract the first two characters of the search value
  var floor = roomName.slice(2, 3);
  var realRoomName = roomName.substring(2);
  var filename;
  var saveto;
  if (prefix === "CA") {
      if (floor === '1') {
          console.log("what2")
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
      } else {
          return null;
      }
  } else if (prefix === "SC") {
      if (floor === '1') {
          //filename = "../../CSV_files/ScienceCenter_first_floor_table.csv";
          filename = JSON.parse(localStorage.getItem('SC1_Array'));
          saveto = 'SC1_Array';
      } else if (floor === '2') {
          filename = JSON.parse(localStorage.getItem('SC2_Array'));
          saveto = 'SC2_Array';
          //filename = "../../CSV_files/ScienceCenter_second_floor_table.csv";
      } else if (floor === '3') {
          filename = JSON.parse(localStorage.getItem('SC3_Array'));
          saveto = 'SC3_Array';
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

  for (var i = 0; i < filename.length; i++) {
      if (filename[i].RoomName === realRoomName) {
          filename[i].Display = 'true';
          console.log(filename)
          localStorage.setItem(saveto, JSON.stringify(filename)); // Save the updated dataArray back to localStorage
          window.location.href = window.location.href = filename[i].Path.replace(/"/g, '');
      }
  }
  return null;
}

