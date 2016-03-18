(function(){

	API_COTIZACION_DOLAR = "http://ws.geeklab.com.ar/dolar/get-dolar-json.php";

	var datosDolar = {};

	datosDolar.Oficial;
	datosDolar.Blue;

	$.getJSON(API_COTIZACION_DOLAR, obtenerDolar);

	function obtenerDolar(data){
		datosDolar.Oficial = data.libre;
		datosDolar.Blue = data.blue;
		console.log(data);

		$(".app__Names--Oficial").html(datosDolar.Oficial);
		$(".app__Names--Blue").html(datosDolar.Blue);
		
		
	
		var usuarioPor =	$("#datoPor").val(datosDolar.Oficial);

		var usuarioPorBlue = $("#datoBlue").val(datosDolar.Blue);

		$(".mostrar").click(function(){
			var usuarioData = $("#datoUser").val();
			var usuarioOficial = datosDolar.Oficial;

			var resultadoOficial = usuarioData * usuarioOficial;

			alert("Resultado: " + resultadoOficial + " Pesos Argentinos");

		});

		$(".mostrarBlue").click(function(){
			var usuarioData = $("#datoUserBlue").val();
			var usuarioBlue = datosDolar.Blue;

			var resultadoBlue = usuarioData * usuarioBlue;

			alert("Resultado: " + resultadoBlue + " Pesos Argentinos")

		});

	};


	$(".jsMenu").click(function(){
		$(".app__Ul").toggle('slide');
	});



})();