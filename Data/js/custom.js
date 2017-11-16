$(function(){
var countryOptions;
var stateOptions;
var districtOptions;
	$.getJSON('js/countries.json',function(result){
		$.each(result, function(i,country) {
			//<option value='countrycode'>contryname</option>
			countryOptions+="<option value='"
			+country.code+
			"'>"
			+country.name+
			"</option>";
			 });
			 $('#country').html(countryOptions);
	});
	$("#country").change(function(){
	if($(this).val()=="IN"){
			$.getJSON('js/indianStates.json',function(result){
			$.each(result, function(stateCode,stateName) {
				//<option value='stateCode'>stateName</option>
				stateOptions+="<option value='"
				+stateCode+
				"'>"
				+stateName+
				"</option>";
				 });
				 $('#state').html(stateOptions);
			});
		}
	});	
	$("#state").change(function(){
	if($(this).val()=="MH"){
			$.getJSON('js/MHDistricts.json',function(result){
			$.each(result, function(i,district) {
				//<option value='districtName'>districtName</option>
				districtOptions+="<option value='"
				+district.name+
				"'>"
				+district.name+
				"</option>";
				 });
				 $('#district').html(districtOptions);
			});
		}
	});	
});
