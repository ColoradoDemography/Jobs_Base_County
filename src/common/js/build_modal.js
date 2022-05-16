var CMap = require("./init_object.js")();
//var getUserInputs = require("./get_from_dom.js");
//var filterData = require("./filter_data.js");



module.exports = function(e, worker_data, map) {

    // string_output[0] = comma delimited years  
    // string_output[1] = selected stat
    //var string_output = getUserInputs();

    //filterData(worker_data, string_output[0], function(data) {

        var cMap = new CMap(worker_data);
        var total_jobs;
        var jobs;
        var x;

        var info_html = "<ul id='tabbedbrowsing' class='tab'><li><a href='#' id='tab_table' class='tablinks active'>Table</a></li></ul><div id='tablediv' class='tabcontent' style='display: block;'>" +

            "<br /><h2 style='text-align: center'>" + e.target.feature.properties.NAME + " County Jobs By Sector</h2><br /><table id='modaltable'>";

        //var fips = parseInt(e.target.feature.properties.COUNTYFP, 10);

                info_html += "<tr><th>Statistic</th><th>Value</th><th>Percent</th></tr>";
        
        for (x of worker_data){
            if (e.target.feature.properties.COUNTYFP == x.area_code && x.sector_id == "0"){
                total_jobs = x.total_jobs;
            }
        }
        info_html += "<tr><td>Total Jobs:</td><td style='text-align: right'>" + parseInt(total_jobs) + "</td><td style'text-align: right'>" + "</td><td></td></tr>";
        
        for (x of worker_data){
            if (e.target.feature.properties.COUNTYFP == x.area_code && x.sector_id == "5000"){
                jobs = x.total_jobs;
            }
        }
        info_html += "<tr><td>Agribusiness:</td><td style='text-align: right'>" + parseInt(jobs) + "</td><td style'text-align: right'>" + (parseInt(jobs)/parseInt(total_jobs)*100).toFixed(2) + "%</td></tr>";
    
        for (x of worker_data){
            if (e.target.feature.properties.COUNTYFP == x.area_code && x.sector_id == "11000"){
                jobs = x.total_jobs;
            }
        }
        info_html += "<tr><td>Mining:</td><td style='text-align: right'>" + parseInt(jobs) + "</td><td style'text-align: right'>" + (parseInt(jobs)/parseInt(total_jobs)*100).toFixed(2) + "%</td></tr>";
    
            for (x of worker_data){
            if (e.target.feature.properties.COUNTYFP == x.area_code && x.sector_id == "10000"){
                jobs = x.total_jobs;
            }
        }
        info_html += "<tr><td>Manufacturing:</td><td style='text-align: right'>" + parseInt(jobs) + "</td><td style'text-align: right'>" + (parseInt(jobs)/parseInt(total_jobs)*100).toFixed(2) + "%</td></tr>";
    
        for (x of worker_data){
            if (e.target.feature.properties.COUNTYFP == x.area_code && x.sector_id == "8000"){
                jobs = x.total_jobs;
            }
        }
        info_html += "<tr><td>Government:</td><td style='text-align: right'>" + parseInt(jobs) + "</td><td style'text-align: right'>" + (parseInt(jobs)/parseInt(total_jobs)*100).toFixed(2) + "%</td></tr>";
    
        for (x of worker_data){
            if (e.target.feature.properties.COUNTYFP == x.area_code && x.sector_id == "20000"){
                jobs = x.total_jobs;
            }
        }
        info_html += "<tr><td>Regional Center/National Services - All:</td><td style='text-align: right'>" + parseInt(jobs) + "</td><td style'text-align: right'>" + (parseInt(jobs)/parseInt(total_jobs)*100).toFixed(2) + "%</td></tr>";
    
        for (x of worker_data){
            if (e.target.feature.properties.COUNTYFP == x.area_code && x.sector_id == "14000"){
                jobs = x.total_jobs;
            }
        }
        info_html += "<tr><td>Regional Center/National Services-Construction:</td><td style='text-align: right'>" + parseInt(jobs) + "</td><td style'text-align: right'>" + (parseInt(jobs)/parseInt(total_jobs)*100).toFixed(2) + "%</td></tr>";
    
        for (x of worker_data){
            if (e.target.feature.properties.COUNTYFP == x.area_code && x.sector_id == "13000"){
                jobs = x.total_jobs;
            }
        }
        info_html += "<tr><td>Regional Center/National Services-Communications:</td><td style='text-align: right'>" + parseInt(jobs) + "</td><td style'text-align: right'>" + (parseInt(jobs)/parseInt(total_jobs)*100).toFixed(2) + "%</td></tr>";
    
        for (x of worker_data){
            if (e.target.feature.properties.COUNTYFP == x.area_code && x.sector_id == "17000"){
                jobs = x.total_jobs;
            }
        }
        info_html += "<tr><td>Regional Center/National Services-Trade & Transportation:</td><td style='text-align: right'>" + parseInt(jobs) + "</td><td style'text-align: right'>" + (parseInt(jobs)/parseInt(total_jobs)*100).toFixed(2) + "%</td></tr>";
    
        for (x of worker_data){
            if (e.target.feature.properties.COUNTYFP == x.area_code && x.sector_id == "12000"){
                jobs = x.total_jobs;
            }
        }
        info_html += "<tr><td>Regional Center/National Services-Professional & Business Services:</td><td style='text-align: right'>" + parseInt(jobs) + "</td><td style'text-align: right'>" + (parseInt(jobs)/parseInt(total_jobs)*100).toFixed(2) + "%</td></tr>";
    
        for (x of worker_data){
            if (e.target.feature.properties.COUNTYFP == x.area_code && x.sector_id == "16000"){
                jobs = x.total_jobs;
            }
        }
        info_html += "<tr><td>Regional Center/National Services-Finance, Insurance & Real Estate:</td><td style='text-align: right'>" + parseInt(jobs) + "</td><td style'text-align: right'>" + (parseInt(jobs)/parseInt(total_jobs)*100).toFixed(2) + "%</td></tr>";
    
        for (x of worker_data){
            if (e.target.feature.properties.COUNTYFP == x.area_code && x.sector_id == "15000"){
                jobs = x.total_jobs;
            }
        }
        info_html += "<tr><td>Regional Center/National Services-Education & Health Services:</td><td style='text-align: right'>" + parseInt(jobs) + "</td><td style'text-align: right'>" + (parseInt(jobs)/parseInt(total_jobs)*100).toFixed(2) + "%</td></tr>";
    
        for (x of worker_data){
            if (e.target.feature.properties.COUNTYFP == x.area_code && x.sector_id == "27000"){
                jobs = x.total_jobs;
            }
        }
        info_html += "<tr><td>Tourism:</td><td style='text-align: right'>" + parseInt(jobs) + "</td><td style'text-align: right'>" + (parseInt(jobs)/parseInt(total_jobs)*100).toFixed(2) + "%</td></tr>";
    
        for (x of worker_data){
            if (e.target.feature.properties.COUNTYFP == x.area_code && x.sector_id == "6000"){
                jobs = x.total_jobs;
            }
        }
        info_html += "<tr><td>Household-Commuters:</td><td style='text-align: right'>" + parseInt(jobs) + "</td><td style'text-align: right'>" + (parseInt(jobs)/parseInt(total_jobs)*100).toFixed(2) + "%</td></tr>";
    
        for (x of worker_data){
            if (e.target.feature.properties.COUNTYFP == x.area_code && x.sector_id == "22000"){
                jobs = x.total_jobs;
            }
        }
        info_html += "<tr><td>Household-Retirees:</td><td style='text-align: right'>" + parseInt(jobs) + "</td><td style'text-align: right'>" + (parseInt(jobs)/parseInt(total_jobs)*100).toFixed(2) + "%</td></tr>";
    
        for (x of worker_data){
            if (e.target.feature.properties.COUNTYFP == x.area_code && x.sector_id == "18000"){
                jobs = x.total_jobs;
            }
        }
        info_html += "<tr><td>Households - with Public Assistance Income (excluding retirees):</td><td style='text-align: right'>" + parseInt(jobs) + "</td><td style'text-align: right'>" + (parseInt(jobs)/parseInt(total_jobs)*100).toFixed(2) + "%</td></tr>";
    
        for (x of worker_data){
            if (e.target.feature.properties.COUNTYFP == x.area_code && x.sector_id == "19000"){
                jobs = x.total_jobs;
            }
        }
        info_html += "<tr><td>Households - with Dividends, Interest, and Rental Income (excluding retirees):</td><td style='text-align: right'>" + parseInt(jobs) + "</td><td style'text-align: right'>" + (parseInt(jobs)/parseInt(total_jobs)*100).toFixed(2) + "%</td></tr>";
    
        for (x of worker_data){
            if (e.target.feature.properties.COUNTYFP == x.area_code && x.sector_id == "7000"){
                jobs = x.total_jobs;
            }
        }
        info_html += "<tr><td>Total Direct Basic:</td><td style='text-align: right'>" + parseInt(jobs) + "</td><td style'text-align: right'>" + (parseInt(jobs)/parseInt(total_jobs)*100).toFixed(2) + "%</td></tr>";
    
        for (x of worker_data){
            if (e.target.feature.properties.COUNTYFP == x.area_code && x.sector_id == "29000"){
                jobs = x.total_jobs;
            }
        }
        info_html += "<tr><td>Worker Local Res. Services (Non Basic):</td><td style='text-align: right'>" + parseInt(jobs) + "</td><td style'text-align: right'>" + (parseInt(jobs)/parseInt(total_jobs)*100).toFixed(2) + "%</td></tr>";
    
        for (x of worker_data){
            if (e.target.feature.properties.COUNTYFP == x.area_code && x.sector_id == "9000"){
                jobs = x.total_jobs;
            }
        }
        info_html += "<tr><td>Indirect Basic:</td><td style='text-align: right'>" + parseInt(jobs) + "</td><td style'text-align: right'>" + (parseInt(jobs)/parseInt(total_jobs)*100).toFixed(2) + "%</td></tr>";
    
        /* for (x of worker_data){
            if (e.target.feature.properties.COUNTYFP == x.area_code && x.sector_id == "15000"){
                jobs = x.total_jobs;
            }
        }
        info_html += "<tr><td>Government:</td><td style='text-align: right'>" + parseInt(jobs) + "</td><td style'text-align: right'>" + (parseInt(jobs)/parseInt(total_jobs)*100).toFixed(2) + "%</td></tr>";
         */
        info_html += "</table><br /><div class='main_content'><div class='container'><button class='mbutton' id='dlthis'>Download Table</button><button class='mbutton' id='dlall' style='float: right;'>Download All Data</button></div></div><br /></div>" +

            "<div id='chartdiv' class='tabcontent'>" +

            "<br /><div id='chart_wrapper'><svg id='wf_chart'></svg></div><br /><div class='main_content'><div class='container'><button class='mbutton' id='t_download'>Download PNG</button><button class='mbutton' id='f_download' style='float: right;'>Full Size PNG</button></div></div><br /></div>";

        map.openModal({
            content: info_html
        });

        //d3 waterfall chart
        //require("./waterfall_chart.js")(cMap, fips, e.target.feature.properties.NAME + " County,  " + cMap.first_year + " to " + cMap.last_year);

        //modal event listeners
        require("./modal_event_listeners.js")(cMap, e);

    //});

}