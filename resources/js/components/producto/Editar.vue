<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4>Editar Producto</h4>
                </div>
                <div class="card-body">
                    <form @submit.prevent="actualizar">
                        <div class="row">
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Nombre</label>
                                    <input type="text" class="form-control" v-model="producto.nombre">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Cantidad</label>
                                    <input type="text" class="form-control" v-model="producto.cantidad">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Precio</label>
                                    <input type="text" class="form-control" v-model="producto.precio">
                                </div>
                            </div>
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary">Guardar</button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>

        </div>
    </div>
</template>
<script>
export default {
    name:"editar-producto",
    data(){
        return{
            producto:{
                nombre:"",
                cantidad:"",
                precio:""
            }
        }
    },
    mounted(){
        this.mostrarProducto()
    },
    methods:{
        async mostrarProducto(){
            this.axios.get(`/api/producto/${this.$route.params.id}`)
            .then(response=>{
                const {nombre,cantidad,precio}=response.data
                this.producto.nombre=nombre,
                this.producto.cantidad=cantidad,
                this.producto.precio=precio
            })
            .catch(error=>{
                console.log(error)
            })
        },
        async actualizar(){
            this.axios.put(`/api/producto/${this.$route.params.id}`,this.producto)
            .then(response=>{
                this.$router.push({
                    name:"mostrarProductos"
                })
            })
            .catch(error=>{
                console.log(error)
            })
        }
    }
}
</script>