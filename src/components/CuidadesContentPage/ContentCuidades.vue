<template>
<header class="ex-header">
        <div class="container">
            <div class="row">
                <div class="col-xl-10 offset-xl-1">
                    <h1 class="h1-large">Mudanzas Reto Cantabria</h1>
                </div>
            </div> 
        </div> 
</header>
 <div id="services" class="cards-1 bg-gray">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h2>Mapa del sitio web Mudanzas Reto</h2>
                </div> 
            </div> 
            <div class="row">
                <div class="col-lg-12">

                    <router-link class="card list_map_site" v-for="(url, index) in listCitiesAndWorks" v-bind:key="index" v-bind:to="'/' + url">
                        <div class="card-body">
                            <h6 class="card-title">{{ deleteEmptySpaces(url) }}</h6> 
                        </div>
                    </router-link>
                   
                </div> 
            </div> 
        </div> 
    </div>
</template>
<script>
import urls from '@/storage/urls';
export default{
    data(){
        return{
            listCitiesAndWorks: []
        }
    },
    created(){ 
      this.listCitiesAndWorks = urls.urls; 
    },
    methods: {
        deleteEmptySpaces(x){
            return x.replace('/', ' ').replace('-', ' ').replace('-', ' ').replace('-', ' ').replace('-', ' ').replace('-', ' ').replace('-', ' ');
        }
    }
}
</script>