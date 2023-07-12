const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = loginForm['email'].value;
  const password = loginForm['password'].value;

  if(email.length < 1) showAlert('¡Alerta!','Ingresa tu código de usuario','warning');
  else if(password.length < 1) showAlert('¡Alerta!','Ingresa la contraseña','warning');
  else window.location.href = "menu.html";
});

const showforgotPasswordModal1 = () =>{
	$("#passwordPopup").modal("show");
}

const emailSend = () =>{
	$("#passwordPopup").modal("hide");
	showAlert('¡Listo!','El enlace fue enviado a tu correo','success');
}

const showAlert = (title,text,type) => {

	Swal.fire({
	  icon: type,
	  title: title,
	  text: text,
	  showConfirmButton: false,
	  timer: 2000
	})
}