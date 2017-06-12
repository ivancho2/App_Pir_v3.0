$(function() {
	$identificacion_Persona=document.getElementById("int_identificacion_Persona").value;
	console.log("init main");
	var dir_server=window.location.hostname+':'+window.location.port;
	console.log(dir_server);
	$socket = io.connect(dir_server, {
		'forceNew': true
	});
	$socket.on('connect', function() {
		console.log('--- conectado a socket.io');
	});
	$socket.on('update_registered', function(data) {

	});

	$socket.on('message', function(data) {
		console.log('---message from server----');
		console.log(data);
		$socket.emit('message','mensage recibido desde el cliente');
	});

	$socket.on('UPDATE_Cambiar_Estado_Modulo', function(data) {
		console.log(data);
		document.getElementById(data.str_Codigo_Nomenclatura_Modulo).checked=((data.int_estado_switch_Modulo) ? true : false);
		// $checkbox = document.getElementById(data.str_Codigo_Nomenclatura_Modulo);
		// console.log($checkbox);
	});
	$socket.on('UPDATE_Cambiar_Estado_Grupo', function(data) {
		console.log(data);
		document.getElementById(data.int_id_Grupo_Modulos).checked=((data.int_estado_switch_Grupo_Modulos) ? true : false);
		$socket.emit('Solicitud_Listas');
	});
	$socket.on('Lista_Modulos', function(data) {
		console.log('Lista_Modulos:');
		console.log(data);
		for (var i = 0; i < data.length; i++) {
			console.log(data[i]);
			document.getElementById(data[i].Codigo_Nomenclatura_Modulo).checked=((data[i].estado_switch_Modulo) ? true : false);
			console.log('_______________');
		}
	});
	// ----------------------------------------------------------------------------------
	function render(array) {
		var html = "";
		// console.log("render: " + html);
		$.each(array, function(i, item) { // i = key,  item = value
			$.each(item, function(j, itemj) {
				// console.log(j);
				$.each(itemj, function(k, itemk) {
					// console.log(itemk);
					html += "\n" +
					"<tr>\n" +
					"<td>" + j + "</td>\n" +
					"<td>";
					if (itemk == 'on') {
						html += `<label class="switch">
						<input id="` + j + `" type="checkbox" checked="" class="inputdemo" onchange="changeState(this);">
						<div class="slider round"></div>
						</label>`;
					} else {
						html += `<label class="switch w3-margin-right">
						<input id="` + j + `" type="checkbox" class="inputdemo" onchange="changeState(this);">
						<div class="slider round"></div>
						</label>`;
					}
					html += "</td>\n" +
					"</tr>";
				});
			});
		});
		$tbody_DasgBoard.empty();
		$tbody_DasgBoard.append(html);
	}
})

function changeState_modulo(element) {
	console.log('----------');
	console.log($identificacion_Persona);
	console.log('ChangeState clic DIV');
	// console.log(element.checked);
	Obj={
		str_Codigo_Nomenclatura_Modulo:element.id,
		int_estado_switch_Modulo:((element.checked) ? 1 : 0),
		int_Persona_identificacion_Persona:$identificacion_Persona
	};
	console.log(Obj);
	$socket.emit('Cambiar_Estado_Modulo',Obj);
}
function changeState_grupo(element) {
	console.log('----------');
	console.log($identificacion_Persona);
	console.log('ChangeState clic DIV');
	// console.log(element.checked);
	Obj={
		int_id_Grupo_Modulos:element.id,
		int_estado_switch_Grupo_Modulos:((element.checked) ? 1 : 0),
		int_Persona_identificacion_Persona:$identificacion_Persona
	};
	console.log(Obj);
	$socket.emit('Cambiar_Estado_Grupo',Obj);
}

function justNumbers(e){
	var keynum = window.event ? window.event.keyCode : e.which;
	if ((keynum == 8) || (keynum == 46))
	return true;

	return /\d/.test(String.fromCharCode(keynum));
}
