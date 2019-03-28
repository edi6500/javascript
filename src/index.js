import {initMap} from './map'
import {buildAllVoyage} from './voyage'
function init(){
    initMap()
    buildAllVoyage();
}

window.init = init;