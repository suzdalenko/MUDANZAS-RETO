<template>
    <header id="header" class="header">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-xl-5">
                    <div class="text-container">
                        <h1 class="h1-large">Mudanzas Reto Cantabria</h1>
                        <p class="p-large">Mudanzas y transportes particulares y empresas, recogida de muebles, vaciado de pisos y garajes, limpieza y más...</p>
                        <a class="btn-solid-lg" href="https://api.whatsapp.com/send?phone=34643449721&text=Hola" target="_blank"><i class="fab fa-whatsapp"></i> 643 449 721</a>
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
</template>
<script>
export default {
    created(){
        setInterval(function() {
                try {
                        let image_title_id = document.getElementById('image_title_id');
                        let srcString      = image_title_id.src;
                        if(srcString.includes('camion')){
                            image_title_id.src = '/img/loading-van.png';
                        } else {
                            image_title_id.src = '/img/camion.png';
                        }
                    }
                catch(err) {console.log('dupanov alexei was here https://suzdalenko.com');}
        }, 7000)
    }
}
</script>