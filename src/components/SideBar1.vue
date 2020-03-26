<template>
<v-container>
    <nav>
        <v-app-bar app  color="teal lighten-3">
     
            <v-app-bar-nav-icon @click="miniVariant = !miniVariant"></v-app-bar-nav-icon>
            

        </v-app-bar>


       
        
    </nav>  
    <!-- color="blue-grey darken-4" -->
     <v-navigation-drawer app   v-model="drawer" :mini-variant="miniVariant">
            <div class="d-flex flex-row mb-7">
                <h2> {{ nombre }} </h2>
            </div>
            
            <v-divider></v-divider>
           
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
             nombre: 'ALTUS COACH'
        }
    }
    
}
</script>
<style lang="stylus" scoped>

</style>