
// Trim 함수 ##################################################
// Ex) str = "    테 스트   ".trim(); => str = "테 스트";
String.prototype.trim = function() {
	return this.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g,'');
}

// 문자열 공백제거 함수 ##################################################
// Ex) str = "    테 스   트   ".stripspace(); => str = "테스트";
String.prototype.stripspace = function() {
	return this.replace(/ /g, '');
}

// 전체 문자열 바꾸기 함수 ##################################################
// Ex) str = "a테스트bcd테스트efg".replaceAll("테스트", ""); => str = "abcdefg";
String.prototype.replaceAll = function(a, b) {
	var s = this;
	if (navigator.userAgent.toLowerCase().indexOf('msie') != -1)
		return s.replace(new RegExp(a, 'gi'), b);
	else
		return s.split(a).join(b);
}

// 숫자변환 함수 ##################################################
// Ex) str = "a테스트bcd테스트efg".replaceAll("테스트", ""); => str = "abcdefg";
String.prototype.toNumeric = function() {
	var s = this;
	s = (typeof s == 'undefined' ? '0' : s.toString().replace(/,/g, ''));
	if (isNaN(s) || s.replace(/ /g, '') == '') return 0;
	else	return parseFloat(s);
}


common = {};

/** 빈 값 체크 */
common.isEmpty = function(obj) {
	var str = obj + "";
	if(str == null || str == "null" || str == undefined || str == "undefined" || str.replace(/(\s*)/gi,"") == ""){
		return true;
	}else{
		return false;
	}
}

common.isNullToString = function (obj) {
	var str = obj + "";
	if(str == null || str == "null" || str == undefined || str == "undefined" || str.replace(/(\s*)/gi,"") == ""){
		return "";
	}else{
		return str.trim();
	}
}


common.form = function (obj){
	var html = '';
	//console.log(Object.keys(data).length);
	var arr = Object.getOwnPropertyNames(obj);
	for(var i=0; i<arr.length; i++){
		html += '<input type="hidden" name="'+arr[i]+'" value="'+obj[arr[i]]+'">';
	}
}

//입력값 validation : commonUtil.formValid("#mainForm")
common.formValid = function(selector) {
	var items = $(selector).find('input,select,textarea');
	var isValid = true;
	$.each(items, function(idx, rs){
		rs = $(rs);
		// 필수 입력 체크 : 체크할 객체 class="_required_" / title=이름
		var isRequried = rs.hasClass("_required_");
		//console.log({isRequried:isRequried, name:rs.attr('name'), class:rs.attr("class")});
		if( isRequried ) {
			if( $.trim(rs.val()) == '' ) {
				mobileUi.toast(rs.attr('title')+"을(를) 입력해주세요.");
				setTimeout(function(){rs.focus();},2100);
				isValid = false;
				return false;
			}
		}
		// 최대 입력 문자수 체크 : 체크할 객체 class="_length_" / maxlength=최대입력문자수 / title=이름
		var isMaxlength = rs.hasClass("_length_");
		if( isMaxlength ) {
			var maxlength = rs.attr("maxlength");
			var inputlength = rs.val().length;
			if( inputlength > maxlength ) {
				mobileUi.toast("["+rs.attr('title')+"] [입력글자수:"+inputlength+"] 최대 입력 가능한 글자수는 "+maxlength +"입니다.");
				setTimeout(function(){rs.focus();},2100);
				isValid = false;
				return false;
			}
		}
	});
	return isValid;
}
/*
$(document).ready(function(){
	$('input').keyup(function(){
		if ($(this).val().length > $(this).attr('maxlength')){
			console.log('제한길이 초과');
			$(this).val($(this).val().substr(0, $(this).attr('maxlength')));
			return false;
		}
	});
});
*/

/**
 * 두 날짜의 차이를 일자로 구한다.(조회 종료일 - 조회 시작일)
 *
 * @param s - 조회 시작일(날짜 ex.2002-01-01)
 * @param e - 조회 종료일(날짜 ex.2002-01-01)
 * @return 기간에 해당하는 일자
 */
common.diffDate = function(s, e) {
	var FORMAT = "-";

	// FORMAT을 포함한 길이 체크
	if (s.length != 10 || e.length != 10) { return null; }

	// FORMAT이 있는지 체크
	if (s.indexOf(FORMAT) < 0 || e.indexOf(FORMAT) < 0) { return null; }

	// 년도, 월, 일로 분리
	var start_dt = s.split(FORMAT);
	var end_dt = e.split(FORMAT);

	// 월 - 1(자바스크립트는 월이 0부터 시작하기 때문에...)
	// Number()를 이용하여 08, 09월을 10진수로 인식하게 함.
	start_dt[1] = (Number(start_dt[1]) - 1) + "";
	end_dt[1] = (Number(end_dt[1]) - 1) + "";

	var from_dt = new Date(start_dt[0], start_dt[1], start_dt[2]);
	var to_dt = new Date(end_dt[0], end_dt[1], end_dt[2]);

	return (to_dt.getTime() - from_dt.getTime()) / 1000 / 60 / 60 / 24;
}

/* 숫자 입력만 허용 */
common.numInput = function(obj) {
	$(obj).on({
		input : function(){
			this.value = this.value.replace(/[^0-9]/g, '');
		}
	});
}

common.numPointMinusInput = function(obj) {
	$(obj).on({
		input : function(){
			this.value = this.value.replace(/[^0-9.-]/g, '');
		}
	});
}

/* 숫자 입력만 허용 ( 소수점 포함 ) */
common.numPointput = function(obj) {
	$(obj).on({
		input : function(){
			this.value = this.value.replace(/[^0-9.]/g, '');
		}
	});
}

/* 숫자,영어 입력만 허용 */
common.engNumInput = function(obj) {
	$(obj).on({
		input : function(){
			this.value = this.value.replace(/[^A-Za-z0-9]/g, '');
		}
	});
}

common.numComaInput = function(obj) {
	$(obj).on({
		input : function(){
			this.value = this.value.replace(/[^0-9,]/g, '');
		}
	});
}
common.numDpput = function(obj) {
	$(obj).on({
		input : function(){
			this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');
		}
	});
}

/* 한글이 입력되는 현상 발생 */
common.numKeyDown = function(obj) {
	$(obj).on({
		keydown : function(event){
			var keyCd = event.keyCode;
			if((keyCd >= 48 && keyCd <= 57) || (keyCd >= 96 && keyCd <= 105) || keyCd == 8
			   || (keyCd >= 33 && keyCd <= 40) || keyCd == 13 || keyCd == 9 || keyCd == 46){
				return true;
			}else{
				return false;
			}
		}
	});
}

/* 한글이 입력되는 현상 발생 */
common.numKeyPress = function(obj) {
	$(obj).on({
		keypress : function(event){
		  if(event.key === '.' || event.key === '-' || event.key >= 0 && event.key <= 9) {
		    return true;
		  }
		  return false;
		}
	});
}

common.numReplace = function($obj) {
	$obj.val($obj.val().replace(/[^0-9]/g));
	$obj.val($obj.val().replace("undefined",""));
}

common.onlyInt = function(obj) {
	if (obj.disabled) return false;

	var num = obj.value.stripspace();
	if (num == '') return false;

	if (!/^-?[\d]+$/.test(num)) {
		num = common.stripCharFromNum(num, 0);
		obj.blur(); obj.focus();
	}
	num = common.stripCharFromNum(num, 0);
	obj.value = num;
}

common.stripCharFromNum = function (value, dec) {
	var result = '';
	for (var i=0; i<value.length; i++) {
		var chr = value.charAt(i);
		switch (chr) {
			case '-':
				if (i == 0) result += '-';
			break;
			case '.':
				if (dec && result.indexOf('.') < 0) result += '.';
			break;
			default:
				if ('1234567890'.indexOf(chr) > -1) result += chr;
		}
	}
	return result;
}

/*
 * TAG disable setting
 * argument 1 : disabled true or false
 * argument n : class name
 */
common.tagDisable = function(...args){
	for(var k=1; k<args.length; k++){
		$("."+args[k]).attr("disabled", args[0]);
	}
/*	for(var k=1 in arguments){$("."+arguments[k]).attr("disabled", arguments[0]);} */
}
