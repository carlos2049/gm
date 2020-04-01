<template>
<v-container>
    <nav close-delay="500">
        <v-app-bar app   color="grey lighten-5">
     
            <v-app-bar-nav-icon  @click="minivarianCambio"></v-app-bar-nav-icon>
            

        </v-app-bar>


       
        
    </nav>  
    <!-- color="blue-grey darken-4" -->
     <v-navigation-drawer app  color="blue-grey darken-4" v-model="drawer" :mini-variant="miniVariant">
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
                    <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                        <v-list-item-action>
                            <v-icon :color="colorIcon"> {{ link.icon }} </v-icon>
                        </v-list-item-action>

                        <v-list-item-content>
                            <v-list-item-title>
                                <v-list-item-title class="white--text"> {{ link.text }}</v-list-item-title>
                               
                            </v-list-item-title>
                            
                        </v-list-item-content>
                        
                    </v-list-item>

                     
                    
                </v-list>

            </div>
            <div>
                <v-row >
                    <v-row justify="space-around">    
                    </v-row >

                        <v-expansion-panels :multiple="multiple" >
                            <v-expansion-panel class="mr-10" v-for="titulo   in titulos2" :key="titulo.nombre" >
                                

                                <v-expansion-panel-header :hide-actions="condition" class="d-flex px-7   " color="blue-grey darken-4"  >
                                     <v-icon class="white--text" :class="margin2">mdi-home</v-icon>
                                        <div v-show="condTitulo2" class="white--text text-no-wrap subtitle-1">{{ titulo.nombre}}
                                         </div> 
                                </v-expansion-panel-header>
                                <v-expansion-panel-content color="blue-grey darken-4" class="pa-0 text-center white--text font-weight-regular"
                                    v-for="sub in titulo.subTitulo" :key="sub.name" >
                                {{sub.name}}
                                
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
                </v-row>
            </div>
            <!-- <v-divider color="white" class="mx-2 "></v-divider> -->
           
        </v-navigation-drawer>
    </v-container>
</template>

<script>
export default {
    name: 'SideBar',
    data(){
        return{
            drawer:true,
             miniVariant: false,
             multiple: true,

             nombre: 'ALTUS COACH',
             colorIcon: 'white',
             links: [
                 {icon: 'mdi-home', text:'PAGINA 1', route: '/home'},
                 {icon: 'mdi-gavel', text:'PAGINA 2', route: '/hola1'},
                 {icon: 'mdi-folder', text:'PAGINA 3', route: '/hola2'},
                 {icon: 'mdi-widgets', text:'PAGINA 4', route: '/hola3'},
             ],
             multiple: true,
             paneles:[
                 {icon: 'mdi-home', text:'PAGINA 1', route: '/home'},
                 {icon: 'mdi-gavel', text:'PAGINA 2', route: '/hola1'},
             ],
           
             condition2: false,
             margin : '',
             titulos2:[
                 {nombre:'TITULO 1 ',subTitulo :[
                     {name: ' holaa 1'},
                     {name: ' holaa 2'},
                 ]},
                 {nombre:'TITULO 2 ',subTitulo :[
                     {name: ' holaa 3'},
                     {name: ' holaa 4'}
                 ]},
                 {nombre:'TITULO 3 ',subTitulo :[
                     {name: ' holaa '}
                 ]},
                 
             ],
             condTitulo : true,
             
             
             
           
        }
    },
    methods:{
        minivarianCambio(){
            if(this.miniVariant){
                this.miniVariant = false
                
                
            }else
            this.miniVariant = true
        }
    },
    computed:{
        nombreCambio(){
            if(this.miniVariant){
               return this.nombre = ''
            }else{
               return this.nombre = 'ALTUS COACH'
            }
        },
        // titulos(){
        //     if(this.miniVariant){
        //      for (let index = 0; index < this.titulos2.length; index++) {
        //          return this.titulos2[index].nombre = "" ;
                 
        //      }
        //     }else{
        //        for (let index = 0; index < 3; index++) {
        //         var arr = []
        //         var arr = this.titulos2[index].nombre
        //          return arr
                 
        //      }
        //     }
        // },
        condition(){
            if(this.miniVariant){
               return this.condition2 = true
            }else{
               return this.condition2 = false
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
        }
    }
    
}
</script>
<style lang="css" scoped>


</style>