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
var panel = '<div class="col-sm-3" style="height: 100vh; border-left: 10px solid red">'+
		'<img style="width:80%; margin: auto; display: block; margin-top: 120px;" src="https://www.intersoftware.org.co/sites/default/files/logos_marcas_internas/logos-21.png">'+
		'<h3 style="font:normal bold 23px Segoe UI; text-align: center">Seleccione su interés:</h3>'+
		'<form id="formGroupPrincipal">'+
		'<div class="form-group">'+
		'<select class="form-control" id="sel1" style="border-radius: 8px!important;" name="nieve">'+
		'<option>Inicio</option>'+
		'<option>Tiempo por Ciudad</option>'+
		'<option>Tiempo por Institución</option>'+
		'</select>'+
		'</div>'+
		'</form>'+
		'<h6 id="copyright" style="width:80%; margin: auto; text-align: center; position: relative; top: 100px;">'+
		'ESTE PROGRAMA ES DESARROLLADO COMO DEMOSTRACIÓN DE UN PRODUCTO Y NO PUEDE SER COPIADO NI EDITADO O DISTRIBUIDO SIN LA AUTORIZACIÓN EXPLICITA DE SU CREADOR'+
		'</h6>';

var dashboard0 = '<div class="col-sm-9" style="padding:15%; height: 100vh;" id="dash1">'+
				'</div>'+
				'<div class="centerTextPanel">'+
				'<h2 style="width:80%; padding-left:10%; font:30px bold Segoe UI;">PROTOCOLOS Y REGULACIÓN DE INVIMA</h2>'+
				'<h6 style="font:25px normal Segoe UI; padding-left:10%">Las normas científicas, técnicas y administrativas para la investigación en salud están reguladas por la resolución 8430 de 1993, el siguiente programa espera ser una ayuda en las elecciones que como empresa lleven a la mejor eficiencia en el desarrollo de sus protocolos.</h6>'+
				'</div>';
				
var dashboard1 = '<frame src="https://drageloz.us.qlikcloud.com/single/?appid=8b8c56c3-f568-41f5-9cd8-6c7770031840&sheet=967f58e4-f464-4aae-8bec-336ca37b1e16&opt=ctxmenu,currsel&select=clearall" style="border:none;width:100%;height:100%;"></frame>'

var dashboard2 =
		'<div class="col-sm-9">'+
		'<h1 style="text-align: center;">TIEMPO POR CIUDAD</h1>'+
		'<h4 style="text-align: center;">Tiempo promedio en el que una institución se demora en completar el protocolo</h4>'+
		'<div class="alert alert-danger alert-dismissible" role="alert" style="display:none">'+
		'<button type="button" class="close" id="closeerr" aria-label="Close"><span aria-hidden="true">×</span></button>'+
		'<span id="errmsg"></span>'+
		'</div>'+
		'<div class="row">'+
		'<div class="col-sm-6 qvobject" id="QV07">'+
		'</div>'+
		'<div class="col-sm-6 qvobject" id="QV08">'+
		'</div>'+
		'</div>'+
		'<div class="row">'+
		'<div class="col-sm-6 qvobject" id="QV01">'+
		'</div>'+
		'<div class="col-sm-6">'+
		'<div class="qvobject" id="QV04"></div>'+
		'<div class="qvobject" id="QV06"></div>'+
		'</div>'+
		'</div>'+
		'</div>';
		
var dashboard2 = '<div class="col-sm-9">'+
		'<div class="alert alert-danger alert-dismissible" role="alert" style="display:none">'+
		'<button type="button" class="close" id="closeerr" aria-label="Close"><span aria-hidden="true">×</span></button>'+
		'<span id="errmsg"></span>'+
		'</div>'+
		'<div class="row">'+
		'<div class="col-sm-8 qvobject" id="QV05">'+
		'</div>'+
		'<div class="col-sm-4 qvobject" id="QV06">'+
		'</div>'+
		'</div>'+
		'<div class="row">'+
		'<div class="col-sm-4 qvobject" id="QV03">'+
		'</div>'+
		'<div class="col-sm-8 qvobject" id="QV04">'+
		'</div>'+
		'</div>'
		'</div>';

document.getElementById("panel").innerHTML = panel;
var selectElement = document.getElementById('sel1');

//Create Interactivity among dashboards
jQuery.loadScript = function (url, callback) {
    jQuery.ajax({
        url: url,
        dataType: 'script',
        success: callback,
        async: true
    });
}


document.getElementById("dashboard").innerHTML = dashboard0;
selectElement.addEventListener('change', (event) => {
	if(selectElement.selectedIndex==0){
		document.getElementById("dashboard").innerHTML = dashboard0;
	}
	if(selectElement.selectedIndex==1){
		var citiesControl = document.createElement('div');
		citiesControl.className = "qvobject";
		citiesControl.id = "QV11"
		document.getElementById("dashboard").innerHTML = dashboard1;
		var referenceCities = document.getElementById("formGroupPrincipal");
		referenceCities.parentNode.insertBefore(citiesControl, referenceCities.nextSibling);
		$.loadScript('dashboardINVIMA.js', function(){
		});
	}
	if(selectElement.selectedIndex==2){
		document.getElementById("dashboard").innerHTML = dashboard2;
		$.loadScript('dashboardINVIMA.js', function(){
		});
	}
});