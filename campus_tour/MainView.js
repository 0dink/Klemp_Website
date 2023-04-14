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

function searchbar() {
  //var x = document.getElementById('searchTXT').value
  //document.get
  document.getElementById("popupSearch").style.display = "block";
  //window.alert(x)

}
function closeForm() {
  document.getElementById("popupSearch").style.display = "none";
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