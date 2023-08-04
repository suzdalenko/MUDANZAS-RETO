<template> 
    <HeaderIndex />  
   
    
    <PreguntasFrecuentes />
    <FooterIndex /> 
</template>
<script>
import HeaderIndex from '@/components/IndexPage/HeaderIndex';

import PreguntasFrecuentes from '@/components/PreguntasComp/PreguntasFrecuentes';
import FooterIndex from '@/components/IndexPage/FooterIndex';
export default{
    components: { 
        HeaderIndex,
    
  
        PreguntasFrecuentes,
        FooterIndex
           },
}

</script>