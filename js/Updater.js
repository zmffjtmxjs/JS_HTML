//수정 기능관련 코드만 포함

function member_set(){
    var G_name = document.getElementById("G_name").value;
    var G_age = document.getElementById("G_age").value;
    if(document.getElementById("male").checked === true) {
        var G_sex = "남성";
    } else if(document.getElementById("female").checked === true) {
        var G_sex = "여성";
    }
    var G_phone_number = document.getElementById("G_phone_number").value;
    var G_join_date = document.getElementById("G_join_date").value;
    var G_payment_date = G_join_date;
    var G_endup_date = document.getElementById("G_endup_date").value;
    var G_weight_at_join = document.getElementById("G_weight_at_join").value;
    var G_weight_at_update = G_weight_at_join;
    var G_target_weight = document.getElementById("G_target_weight").value;
      
    var G_values = [G_name, G_age, G_sex, G_phone_number, G_join_date, G_payment_date, G_endup_date, G_weight_at_join, G_weight_at_update, G_target_weight]

    var checker = G_value_checker(G_values);                            //유효성 검사기
    var col;                                                            //반복문 '행' 카운터

    if(checker){
        var CTID = `CTID_`+member_index;                //id 지정에 쓰일 변수 출력예시 : CTID_1

        // 열 추가 작업
        var cell = new Array()                          //11개의 열에 대한 배열
        for(col=0; col < 11; col++) {
            cell[col] = insrow.insertCell(col)
        }
    
        insrow.setAttribute("id", CTID);                //추가될 행(<tr>)에 대한 id값 추가 [출력예시 : id="CTID_1"]
        
        for(col = 0 ;col < 11; col++) {                 //11개의 열(<td>)에 대한 id값 추가
            cell[col].setAttribute("id", CTID+`-`+col)  //출력예시: CTID_1-1
        }

        cell[0].innerHTML = member_index+` <input type="radio" name="CT_select" id="CTID_`+member_index+`_Radio" value="CTID_`+member_index+`" onclick="G_listRadio_action()""></input>`;
        for(col = 1; col < 11; col++) {                 //내용 추가 작업
            // cell[col].innerHTML = G_values[(col-1)]
            
        }
        // 열 추가 종료
        document.getElementById(`CTID_`+member_index+`_Radio`).checked = true;
        
        member_index = member_index + 1;        //인덱스 값 증가

        var insrow = table.insertRow(-1);       //신규 버튼을 위한 빈행 추가
        for(col = 0; col < 11; col++) {
        cell[col] = insrow.insertCell(col)
        }
        col = 1;
        cell[0].innerHTML = `N <input type="radio" name="CT_select" id="new" value="new" onclick="G_listRadio_action()"></input>`;
        for(col = 1; col < 11; col++) {
            cell[col].innerHTML = "-";
        }
    }
}