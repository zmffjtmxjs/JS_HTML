//삽입 기능관련 코드만 포함

//신규 멤버 추가 함수
function member_add() {                                                  
    var get_values = get_value_collecter();
    get_values[5] = get_values[4];
    get_values[8] = get_values[7];

    var checker = get_value_checker(get_values);                            //유효성 검사기
    var col;                                                            //반복문 '행' 카운터

    if(checker) {
        var table = document.getElementById("membertable"); //수정 목표 테이블 지정
        var member_index_id = `member_index_` + member_index;                //id 지정에 쓰일 변수 출력예시 : member_index_id_1
    
        table.deleteRow(-1);                            //신규 버튼을 위한 더미 행 삭제
        
        var insrow = table.insertRow(-1);               //마지막 부분에 행 추가

        // 열 추가 작업
        var cell = new Array();                         //11개의 열에 대한 배열
        for(col = 0; col <= field_name.length; col++) {
            cell[col] = insrow.insertCell(col);
        }
    
        insrow.setAttribute("id", member_index_id);                //추가될 행(<tr>)에 대한 id값 추가 [출력예시 : id="member_index_id_1"]
        
        for(col = 0 ; col <= field_name.length; col++) {                 //11개의 열(<td>)에 대한 id값 추가
            cell[col].setAttribute("id", member_index_id + `-` + col); //출력예시: member_index_id_1-1
        }

        cell[0].innerHTML = `<input type="radio" name="member_select" id="member_index_` + member_index + `_Radio" value="member_index_` + member_index + `" onclick="listRadio_action(1)""></input>`;
        for(col = 1; col <= field_name.length; col++) {                 //내용 추가 작업
            cell[col].innerHTML = get_values[(col - 1)];
        }
        // 열 추가 종료

        document.getElementById(`member_index_` + member_index + `_Radio`).checked = true;      //추가된 행의 라디오버튼을 체크함
        
        member_index = member_index + 1;        //인덱스 값 증가

        var insrow = table.insertRow(-1);       //신규 버튼을 위한 빈행 추가

        //신규 행의 열 추가
        for(col = 0; col <= field_name.length; col++) {
            cell[col] = insrow.insertCell(col);
        }

        cell[0].innerHTML = `<input type="radio" name="member_select" id="new" value="new" onclick="listRadio_action(1)"></input>`;
        cell[1].innerHTML = "신규"
        for(col = 2; col <= field_name.length; col++) {
            cell[col].innerHTML = "-";
        }
        //신규 행의 열 추가 종료

        listRadio_action();                   //추가된 행의 값을 입력폼에 덮어씀(수정모드로 전환됨)
        scroll_to_member_info();                   //추가된 행의 위치로 스크롤 이동
    }
}