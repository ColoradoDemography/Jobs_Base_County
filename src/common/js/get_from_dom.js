module.exports = function() {

    var stat_val = "";
    var sector_string = "";

    var stat_element = document.getElementById("stat");
    
    //chicken and the egg.  if this has been called before custom control was created
    if (stat_element === null) {

        stat_val = "3";
        sector_string = "1000";
    } else {

        //var from_element = document.getElementById("selfrom");
        //var to_element = document.getElementById("selto");

        //first_year = parseInt(from_element.options[from_element.selectedIndex].value);
        //last_year = parseInt(to_element.options[to_element.selectedIndex].value);
        stat_val = stat_element.options[stat_element.selectedIndex].value;
        
    }

    var yearset = "2021";

    /*for (let i = first_year; i <= last_year; i++) {
        if (i !== first_year) {
            yearset += ",";
        }
        yearset += i;
    }

    if (yearset === "") {
        yearset = String(first_year)
    }*/
    
    var sectorcontrol = document.getElementById("jobsectors");
    var collection = sectorcontrol.selectedOptions;

    
    for (var i=0; i<collection.length; i++) {
         if (i !== 0) {
             sector_string += ",";
         }
         sector_string += collection[i].value;
    }
    
    if (sector_string === "") {
        sector_string = "1000";
    }
    //console.log(sector_string, yearset, stat_val);
    return [sector_string, yearset, stat_val]

}
