module.exports = function(map) {


    require("../../lib/js/easy-button.js");
    

    var info_html = "<h2 style='text-align: center'> County Jobs By Sector</h2>";
    L.easyButton({
        id: 'easy-button2', // an id for the generated button
        position: 'topright', // inherited from L.Control -- the corner it goes in
        type: 'animate', // set to animate when you're comfy with css
        leafletClasses: true, // use leaflet classes to style the button?
        states: [{ // specify different icons and responses for your button
            stateName: 'get-center',
            onClick: function(button, map) {
                map.openModal({
            content: info_html
        });
            },
            title: 'Info',
            icon: 'fa-question'
        }]
    }).addTo(map);
    require("./modal_event_listeners.js")(map);

}