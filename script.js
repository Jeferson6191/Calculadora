var numero1 = document.querySelector("#Ibtn");
var numero2 = document.querySelector("#IIbtn");
var numero3 = document.querySelector("#IIIbtn");
var numero4 = document.querySelector("#IVbtn");
var numero5 = document.querySelector("#Vbtn");
var numero6 = document.querySelector("#VIbtn");
var numero7 = document.querySelector("#VIIbtn");
var numero8 = document.querySelector("#VIIIbtn");
var numero9 = document.querySelector("#IXbtn");
var numero0 = document.querySelector("#Xbtn");
var resultado = document.querySelector("#resusttxt");
var menos = document.querySelector("#menosbtn");
var mais = document.querySelector("#maisbtn");
var vezes = document.querySelector("#vezesbtn");
var igual = document.querySelector("#igualbtn");
var C = document.querySelector("#C");

var indexone =[];
var indextwo = [];

var contaswitch=false
var afterigual=false
var resultindex
mais.addEventListener('click', ()=>{
    if (contaswitch==true) {
        window.alert("ja foi pressionado")
    }else{
        resultado.innerHTML+="+"
       
        resultindex = "+"
    }
     contaswitch=true
})

menos.addEventListener('click', ()=>{
    if (contaswitch==true) {
        window.alert("ja foi pressionado")
    }else{
        resultado.innerHTML+="-"
        resultindex = "-"
    }
    contaswitch=true
})
vezes.addEventListener('click', ()=>{
    if (contaswitch==true) {
        window.alert("ja foi pressionado")
    }else{
        resultado.innerHTML+="x"
        resultindex = "*"
    }
    contaswitch=true
})
C.addEventListener('click', ()=>{
        desativar()
        return resultado.innerHTML=''
})
igual.addEventListener('click', ()=>{
    
    var indexoneresult = Number(indexone.join(''));
    var indextworesult = Number(indextwo.join(''));
   

    afterigual = true
    if (resultindex =="*") {
        resultado.innerHTML=String(indexoneresult*indextworesult)
    }else if (resultindex =='-') {
        resultado.innerHTML=String(indexoneresult-indextworesult)
    }else if (resultindex =='+') {
        resultado.innerHTML=String(indexoneresult+indextworesult)
    }else{
        resultado.innerHTML = String(indexoneresult)
        
    }

    desativar()
})




function desativar() {
    indexone = [];
    indextwo = [];
    indexoneresult = '';
    indextworesult = '';
    multiplicou = false;
    somou = false;
    sub = false;
    contaswitch=false
    resultindex = 0
}



numero1.addEventListener('click', ()=>{
    indexes(1) 
});
numero2.addEventListener('click', ()=>{
    indexes(2) 
});
numero3.addEventListener('click', ()=>{
    indexes(3) 
});
numero4.addEventListener('click', ()=>{
    indexes(4) 
});
numero5.addEventListener('click', ()=>{
    indexes(5) 
});
numero6.addEventListener('click', ()=>{
    indexes(6) 
});
numero7.addEventListener('click', ()=>{
    indexes(7) 
});
numero8.addEventListener('click', ()=>{
    indexes(8) 
});
numero9.addEventListener('click', ()=>{
    indexes(9) 
});

numero0.addEventListener('click', ()=>{
    indexes(0) 
});

function indexes(param){
    if (afterigual == true) {
        resultado.innerHTML='';
        afterigual = false;

    }
    switch (contaswitch) {
        case false:
                indexone.push(param)
                clickonbtn1(param)     
            break;
    
        default:
                indextwo.push(param)
                clickonbtn1(param)      
            break;
    }
}



function clickonbtn1(param) {

    return resultado.innerHTML+=String(param);



}

