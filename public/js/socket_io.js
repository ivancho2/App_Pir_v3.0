$(function() {
	console.log("init main");
	// $socket = io.connect('172.27.2.140:8080', {
	// $socket = io.connect('192.168.3.102:8080', {
	$socket = io.connect('/', {
		'forceNew': true
	});
  $socket.on('connect', function() {
		console.log('--- conectado a socket.io');
	});

	var $form_index = $('#form_index');
	var $ESP8266_CODE = $('#ESP8266_CODE');
	var $tbody_DasgBoard = $('#tbody_DasgBoard');
	var $tx_log = $('#tx_log');

	array_registered = [];
	$form_index.on('submit', function(event) {
		event.preventDefault();
		console.log("submit form => " + JSON.stringify(array_registered));
		$socket.emit('register', {
			[$ESP8266_CODE.val()]: {
				state: 'true'
			}
		});
		$ESP8266_CODE.val('');
	});
	$socket.on('update_registered', function(data) {
		array_registered = data;
		console.log("Update => " + JSON.stringify(array_registered));
		render(array_registered);
	});

	// $socket.on('push_register', function(data) {
	// 	console.log("Push Register: "+JSON.stringify(data));
	// 	render(array_registered);
	// });
	$socket.on('update_state', function(data) {
		console.log("up_state => " + JSON.stringify(data));
		array_registered.push(data);
	});

	$socket.on('log', function(data) {
		$tx_log.prepend(data.toString() + "\n");
	});

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
					if (itemk == 'true') {
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
		// console.log("render: " + html);
		$tbody_DasgBoard.empty();
		$tbody_DasgBoard.append(html);
	}
})

function changeState(element) {
	// console.log(element);
	// console.log(element.id);
	// console.log(array_registered);

	$.each(array_registered, function(i, item) { // i = key,  item = value
		$.each(item, function(j, itemj) {
			if (j == element.id) {
				array_registered[i][j]['state'] = element.checked.toString();
				// console.log(array_registered[i][j]['state']);
				var up = {
					[element.id.toString()]: {
						state: element.checked.toString()
					}
				};
				$socket.emit('UPDATE', up); //enviamos el objeto modificado para actualizar
				// console.log(up);
			}
		});
	});
}
