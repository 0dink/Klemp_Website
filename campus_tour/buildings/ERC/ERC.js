function searchbar() {
    //var x = document.getElementById('searchTXT').value
    //document.get
    document.getElementById("popupSearch").style.display = "block";
    //window.alert(x)
    
}
function closeForm() {
  document.getElementById("popupSearch").style.display = "none";
}
function createHTMLElementAtCoordinatePair(xPercent, yPercent, parentElement) {
  const element = document.createElement('div');
  element.style.position = 'absolute';
  //element.style.width = `${parentElement.offsetWidth * 0.1}px`;
  //element.style.height = `${parentElement.offsetHeight * 0.1}px`;
  element.style.width = `${10}px`;
  element.style.height = `${10}px`;
  element.style.backgroundColor = 'black';
  parentElement.appendChild(element);
  
  // Add an event listener to adjust the element's size when the parent element is resized
  //window.addEventListener('resize', () => {
  //  element.style.width = `${parentElement.offsetWidth * 0.1}px`;
  //  element.style.height = `${parentElement.offsetHeight * 0.1}px`;
  //});

  // Get the current dimensions of the parent element
  const parentWidth = parentElement.offsetWidth;
  const parentHeight = parentElement.offsetHeight;

  // Calculate the fixed pixel values for the element's position based on the percentages
  const xPixel = Math.round((xPercent / 100) * parentWidth) - (element.offsetWidth / 2);
  const yPixel = Math.round((yPercent / 100) * parentHeight) - (element.offsetHeight / 2);

  // Set the fixed pixel values for the element's position
  element.style.left = `${xPixel}px`;
  element.style.top = `${yPixel}px`;

  // Add an event listener to adjust the element's position when the parent element is resized
  window.addEventListener('resize', () => {
    const newParentWidth = parentElement.offsetWidth;
    const newParentHeight = parentElement.offsetHeight;

    // Recalculate the fixed pixel values for the element's position based on the new dimensions
    const newXPixel = Math.round((xPercent / 100) * newParentWidth) - (element.offsetWidth / 2);
    const newYPixel = Math.round((yPercent / 100) * newParentHeight) - (element.offsetHeight / 2);

    // Set the new fixed pixel values for the element's position
    element.style.left = `${newXPixel}px`;
    element.style.top = `${newYPixel}px`;
  });
}
async function openCSV1(elementID) {
  const response = await fetch('../../CSV_files/ERC_first_floor_table.csv');
  const text = await response.text();
  const results = Papa.parse(text, { header: true }).data;

  const filteredResults = results.filter((row) => {
    return row.Display === 'TRUE';
    
  });

    filteredResults.forEach((row) => {
    const x = row.XCoord;
    const y = row.YCoord;
    //processCoordinates(x, y);
    createHTMLElementAtCoordinatePair(x, y, elementID)
  });
}
async function openCSV2(elementID) {
  const response = await fetch('../../CSV_files/ERC_second_floor_table.csv');
  const text = await response.text();
  const results = Papa.parse(text, { header: true }).data;

  const filteredResults = results.filter((row) => {
    return row.Display === 'TRUE';
    
  });

    filteredResults.forEach((row) => {
    const x = row.XCoord;
    const y = row.YCoord;
    //processCoordinates(x, y);
    createHTMLElementAtCoordinatePair(x, y, elementID)
  });
}