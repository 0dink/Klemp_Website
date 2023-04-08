to see an example of changes to the goto function see lines 13, 16-26, 82-87 
in CAMP.js

IMPORTANT 
you will be copy and pasting the goto function in CAMP.js to the js
files of your buildings

IMPORTANT 
make note of the names that the goto function uses those are the names
you will need to use 

for example if you had CAMP as your building you would need to write 

filename = JSON.parse(localStorage.getItem('CAMP1_Array'));
saveto = 'CAMP1_Array';

to see example of changes to searchandCreate see lines 132-205 in CAMP.js

to see example of changes to html file see please see line 23 in CAMP_one.html

please create a onload.js for each of your floor
for an example please see CAMP_onload.js under CSV_files

please makesure that your functions in your onloand.js are called in 
homepage.html please see lines 8 abd 21 in homepage.html


IMPORTANT 
make note of the names that the goto function uses those are the names
you will need to use in your onload functions 

for example if you had CAMP as your building you would need to write your
onload function to create a array named CAMP1_Array 

filename = JSON.parse(localStorage.getItem('CAMP1_Array'));
saveto = 'CAMP1_Array';


TESTING 
you need to launch from the hompage or else it wont work

to test between pages change the some of the links in the CSV like this 
"https://webspace.clarkson.edu/projects/KLEMP/public_html/Klemp_Website-main/campus_tour/buildings/CAMP/CAMP_one.html"
to this "http://127.0.0.1:5500/campus_tour/buildings/CAMP/CAMP_one.html"

or whatever the ip you are hosting the website from when you use liveView

also all of CAMP_3 and ERC_2 link are written wrong so dont bother trying 
to search for rooms on those floor because it wont work 














