module.exports = function(map) {


    require("../../lib/js/easy-button.js");
    

    //var infoPopup = L.popup().setContent('Map Info');
    var info_html = "<h2 style='text-align: center'> County Base Jobs</h2>"+
    "<p>Total Employment by Industry and the Industry share of county total employment use the <a href='https://demography.dola.colorado.gov/economy-labor-force/data/jobs-by-sector/'>State Demography Office’s Total Estimated Jobs Series</a>. The 2018 annual employment estimate used in this series is comprised of roughly 2.9 million wage &amp; salary workers and 500,000 proprietors. The total number of estimated jobs in Colorado is larger than the labor force in the state due to roughly 7% of the workforce holding multiple jobs and workers from out of state who commute to Colorado for work.</p>"
    
    
    //L.easyButton('fa-question', function(){alert(info_html);}).addTo(map);
     

    
    var infoButton = L.easyButton({
        position: 'topright',
        states: [{
            icon: 'fa-question',
            onClick: function(btn, map){
                var win = L.control.window(map,{maxWidth:400,modal: true})
                    .content(info_html)
                    .show()
            }
        }]
    })
    
    infoButton.addTo(map);
    
    
  
}