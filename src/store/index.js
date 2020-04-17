import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import { Mutate } from 'vuetify/lib'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    numero: 50,
    tituloTolbar: '',
    titulosObjeto: {
      '/ejercicios': {icon: 'mdi-home', nombre:'Servicios ',subTitulo :[
            {icon: 'mdi-home',name: 'Usuarios',values : 15, route:'/Usuario'},
            {icon: 'mdi-home',name: 'Permisos',values : 16, route:'/Permiso'},
            {icon: 'mdi-home',name: 'Perfiles',values : 17, route:'/Perfil'},
          ]   
        }
    },
    titulos2:[
      {icon: 'mdi-home', nombre:'Servicios ',subTitulo :[
          {icon: 'radio_button_unchecked',name: 'Planes', values : 1, route:'/Planes'},
          {icon: 'radio_button_unchecked',name: 'Sub Planes',values : 2, route:'/SubPlanes'},
      ]},
      {icon: 'mdi-widgets', nombre:'Ejercicios',subTitulo :[
          {icon: 'radio_button_unchecked',name: 'Ejercicios',values : 3, route:'/Ejercicios'},
          {icon: 'radio_button_unchecked',name: 'Nivel',values : 4, route:'/Nivel'},
          {icon: 'radio_button_unchecked',name: 'Biblioteca de Rutinas',values : 5, route:'/Biblioteca'}
     
      ]},
      {icon: 'mdi-folder', nombre:'Maestro de Clases',subTitulo :[
          {icon: 'mdi-home',name: 'Creacion de clases',values : 6, route:'/Clases'},
      ]},
      {icon: 'mdi-folder', nombre:'Maestro de Gastos',subTitulo :[
          {icon: 'mdi-home',name: 'Periodos',values : 7, route:'/Periodo'},
          {icon: 'mdi-home',name: 'Tipos de Gastos',values : 8, route:'/Gastos'},
         
      ]},
          {icon: 'mdi-folder', nombre:'Almacen',subTitulo :[
          {icon: 'mdi-home',name: 'Articulos' ,values : 9, route:'/Articulo'},
          {icon: 'mdi-home',name: 'Categorias',values : 10, route:'/Categoria'},
      ]},
          {icon: 'mdi-folder', nombre:'Compras',subTitulo :[
          {icon: 'mdi-home',name: 'Ingresos',values : 11, route:'/Ingreso'},
          {icon: 'mdi-home',name: 'Proveedores',values : 12, route:'/Proveedor'},
      ]},
          {icon: 'mdi-folder', nombre:'Ventas',subTitulo :[
          {icon: 'mdi-home',name: 'Ventas',values : 13, route:'/Venta'},
          {icon: 'mdi-home',name: 'Clientes',values : 14, route:'/Cliente'},
      ]},
          {icon: 'mdi-folder', nombre:'Acesso',subTitulo :[
          {icon: 'mdi-home',name: 'Usuarios',values : 15, route:'/Usuario'},
          {icon: 'mdi-home',name: 'Permisos',values : 16, route:'/Permiso'},
          {icon: 'mdi-home',name: 'Perfiles',values : 17, route:'/Perfil'},
      ]},
          {icon: 'mdi-folder', nombre:'Crear Test',subTitulo :[
          {icon: 'mdi-home',name: 'Ruffier',values : 18, route:'/Ruffier'},
          {icon: 'mdi-home',name: 'Ananmesis',values : 19, route:'/Anamnesis'},
          {icon: 'mdi-home',name: 'Antropometria',values : 20, route:'/Antropometria'},
          {icon: 'mdi-home',name: 'FMS',values : 21, route:'/FMS'},
      ]},
          {icon: 'mdi-folder', nombre:'Mis Test',subTitulo :[
           {icon: 'mdi-home',name: 'Ruffier',values : 22, route:'/TestRufier'},
          {icon: 'mdi-home',name: 'Ananmesis',values : 23, route:'/TestAnamnesis'},
          {icon: 'mdi-home',name: 'Antropometria',values : 24, route:'/TestAntropometria'},
          {icon: 'mdi-home',name: 'FMS',values : 25, route:'/TestFMS'},
      ]},
          {icon: 'mdi-folder', nombre:'Mi Menu',subTitulo :[
          {icon: 'mdi-home',name: 'Mi Rutina',values : 26, route:'/Rutina'},
          {icon: 'mdi-home',name: 'Inscribirse en Clases',values : 27, route:'/TomarClase'},
      ]},
          {icon: 'mdi-folder', nombre:'Kinesiologia',subTitulo :[
          {icon: 'mdi-home',name: 'Pacientes',values : 28, route:'/Pacientes'},
      ]},
          {icon: 'mdi-folder', nombre:'Consulta Compras',subTitulo :[
          {icon: 'mdi-home',name: 'Consulta Compras',values : 29, route:'/ComprasFecha'},
      ]},                
      
    ],
    tablaDatos:[
      
  ]
  ,
    cond: 0,


  },

  mutations: {
    // click1(state, values){  
     
    //   for (let index = 0; index < state.titulos2.length; index++) {
    //       const element = state.titulos2[index].subTitulo
    //      for (let index = 0; index < element.length; index++) {
    //          const eleme = element[index].values;
    //          if(values === eleme){
                 
    //          console.log('el numero es '+ eleme)
    //           state.cond = eleme
              
    //          }
             
    //      }
          
    //   }     
    planes(state){
      state.tablaDatos = [
        {
          text: 'Nombre', value: 'nombre' ,
          align: 'start',
          sortable: false,
          value: 'name',
        },
          { text: 'Estado', value: 'tipo' },
          { text: 'Actions', value: 'actions', sortable: false },

      ]
    },
    subPlanes(state){
      state.tablaDatos = [
        {
          text: 'Nombre Plan', value: 'nombre' ,
          align: 'start',
          sortable: false,
          value: 'name',
        },
          { text: 'Sub Plan', value: 'tipo' },
          { text: 'Valor Mensual', value: 'tipo' },
          { text: 'Valor trimestral', value: 'tipo' },
          { text: 'Valor Semestral', value: 'tipo' },
          { text: 'Valor Anual', value: 'tipo' },
          { text: 'Estado', value: 'tipo' },
          { text: 'Actions', value: 'actions', sortable: false },

      ]
    },
    ejercicios(state){
      state.tablaDatos = [
        {
          text: 'Nombre Ejercicio', value: 'nombre' ,
          align: 'start',
          sortable: false,
          value: 'name',
        },
          { text: 'Tipo Ejercicio', value: 'tipo' },
          { text: 'Imagen', value: 'tipo' },
          { text: 'URL', value: 'tipo' },
          { text: 'Observacion', value: 'tipo' },
          { text: 'Actions', value: 'actions', sortable: false },

      ]
    },
    nivel(state){
      state.tablaDatos = [
        {
          text: 'Nombre', value: 'nombre' ,
          align: 'start',
          sortable: false,
          value: 'name',
        },
          { text: 'Estado', value: 'tipo' },
          { text: 'Actions', value: 'actions', sortable: false },

      ]
    },
    bibliotecaRutinas(state){
      state.tablaDatos = [
        {
          text: 'Nombre Rutina', value: 'nombre' ,
          align: 'start',
          sortable: false,
          value: 'name',
        },
          { text: 'Nivel de Intensidad', value: 'tipo' },
          { text: 'Estado', value: 'tipo' },
          { text: 'Actions', value: 'actions', sortable: false },

      ]
    },
    
    clases(state){
      state.tablaDatos = [
        {
          text: 'Nombre', value: 'nombre' ,
          align: 'start',
          sortable: false,
          value: 'name',
        },
          { text: 'Profesor', value: 'tipo' },
          { text: 'Cupos Clase', value: 'imagen' },
          { text: 'URL', value: 'url' },
          { text: 'Hora Inicio', value: 'observacion'},
          { text: 'Hora fin', value: 'observacion'},
          { text: 'Estado', value: 'observacion'},
          { text: 'Actions', value: 'actions', sortable: false },

      ]
    },
    periodo(state){
      state.tablaDatos = [
        {
          text: 'Nombre ', value: 'nombre' ,
          align: 'start',
          sortable: false,
          value: 'name',
        },
          { text: 'Fecha Inicial ', value: 'tipo' },
          { text: 'Fecha Final', value: 'imagen' },
          { text: 'Estado', value: 'url' },
          { text: 'Actions', value: 'actions', sortable: false },

      ]
    },
    gastos(state){
      state.tablaDatos = [
        {
          text: 'Nombre Gasto', value: 'nombre' ,
          align: 'start',
          sortable: false,
          value: 'name',
        },
          { text: 'Estado', value: 'url' },
          { text: 'Actions', value: 'actions', sortable: false },

      ]
    },
    articulo(state){
      state.tablaDatos = [
        {
          text: 'Nombre ', value: 'nombre' ,
          align: 'start',
          sortable: false,
          value: 'name',
        },
          { text: 'Categoria ', value: 'tipo' },
          { text: 'Codigo', value: 'imagen' },
          { text: 'Stock', value: 'url' },
          { text: 'Imagen', value: 'url' },
          { text: 'Estado', value: 'url' },
          { text: 'Actions', value: 'actions', sortable: false },

      ]
    },
    categoria(state){
      state.tablaDatos = [
        {
          text: 'Nombre ', value: 'nombre' ,
          align: 'start',
          sortable: false,
          value: 'name',
        },
          { text: 'Descripcion ', value: 'tipo' },
          { text: 'Estado', value: 'url' },
          { text: 'Actions', value: 'actions', sortable: false },

      ]
    },
    ingreso(state){
      state.tablaDatos = [
        {
          text: 'Fecha ', value: 'nombre' ,
          align: 'start',
          sortable: false,
          value: 'name',
        },
          { text: 'Proveedor ', value: 'tipo' },
          { text: 'Usuario', value: 'url' },
          { text: 'Documento', value: 'url' },
          { text: 'Numero', value: 'url' },
          { text: 'Total Compra', value: 'url' },
          { text: 'Estado', value: 'url' },
          { text: 'Actions', value: 'actions', sortable: false },

      ]
    },
    proveedor(state){
      state.tablaDatos = [
        {
          text: 'Nombre ', value: 'nombre' ,
          align: 'start',
          sortable: false,
          value: 'name',
        },
          { text: 'Documento ', value: 'tipo' },
          { text: 'Numero', value: 'url' },
          { text: 'Telefono', value: 'url' },
          { text: 'Email', value: 'url' },
          { text: 'Actions', value: 'actions', sortable: false },

      ]
    },
    venta(state){
      state.tablaDatos = [
        {
          text: 'Fecha ', value: 'nombre' ,
          align: 'start',
          sortable: false,
          value: 'name',
        },
          { text: 'Cliente ', value: 'tipo' },
          { text: 'Usuario', value: 'url' },
          { text: 'Documento', value: 'url' },
          { text: 'Numero', value: 'url' },
          { text: 'Total Venta', value: 'url' },
          { text: 'Estado', value: 'url' },
          { text: 'Actions', value: 'actions', sortable: false },

      ]
    },
    cliente(state){
      state.tablaDatos = [
        {
          text: 'Nombre ', value: 'nombre' ,
          align: 'start',
          sortable: false,
          value: 'name',
        },
          { text: 'Documento ', value: 'tipo' },
          { text: 'Numero', value: 'url' },
          { text: 'Telefono', value: 'url' },
          { text: 'Email', value: 'url' },
          { text: 'Actions', value: 'actions', sortable: false },

      ]
    },
    usuario(state){
      state.tablaDatos = [
        {
          text: 'Nombre ', value: 'nombre' ,
          align: 'start',
          sortable: false,
          value: 'name',
        },
          { text: 'Sexo ', value: 'tipo' },
          { text: 'Rut', value: 'url' },
          { text: 'Telefono', value: 'url' },
          { text: 'Email', value: 'url' },
          { text: 'Login', value: 'url' },
          { text: 'Foto', value: 'url' },
          { text: 'Estado', value: 'url' },
          { text: 'Actions', value: 'actions', sortable: false },

      ]
    },
    permiso(state){
      state.tablaDatos = [
        {
          text: 'Permiso ', value: 'nombre' ,
          align: 'start',
          sortable: false,
          value: 'name',
        },
         

      ]
    },
    perfil(state){
      state.tablaDatos = [
        {
          text: 'Nombre ', value: 'nombre' ,
          align: 'start',
          sortable: false,
          value: 'name',
        },
          { text: 'Estado', value: 'url' },
          { text: 'Actions', value: 'actions', sortable: false },

      ]
    },
    ruffier(state){
      state.tablaDatos = [
        {
          text: 'Nombre Cliente', value: 'nombre' ,
          align: 'start',
          sortable: false,
          value: 'name',
        },
          { text: 'Imagen', value: 'url' },
          { text: 'Fecha Test', value: 'url' },
          { text: 'Rendimiento Ruffier', value: 'url' },
          { text: 'Indice Dickson', value: 'url' },
          { text: 'Estado Test', value: 'url' },
          { text: 'Actions', value: 'actions', sortable: false },

      ]
    },
    anamnesis(state){
      state.tablaDatos = [
        {
          text: 'Nombre Cliente', value: 'nombre' ,
          align: 'start',
          sortable: false,
          value: 'name',
        },
          { text: 'Imagen', value: 'url' },
          { text: 'Fecha Test', value: 'url' },
          { text: 'Objetivo', value: 'url' },
          { text: 'Observacion', value: 'url' },
          { text: 'Estado Test', value: 'url' },
          { text: 'Actions', value: 'actions', sortable: false },

      ]
    },
    antropometria(state){
      state.tablaDatos = [
        {
          text: 'Nombre Cliente', value: 'nombre' ,
          align: 'start',
          sortable: false,
          value: 'name',
        },
          { text: 'Imagen', value: 'url' },
          { text: 'Fecha Test', value: 'url' },
          { text: 'Peso', value: 'url' },
          { text: 'IMC', value: 'url' },
          { text: 'Estado Test', value: 'url' },
          { text: 'Actions', value: 'actions', sortable: false },

      ]
    },
    fms(state){
      state.tablaDatos = [
        {
          text: 'Nombre Cliente', value: 'nombre' ,
          align: 'start',
          sortable: false,
          value: 'name',
        },
          { text: 'Imagen', value: 'url' },
          { text: 'Fecha Test', value: 'url' },
          { text: 'Puntuacion', value: 'url' },
          { text: 'Observacion General', value: 'url' },
          { text: 'Estado Test', value: 'url' },
          { text: 'Actions', value: 'actions', sortable: false },

      ]
    },
    testRuffier(state){
      state.tablaDatos = [
        {
          text: 'Realizado Por', value: 'nombre' ,
          align: 'start',
          sortable: false,
          value: 'name',
        },
          { text: 'Imagen', value: 'url' },
          { text: 'Fecha Test', value: 'url' },
          { text: 'Rendimiento Ruffier', value: 'url' },
          { text: 'Indice Dickson', value: 'url' },
          { text: 'Estado Test', value: 'url' },
          { text: 'Actions', value: 'actions', sortable: false },

      ]
    },
    testAnamnesis(state){
      state.tablaDatos = [
        {
          text: 'Nombre Cliente', value: 'nombre' ,
          align: 'start',
          sortable: false,
          value: 'name',
        },
          { text: 'Imagen', value: 'url' },
          { text: 'Fecha Test', value: 'url' },
          { text: 'Objetivo', value: 'url' },
          { text: 'Observacion', value: 'url' },
          { text: 'Estado Test', value: 'url' },
          { text: 'Actions', value: 'actions', sortable: false },

      ]
    },
    testAntropometria(state){
      state.tablaDatos = [
        {
          text: 'Nombre Cliente', value: 'nombre' ,
          align: 'start',
          sortable: false,
          value: 'name',
        },
          { text: 'Imagen', value: 'url' },
          { text: 'Fecha Test', value: 'url' },
          { text: 'Peso', value: 'url' },
          { text: 'IMC', value: 'url' },
          { text: 'Estado Test', value: 'url' },
          { text: 'Actions', value: 'actions', sortable: false },

      ]
    },
    testFms(state){
      state.tablaDatos = [
        {
          text: 'Nombre Cliente', value: 'nombre' ,
          align: 'start',
          sortable: false,
          value: 'name',
        },
          { text: 'Imagen', value: 'url' },
          { text: 'Fecha Test', value: 'url' },
          { text: 'Puntuacion', value: 'url' },
          { text: 'Observacion General', value: 'url' },
          { text: 'Estado Test', value: 'url' },
          { text: 'Actions', value: 'actions', sortable: false },

      ]
    },
    rutina(state){
      state.tablaDatos = [
        {
          text: 'Nombre', value: 'nombre' ,
          align: 'start',
          sortable: false,
          value: 'name',
        },
          { text: 'Apellido', value: 'url' },
          { text: 'Fecha Creacion', value: 'url' },
          { text: 'Estado ', value: 'url' },
          { text: 'Actions', value: 'actions', sortable: false },

      ]
    },
    tomarClase(state){
      state.tablaDatos = [
        {
          text: 'Clase', value: 'nombre' ,
          align: 'start',
          sortable: false,
          value: 'name',
        },
          { text: 'Profesor', value: 'url' },
          { text: 'Cupos Totales', value: 'url' },
          { text: 'Inscritos ', value: 'url' },
          { text: 'Hora Inicio ', value: 'url' },
          { text: 'Hora Fin ', value: 'url' },
          { text: 'Estado ', value: 'url' },
          { text: 'Actions', value: 'actions', sortable: false },

      ]
    },
    pacientes(state){
      state.tablaDatos = [
        {
          text: 'Nombre Cliente', value: 'nombre' ,
          align: 'start',
          sortable: false,
          value: 'name',
        },
          { text: 'Imagen', value: 'url' },
          { text: 'Fecha Test', value: 'url' },
          { text: 'Rendimiento Ruffier ', value: 'url' },
          { text: 'Indice Dickson ', value: 'url' },          
          { text: 'Estado Test', value: 'url' },
          { text: 'Actions', value: 'actions', sortable: false },

      ]
    },
    comprasFecha(state){
      state.tablaDatos = [
        {
          text: 'Fecha', value: 'nombre' ,
          align: 'start',
          sortable: false,
          value: 'name',
        },
          { text: 'Usuario', value: 'url' },
          { text: 'Proveedor', value: 'url' },
          { text: 'Comprobante', value: 'url' },
          { text: 'Numero ', value: 'url' },          
          { text: 'Total Compra', value: 'url' },
          { text: 'Impuesto', value: 'url' },
          { text: 'Estado', value: 'url' },

      ]
    },
    ventasFecha(state){
      state.tablaDatos = [
        {
          text: 'Fecha', value: 'nombre' ,
          align: 'start',
          sortable: false,
          value: 'name',
        },
          { text: 'Usuario', value: 'url' },
          { text: 'Cliente', value: 'url' },
          { text: 'Comprobante', value: 'url' },
          { text: 'Numero ', value: 'url' },          
          { text: 'Total Venta', value: 'url' },
          { text: 'Impuesto', value: 'url' },
          { text: 'Estado', value: 'url' },

      ]
    },
    envio(state, sss){
      state.tituloTolbar = sss
    }
   


  },
  actions: {
    iniciar(context, val){
        // aqui llegaba el create
        const ele = val.valor
      

      console.log(ele)
      switch (ele) {
        case 1:
          context.commit('planes')
        break;
        case 2:
          context.commit('subPlanes')
          
        break;
        case 3:
          context.commit('ejercicios')
        break;
        case 4:
          context.commit('nivel')
        break;
        case 5:
          context.commit('bibliotecaRutinas')
        break;
        case 6:
          context.commit('clases')
        break;
        case 7:
          context.commit('periodo')
        break;
        case 8:
          context.commit('gastos')
        break;
        case 9:
          context.commit('articulo')
        break;
        case 10:
          context.commit('categoria')
        break;
        case 11:
          context.commit('ingreso')
        break;
        case 12:
          context.commit('proveedor')
        break;
        case 13:
          context.commit('venta')
        break;
        case 14:
          context.commit('cliente')
        break;
        case 15:
          context.commit('usuario')
        break;
        case 16:
          context.commit('permiso')
        break;
        case 17:
          context.commit('perfil')
        break;
        case 18:
          context.commit('anamnesis')
        break;
        case 19:
          context.commit('antropometria')
        break;
        case 20:
          context.commit('fms')
        break;
        case 21:
          context.commit('testRuffier')
        break;
        case 22:
          context.commit('testAnamnesis')
        break;
        case 23:
          context.commit('testAntropometria')
        break;
        case 24:
          context.commit('testFms')
        break;
        case 25:
          context.commit('rutina')
        break;
        case 26:
          context.commit('tomarClase')
        break;
        case 27:
          context.commit('pacientes')
        break;
        case 28:
          context.commit('comprasFecha')
        break;
        case 29:
          context.commit('ventasFecha')
        break;
      }

    },
    subti(context, sub){
     
      var sss = sub.sub
      context.commit('envio',sss)


    },
    tit2(context, e){
      const ele = e.eleme
      console.log(ele)
      switch (ele) {
        case 1:
          context.commit('planes')
        break;
        case 2:
          context.commit('subPlanes')
          
        break;
        case 3:
          context.commit('ejercicios')
        break;
        case 4:
          context.commit('nivel')
        break;
        case 5:
          context.commit('bibliotecaRutinas')
        break;
        case 6:
          context.commit('clases')
        break;
        case 7:
          context.commit('periodo')
        break;
        case 8:
          context.commit('gastos')
        break;
        case 9:
          context.commit('articulo')
        break;
        case 10:
          context.commit('categoria')
        break;
        case 11:
          context.commit('ingreso')
        break;
        case 12:
          context.commit('proveedor')
        break;
        case 13:
          context.commit('venta')
        break;
        case 14:
          context.commit('cliente')
        break;
        case 15:
          context.commit('usuario')
        break;
        case 16:
          context.commit('permiso')
        break;
        case 17:
          context.commit('perfil')
        break;
        case 18:
          context.commit('anamnesis')
        break;
        case 19:
          context.commit('antropometria')
        break;
        case 20:
          context.commit('fms')
        break;
        case 21:
          context.commit('testRuffier')
        break;
        case 22:
          context.commit('testAnamnesis')
        break;
        case 23:
          context.commit('testAntropometria')
        break;
        case 24:
          context.commit('testFms')
        break;
        case 25:
          context.commit('rutina')
        break;
        case 26:
          context.commit('tomarClase')
        break;
        case 27:
          context.commit('pacientes')
        break;
        case 28:
          context.commit('comprasFecha')
        break;
        case 29:
          context.commit('ventasFecha')
        break;
          
        
      }
      
     
      
      
    }
  },
  modules: {
  }
})
