//두기능 이상이 사용하는 코드(변수선언, 함수 등)를 포함

var member_index = 1;
var field_name = ["G_name", "G_age", "G_sex", "G_phone_number", "G_join_date", "G_payment_date", "G_endup_date", "G_weight_at_join", "G_weight_at_update", "G_target_weight"];

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

//입력값 유효성 검사
function G_value_checker(G_values){
    // for (var arr_num = 0; arr_num <= 9; arr_num++){
    //     var V_check = G_values[arr_num];
    //     console.log(V_check);
    // }
    // console.log("배열 출력 끝");
    for (var arr_num = 0; arr_num <= 9; arr_num++){
        var V_check = G_values[arr_num];
        // console.log(V_check);
        
        //성별은 라디오 타입이므로 예외처리
        if(arr_num == 2){
            if(V_check === ''){
                alert("성별을 체크해주세요.");
                return false;
            }
            continue;
        }
        
        //삽입, 수정당시 입력이 가능했던 것들만 유효성 검사
        if(document.getElementById(field_name[arr_num]).disabled === false){
            // console.log(field_name[arr_num]+` 체크했음`);
            switch(arr_num){
                case 0:
                    if(V_check === ''){
                        alert("이름을 입력해주세요.");
                        return false;
                    }
                    break;
                case 1:
                    if((V_check == '') || (Number.isInteger(V_check))){
                        alert("입력한 나이를 확인해주세요.");
                        return false;
                    }
                    break;
                case 3:
                    if((V_check == '') || (isNotCellPhone(V_check))){
                        alert("입력한 전화번호를 확인해주세요.");
                        return false;
                    }
                    break;
                case 4:
                    if((V_check == '') || (isNotDatetime(V_check))){
                        alert("입력한 가입일을 확인해주세요.");
                        return false;
                    }
                    break;
                case 5:
                    if((V_check == '') || (isNotDatetime(V_check))){
                        alert("입력한 결제일을 확인해주세요.");
                        return false;
                    }
                    break;
                case 6:
                    if((V_check == '') || (isNotDatetime(V_check))){
                        alert("입력한 만료일을 확인해주세요.");
                        return false;
                    }
                    break;
                case 7:
                    if((V_check == '') || (Number.isInteger(V_check))){
                        alert("입력한 현재 몸무게를 확인해주세요.");
                        return false;
                    }
                    break;
                case 8:
                    if((V_check == '') || (Number.isInteger(V_check))){
                        alert("입력한 갱신시 몸무게를 확인해주세요.");
                        return false;
                    }
                    break;
                case 9:
                    if((V_check == '') || (Number.isInteger(V_check))){
                        alert("입력한 목표 몸무게를 확인해주세요.");
                        return false;
                    }
                    break;
            }
        }
    }
    return true;
}

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
    for(var col = 1; col <= field_name.length; col++) {
        info_data[col-1] = document.getElementById(CTID_num+`-`+col).innerHTML;
    }
    return info_data;
}

//값 입력을 막는 코드를 줄이기 위한 함수
function disable_edit_lunch(id, bool){
   return document.getElementById(id).disabled = bool;
}

//테이블 내에 있는 라디오 버튼에 대한 입력폼의 반응
function G_listRadio_action(Q_move){
    var Q_selected = CT_selecter()
    
    if (Q_selected == "new"){                                //신규 사용자에 체크될 경우 입력폼의 값을 변수로 가져옴.
        {//가입시 몸무게, 가입일 활성화 & 결제일, 갱신시 몸무게 비활성화
        disable_edit_lunch("G_payment_date", true);
        disable_edit_lunch("G_weight_at_update", true);
        disable_edit_lunch("G_weight_at_join", false);
        disable_edit_lunch("G_join_date", false);
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

        for(var col = 0; col < field_name.length; col++){
            if(col == 2){
                document.getElementById('male').checked = false;
                document.getElementById('female').checked = false;
            } else{
                document.getElementById(field_name[col]).value = "";
            }
        }
    } else if(Q_selected != undefined){                      //라디오가 신규(왼쪽 끝 하단)에 체크되어 있지 않으면 체크된 라디오 행의 데이터를 입력폼으로 가져옴.
        {//가입시 몸무게, 가입일 비활성화 &  결제일, 갱신시 몸무게 활성화
        disable_edit_lunch("G_payment_date", false);
        disable_edit_lunch("G_weight_at_update", false);
        disable_edit_lunch("G_weight_at_join", true);
        disable_edit_lunch("G_join_date", true);
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
            <input type="button" class="btn btn-info form-control" value="고객 목록으로 돌아가기" onclick="scroll_to_CTinfo()">
        </td>
        `

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
    if (Q_move == 1)
        scroll_to_form();
}

function G_value_collecter(){
            var G_values = new Array();

            //입력값들을 배열에 저장
            G_values[0] = document.getElementById("G_name").value;
            G_values[1] = document.getElementById("G_age").value;
            {//선택한 성별 출력
            if(document.getElementById("male").checked === true)
                G_values[2] = "남성";
            else if(document.getElementById("female").checked === true)
                G_values[2] = "여성";
            }
            G_values[3] = document.getElementById("G_phone_number").value;
            G_values[4] = document.getElementById("G_join_date").value;
            G_values[5] = document.getElementById("G_payment_date").value;
            G_values[6] = document.getElementById("G_endup_date").value;
            G_values[7] = document.getElementById("G_weight_at_join").value;
            G_values[8] = document.getElementById("G_weight_at_update").value;
            G_values[9] = document.getElementById("G_target_weight").value;
            
            return G_values;
}

function scroll_to_tableTop(){
    var elmnt = document.getElementById("table_top");
    elmnt.scrollIntoView();
}

function scroll_to_CTinfo(){
    var id = CT_selecter();

    const element = document.getElementById(id);
    const elementRect = element.getBoundingClientRect();
    const absoluteElementTop = elementRect.top + window.pageYOffset;
    const middle = absoluteElementTop - (window.innerHeight / 2);
    window.scrollTo(0, middle);
}

function scroll_to_form(){
    var elmnt = document.getElementById("form_bottom");
    elmnt.scrollIntoView(false);
}