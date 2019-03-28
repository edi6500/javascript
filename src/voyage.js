import {data} from './data'; 
import {addMarkerOnMap} from './map'

const voyagesContainer = document.querySelector("#voyage-container");

function buildAllVoyage(){
    while(voyagesContainer.hasChildNodes()){
        voyagesContainer.removeChild(voyagesContainer.lastChild)
    }
    data.forEach(buildOnevoyage)
}

function buildOnevoyage(voyage){

    const voyageElement = document.createElement('div');
    voyageElement.innerHTML =` <div class="card text-center">
    <div class="card-header">

      ${voyage.place}
    </div>
    <img src="${voyage.imagePath}" class="card-img-top" alt="...">
    <div class="card-body">
        <button type="button" class="btn btn-${voyage.done?"secondary":"danger"} font-weight-bold btn-block">${voyage.done?"je veux le refair":"dje me lance !"}!</button>
    </div>
    <div class="card-footer text-muted text-right">
        <button type="button" class="btn btn-outline-primary ">Visiter</button>
    </div>
  </div>`;

  voyagesContainer.appendChild(voyageElement)
    

    addMarkerOnMap(voyage)
}
export { buildAllVoyage};