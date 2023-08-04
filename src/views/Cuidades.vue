<template> 
    <HeaderIndex />
    <ContentCuidades />
    <FooterIndex />
</template>
<script>
import HeaderIndex from '@/components/IndexPage/HeaderIndex';
import ContentCuidades from '@/components/CuidadesContentPage/ContentCuidades';
import FooterIndex from '@/components/IndexPage/FooterIndex';
export default{
    components: { HeaderIndex, ContentCuidades, FooterIndex },
    data (){
        return {}
    },
    created (){
     
    }
}

</script>