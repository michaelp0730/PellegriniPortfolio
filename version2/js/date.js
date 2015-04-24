var d = new Date();

var curr_month = d.getMonth() + 1; //months are zero based

var curr_date = d.getDate();

var curr_year = d.getFullYear();

if (curr_month == 1){
	document.write("January " + curr_date + ", " + curr_year);
}
else if (curr_month == 2){
	document.write("February " + curr_date + ", " + curr_year);
}
else if (curr_month == 3){
	document.write("March " + curr_date + ", " + curr_year);
}
else if (curr_month == 4){
	document.write("April " + curr_date + ", " + curr_year);
}
else if (curr_month == 5){
	document.write("May " + curr_date + ", " + curr_year);
}
else if (curr_month == 6){
	document.write("June " + curr_date + ", " + curr_year);
}
else if (curr_month == 7){
	document.write("July " + curr_date + ", " + curr_year);
}
else if (curr_month == 8){
	document.write("August " + curr_date + ", " + curr_year);
}
else if (curr_month == 9){
	document.write("September " + curr_date + ", " + curr_year);
}
else if (curr_month == 10){
	document.write("October " + curr_date + ", " + curr_year);
}
else if (curr_month == 11){
	document.write("November " + curr_date + ", " + curr_year);
}
else{
	document.write("December " + curr_date + ", " + curr_year);	
}

