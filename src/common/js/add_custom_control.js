var refreshdata = require("./refresh_data.js");


module.exports = function(map: Object, layer: Object, worker_data: any) {
    'use strict';

    //Custom Layer Control
    var command: Object = L.control({
        position: 'topleft'
    });
    //var ages_data = worker_data[2];
    //var yrs_data = worker_data[1];

    var main_data = worker_data[0];

    //var queriedYears: string = "";

    /*for (let i = 0; i < yrs_data.length; i++) {
        queriedYears += "<option style='color:" + ((yrs_data[i].datatype === "Estimate") ? "black" : "red") + "' value='" + yrs_data[i].year + "'>" + yrs_data[i].year + "</option>";
    }*/

    command.onAdd = function() {
        var div = L.DomUtil.create('div', 'command bord');
        div.innerHTML = 
            "Statistic:<br /><select id='stat'><option value='4'>Percent of Jobs</option><option value='3'>Total Jobs</option></select><br />" +
            "Select Job Sectors:<br /><select multiple size='20' id='jobsectors'>" +
                "<option value='1000' selected title='Establishments engaged in growing crops, raising animals, harvesting timber'>Agriculture</option>" + 
                "<option value='2000' title='Establishments that extract naturally occurring mineral solids (i.e. coal and ores),  liquid minerals(i.e.crude petroleum) and gases'>Mining</option>" +
                "<option value='3000' title='Establishments engaged in the provision of the following utility services: electric power, natural gas, steam, water supply & sewage removal'>Utilities</option>" +
                "<option value='4000' title='Establishments primarily engaged in the construction of buildings or engineering projects'>Construction</option>" +
                "<option value='5000' title='Establishments engaged in the mechanical, physical, or chemical transformation of materials, substances, or components into new products'>Manufacturing</option>" +
                "<option value='6000' title='Establishments engaged in wholesaling merchandise, generally without transformation, and rendering services incidental to the sale of merchandise'>Wholesale Trade</option>" +
                "<option value='7000' title='Establishments engaged in retailing merchandise and rendering services incidental to the sale of merchandise'>Retail Trade</option>" +
                "<option value='8000' title='Establishments  providing transportation of passengers and cargo, warehousing and storage for goods, scenic and sightseeing transportation, and support activities related to modes of transportation'>Transportation & Warehousing</option>" +
                "<option value='9000' title='Establishments engaged in producing & distributing information & cultural products, transmit or distribute communications, & processing data'>Information</option>" +
                "<option value='10000' title='Establishments primarily engaged in financial transactions and/or in facilitating financial transactions'>Finance Activities</option>" +
                "<option value='10150' title='Establishments primarily engaged in renting, leasing, or selling tangible or intangible assets, and establishments providing related services'>Real Estate</option>" +
                "<option value='11000' title='Establishments that specialize in performing professional, scientific, and technical activities for others'>Professional & Business Services</option>" +
                "<option value='11025' title='Establishments in the private sector that administer, oversee, and manage establishments of the company or enterprise'>Management of Companies</option>" +
                "<option value='11050' title='Establishments performing routine support activities for the day-to-day operations of other organizations'>Admin & Waste Management</option>" +
                "<option value='12000' title='Establishments that provide instruction and training in a wide variety of subjects (i.e. schools, colleges, and training centers)'>Education</option>" +
                "<option value='12015' title='Establishments providing health care and social assistance for individuals'>Health Services</option>" +
                "<option value='13000' title='Establishments that operate facilities or provide services to meet varied cultural, entertainment & recreational opportunities'>Arts</option>" +
                "<option value='13015' title='Establishments providing customers with lodging and/or preparing meals, snacks & beverages for immediate consumption'>Accommodation & Food Services</option>" +
                "<option value='14000' title='Establishments engaged in repairing & maintenance, personal services or religious / social activities'>Other Services Except Public Administration</option>" +
                "<option value='15000' title='Establishments of federal, state, and local government agencies (includes k-12, higher education and some hosptials)'>Government</option>" +
            "</select>";
            //"<br /><button name='display' id='display' align='center'>Show Data</button>";
            
        div.padding = "20px";
        return div;
    };
    command.addTo(map);


    document.getElementById("stat").addEventListener("change", function() {
        refreshdata(layer, main_data);
        //hide second year option if viewing single year
        //var stat_element = document.getElementById("stat");
        //console.log(stat_element.options[stat_element.selectedIndex].value);
        /*if (stat_element.options[stat_element.selectedIndex].value === '3') {
            $("span:first").text("Year:");
            $("to:first").text("");
            $("#selto").hide();
            //selto_element.style.display = "none";
        } else if (stat_element.options[stat_element.selectedIndex].value === '4') {
            $("span:first").text("Year:");
            $("to:first").text("");
            $("#selto").hide();
            //selto_element.style.display = "none";
        } else {
            $("span:first").text("From:");
            $("to:first").text("To:");
            $("#selto").show();
            //selto_element.style.display = "block";
        }*/
        //console.log(main_data);
    }, false);

  /*  document.getElementById("selfrom").addEventListener("change", function() {
        refreshdata(layer, main_data);
        //console.log(main_data);
    }, false);

    document.getElementById("selto").addEventListener("change", function() {
        refreshdata(layer, main_data);
        //console.log(main_data);
    }, false);*/
    
    document.getElementById("jobsectors").addEventListener("change", function() {
        refreshdata(layer, main_data);
        //console.log(main_data);
    }, false);
    


    var a: Object = document.getElementsByClassName('leaflet-control-container')[0];

    a.addEventListener('dblclick', function(event) {
        event = event || window.event // cross-browser event
        if (event.stopPropagation) {
            event.stopPropagation()
        } else {
            event.cancelBubble = true
        }
    });

    a.addEventListener('mousemove', function(event) {
        event = event || window.event // cross-browser event
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    });


    function getJsonFromUrl() {
        var query = location.search.substr(1);
        var result = {};
        query.split("&").forEach(function(part) {
            var item = part.split("=");
            result[item[0]] = decodeURIComponent(item[1]);
        });
        return result;
    }

    //intialize!
    var querystring = getJsonFromUrl();
    //var titlestring = new Array();
    
    if ('print' in querystring && 'sector' in querystring) {
    
            map.panTo(L.latLng(39.35, -104.3));
    
            var sectorselector = document.querySelectorAll('select#jobsectors option');
            querystring.sector.split(",").forEach(function(h){
                for (var k = 0; k < sectorselector.length; k++){
                    if (h.indexOf(sectorselector[k].value) != -1){
                        sectorselector[k].setAttribute('selected', 'selected');
                    }
                }
            });
            document.getElementsByClassName('command')[0].style.display = 'none';
            document.getElementsByClassName('leaflet-top leaflet-right')[0].style.display = 'none';

            let title_h2 = document.querySelector('.title h2');
        
            //Change sector codes to names

/*            for (var j = 0; j < querystring.length; j++){console.log(querystring[j]);
                if (querystring.sector[j] == "1000"){titlestring.push("Agriculture")}
                if (querystring.sector[j] == "2000"){titlestring.push("Mining")}
                if (querystring.sector[j] == "3000"){titlestring.push("Utilities")}
                if (querystring.sector[j] == "4000"){titlestring.push("Construction")}
                if (querystring.sector[j] == "5000"){titlestring.push("Manufacturing")}
                if (querystring.sector[j] == "6000"){titlestring.push("Wholesale Trade")}
                if (querystring.sector[j] == "7000"){titlestring.push("Retail Trade")}
                if (querystring.sector[j] == "8000"){titlestring.push("Transportation & Warehousing")}
                if (querystring.sector[j] == "9000"){titlestring.push("Information")}
                if (querystring.sector[j] == "10000"){titlestring.push("Finance Activities")}
                if (querystring.sector[j] == "10150"){titlestring.push("Real Estate")}
                if (querystring.sector[j] == "11000"){titlestring.push("Professional & Business Services")}
                if (querystring.sector[j] == "11025"){titlestring.push("Management of Companies")}
                if (querystring.sector[j] == "11050"){titlestring.push("Admin & Waste Management")}
                if (querystring.sector[j] == "12000"){titlestring.push("Education")}
                if (querystring.sector[j] == "12015"){titlestring.push("Health Services")}
                if (querystring.sector[j] == "13000"){titlestring.push("Arts")}
                if (querystring.sector[j] == "13015"){titlestring.push("Accommodation & Food Services")}
                if (querystring.sector[j] == "14000"){titlestring.push("Other Services Except Public Administration")}
                if (querystring.sector[j] == "15000"){titlestring.push("Government")}
            }*/

            title_h2.innerHTML = "Sectors " + ":&nbsp;&nbsp;" + querystring.sector;
                        
            refreshdata(layer, main_data);
        } else {
            //let e: any = document.querySelector('#selto [value="2018"]');
            //e.selected = true;
            refreshdata(layer, main_data);
    
            require("./add_stat_caption.js")(map);
        }
    
}
