module.exports = function(main_data, sector_string, years_string, callback) {

    //create array from ages_string
    //console.log("Sectors");
    //console.log(sector_string);
    var sector_array = sector_string.split(",");
    sector_array.push("0");
    //console.log(sector_array);
    
    //create array from years_string
    //console.log("Years");
    //console.log(years_string);
    var years_array = years_string.split(",");
    //console.log(years_array);

    var filtered_data = main_data.filter(function(d) {

        for (let i = 0; i < sector_array.length; i++) {
            for (let j = 0; j < years_array.length; j++) {
                if ((d.sector_id === sector_array[i]) && (d.population_year === parseInt(years_array[j]))) {
                    return true;
                }
            }
        }
        
        // for (let i = 0; i < ages_array.length; i++) {
        //     if (d.age === parseInt(ages_array[i])) {
        //         return true;
        //     }
        // }
        
        // for (let i = 0; i < years_array.length; i++) {
        //     if (d.year === parseInt(years_array[i])) {
        //         return true;
        //     }
        // }

        return false;

    });
    if (callback) callback(filtered_data);
}