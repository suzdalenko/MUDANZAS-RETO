<template>
<div>
    <h5>Estamos a tu plena disposición en {{ cityPage }} para los siguientes casos:</h5>
</div>
  <ul class="list-unstyled li-space-lg mb-5">
    <li class="d-flex">
      <i class="fas fa-square"></i>
      <div class="flex-grow-1"><strong>Reformas y reparaciones</strong> interior y exterior de vivienda </div>
    </li>
    <li class="d-flex">
      <i class="fas fa-square"></i>
      <div class="flex-grow-1"><strong>Pintura y solución</strong> de grietas en fachadas e interiores  </div>
    </li>
    <li class="d-flex">
      <i class="fas fa-square"></i>
      <div class="flex-grow-1"><strong>Vaciado y limpieza</strong> de pisos, chalets, garajes o naves </div>
    </li>
    <li class="d-flex">
      <i class="fas fa-square"></i>
      <div class="flex-grow-1">  <strong>Vaciado y desalojo</strong> de trastos en viviendas habitadas por personas con síndrome de diógenes </div>
    </li>
    <li class="d-flex">
      <i class="fas fa-square"></i>
      <div class="flex-grow-1">   <strong>Limpieza de siniestros</strong> en viviendas (incendios, inundaciones, etc.)  </div>
    </li>
    <li class="d-flex">
      <i class="fas fa-square"></i>
      <div class="flex-grow-1">   <strong>Retirada de jardinería</strong> y otros restos vegetales </div>
    </li>
    <li class="d-flex">
      <i class="fas fa-square"></i>
      <div class="flex-grow-1">   <strong>Recogida de electrodomésticos</strong>, alfombras, ropa, sillones, sofas viejos a domicilio </div>
    </li>
    <li class="d-flex">
      <i class="fas fa-square"></i>
      <div class="flex-grow-1"> <strong>Recogida de maquinaria</strong> en desuso, chatarra, muebles inútiles</div>
    </li>
  </ul>
  <a class="btn-solid-reg mb-5" href="tel:+34643449721"><i class="fas fa-phone-alt"></i> 643 449 721</a>
</template>
<script>
export default{
    props: ['cityPage']
}
</script>


