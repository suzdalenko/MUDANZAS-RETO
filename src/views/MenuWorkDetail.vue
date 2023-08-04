<template> 
    <HeaderIndex />
    <ContentMenuWorkDetail />
    <FooterIndex />
</template>
<script>
import HeaderIndex from '@/components/IndexPage/HeaderIndex';
import ContentMenuWorkDetail from '@/components/MenuWorkDetail/ContentMenuWorkDetail';
import FooterIndex from '@/components/IndexPage/FooterIndex';
export default{
    components: { HeaderIndex, ContentMenuWorkDetail, FooterIndex },
}

</script>