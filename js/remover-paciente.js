var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick",function(event){
     
    var alvoEvento = event.target;
    var paiDoAlvo = alvoEvento.parentNode;

    paiDoAlvo.classList.add("fadeOut");

    if(alvoEvento.tagName == 'TD') {
    setTimeout(function(){
        paiDoAlvo.remove();
    },1000);
}
});











/*pacientes.forEach(function(paciente){
    paciente.addEventListener("dblclick", function(){
        console.log("Fui Clicadinhonw");
        this.remove();
    })
})*/