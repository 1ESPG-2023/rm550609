const usuario1 ={
   nomeUsario:"predo",
   senhaUsuario:"12345"
}

// vamos criar um objt para armazenar o nosso usuario

const usuario2 ={
   nomeUsario:"anzina",
   senhaUsuario:"6789"
}

let listaDeUsuarios = []
listaDeUsuarios.push(usuario1);
listaDeUsuarios.push(usuario2);

localStorage.setItem("listaUser", listaDeUsuarios)

addEventListener("click", (evento)=>{

   evento.preventDefault();

     //console.log(evento.target.id == "btnSubmit");

     if(evento.target.id == "btnSubmit"){
   
      usuario.nomeUsuario = document.querySelector("#idUser").value;
      senha.senhaUsuario = document.querySelector("#idPass").value;

      let lista = JSON.parse(localStorage.getItem(("listaUser"));
      let listaDeUsuarios = JSON.parse(lista);

      lista.forEach(usuario)=>{
         console.log(usuario.nomeUsario)
      });


      const h1Titulo = document.querySelector("#titulo");
     //validação
      if (usuario.nomeUsuario == "rm97973" && senha.senhaUsuario == "rm97973") {
         console.log("Validado");
         const h1Titulo = document.querySelector("#Título");
         h1.h1Titulo.innerHTML = "Bem Vindo : " = usuario.nomeUsuario;

      }else{

         console.log("Não Validou");

      }
   }


});

    












