// @flow

module.exports = function(map: Object) {
    'use strict';

    //Custom Title Control
    var title = L.control({
        position: 'topleft'
    });
    title.onAdd = function() {
        var div = L.DomUtil.create('div', 'title bord');
        div.innerHTML = '<h2>Estimated Economic Base Industry Jobs - 2021</h2>';
        return div;
    };
    title.addTo(map);

    var links = L.control({
        position: 'topleft'
    });
    links.onAdd = function() {
        var div2 = L.DomUtil.create('div2', 'title2 bord');
        div2.innerHTML = '<h4><a href="https://storage.googleapis.com/co-publicdata/base-analysis-county.csv">Base Industry Data</a></br>'
                        + '<a href="https://drive.google.com/uc?export=download&id=1Ag0JdOo8XATTBiNuh80BTiuqLV4Kv72T">Definitions and Info</a></h4>';
        return div2;
    };
    links.addTo(map);
};
