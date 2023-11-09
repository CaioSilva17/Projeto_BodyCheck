

const calcular = document.querySelector('.calcular');

function limparImc (){
   nome.value = '';
   peso.value = '';
   idade.value = '';
   altura.value = '';
   resultado.textContent = '';
   seletorsexo = '';
}

function imc () {
    const nome = document.getElementById('nome').value;
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const resultado = document.getElementById('resultado');

    if(nome !=='' && peso !=='' && altura !==''){

     const valorIMC = (peso / (altura * altura)).toFixed(1);

     let classificacao = '';


      if(valorIMC < 18.5){
         classificacao = 'abaixo do peso.';
      }else if (valorIMC < 25){
         classificacao = 'com peso ideal. Parabéns!';
      }else if (valorIMC < 30){
         classificacao = 'levemente acima do peso.';
      }else if (valorIMC < 35){
         classificacao = 'com obesidade grau I.';
      }else if (valorIMC < 40){
         classificacao = 'com obesidade grau II';
      }else {
         classificacao = 'com obesidade grau III. Cuidado!';
      }
     

    resultado.textContent = `${nome}, seu IMC é ${valorIMC} e você está ${classificacao}`;

    }else {
       resultado.textContent = 'Preencha todos os Campos!'
    }



}
calcular.addEventListener('click', imc);


// gráfico

const data =  { 


   labels :  [ 
   'Massa Gorda' , 
   'Massa Residual' , 
   'Massa Muscular' 
   ] , 
   datasets :  [ { 
   label :  'My First Dataset' , 
   data :  [ 4 ,  1 ,  2 ] , 
   backgroundColor :  [ 
        'blue', 
        'red' , 
        'green' 
   ] , 
   hoverOffset :  4 
   } ] 
   } ;

   const config = {
   type: 'doughnut',
   data: data,
   options: {
     animation : {
         duration : 800

     },
   }
   };
   
   const myChart = new Chart(
     document.getElementById('chart'),
     config
   );




   //calculo avaliação corporal

   function clicar2() {
      var nome = document.getElementById('nome').value;
      var seletorsexo = document.getElementById('seletorDeSexo').value;
      var idade = document.querySelector('#idade').value;
      var peso = document.getElementById('peso').value;
      var altura = document.getElementById('altura').value;
      var tricipital = document.querySelector("#tricipital").value;
      var bicipital = document.querySelector("#bicipital").value;
      var peitoral = document.querySelector("#peitoral").value;
      var subescapular = document.querySelector("#subescapular").value;
      var axilarmedia = document.querySelector('#axilarmedia').value;
      var suprailacia = document.querySelector('#suprailacia').value;
      var abdominal = document.querySelector('#abdominal').value;
      var coxa = document.querySelector('#coxa').value;
      var panturrilha = document.querySelector('#panturrilha').value;
      var pescoco = document.querySelector('#pescoco').value;
      var ombro = document.querySelector('#ombro').value;
      var torax = document.querySelector('#torax').value;
      var cintura = document.querySelector('#cintura').value;
      var abdome = document.querySelector('#abdome').value;
      var quadril = document.querySelector('#quadril').value;
      var bracoesque = document.querySelector('#bracoesque').value;
      var antebracoesque = document.querySelector('#antebracoesque').value;
      var coxaperiesque = document.querySelector('#coxaperiesque').value;
      var panturrilhaperiesque = document.querySelector('#panturrilhaperiesque').value;
      var bracodire = document.querySelector('#bracodire').value;
      var antebracodire = document.querySelector('#antebracodire').value;
      var coxaperidire = document.querySelector('#coxaperidire').value;
      var panturrilhaperi = document.querySelector('#panturrilhaperi').value;
      var seletor = document.getElementById('seletorDeDobras').value;
       


      if (nome !='' && seletorsexo!='' && idade !='' && peso!='' && altura!=''){
         if (tricipital!='' && bicipital!='' && peitoral!='' && subescapular!=''&& axilarmedia!='' && suprailacia!='' && abdominal!='' && coxa!='' && panturrilha!='') {
             if (seletor != '') {
                 if(seletorsexo == 'Masculino'){
                     if (seletor == 'Guedes 3 Dobras'){
                         alert("seletor guedes Masculino")
             
                         somadasdobras = parseInt(tricipital) + parseInt(suprailacia) + parseInt(abdominal) ;
             
                         densidade = 1.1714 - 0.0671 * Math.log10(somadasdobras);
             
                         gorduracomp = (495/densidade) - 450;
                         document.querySelector("#gorduracomp").innerHTML = Number(gorduracomp.toFixed(2)) ;
             
                         massacomp = (gorduracomp/100) * peso;
                         document.querySelector("#massacomp").innerHTML = Number(massacomp.toFixed(2)) ;
             
                         massalivrecomp = 100 - gorduracomp;
                         document.querySelector("#massalivrecomp").innerHTML = Number(massalivrecomp.toFixed(2)) ;
             
                         massaolivrekg = (massalivrecomp/100) * peso;
                         document.querySelector("#massaolivrekg").innerHTML = Number(massaolivrekg.toFixed(2)) ;
             
                         areamuscular = Math.pow([((parseInt(bracodire) + parseInt(bracoesque))/2) - (3.14 * tricipital)], 2) / (4 * 3.14 - 10.0);
                 
                         massamuscularcomp = altura * [0.0264 + (0.029 * areamuscular)];
                         document.querySelector("#massamuscularcomp").innerHTML = Number(massamuscularcomp.toFixed(2));
             
                         massaresicomp = massaolivrekg - (massacomp + massamuscularcomp);
                         document.querySelector("#massaresicomp").innerHTML = Number(massaresicomp.toFixed(2));
                     }
                     if (seletor == 'Jackson e Pollock 3 dobras (18 a 61 anos)'){
                         alert("seletor jackson 3 dobras Masculino")
                         
             
                         somadasdobras = parseInt(peitoral) + parseInt(abdominal) + parseInt(coxa) ;
             
                         densidade = 1.10938 - 0.0008267 * (somadasdobras) + 0.0000016 * Math.pow(somadasdobras, 2) - 0.0002574 * idade ;
             
                         gorduracomp = (495/densidade) - 450;
                         document.querySelector("#gorduracomp").innerHTML = Number(gorduracomp.toFixed(1)) ;
             
                         massacomp = (gorduracomp/100) * peso;
                         document.querySelector("#massacomp").innerHTML = Number(massacomp.toFixed(2)) ;
             
                         massalivrecomp = 100 - gorduracomp;
                         document.querySelector("#massalivrecomp").innerHTML = Number(massalivrecomp.toFixed(2)) ;
             
                         massaolivrekg = (massalivrecomp/100) * peso;
                         document.querySelector("#massaolivrekg").innerHTML = Number(massaolivrekg.toFixed(2)) ;
             
                         areamuscular = Math.pow([((parseInt(bracodire) + parseInt(bracoesque))/2) - (3.14 * tricipital)], 2) / (4 * 3.14 - 10.0);
                 
                         massamuscularcomp = altura * [0.0264 + (0.029 * areamuscular)];
                         document.querySelector("#massamuscularcomp").innerHTML = Number(massamuscularcomp.toFixed(2));
             
                         massaresicomp = massaolivrekg - (massacomp + massamuscularcomp);
                         document.querySelector("#massaresicomp").innerHTML = Number(massaresicomp.toFixed(2));
             
                     }
                     if (seletor == 'Jackson e Pollock 7 dobras (18 a 61 anos)'){
                         alert("Jackson e Pollock 7 dobras (18 a 61 anos) Masculino")
             
                         somadasdobras = parseInt(peitoral) + parseInt(axilarmedia) + parseInt(tricipital) + parseInt(subescapular) + parseInt(abdominal) + parseInt(suprailacia) + parseInt(coxa) ;
             
                         densidade = 1.112 - 0.00043499 * (somadasdobras) + 0.00000055 * Math.pow(somadasdobras, 2) - 0.00028826 * idade;
             
                         gorduracomp = (495/densidade) - 450;
                         document.querySelector("#gorduracomp").innerHTML = Number(gorduracomp.toFixed(2)) ;
             
                         massacomp = (gorduracomp/100) * peso;
                         document.querySelector("#massacomp").innerHTML = Number(massacomp.toFixed(2)) ;
             
                         massalivrecomp = 100 - gorduracomp;
                         document.querySelector("#massalivrecomp").innerHTML = Number(massalivrecomp.toFixed(2)) ;
             
                         massaolivrekg = (massalivrecomp/100) * peso;
                         document.querySelector("#massaolivrekg").innerHTML = Number(massaolivrekg.toFixed(2)) ;
             
                         areamuscular = Math.pow([((parseInt(bracodire) + parseInt(bracoesque))/2) - (3.14 * tricipital)], 2) / (4 * 3.14 - 10.0);
                 
                         massamuscularcomp = altura * [0.0264 + (0.029 * areamuscular)];
                         document.querySelector("#massamuscularcomp").innerHTML = Number(massamuscularcomp.toFixed(2));
             
                         massaresicomp = massaolivrekg - (massacomp + massamuscularcomp);
                         document.querySelector("#massaresicomp").innerHTML = Number(massaresicomp.toFixed(2));
                     }
                     if (gorduracomp < '11'){
                        document.querySelector("#classgordura").innerHTML = "Atleta";
                     }
                     else if (gorduracomp < '13' && gorduracomp > '11' ){
                        document.querySelector("#classgordura").innerHTML = "Bom";
                     }
                     else if (gorduracomp < '20' && gorduracomp > '14' ){
                        document.querySelector("#classgordura").innerHTML = "Normal";
                     }
                     else if (gorduracomp < '23' && gorduracomp > '21' ){
                        document.querySelector("#classgordura").innerHTML = "Elevado";
                     }
                     else if (gorduracomp > '23' ){
                        document.querySelector("#classgordura").innerHTML = "Elevado";
                     }
                     else{
                        document.querySelector("#classgordura").innerHTML = "Indeterminado";
                     }
                 }else{
                     if (seletor == 'Guedes 3 Dobras'){
                         alert("seletor guedes Feminino")
             
                         somadasdobras = parseInt(coxa) + parseInt(suprailacia) + parseInt(subescapular) ;
             
                         densidade = 1.1665 - 0.0706 * Math.log10(somadasdobras);
             
                         gorduracomp = (501/densidade) - 457;
                         document.querySelector("#gorduracomp").innerHTML = Number(gorduracomp.toFixed(2)) ;
             
                         massacomp = (gorduracomp/100) * peso;
                         document.querySelector("#massacomp").innerHTML = Number(massacomp.toFixed(2)) ;
             
                         massalivrecomp = 100 - gorduracomp;
                         document.querySelector("#massalivrecomp").innerHTML = Number(massalivrecomp.toFixed(2)) ;
             
                         massaolivrekg = (massalivrecomp/100) * peso;
                         document.querySelector("#massaolivrekg").innerHTML = Number(massaolivrekg.toFixed(2)) ;
             
                         areamuscular = Math.pow([((parseInt(bracodire) + parseInt(bracoesque))/2) - (3.14 * tricipital)], 2) / (4 * 3.14 - 10.0);
                 
                         massamuscularcomp = altura * [0.0264 + (0.029 * areamuscular)];
                         document.querySelector("#massamuscularcomp").innerHTML = Number(massamuscularcomp.toFixed(2));
             
                         massaresicomp = massaolivrekg - (massacomp + massamuscularcomp);
                         document.querySelector("#massaresicomp").innerHTML = Number(massaresicomp.toFixed(2));
                     }
                     if (seletor == 'Jackson e Pollock 3 dobras (18 a 61 anos)'){
                         alert("seletor jackson 3 dobras Feminino")
             
                         somadasdobras = parseInt(tricipital) + parseInt(suprailacia) + parseInt(coxa);
             
                         densidade = 1.099421 - 0.0009929 * (somadasdobras) + 0.0000023 * Math.pow(somadasdobras, 2) - 0.0001392 * idade ;
             
                         gorduracomp = (501/densidade) - 457;
                         document.querySelector("#gorduracomp").innerHTML = Number(gorduracomp.toFixed(1)) ;
             
                         massacomp = (gorduracomp/100) * peso;
                         document.querySelector("#massacomp").innerHTML = Number(massacomp.toFixed(2)) ;
             
                         massalivrecomp = 100 - gorduracomp;
                         document.querySelector("#massalivrecomp").innerHTML = Number(massalivrecomp.toFixed(2)) ;
             
                         massaolivrekg = (massalivrecomp/100) * peso;
                         document.querySelector("#massaolivrekg").innerHTML = Number(massaolivrekg.toFixed(2)) ;
             
                         areamuscular = Math.pow([((parseInt(bracodire) + parseInt(bracoesque))/2) - (3.14 * tricipital)], 2) / (4 * 3.14 - 10.0);
                 
                         massamuscularcomp = altura * [0.0264 + (0.029 * areamuscular)];
                         document.querySelector("#massamuscularcomp").innerHTML = Number(massamuscularcomp.toFixed(2));
             
                         massaresicomp = massaolivrekg - (massacomp + massamuscularcomp);
                         document.querySelector("#massaresicomp").innerHTML = Number(massaresicomp.toFixed(2));
             
                     }
                     if (seletor == 'Jackson e Pollock 7 dobras (18 a 61 anos)'){
                         alert("Jackson e Pollock 7 dobras (18 a 61 anos) Feminino")
             
                         somadasdobras = parseInt(tricipital) + parseInt(suprailacia) + parseInt(coxa) + parseInt(peitoral) + parseInt(abdominal) + parseInt(axilarmedia) + parseInt(subescapular);
             
                         densidade = 1.097 - 0.00046971 * (somadasdobras) + 0.00000056 * Math.pow(somadasdobras, 2) - 0.00012828 * idade ;
             
                         gorduracomp = (501/densidade) - 457;
                         document.querySelector("#gorduracomp").innerHTML = Number(gorduracomp.toFixed(2)) ;
             
                         massacomp = (gorduracomp/100) * peso;
                         document.querySelector("#massacomp").innerHTML = Number(massacomp.toFixed(2)) ;
             
                         massalivrecomp = 100 - gorduracomp;
                         document.querySelector("#massalivrecomp").innerHTML = Number(massalivrecomp.toFixed(2)) ;
             
                         massaolivrekg = (massalivrecomp/100) * peso;
                         document.querySelector("#massaolivrekg").innerHTML = Number(massaolivrekg.toFixed(2)) ;
             
                         areamuscular = Math.pow([((parseInt(bracodire) + parseInt(bracoesque))/2) - (3.14 * tricipital)], 2) / (4 * 3.14 - 10.0);
                 
                         massamuscularcomp = altura * [0.0264 + (0.029 * areamuscular)];
                         document.querySelector("#massamuscularcomp").innerHTML = Number(massamuscularcomp.toFixed(2));
             
                         massaresicomp = massaolivrekg - (massacomp + massamuscularcomp);
                         document.querySelector("#massaresicomp").innerHTML = Number(massaresicomp.toFixed(2));
             
                     }
                     if (gorduracomp < '16'){
                        document.querySelector("#classgordura").innerHTML = "Atleta";
                     }
                     else if (gorduracomp < '19' && gorduracomp > '16' ){
                        document.querySelector("#classgordura").innerHTML = "Bom";
                     }
                     else if (gorduracomp < '28' && gorduracomp > '20' ){
                        document.querySelector("#classgordura").innerHTML = "Normal";
                     }
                     else if (gorduracomp < '31' && gorduracomp > '29' ){
                        document.querySelector("#classgordura").innerHTML = "Elevado";
                     }
                     else if (gorduracomp > '31' ){
                        document.querySelector("#classgordura").innerHTML = "Elevado";
                     }
                     else{
                        document.querySelector("#classgordura").innerHTML = "Indeterminado";
                     }
                  }          
             }else {
               alert ("**** Preencha o seletor de Dobras ****");
               }
         }else {
            alert("**** Preencha as Dobras Cutâneas e Perimetrias ****")
            }
      }else {
         alert ("**** Preencha os dados do Aluno e o Imc ****")
         }  
   }

   

   function print_pdf(){
      var pegar_dados = document.getElementById('dados').innerHTML;
      var janela =  window.open('','','width=800, heigth=600');
      janela.document.write('<html><head>');
      janela.document.write('<title>Avaliação Física</title>');   // <title> CABEÇALHO DO PDF.
      janela.document.write('</head>');
      janela.document.write('<body>');
      janela.document.write(pegar_dados);                          // O CONTEUDO DA TABELA DENTRO DA TAG BODY
      janela.document.write('</body></html>');
      janela.document.close();
      janela.print();
   }
      
   
