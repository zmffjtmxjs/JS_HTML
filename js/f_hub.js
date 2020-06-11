//Creater.js, Deleter.js, Updater.js 모두가 사용하는 코드(변수선언, 함수) 등을 포함

// var G_name = document.getElementById("G_name").value;
// var G_age = document.getElementById("G_age").value;
// var G_sex
// var G_phone_number = document.getElementById("G_phone_number").value;
// var G_join_date = document.getElementById("G_join_date").value;
// var G_payment_date = document.getElementById("G_payment_date").value;
// var G_endup_date = document.getElementById("G_endup_date").value;
// var G_weight_at_join = document.getElementById("G_weight_at_join").value;
// var G_weight_at_update = document.getElementById("G_weight_at_update").value;
// var G_target_weight = document.getElementById("G_target_weight").value;

/*
CTID_*는 각 고객정보에 대한 식별값임
*/

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

//CT_select이름을 가진 radio 버튼중 선택된 것의 CTID값을 가져옴
function CT_selecter(){
    var d = document.getElementsByName('CT_select');
    for (var i = 0; i < d.length; i++) {
        if (d[i].checked) {          
            return d[i].value;
        }
    }
}

//테이블 값 가져오기
function CT_info(){
    var CTID_num = CT_selecter();
    var info_data = new Array();
    for(var col = 1; col <= 10; col++) {
        info_data[col-1] = document.getElementById(CTID_num+`-`+col).innerHTML;
    }
    return info_data;
}

function disable_edit_lunch(id, bool){
   return document.getElementById(id).disabled = bool;
}

//테이블 내에 있는 라디오 버튼에 대한 입력폼의 반응
function G_listRadio_action(){
    var Q_selected = CT_selecter()
    var field_name = ["G_name", "G_age", "G_sex", "G_phone_number", "G_join_date", "G_payment_date", "G_endup_date", "G_weight_at_join", "G_weight_at_update", "G_target_weight"];
    
    if (Q_selected == "new"){                                //신규 사용자에 체크될 경우 입력폼의 값을 변수로 가져옴.
        disable_edit_lunch("create", false);
        disable_edit_lunch("update", true);
        disable_edit_lunch("delete", true);
        disable_edit_lunch("G_payment_date", true);
        disable_edit_lunch("G_weight_at_update", true);
        disable_edit_lunch("G_weight_at_join", false);
        disable_edit_lunch("G_join_date", false);
        for(var col = 0; col < field_name.length; col++){
            if(col == 2){
                document.getElementById('male').checked = false;
                document.getElementById('female').checked = false;
            } else{
                document.getElementById(field_name[col]).value = "";
            }
        }
    } else if(Q_selected != undefined){                      //라디오가 신규(왼쪽 끝 하단)에 체크되어 있지 않으면 체크된 라디오 행의 데이터를 입력폼으로 가져옴.
        disable_edit_lunch("create", true);
        disable_edit_lunch("update", false);
        disable_edit_lunch("delete", false);
        disable_edit_lunch("G_payment_date", false);
        disable_edit_lunch("G_weight_at_update", false);
        disable_edit_lunch("G_weight_at_join", true);
        disable_edit_lunch("G_join_date", true);

        var info_data = CT_info();
        for(var col = 0; col < field_name.length; col++){
            if(col == 2){
                if(info_data[col] == "남성")
                    document.getElementById('male').checked = true;
                else
                    document.getElementById('female').checked = true;
            } else{
                document.getElementById(field_name[col]).value = info_data[col];
            }
        }
    }
}