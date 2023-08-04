<template>
<header class="ex-header">
        <div class="container">
            <div class="row">
                <div class="col-xl-10 offset-xl-1">
                    <h1><a v-bind:href="currentId()" class="a_title_page">{{ title }}</a></h1>
                </div> 
            </div>
        </div>
    </header>
  <div class="ex-basic-1 pt-5 pb-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <img class="img-fluid mt-5 mb-3" v-bind:src="images[0]" v-bind:alt="title" />
        </div>
      </div>
    </div>
  </div>
  <div class="ex-basic-1 pt-4">
    <div class="container">
      <div class="row">
        <div class="col-xl-10 offset-xl-1">
          <p>
            {{ desc1 }}
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="ex-basic-1 pt-3 pb-5">
    <div class="container">
      <div class="row">
        <div class="col-xl-10 offset-xl-1">
          <p>
            {{ desc2 }}
          </p><br><br><br>
          <img class="img-fluid mb-5" v-bind:src="images[1]" v-bind:alt="title"/>
        </div>
      </div>
    </div>
  </div>
  <BottomInfoMenuWorkPages />
</template>

<script>
import infoPages from '@/storage/list_work_detail';
import BottomInfoMenuWorkPages from '@/components/MenuWorkDetail/BottomInfoMenuWorkPages';
export default {
  components: { BottomInfoMenuWorkPages },
  data() {
    return {
        title: '', desc1: '', desc2: '', images: []
    };
  },
  created() {},
  methods: { 
      currentId(){
          this.thatIsPageRoute(this.$route.params.workDetail);
          return this.$route.params.workDetail;
      },
      thatIsPageRoute(currentId){
          let objInfo = 'none';
          switch(currentId){
              case infoPages.listWorkDetail[0] : objInfo = infoPages.infoPages[0] ; break;             //  'Mudanzas-particulares-y-empresas-Cantabria',
              case infoPages.listWorkDetail[1] : objInfo = infoPages.infoPages[1] ; break;
              case infoPages.listWorkDetail[2] : objInfo = infoPages.infoPages[2] ; break;
              case infoPages.listWorkDetail[3] : objInfo = infoPages.infoPages[3] ; break;  
              default: this.$router.push('/404'); 
          }
          if(objInfo != 'none'){
              this.title = objInfo.title;
              this.desc1 = objInfo.desc1;
              this.desc2 = objInfo.desc2;
              this.images = objInfo.images;

              document.title = this.title;
              document.getElementsByTagName('meta').namedItem('description').setAttribute('content', 'Mudanzas, ' + this.title + ' ' + objInfo.desc2)
          }  
      }
  }
};
</script>