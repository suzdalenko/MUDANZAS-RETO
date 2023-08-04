<template> 
    <HeaderIndex /> 
    <header id="header" class="header">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-xl-5">
                    <div class="text-container">
                        <h1 class="h1-large">Página no encontrada</h1>
                        <a class="btn-solid-lg" href="/">Inicio</a>
                    </div> 
                </div> 
                <div class="col-lg-6 col-xl-7">
                    <div class="image-container">
                        <img class="img-fluid mis_form_images" src="/img/camion.png" alt="Mudanzas Reto" id="image_title_id">
                    </div> 
                </div>
            </div>
        </div>
    </header> 
    <FooterIndex />
</template>
<script>
import HeaderIndex from '@/components/IndexPage/HeaderIndex';
import FooterIndex from '@/components/IndexPage/FooterIndex';
export default{
    components: { HeaderIndex, FooterIndex },
    created (){
       document.querySelector("[name='robots']").remove()
       let m = document.createElement('meta');
           m.name = 'robots';
           m.content = 'noindex';
           document.head.appendChild(m);
    },
   
}
</script>
