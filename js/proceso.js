
function hallarTotal () {
	let xpre = parseFloat($("#xpre").val());
	let xcan = parseFloat($("#xcan").val());
	
	$("#xtot").val(xpre * xcan);
}

function comprarProducto() {
	if (parseFloat($("#xcan").val()) > 0) {
		Swal.fire({
                position : 'center',
                icon : 'success',
                title : 'Felicidades, el producto se enviara pronto',
                showConfirmButton: false,
                timer : 1500
            })
		$("#xcan").val(0);
		hallarTotal()
	} else {
		Swal.fire({
                icon : 'error',
                title : 'Error',
                text : 'Seleccione una cantidad'
            })
	}
	
}