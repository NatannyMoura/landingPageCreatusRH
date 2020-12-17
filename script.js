document.getElementById("botao").disabled = true;

//cria um event listener que escuta mudanças no input
document.getElementById("email").addEventListener("input", function(event){
    
    //busca conteúdo do input
      var conteudo = document.getElementById("email").value;
    
      //valida conteudo do input 
      if (conteudo !== null && conteudo !== '') {
        //habilita o botão
        document.getElementById("botao").disabled = false;
        document.getElementById("botao").classList.add("btn-enviar-active");
      } else {
        //desabilita o botão se o conteúdo do input ficar em branco
        document.getElementById("botao").classList.remove("btn-enviar-active");
        document.getElementById("botao").disabled = true;
        

      }
  });