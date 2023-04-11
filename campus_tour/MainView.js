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



function dispFile(contents)
{
  let numClasses = count(contents,"DESCRIPTION:");
  let text = "<ul id= 'schedule'>";
  var locations;

  for(i =1; i <= numClasses; i++)
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
    text += "<li>" + className + ' ' + classLocation +"</li>";
    locations += classLocation + ' ';
  }

  text += "</ul>";
 
  document.getElementById('contents').innerHTML= text;
  dispLocation(locations);
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
