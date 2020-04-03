<template>
<v-container>
    <nav close-delay="500">
        <v-app-bar app   color="grey lighten-5">
     
            <v-app-bar-nav-icon  @click="minivarianCambio"></v-app-bar-nav-icon>
            

        </v-app-bar>


       
        
    </nav>  
    <!-- color="blue-grey darken-4" -->
     <v-navigation-drawer app  class="blue-grey darken-4"
            dark
            permanent 
            v-model="drawer" :mini-variant="miniVariant">
            
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
                    <!-- <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                        <v-list-item-action>
                            <v-icon :color="colorIcon"> {{ link.icon }} </v-icon>
                        </v-list-item-action>

                        <v-list-item-content>
                            <v-list-item-title>
                                <v-list-item-title class="white--text "> {{ link.text }}</v-list-item-title>
                               
                            </v-list-item-title>
                            
                        </v-list-item-content>
                        
                    </v-list-item> -->


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
                        v-for="subtitulo in titulo.subTitulo"
                        :key="subtitulo.name"
                        router :to="subtitulo.route"
                         class="pl-4"
                        >
                            <v-list-item-action>
                                <v-icon :color="colorIcon"> {{ subtitulo.icon }} </v-icon>
                            </v-list-item-action>
                            <v-list-item-content >
                            
                                <v-list-item-title class="subtitle-2 font-weight-regular" v-text="subtitulo.name"></v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>

                      
                </v-list-group>
                     
                    
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
            
             
          
               
           
             condition2: false,
             margin : '',
             titulos2:[
                 {icon: 'mdi-home', nombre:'Servicios ',subTitulo :[
                     {icon: 'mdi-gavel',name: ' Planes', route:'/home'},
                     {icon: 'mdi-gavel',name: ' Sub Planes', route:'/hola2'},
                 ]},
                 {icon: 'mdi-widgets', nombre:'Ejercicios',subTitulo :[
                     {icon: 'mdi-gavel',name: 'Ejercicios', route:'/hola3'},
                     {icon: 'mdi-gavel',name: 'Biblioteca de Ejercicios', route:'/hola4'}
                
                 ]},
                 {icon: 'mdi-folder', nombre:'Maestro de Clases',subTitulo :[
                     {icon: 'mdi-home',name: 'Creacion de clases', route:'/hola5'},
                     {icon: 'mdi-home',name: 'Crear Rutinas Clientes', route:'/hola6'}
                 ]},
                 {icon: 'mdi-folder', nombre:'Maestro de Gastos',subTitulo :[
                     {icon: 'mdi-home',name: 'Periodos', route:'/hola5'},
                     {icon: 'mdi-home',name: 'Tipos de Gastos', route:'/hola7'},
                     {icon: 'mdi-home',name: 'Maestro de gastos', route:'/hola8'},
                 ]},
                     {icon: 'mdi-folder', nombre:'Almacen',subTitulo :[
                     {icon: 'mdi-home',name: 'Articulos', route:'/hola9'},
                     {icon: 'mdi-home',name: 'Categorias', route:'/hola10'},
                 ]},
                     {icon: 'mdi-folder', nombre:'Compras',subTitulo :[
                     {icon: 'mdi-home',name: 'Ingresos', route:'/hola11'},
                     {icon: 'mdi-home',name: 'Proveedores', route:'/hola12'},
                 ]},
                     {icon: 'mdi-folder', nombre:'s',subTitulo :[
                     {icon: 'mdi-home',name: '', route:'/hola13'},
                 ]},
                     {icon: 'mdi-folder', nombre:'T',subTitulo :[
                     {icon: 'mdi-home',name: '', route:'/hola14'},
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


.v-application--is-ltr .v-list-item__action:first-child, .v-application--is-ltr .v-list-item__icon:first-child {
    margin-right: 15px;
}

</style>