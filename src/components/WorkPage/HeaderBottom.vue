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
                        En Mudanzas Reto, nos especializamos en todo tipo de <b>{{workPage}}</b> a de más de mudanzas y limpiezas, ya sea de trastos, muebles viejos o cualquier otro tipo de cacharros. Si necesitas realizar una mudanza en <b>{{cityPage}}</b>, no dudes en pedirnos un presupuesto sin ningún compromiso. Estamos siempre a tu disposición, ya sea por llamada telefónica o a través de mensajes de WhatsApp.
                        <br><br>
                        Para ofrecerte un presupuesto más preciso, te invitamos a enviarnos fotos del trabajo que deseas realizar. En muy poco tiempo te responderemos con una propuesta ajustada a tus necesidades.
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