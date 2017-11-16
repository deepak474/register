var $pro = $('#prof');

$.getJSON('js/def.JSON',function(data){
	$pro.html('');
	
	for(var i = 0; i < data['prof'].length; i++){
		$pro.append('<option id="'+data['prof'][i]['id']+ '">' + data['prof'][i]['name'] + '</option>');
	}
});



var $rel = $('#religion');
$.getJSON('js/def.JSON',function(data){
	$rel.html('');
	
	for(var j = 0; j < data['religion'].length; j++){
		$rel.append('<option id="'+data['religion'][j]['id']+ '">' + data['religion'][j]['name'] + '</option>');
	}
});
	

var $mtong = $('#mtounge');
$.getJSON('js/def.JSON',function(data){
	$mtong.html('');
	
	for(var k = 0; k < data['mtounge'].length; k++){
		$mtong.append('<option id="'+data['mtounge'][k]['id']+ '">' + data['mtounge'][k]['name'] + '</option>');
	}
});	


var $mcont = $('#M_COUNTRYCODE');
$.getJSON('js/def.JSON',function(data){
	$mcont.html('');
	
	for(var l = 0; l < data['M_COUNTRYCODE'].length; l++){
		$mcont.append('<option id="'+data['M_COUNTRYCODE'][l]['id']+ '">' + data['M_COUNTRYCODE'][l]['name'] + '</option>');
	}
});	


var $mcast = $('#mcaste');
$.getJSON('js/def.JSON',function(data){
	$mcast.html('');
	
	for(var m = 0; m < data['mcaste'].length; m++){
		$mcast.append('<option id="'+data['mcaste'][m]['id']+ '">' + data['mcaste'][m]['name'] + '</option>');
	}
});	


var $mhed = $('#hed');
$.getJSON('js/def.JSON',function(data){
	$mhed.html('');
	
	for(var f = 0; f < data['hed'].length; f++){
		$mhed.append('<option id="'+data['hed'][f]['id']+ '">' + data['hed'][f]['name'] + '</option>');
	}
});	


var $moccu = $('#occupation');
$.getJSON('js/def.JSON',function(data){
	$moccu.html('');
	
	for(var g = 0; g < data['occupation'].length; g++){
		$moccu.append('<option id="'+data['occupation'][g]['id']+ '">' + data['occupation'][g]['name'] + '</option>');
	}
});	

var $mcur = $('#curr');
$.getJSON('js/def.JSON',function(data){
	$mcur.html('');
	
	for(var h = 0; h < data['curr'].length; h++){
		$mcur.append('<option id="'+data['curr'][h]['id']+ '">' + data['curr'][h]['name'] + '</option>');
	}
});	