<template>
     <header class="ex-header">
        <div class="container">
            <div class="row">
                <div class="col-xl-10 offset-xl-1">
                    <h1>{{ workPage }} {{ cityPage }}</h1>
                </div> 
            </div> 
        </div> 
    </header>
    <div class="ex-basic-1 pt-5">
        <div class="container">
            <div class="row">
                <div class="col-xl-10 offset-xl-1">
                     <p class="mb-5 description_text">
                       Como ya sabe Usted, en Mudanzas Reto hacemos trabajos de {{workPage}} en {{cityPage}}, por ello siempre puede colsultarnos un presupuesto sin ningún tipo de compromiso. Estamos a su disposición a través de la llama telefónica o mensajes de WhatsApp.
                       <br><br>
                       Envianos fotos de trabajo a ejecutar y en un breve instante le contestamos con un presupuesto ajustado.
                     </p>
                </div> 
            </div> 
        </div> 
    </div>   
</template>
<script>
export default {
    props: ['workPage', 'cityPage'],
    data(){
        return {

        }
    },

}
</script>