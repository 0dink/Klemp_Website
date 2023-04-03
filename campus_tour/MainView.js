/*function importData() {
  let input = document.createElement('input');
  input.type = 'file';
  input.onchange = _ => {
    // you can use this method to get file and perform respective operations
            let files =   Array.from(input.files);
            console.log(files);
        };
  input.click();
  
}*/

function dispFile(contents)
{
  let numClasses = count(contents,"DESCRIPTION:");
  let text = "<ul id= 'schedule'>";

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
  }

  text += "</ul>";
 
  document.getElementById('contents').innerHTML= text;
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
