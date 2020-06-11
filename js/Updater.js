//수정 기능관련 코드만 포함

function member_set(){
    var G_name = document.getElementById("G_name").value;
    var G_age = document.getElementById("G_age").value;
    {//선택한 성별 출력
    if(document.getElementById("male").checked === true)
        var G_sex = "남성";
    else if(document.getElementById("female").checked === true)
        var G_sex = "여성";
    }
    var G_phone_number = document.getElementById("G_phone_number").value;
    var G_join_date = document.getElementById("G_join_date").value;
    var G_payment_date = document.getElementById("G_payment_date").value;
    var G_endup_date = document.getElementById("G_endup_date").value;
    var G_weight_at_join = document.getElementById("G_weight_at_join").value;
    var G_weight_at_update = document.getElementById("G_weight_at_update").value;
    var G_target_weight = document.getElementById("G_target_weight").value;
      
    var G_values = [G_name, G_age, G_sex, G_phone_number, G_join_date, G_payment_date, G_endup_date, G_weight_at_join, G_weight_at_update, G_target_weight]

    var checker = G_value_checker(G_values);                            //유효성 검사기
    var col;                                                            //반복문 '행' 카운터

    if(checker){
        var CTID = CT_selecter();                       //수정할 행의 id

        // 열 내용 변경
        var cell = new Array()                          //11개의 열에 대한 배열
        for(col=0; col <= 9; col++) {
            cell[col] = document.getElementById(CTID+`-`+((col)+1));
        }
        for(col=0; col <= 9; col++) {
            cell[col].innerHTML = null;                 //원본 값 제거
            cell[col].innerHTML = G_values[col];        //새로운 값 입력
        }
        G_listRadio_action()
    }
        // 열 내용 변경 종료

}