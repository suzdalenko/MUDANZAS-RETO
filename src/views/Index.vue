<template> 
    <HeaderIndex />  
    <HeaderTitleIndex />
    <ContentIndex />
    <PreguntasFrecuentes />
    <FooterIndex /> 
</template>
<script>
import HeaderIndex from '@/components/IndexPage/HeaderIndex';
import HeaderTitleIndex from '@/components/IndexPage/HeaderTitleIndex';
import ContentIndex from '@/components/IndexPage/ContentIndex';
import PreguntasFrecuentes from '@/components/PreguntasComp/PreguntasFrecuentes';
import FooterIndex from '@/components/IndexPage/FooterIndex';
export default{
    components: { 
        HeaderIndex,
        HeaderTitleIndex, 
        ContentIndex,
        PreguntasFrecuentes,
        FooterIndex
           },
}

</script>


