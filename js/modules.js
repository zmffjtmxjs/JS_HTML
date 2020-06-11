//두기능 이상이 사용하는 코드(변수선언, 함수 등)를 포함

var member_index = 1;
var field_name = ["get_name", "get_age", "get_sex", "get_phone_number", "get_join_date", "get_payment_date", "get_endup_date", "get_weight_at_join", "get_weight_at_update", "get_target_weight"];

//날짜 유효성 검사
function is_not_date(d) {
    var re = /[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;
    //         yyyy -       MM      -       dd           
    if (re.test(d))
        return false;
    return true;
}

//전화번호 유효성 검사
function is_not_cell_phone(str) {
	var regTel = /^(01[016789]{1}|070|02|0[3-9]{1}[0-9]{1})-[0-9]{3,4}-[0-9]{4}$/;
	if(!regTel.test(str)) {
		return true;
	}
	return false;
};

//입력값 유효성 검사
function get_value_checker(get_values) {
    for (var arr_num = 0; arr_num <= 9; arr_num++) {
        var value_check = get_values[arr_num];
        
        //성별은 라디오 타입이므로 예외처리
        if(arr_num == 2) {
            if(value_check == '') {
                alert("성별을 체크해주세요.");
                return false;
            }
            continue;
        }
        
        //삽입, 수정당시 입력이 가능했던 것들만 유효성 검사
        if(document.getElementById(field_name[arr_num]).disabled === false) {
            switch(arr_num) {
                case 0:
                    if(value_check == '') {
                        alert("이름을 입력해주세요.");
                        return false;
                    }
                    break;
                case 1:
                    if((value_check == '') || (Number.isInteger(value_check))) {
                        alert("입력한 나이를 확인해주세요.");
                        return false;
                    }
                    break;
                case 3:
                    if((value_check == '') || (is_not_cell_phone(value_check))) {
                        alert("입력한 전화번호를 확인해주세요.");
                        return false;
                    }
                    break;
                case 4:
                    if((value_check == '') || (is_not_date(value_check))) {
                        alert("입력한 가입일을 확인해주세요.");
                        return false;
                    }
                    break;
                case 5:
                    if((value_check == '') || (is_not_date(value_check))) {
                        alert("입력한 결제일을 확인해주세요.");
                        return false;
                    }
                    break;
                case 6:
                    if((value_check == '') || (is_not_date(value_check))) {
                        alert("입력한 만료일을 확인해주세요.");
                        return false;
                    }
                    break;
                case 7:
                    if((value_check == '') || (Number.isInteger(value_check))) {
                        alert("입력한 현재 몸무게를 확인해주세요.");
                        return false;
                    }
                    break;
                case 8:
                    if((value_check == '') || (Number.isInteger(value_check))) {
                        alert("입력한 갱신시 몸무게를 확인해주세요.");
                        return false;
                    }
                    break;
                case 9:
                    if((value_check == '') || (Number.isInteger(value_check))) {
                        alert("입력한 목표 몸무게를 확인해주세요.");
                        return false;
                    }
                    break;
            }
        }
    }
    return true;
}

//member_select이름을 가진 radio 버튼중 선택된 것의 member_index_id값을 가져옴
function member_selecter() {
    var d = document.getElementsByName('member_select');
    for (var i = 0; i < d.length; i++) {
        if (d[i].checked) {          
            return d[i].value;
        }
    }
}

//테이블 값 가져오기
function member_info() {
    var member_index_id_num = member_selecter();
    var info_data = new Array();
    for(var col = 1; col <= field_name.length; col++) {
        info_data[col - 1] = document.getElementById(member_index_id_num + `-` + col).innerHTML;
    }
    return info_data;
}

//값 입력을 막는 코드를 줄이기 위한 함수
function disable_edit_lunch(id, bool) {
   return document.getElementById(id).disabled = bool;
}

//테이블 내에 있는 라디오 버튼에 대한 입력폼의 반응
function listRadio_action(ask_move) {
    var ask_selected = member_selecter()
    
    if (ask_selected == "new") {                               //신규 사용자에 체크될 경우 입력폼의 값을 변수로 가져옴.
        {//가입시 몸무게, 가입일 활성화 & 결제일, 갱신시 몸무게 비활성화
        disable_edit_lunch("get_payment_date", true);
        disable_edit_lunch("get_weight_at_update", true);
        disable_edit_lunch("get_weight_at_join", false);
        disable_edit_lunch("get_join_date", false);
        }

        var control_row = document.getElementById("controler_row");
        control_row.innerHTML = null;
        control_row.innerHTML = `
        <td colspan="4">
            <input id="create" type="button" class="btn btn-primary form-control" value="등록" onclick="member_add()">
        </td>
        <td colspan="2">
            <input type="button" class="btn btn-info form-control" value="고객 목록으로 돌아가기" onclick="scroll_to_tableTop()">
        </td>
        `

        for(var col = 0; col < field_name.length; col++) {
            if(col == 2) {
                document.getElementById('male').checked = false;
                document.getElementById('female').checked = false;
            } else {
                document.getElementById(field_name[col]).value = "";
            }
        }
    } else if(ask_selected != undefined) {  //라디오가 신규(왼쪽 끝 하단)에 체크되어 있지 않으면 체크된 라디오 행의 데이터를 입력폼으로 가져옴.
        {//가입시 몸무게, 가입일 비활성화 &  결제일, 갱신시 몸무게 활성화
        disable_edit_lunch("get_payment_date", false);
        disable_edit_lunch("get_weight_at_update", false);
        disable_edit_lunch("get_weight_at_join", true);
        disable_edit_lunch("get_join_date", true);
        }

        var control_row = document.getElementById("controler_row");
        control_row.innerHTML = null;
        control_row.innerHTML = `
        <td colspan="2">
            <input id="update" type="button" class="btn btn-warning form-control" value="갱신" onclick="member_set()">
        </td>
        <td colspan="2">
            <input id="delete" type="button" class="btn btn-danger form-control" value="삭제" onclick="member_del()">
        </td>
        <td colspan="2">
            <input type="button" class="btn btn-info form-control" value="고객 목록으로 돌아가기" onclick="scroll_to_member_info()">
        </td>
        `

        var info_data = member_info();
        for(var col = 0; col < field_name.length; col++){
            if(col == 2) {
                if(info_data[col] == "남성") {
                    document.getElementById('male').checked = true;
                } else {
                    document.getElementById('female').checked = true;
                }
            } else {
                document.getElementById(field_name[col]).value = info_data[col];
            }
        }
    }
    if (ask_move == 1)
        scroll_to_form();
}

function get_value_collecter() {
            var get_values = new Array();

            //입력값들을 배열에 저장
            get_values[0] = document.getElementById("get_name").value;
            get_values[1] = document.getElementById("get_age").value;
            //선택한 성별을 값으로 반환
            if(document.getElementById("male").checked === true) {
                get_values[2] = "남성";
            } else if(document.getElementById("female").checked === true) {
                get_values[2] = "여성";
            }
            //선택한 성별을 값으로 반환 종료
            get_values[3] = document.getElementById("get_phone_number").value;
            get_values[4] = document.getElementById("get_join_date").value;
            get_values[5] = document.getElementById("get_payment_date").value;
            get_values[6] = document.getElementById("get_endup_date").value;
            get_values[7] = document.getElementById("get_weight_at_join").value;
            get_values[8] = document.getElementById("get_weight_at_update").value;
            get_values[9] = document.getElementById("get_target_weight").value;
            
            return get_values;
}

function scroll_to_tableTop() {
    var elmnt = document.getElementById("table_top");
    elmnt.scrollIntoView();
}

function scroll_to_member_info() {
    var id = member_selecter();

    const element = document.getElementById(id);
    const elementRect = element.getBoundingClientRect();
    const absoluteElementTop = elementRect.top + window.pageYOffset;
    const middle = absoluteElementTop - (window.innerHeight / 2);
    window.scrollTo(0, middle);
}

function scroll_to_form() {
    var elmnt = document.getElementById("form_bottom");
    elmnt.scrollIntoView(false);
}