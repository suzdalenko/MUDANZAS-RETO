<template> 
    <HeaderIndex /> 
    <header id="header" class="header">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-xl-12">
                    <div class="text-container">
                        <h1 class="h1-large">POLÍTICA DE COOKIES</h1>
                    </div> 
                </div>
            </div>
        </div>
        <br>
        <div class="container">
            <div class="row">
                <div class="col-xl-10 offset-xl-1">
                  
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
    data() {
        return {
            currentUrl: '',
            titlePage: 'AVISO LEGAL Y POLÍTICA PRIVACIDAD'
        };
    },
    created (){
        this.currentUrl = this.getCurrentUrl();
    },
    methods:{
        getCurrentUrl(){
            return  this.$route.path;
        }
    },
    watch: {
        '$route.path': function(newPath) {
            this.currentUrl = newPath;
        }
    }
}
</script>
