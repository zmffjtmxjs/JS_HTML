//삽입 기능관련 코드만 포함

//신규 멤버 추가 함수
function member_add(){                                                  
var G_values = G_value_collecter();
    G_values[5] = G_values[4];
    G_values[8] = G_values[7];

    var checker = G_value_checker(G_values);                            //유효성 검사기
    var col;                                                            //반복문 '행' 카운터

    if(checker){
        var table = document.getElementById("membertable"); //수정 목표 테이블 지정
        var CTID = `CTID_`+member_index;                //id 지정에 쓰일 변수 출력예시 : CTID_1
    
        table.deleteRow(-1);                            //신규 버튼을 위한 더미 행 삭제
        
        var insrow = table.insertRow(-1);               //마지막 부분에 행 추가

        // 열 추가 작업
        var cell = new Array();                         //11개의 열에 대한 배열
        for(col=0; col <= field_name.length; col++) {
            cell[col] = insrow.insertCell(col);
        }
    
        insrow.setAttribute("id", CTID);                //추가될 행(<tr>)에 대한 id값 추가 [출력예시 : id="CTID_1"]
        
        for(col = 0 ; col <= field_name.length; col++) {                 //11개의 열(<td>)에 대한 id값 추가
            cell[col].setAttribute("id", CTID+`-`+col); //출력예시: CTID_1-1
        }

        cell[0].innerHTML = `<input type="radio" name="CT_select" id="CTID_`+member_index+`_Radio" value="CTID_`+member_index+`" onclick="G_listRadio_action(1)""></input>`;
        for(col = 1; col <= field_name.length; col++) {                 //내용 추가 작업
            cell[col].innerHTML = G_values[(col-1)];
        }
        // 열 추가 종료

        document.getElementById(`CTID_`+member_index+`_Radio`).checked = true;      //추가된 행의 라디오버튼을 체크함
        
        member_index = member_index + 1;        //인덱스 값 증가

        var insrow = table.insertRow(-1);       //신규 버튼을 위한 빈행 추가
        for(col = 0; col <= field_name.length; col++) {
        cell[col] = insrow.insertCell(col);
        }
        col = 1;
        cell[0].innerHTML = `N <input type="radio" name="CT_select" id="new" value="new" onclick="G_listRadio_action(1)"></input>`;
        for(col = 1; col <= field_name.length; col++) {
            cell[col].innerHTML = "-";
        }
        G_listRadio_action();                   //추가된 행의 값을 입력폼에 덮어씀(수정모드로 전환됨)
    }
}