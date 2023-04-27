

const button = document.getElementById("button");
button.addEventListener("click", ()=>{
getDatosAxios();
})   

const buttonEliminar = document.getElementById("buttonEliminar");
buttonEliminar.addEventListener("click", ()=>{
deleteDatosAxios();
})   

const buttonEditar = document.getElementById("buttonEditar");
buttonEditar.addEventListener("click", ()=>{
editDatosAxios();
}) 

const buttonCrear = document.getElementById("buttonCrear");
buttonCrear.addEventListener("click", ()=>{
CrearEditorialAxios();
}) 


//GET
getDatosAxios =()=> {
    axios({
        method: "GET",
        url :"http://localhost:8000/api/editoriales/"
    }).then((res) => {
        const list = document.getElementById("lista");
        const framgment = document.createDocumentFragment();
        for(const userInfo of res.data){
            const itemList = document.createElement("li");
            itemList.textContent = `${userInfo.codigo_editorial} - ${userInfo.nombre_editorial}`;
            framgment.appendChild(itemList);
        }
        list.appendChild(framgment);
    })
    .catch((err) => console.log(err));
};

//POST
CrearEditorialAxios=()=> {
    var codEdit = document.getElementById('codEditorial').value;
    var nombreEdit = document.getElementById('nombreEditorial').value;
    var contacto = document.getElementById('contacto').value;
    var telefono = document.getElementById('telefono').value;
    axios.post('http://localhost:8000/api/editoriales/create',{
    codigo_editorial: 'codEdit',    
    nombre_editorial: 'nombreEdit',
    contacto: 'contacto',
    telefono: 'telefono'
    }).then((res)=> console.log(res))
    .catch((err)=> console.log(err))
}


//PUT
editDatosAxios=()=> {
    axios.put('http://localhost:8000/api/editoriales/edit/'+ codEdit,{
    codigo_editorial: 'codEdit',    
    nombre_editorial: 'nombreEdit',
    contacto: 'contacto',
    telefono: 'telefono'
    }).then((res)=> console.log(res))
    .catch((err)=> console.log(err))
}

//DELETE
deleteDatosAxios=()=> {
    axios.delete('http://localhost:8000/api/editoriales/edit/'+ codEdit,{
    codigo_editorial: 'codEdit',    
    nombre_editorial: 'nombreEdit',
    contacto: 'contacto',
    telefono: 'telefono'
    }).then((res)=> console.log(res))
    .catch((err)=> console.log(err))
}

