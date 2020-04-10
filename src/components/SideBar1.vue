<template>
<v-container>
    <nav >
        <v-app-bar app class="alineado"  color="grey lighten-5">
             <v-app-bar-nav-icon  @click="minivarianCambio"></v-app-bar-nav-icon>
            
        <v-container color="grey lighten-5" class="cont-menu" >
          <v-list-item router to="/login">
                 <v-list  max-height color="grey lighten-2" class="avatar">
                    <v-list-item>
                        <v-list-item-avatar>
                            <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
                        </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title class="title">John Leider</v-list-item-title>
                    
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
             </v-list-item>
        </v-container>
                 <!-- <v-system-bar></v-system-bar> -->      
        </v-app-bar>   
            
    </nav>  
    <!-- color="blue-grey darken-4" -->
     <v-navigation-drawer app  class="blue-grey darken-3"
            dark
            permanent 
            v-model="drawer" :mini-variant="miniVariant"
            :expand-on-hover="expandir">
            
            <div class="d-flex "  height="0">
                <div  class="my-4 mx-3 align-center">
                    <v-img
                        :src="require('@/assets/logoAdm.png')"
                        contain
                        height="30"
                        width="30"
                    />
                </div>
                <div >
                    <h2 class="pa-4 white--text font-weight-regular text-center text-no-wrap" > {{ nombreCambio }} </h2>
                    <!-- <h2 class="pa-4 white--text text-no-wrap" > {{ miniVariant ? nombre : nombre2 }} </h2> -->

                </div>
               
            </div>
            <hr   size="1">
            <div>
                <v-list>
                 <v-list-group
                    v-for="titulo in titulos2"
                    :key="titulo.nombre"
                     
                   
                
                    no-action
                    class=""
                >
                        <template v-slot:activator  >
                            <v-list-item-action>
                                <v-icon :color="colorIcon"> {{ titulo.icon }} </v-icon>
                            </v-list-item-action>
                        <v-list-item-content   >
                            
                            
                            <v-list-item-title class="subtitle-2 font-weight-regular" v-text="titulo.nombre"></v-list-item-title>
                        </v-list-item-content>
                        </template>

                        <v-list-item
                        v-for="(subtitulo) in titulo.subTitulo"
                        :key="subtitulo.name"
                        router :to="subtitulo.route"
                         class="pl-4"
                         @click="click1(subtitulo.values)"
                        >
                            <v-list-item-action>
                                <v-icon :color="colorIcon"> radio_button_unchecked </v-icon>
                            </v-list-item-action>
                            <v-list-item-content >
                            
                                <v-list-item-title class="ml-2 subtitle-2 font-weight-regular" v-text="subtitulo.name"></v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>

                      
                </v-list-group>
                <v-list-item v-for="secundario in tituloSecun" :key="secundario.nombre" router :to="secundario.route">
                        <v-list-item-action>
                            <v-icon :color="colorIcon"> {{ secundario.icon }} </v-icon>
                        </v-list-item-action>

                        <v-list-item-content>
                            <v-list-item-title>
                                <v-list-item-title class="white--text subtitle-2 font-weight-regular"> {{ secundario.nombre }}</v-list-item-title>
                               
                            </v-list-item-title>
                            
                        </v-list-item-content>
                        
                    </v-list-item>
                     
                    
                </v-list>

            </div>
            
            <!-- <div >
                <v-row >
                    <v-row justify="space-around">    
                    </v-row >

                        <v-expansion-panels  focusable>
                            <v-expansion-panel class="mr-10" v-for="titulo   in titulos3" :key="titulo.nombre" router >
                                

                                <v-expansion-panel-header  :hide-actions="condition" class="d-flex px-7   " color="blue-grey darken-4"  >
                                     <v-icon class="white--text" :class="margin2"> {{ titulo.icon }} </v-icon>
                                        <div v-show="condTitulo2" class="white--text text-no-wrap subtitle-1">{{ titulo.nombre}}
                                         </div> 
                                </v-expansion-panel-header>
                                <v-expansion-panel-content  color="blue-grey darken-4" inherit  class="  pa-0 text-center white--text font-weight-regular "
                                    v-for="sub in titulo.subTitulo" :key="sub.name" >
                                        
                                        <router-link :to="sub.route" class="d-flex align-center cunitario pa-0">
                                                                                         
                                                <v-icon class="white--text mx-6">{{sub.icon}}</v-icon> 
                                                <div class="ml-3 subtitle-1" link>{{sub.name}}</div>  
                                            
                                        </router-link>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
                </v-row>
            </div> -->
            <!-- <v-divider color="white" class="mx-2 "></v-divider> -->
           
        </v-navigation-drawer>
        <datos></datos>

    </v-container>
</template>

<script>
import {mapState , mapMutations} from 'vuex'
import datos from '@/components/Datos.vue'
export default {
    name: 'SideBar',
    
    components:{
        datos
    },
    data(){
        return{
            drawer:true,
             miniVariant: false,
             multiple: true,

             nombre: 'ALTUS COACH',
             colorIcon: 'white',
            
             expandOnHover: false,   
             margin : '',
             

             tituloSecun:[
                 {icon: 'mdi-folder', nombre:'Ayuda', route:'/hola50'},
                 {icon: 'mdi-folder', nombre:'Acerca De', route:'/hola51'},

             ],
        
             condTitulo : true,
             

           
           
        }
    },

    methods:{
        ...mapMutations(['click1']),

         click1(vals){  
     
      for (let index = 0; index < this.titulos2.length; index++) {
          const element = this.titulos2[index].subTitulo
         for (let index = 0; index < element.length; index++) {
             const eleme = element[index].values;
             if(vals === eleme){
                if(eleme === vals){
                    this.$store.dispatch('tit2', {eleme})
                }
             }
             
         }
      }
    }
          ,
        
        minivarianCambio(){
            if(this.miniVariant){
                this.miniVariant = false
                
                
            }else
            this.miniVariant = true
        },
        
       
    },
    computed:{
        ...mapState(['titulos2','numero']),
        nombreCambio(){
            if(this.miniVariant){
               return this.nombre = ''
            }else{
               return this.nombre = 'ALTUS COACH'
            }
        },
    
       
        margin2(){
            if(this.miniVariant){
               return this.margin = 'ml-5'
            }else{
               return this.margin = ''
            }
        },
        condTitulo2(){
            if(this.miniVariant){
               return this.condTitulo = false

            }else{
              return  this.condTitulo = true
            }
        },
        expandir(){
            if(this.miniVariant){
            return   this.expandOnHover = true
            }else{
                return this.expandOnHover = false
            }
        },
        llamada(){

        }
    }
    
}
</script>
<style lang="css" scoped>


.v-application--is-ltr .v-list-item__action:first-child, .v-application--is-ltr .v-list-item__icon:first-child {
    margin-right: 15px;
}
.alineado{
   align-items: space-around;
}
.avatar{
    
    margin-right: 0%;
    height: 63px;
    border-style: solid black 2px;
}
.cont-menu{
    padding: 0px;
    margin-left: 85%;
}

</style>