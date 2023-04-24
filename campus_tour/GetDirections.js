function showDirections(one, two)
{
  if (prefix === "CA") {
    //here it would look at the current building you are in and compare that to CA to find the path and set the display value to true 
    //loop through all of the vectors or what not
    pathname.display = true
    if (floor === '1') {
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
    } else{
        return null;
    }
  }
}