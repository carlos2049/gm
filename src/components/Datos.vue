<template>
  
  <v-container>
    <div>
      <h1 >contenedor</h1>
    </div>

  
      <v-data-table
        :headers="tablaDatos"
        :items="desserts"
        sort-by="calories"
        class="elevation-1"
      >
        <template v-slot:top>
          <v-toolbar flat color="white">
            <v-toolbar-title  >  {{ tituloData }}</v-toolbar-title>
            <v-divider
              class="mx-4"
              inset
              vertical
            ></v-divider>
            <v-spacer></v-spacer>
            <v-dialog v-model="dialog" max-width="500px">
              <template v-slot:activator="{ on }">
                <v-btn color="primary" dark class="mb-2" v-on="on">New Item</v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="headline">{{ formTitle }}</span>
                </v-card-title>

                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="6" md="4" >
                        <v-text-field v-model="editedItem.name" label="Dessert name"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field v-model="editedItem.tipo" label="Calories"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field v-model="editedItem.imagen" label="Fat (g)"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field v-model="editedItem.url" label="Carbs (g)"></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="4">
                        <v-text-field v-model="editedItem.observacion" label="Protein (g)"></v-text-field>
                      </v-col>
                    </v-row>
                  


                  </v-container>
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                  <v-btn color="blue darken-1" text @click="save">Save</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-icon
            small
            class="mr-2"
            @click="editItem(item)"
          >
            mdi-pencil
          </v-icon>
          <v-icon
            small
            @click="deleteItem(item)"
          >
            mdi-delete
          </v-icon>
        </template>
        <template v-slot:no-data>
          <v-btn color="primary" @click="initialize">Reset</v-btn>
        </template>
      </v-data-table>
</v-container>
</template>



<script>

import {mapState} from 'vuex'
  export default {
      name: 'datos',
    data: () => ({
      dialog: false,
     contenedor: 0,
     titu50 : '',
      headers: [
       
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        name: '',
        tipo: 0,
        imagen: 0,
        url: 0,
        observacion: 0,
      },
      defaultItem: {
        name: '',
        tipo: 0,
        imagen: 0,
        url: 0,
        observacion: 0,
      },
    }),

    computed: {
      ...mapState(['tablaDatos', 'cond','titulos2', 'tituloTolbar']),
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
     tituloData()  {
        //al final no se ocupo esta funcion, los subtitulo los trae el vuex con tituloTolbar
        const ruta = this.$route
        const ruta2 = ruta.path
       if(this.tituloTolbar === ''){
          for (let index = 0; index < this.titulos2.length; index++) {
            const element = this.titulos2[index].subTitulo;
            for (let index = 0; index < element.length; index++) {
              const element2 = element[index].route;
              const nombre = element[index].name
                if(element2 === ruta2){
                  return nombre
                }
              
            }
          }
       }else{
         return this.tituloTolbar
       }
        
       
       

      },

      
 
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
    },

    created () {
      
      this.url()
      
      
      
     // this.$store.dispatch('iniciar')
      this.initialize()
      
    },

    methods: {
      

      url(){
          const route2 = this.$route 
          const ruta = route2.path
          console.log(ruta)

         
        
        for (let index = 0; index < this.titulos2.length; index++) {
          const element = this.titulos2[index].subTitulo;
          for (let index = 0; index < element.length; index++) {
            const element2 = element[index].route;
            const valor = element[index].values
            if(ruta === element[index].route){
                console.log( 'este es' + element2)
                this.$store.dispatch('iniciar', {valor})
                
            }
          }
          
          
        }
      },
    
    
     
      
      initialize () {
        console.log('holaaa' + this.cond)
        this.desserts = [
          {
            name: 'Frozen Yogurt',
            tipo: 159,
            imagen: 6.0,
            url: 24,
            observacion: 4.0,
          },
          {
            name: 'Ice cream sandwich',
            tipo: 237,
            imagen: 9.0,
            url: 37,
            observacion: 4.3,
          },
       
        
         
        ]
      },

      editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        const index = this.desserts.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
      },

      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>