let $form = document.querySelector('form');

$form.addEventListener('submit',(event) => {
  event.preventDefault();
  
  let $usuario = document.querySelector('#usuario');
  let $password = document.querySelector('#password');
  
 if($usuario.value == ""){
   alert('El campo usuario no puede estar vacío');
 }else if($usuario.value == "@"){
   alert('El campo usuario no puede estar vacío');
 }else if ($password.value == ""){
   alert ('El campo clave no puede estar vacío')
 }else if ($usuario.value.includes("@") == false){
   alert ('Recuerde que el usuario debe contener una "@"')
 }else{
   $form.submit();
 }
});






