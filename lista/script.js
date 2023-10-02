const btn_agregar= document.getElementById("btn_agregar")
const txtClick= document.getElementById("txtClick")
var Id= document.getElementById("id")
const nombre= document.getElementById("nombre")
const cantidad= document.getElementById("cantidad")
const precio= document.getElementById("precio")
const descripcion= document.getElementById("descripcion")
var TBody = document.getElementById("TableBody");
var id=1;

window.onload=function () {
    //alert('tset');

}

//region agregar


btn_agregar.addEventListener("click",function(){
    let txtClick=document.getElementById("txtclick")
    let btn_agregar= document.getElementById("btn_agregar")
    let Id=document.getElementById("id").value
    let nombre= document.getElementById("nombre").value
    let cantidad= document.getElementById("cantidad").value
    let precio= document.getElementById("precio").value
    let descripcion= document.getElementById("descripcion").value

    TBody.innerHTML = TBody.innerHTML +"<tr id='"+id+"'>"+
    "<td>"+Id+"</td>"+
    "<td>"+nombre+"</td>"+
    "<td>"+cantidad+"</td>"+
    "<td>"+precio+"</td>"+
    "<td>"+descripcion+"</td>"+
    "<td><button onclick='Eliminar("+id+")'>Eliminar</button></td>"+
"</tr>";
id = id +1;
document.getElementById(id).innerHTML = "" 



})
function Eliminar(id){
    document.getElementById(id).innerHTML=""
 }