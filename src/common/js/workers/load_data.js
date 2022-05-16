/* eslint-disable */

var fetchJSONFile = require("../fetch_json.js");


// onmessage = function(e) {

//         fetchJSONFile('https://gis.dola.colorado.gov/lookups/componentYRS', function(yrs) {

//             var queriedYears = "";

//             for (let i = 0; i < yrs.length; i++) {
//                 if (i !== 0) {
//                     queriedYears += ",";
//                 }
//                 queriedYears += yrs[i].year;
//             }

//             fetchJSONFile('https://gis.dola.colorado.gov/lookups/components?year=' + queriedYears + '&county=1,3,5,7,9,11,13,14,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49,51,53,55,57,59,61,63,65,67,69,71,73,75,77,79,81,83,85,87,89,91,93,95,97,99,101,103,105,107,109,111,113,115,117,119,121,123,125', function(data) {

//                 postMessage([data, yrs]);
//                 close(); //worker is finished

//             });
//         });

//     } //end onmessage
    
onmessage = function(e) {

        fetchJSONFile('https://gis.dola.colorado.gov/lookups/jobsYRS0', function(yrs) {

           // var queriedAges = "0,1,2,3,4";

            // for (let i = 0; i < ages.length; i++) {
            //     if (i !== 0) {
            //         queriedAges += ",";
            //     }
            //     queriedAges += ages[i].age;
            // }

            var queriedYears = "2020";

            /*for (let i = 0; i < yrs.length; i++) {
                if (i !== 0) {
                    queriedYears += ",";
                }
                queriedYears += yrs[i].year;
            }*/

            fetchJSONFile('https://gis.dola.colorado.gov/lookups/jobsbase?&year=' + queriedYears + '&county=3,7,9,14,15,17,19,21,23,25,27,29,33,37,39,41,43,45,47,49,51,53,55,57,61,63,65,67,69,71,73,75,77,79,81,83,85,87,89,91,93,95,97,99,101,103,105,107,109,111,113,115,117,119,121,123,125,500&sector=0,1000,2000,3000,4000,5000,6000,7000,8000,9000,10000,11000,12000,13000,14000,15000,16000,17000,18000,19000,20000,21000,22000,23000,24000,25000,26000,27000,28000,29000', function(data) {
 
                postMessage([data, yrs]);
                close(); //worker is finished

            });
        });

    }
