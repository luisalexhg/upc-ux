const showforgotPasswordModal = () =>{
	$("#passwordPopup").modal("show");
}

const emailSend = () =>{
	$("#passwordPopup").modal("hide");
	showAlert('El enlace fue enviado a tu correo','success');
}

const showAlert = (text,type) => {

	Swal.fire({
	  icon: type,
	  title: '¡Listo!',
	  text: text,
	  showConfirmButton: false,
	  timer: 2000
	})
}