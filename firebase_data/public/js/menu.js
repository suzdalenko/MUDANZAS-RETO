// close small menu if click to body page
let body_id = document.getElementById('body_id');

    body_id.addEventListener('click', function(event) {
      let smallListMenuButton = document.getElementById('smallListMenuButton');
      if(smallListMenuButton){
        if('mas_option' == event.target.id || event.target.id == 'click_button_top_menu'){}
        else  smallListMenuButton.style.display = 'none'; 
      }
    
    });


function initMap() { 
      let cityCurrent = window.location.href;
      let cityCurr = cityCurrent.split('/');
      let cuidad = cityCurr[cityCurr.length-1].replace('-', ' ').replace('-', ' ').replace('-', ' ').replace('-', ' ').replace('-', ' ');
      let tiposDeTrabajos = [ 'Mudanzas', 'Vaciados de pisos', 'Reformas', 'Pintura', 'Recogida muebles', 'Limpiezas' ].toString();
      let currentWork = cityCurr[cityCurr.length-2].replace('-', ' ').replace('-', ' ');

      if(tiposDeTrabajos.includes(currentWork) ){;}
      else {
        return;
      }      
     
      let address = 'España ' + cuidad;

      new google.maps.Geocoder().geocode({ 'address': address }, function(results, status) {
          if (status === google.maps.GeocoderStatus.OK) {
         
            window.mudanzas_reto = results[0].place_id;

            
            window.test.getListReferencesFotosFromPlaceId(results[0].place_id);
           

          } else {
              console.log('Geocode was not successful for the following reason: ' + status);
          }
      });
};




      
