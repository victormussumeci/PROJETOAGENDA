const form= document.getElementById('formulario')
const body= document.querySelector('tbody')
var conteudos=''
form.addEventListener('submit',function(e){
    e.preventDefault()
    const nome=document.getElementById('nome').value
    const tel=document.getElementById('telefone').value
    var linha=``
    linha+=`<tr>`
    linha+=`<td>${nome}</td>`
    linha+=`<td>${tel}</td></tr>`
    conteudos+=linha
    body.innerHTML=conteudos
})