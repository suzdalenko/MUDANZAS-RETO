<template>
    <ldjson />
    <div class="basic-3">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="text-container">
                        <h2>Servicio atención al cliente</h2>
                        <p class="p-large">En Mudanzas Reto estamos a tu plena disposición con cualquier tipo de pregunta duda o sugerencia, no dudes en escribirnos o llamarnos. <br> Trabajamos para ti</p>
                        <a class="btn-solid-lg" href="https://api.whatsapp.com/send?phone=+34642575221&text=Hola"><i class="fab fa-whatsapp"> 642 575 221</i></a>
                    </div> 
                </div>
            </div> 
        </div>
    </div> 
    
    <div class="footer bg-gray">
        <img class="decoration-circles" src="/images/decoration-circles.png" alt="Centro Mudanzas Reto">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h4>Síguenos en redes sociales</h4>
                    <p>Disponible próximamente</p>
                    <div class="social-container">
                        <span class="fa-stack">
                            <a href="https://play.google.com/store/apps/dev?id=8185819019973346070" target="_blank">
                                <i class="fas fa-circle fa-stack-2x"></i>
                                <i class="fab fa-facebook-f fa-stack-1x"></i>
                            </a>
                        </span>
                        <span class="fa-stack">
                             <a href="https://play.google.com/store/apps/dev?id=8185819019973346070" target="_blank">
                                <i class="fas fa-circle fa-stack-2x"></i>
                                <i class="fab fa-twitter fa-stack-1x"></i>
                            </a>
                        </span>
                        <span class="fa-stack">
                             <a href="https://play.google.com/store/apps/dev?id=8185819019973346070" target="_blank">
                                <i class="fas fa-circle fa-stack-2x"></i>
                                <i class="fab fa-google fa-stack-1x"></i>
                            </a>
                        </span>
                        <span class="fa-stack">
                             <a href="https://play.google.com/store/apps/dev?id=8185819019973346070" target="_blank">
                                <i class="fas fa-circle fa-stack-2x"></i>
                                <i class="fab fa-instagram fa-stack-1x"></i>
                            </a>
                        </span>
                        <span class="fa-stack">
                            <a href="https://play.google.com/store/apps/dev?id=8185819019973346070" target="_blank">
                                <i class="fas fa-circle fa-stack-2x"></i>
                                <i class="fab fa-youtube fa-stack-1x"></i>
                            </a>
                        </span>
                    </div>
                </div>
            </div> 
        </div>
    </div>

    <div class="copyright bg-gray" style="color: grey;">     
        <div class="container">
            <div class="row">
                <div class="col-lg-12" style="text-align: center;">
                        <div v-for="(city, index) in listCitiesAndWorks" v-bind:key="index" v-bind:to="'/Mudanzas/' + deleteEmptySpaces(city)" class="div_links">
                            <a class="cities_list" v-bind:href="'/Mudanzas/' + deleteEmptySpaces(city)">{{ city }}</a> 
                        </div>
                </div> 
            </div> 
        </div><br>
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-12 col-sm-12">
                    <ul class="list-unstyled li-space-lg p-small">
                        <li><img src="/images/mudanzas-reto.png" alt="Centro Mudanzas Reto" class="image_footer" /></li>
                        <li><a href="/aviso-legal-y-politica-privacidad">Aviso Legal y política privacidad</a></li>
                        <li><a href="/politica-de-cookies">Política de cookies</a></li>
                        <li><a href="/">Visitas <span id="userViews">Cargando...</span></a></li>
                    </ul>
                </div> 
                <div class="col-lg-6 col-md-12 col-sm-12">
                    <p class="p-small statement"><a href="/sitemap.xml" target="_blank">Copyright © Creado por </a> 
                    <a href="https://suzdalenko-dev.web.app/" target="_blank"><b class="xboss">Suzdalenko Alexey</b></a></p>
                </div> 
            </div>
        </div>  
    </div>
</template>
<script>
import ldjson from '@/components/IndexPage/LDJson';
import storageCitiesWorks from '@/storage/cities';
export default{
    data(){
        return{
            listCitiesAndWorks: [], 
        }
    },
    components: { ldjson },
    created(){
       this.insertScriptGooglePages();

       let arrayPrepare = []; 
       let arrayCitiesEmpty = [];
       if(window.location.pathname == '/') {
          arrayCitiesEmpty = storageCitiesWorks.citiesSort
       } else {
           arrayCitiesEmpty = storageCitiesWorks.cities
       };
       for (let city of arrayCitiesEmpty) {
           arrayPrepare.push(city)
       };
       this.listCitiesAndWorks = arrayPrepare; 
    },
    methods: {
        deleteEmptySpaces(x){
            return x.replace(' ', '-').replace(' ', '-').replace(' ', '-').replace(' ', '-').replace(' ', '-').replace(' ', '-');
        },
        insertScriptGooglePages(){
           
            window.scrollTo(0, 0);
        }, 
        
    }
}

</script>

<style scoped>
.cities_list:hover{
    cursor: pointer;
}
.cities_list{
    font-size: 14px;
    color: #9d9db7;
}
.div_links{ margin:10px; width:20%; display:inline-block;}

@media only screen and (max-width: 800px) {
  .div_links {
    width: 45%;
  }
}

.image_footer{
    width: 35px; margin-right: 11px;
}

.xboss{
    color: #0d6efd;
}
</style>
