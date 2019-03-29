import {data} from './data'; 
import {addMarkerOnMap,visitvoyageOnMap} from './map'

const voyagesContainer = document.querySelector("#voyage-container");

function buildAllVoyage(){
    while(voyagesContainer.hasChildNodes()){
        voyagesContainer.removeChild(voyagesContainer.lastChild)
    }
    data.forEach(buildOnevoyage);
    addVoyageListeners();
}

function buildOnevoyage(voyage){

    const voyageElement = document.createElement('div');
    voyageElement.innerHTML =` <div class="card text-center" id="${voyage.id}">
    <div class="card-header">

      ${voyage.place}
    </div>
    <img src="${voyage.imagePath}" class="card-img-top" alt="...">
    <div class="card-body">
        <button type="button" class="btn btn-${voyage.done?"secondary":"danger"} font-weight-bold btn-block">${voyage.done?"je veux le refair":"dje me lance !"}!</button>
    </div>
    <div class="card-footer text-muted text-right">
        <button type="button" class="button-visit btn btn-outline-primary ">Visiter</button>
    </div>
  </div>`;

  voyagesContainer.appendChild(voyageElement)
    

    addMarkerOnMap(voyage)
}
function addVoyageListeners(){
    document.querySelectorAll('.button-visit').forEach(item => {
        item.addEventListener('click',event => {
           visitVoyage(item.parentElement.parentElement.getAttribute('id'));
        })
    })
}
function visitVoyage(voyageId){
    let position = data.filter(item => item.id== voyageId)[0].coordiates
    visitvoyageOnMap(position);
}
export { buildAllVoyage};