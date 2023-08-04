<template>
    <nav id="navbarExample" class="navbar navbar-expand-lg fixed-top navbar-light" aria-label="Main navigation">
        <div class="container">
            <a class="navbar-brand logo-image" href="https://mudanzasreto.com" style="margin-top:-11px;">
                <i class="fa fa-truck icon_image" aria-hidden="true"></i> <span class="header_title">MUDANZAS RETO</span>
            </a> 
            <button class="navbar-toggler p-0 border-0" type="button" aria-label="Toggle navigation" v-on:click="openMainMenu">
                <span class="navbar-toggler-icon" id="click_button_top_menu"></span>
            </button>
            <div class="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault" v-on:click="hiddenMainMenu($event)">
                <ul class="navbar-nav ms-auto navbar-nav-scroll">
                    <li class="nav-item">
                        <a class="nav-link" href="/#header">Inicio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/#services">Servicios</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/#details">Detalles</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/#features">Extras</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle open_small_menu" v-on:click="openCloseMenu()" id="mas_option">Más</a>
                        <ul class="dropdown-menu show" id="smallListMenuButton" >
                            <li><router-link class="dropdown-item" v-bind:to="'/'+infoPages[0]">Mudanzas</router-link></li>
                            <li><div class="dropdown-divider"></div></li>
                            <li><router-link class="dropdown-item" v-bind:to="'/'+infoPages[1]">Vaciados</router-link></li>
                            <li><div class="dropdown-divider"></div></li>        
                             <li><router-link class="dropdown-item" v-bind:to="'/'+infoPages[2]">Reformas</router-link></li>
                            <li><div class="dropdown-divider"></div></li>
                             <li><router-link class="dropdown-item" v-bind:to="'/'+infoPages[3]">Pintura</router-link></li>
                            <li><div class="dropdown-divider"></div></li>
                             <li><router-link class="dropdown-item" to="/cuidades">Cuidades</router-link></li>
                        </ul>
                    </li>
                </ul>
                <span class="nav-item">
                    <a class="btn-solid-sm" href="tel:+34643449721"><i class="fas fa-phone-alt"></i> 643 449 721</a>
                </span>
            </div> 
        </div> 
    </nav> 
</template>
<script>
var juiPui = true;
import infoPages from '@/storage/list_work_detail';
export default{
    data(){
        return { 
            infoPages : infoPages.listWorkDetail
        }
    },
    methods: {
        openCloseMenu(){
         let smallListMenuButton = document.getElementById('smallListMenuButton');
            if(smallListMenuButton.style.display == 'block'){
               smallListMenuButton.style.display = 'none';
            } else {
               smallListMenuButton.style.display = 'block';
            }
        },
        openMainMenu(){ let smallListMenuButton = document.getElementById('smallListMenuButton'); smallListMenuButton.style.display == 'block';
            let navbarsExampleDefault = document.getElementById('navbarsExampleDefault');
            if(juiPui){ 
                navbarsExampleDefault.classList.remove('offcanvas-collapse'); juiPui = false;
                let smallListMenuButton = document.getElementById('smallListMenuButton');
                smallListMenuButton.style.display = 'block';
                // quiero abrir menu pequeño al abrir el grande
            } else {
                navbarsExampleDefault.classList.add('offcanvas-collapse'); juiPui = true;
            }    
        },
        hiddenMainMenu($event){
            if('mas_option' == $event.target.id){ ; }
            else { juiPui = true;  navbarsExampleDefault.classList.add('offcanvas-collapse'); }
        }
    },
    mounted(){
        
    }
}
</script>
<style scoped>
    #smallListMenuButton{
       display:none;
    }
    @media screen and (max-width: 974px) {
        #smallListMenuButton{
            display: block;
         }
    }
    .open_small_menu:hover{
        cursor:pointer;
    }
</style>