const Home = ()=> import('./components/Home.vue');
const Contacto = ()=> import('./components/Contacto.vue');


const Mostrar = ()=> import('./components/producto/Mostrar.vue');
const Crear = ()=> import('./components/producto/Crear.vue');
const Editar = ()=> import('./components/producto/Editar.vue');

export const routes = [
    {
        name:'home',
        path:'/',
        component:Home
    },
    {
        name:'contacto',
        path:'/contacto',
        component:Contacto
    },
    {
        name:'mostrarProductos',
        path:'/productos',
        component:Mostrar
    },
    {
        name:'crearProducto',
        path:'/crear',
        component:Crear 
    },
    {
        name:'editarProducto',
        path:'/producto/:id',
        component:Editar
    }
    


];