//수정 기능관련 코드만 포함

function member_set(){
    var get_values = get_value_collecter();                 //입력 받은 값들을 배열에 저장, 가져옴

    var checker = get_value_checker(get_values);            //유효성 검사기

    if(checker){
        var member_index_id = member_selecter();                       //수정할 행의 id

        // 열 내용 변경
        var cell = new Array();                         //11개의 열에 대한 배열
        for(col = 0; col <= (field_name.length) - 1; col++) {
            cell[col] = document.getElementById(member_index_id + `-` + ((col)+1));        //각셀에 지정된 id를 배열에 담음  id예제 : member_index_id_1-1
        }
        for(col = 0; col <= (field_name.length) - 1; col++) {
            cell[col].innerHTML = null;                 //원본 값 제거
            cell[col].innerHTML = get_values[col];        //새로운 값 입력
        }
        listRadio_action();                           //입력폼에 변경된 값으로 새로덮어씀
    }
        // 열 내용 변경 종료

}