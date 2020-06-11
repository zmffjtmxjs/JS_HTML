//Creater.js, Deleter.js, Updater.js 모두가 사용하는 코드(변수선언, 함수) 등을 포함

var G_name = document.getElementById("G_name").value;
var G_age = document.getElementById("G_age").value;
var G_phone_number = document.getElementById("G_phone_number").value;
var G_join_date = document.getElementById("G_join_date").value;
var G_payment_date = document.getElementById("G_payment_date").value;
var G_endup_date = document.getElementById("G_endup_date").value;
var G_weight_at_join = document.getElementById("G_weight_at_join").value;
var G_weight_at_update = document.getElementById("G_weight_at_update").value;
var G_target_weight = document.getElementById("G_target_weight").value;

var member_index = 1;

//날짜 유효성 검사
function isNotDatetime(d){
    var re = /[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;
    //         yyyy -       MM      -       dd           
    if (re.test(d))
        return false;
    return true;
}

//전화번호 유효성 검사
function isNotCellPhone(str) {
	var regTel = /^(01[016789]{1}|070|02|0[3-9]{1}[0-9]{1})-[0-9]{3,4}-[0-9]{4}$/;
	if(!regTel.test(str)) {
		return true;
	}
	return false;
};