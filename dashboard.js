//list of objects
	//app.getObject('QV11','R');
	//app.getObject('QV10','sjjGu'); button
	//app.getObject('QV09','sHbKzaJ');
	//app.getObject('QV08','hKrxWa'); kpi
	//app.getObject('QV07','PzLXTW'); kpi
	//app.getObject('QV06','vmjEe');
	//app.getObject('QV05','GDaKyD');
	//app.getObject('QV03','GDaKyD');
	//app.getObject('QV04','pkAupnv');
	//app.getObject('QV02','UeVHJvD');
	//app.getObject('QV01','SZMFY'); map

// JavaScript
//create peace of codes in html
var charging = '<div id="charging" class="col-sm-12">'+
		'<img style="width:25%; margin: 30vh auto; display: block;" src="https://www.intersoftware.org.co/sites/default/files/logos_marcas_internas/logos-21.png">'+
		'<div id="contenedor">'+
            '<div class="loader" id="loader">Loading...</div>'+
 		'</div>'+
	'</div>';

var panel = '<div style="height: 100vh; border-left: 10px solid red">'+
		'<div class="container">'+
		'<img style="width:80%; margin: auto; display: block; padding-top: 120px;" src="https://www.intersoftware.org.co/sites/default/files/logos_marcas_internas/logos-21.png">'+
		'<h3 style="font:normal bold 23px Segoe UI; text-align: center">Seleccione su interés:</h3>'+
		'<form id="formGroupPrincipal">'+
		'<div class="form-group">'+
		'<select class="form-control" id="sel1" style="border-radius: 8px!important;" name="nieve">'+
		'<option>Inicio</option>'+
		'<option>Tiempo por Ciudad</option>'+
		'<option>Tiempo por Institución</option>'+
		'<option>Mejores Instituciones</option>'+
		'</select>'+
		'</div>'+
		'</form>'+
		'<h6 id="copyright" style="width:80%; margin: auto; text-align: center; position: relative; top: 100px; font-weight:100; font: 12px black Times New Roman, sans-serif;">'+
		'ESTE PROGRAMA ES DESARROLLADO COMO DEMOSTRACIÓN DE UN PRODUCTO Y NO PUEDE SER COPIADO NI EDITADO O DISTRIBUIDO SIN LA AUTORIZACIÓN EXPLICITA DE SU CREADOR'+
		'</h6>'+
		'</div>';

var dashboard0 = '<div style="padding:15%; height: 100vh;" id="dash1">'+
				'</div>'+
				'<div class="centerTextPanel">'+
				'<h2 style="width:80%; padding-left:10%; font:30px bold Segoe UI;">PROTOCOLOS Y REGULACIÓN DE INVIMA</h2>'+
				'<h6 style="font:25px normal Segoe UI; padding-left:10%">Las normas científicas, técnicas y administrativas para la investigación en salud están reguladas por la resolución 8430 de 1993, el siguiente programa espera ser una ayuda en las elecciones que como empresa lleven a la mejor eficiencia en el desarrollo de sus protocolos.</h6>'+
				'</div>';
				
var dashboard1 = ' <h1 style="position: absolute; top: 50px; z-index: 1; margin: 0px 12%;">TIEMPO EMPLEADO POR INSTITUCIÓN</h1>'+
'<div style="position: absolute;top: 90px;z-index: 1;margin: 0px 15%;">Tiempo promedio en el que una institución se demora en completar el protocolo</div>'+
'<div style="position: absolute;top: 25vh;z-index: 1;margin: 0px 60px;font-weight: 780;color: grey;">Promedio duración total de protocolos en días</div>'+
'<div style="position: absolute; top: 25vh; z-index: 1; right: 50px; margin: 0px 130px 0px 0px;font-weight: 780;color: grey;">Numero de instituciones</div>';

var dashboard2 ='<h1 style="position: absolute; top: 50px; z-index: 1; margin: 0px 12%;">TIEMPO EMPLEADO POR CIUDAD</h1>';
		

document.getElementById("dashboard").innerHTML = charging;
setTimeout(() => {  
	document.getElementById("panel").innerHTML = panel;
	var selectElement = document.getElementById('sel1');
	document.getElementById("dashboard").innerHTML = dashboard0;

	selectElement.addEventListener('change', (event) => {
	if(selectElement.selectedIndex==0){
		document.getElementById("dashboard").innerHTML = dashboard0;
		document.getElementById("qlik").style.display="none";
		document.getElementById("qlik1").style.display="none";
	}
	if(selectElement.selectedIndex==1){
		document.getElementById("dashboard").innerHTML = dashboard1;
		document.getElementById("qlik").style.display="block";
		document.getElementById("qlik1").style.display="none";
	}
	if(selectElement.selectedIndex==2){
		document.getElementById("dashboard").innerHTML = dashboard2;
		document.getElementById("qlik1").style.display="block";
		document.getElementById("qlik").style.display="none";
	}
});
}, 1000);

