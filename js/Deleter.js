//삭제 기능관련 코드만 포함

function member_del() {
    if (confirm("정말 삭제하시겠습니까? 삭제된 데이터는 복구할 수 없습니다.") == true) {
        var targetRow = member_selecter();                      //삭제 <tr>태그의 id값을 가져옴.

        //삭제 대상 행의 유효성 검사
        if(targetRow == "new") {
            return alert("신규 작성 행은 삭제할 수 없습니다.");
        } else if(targetRow == undefined) {
            return alert("삭제할 고객 정보를 선택하십시오.");
        } else {
            var row = document.getElementById(targetRow);
            row.parentNode.removeChild(row);
            
            document.getElementById('new').checked = true;      //테이블 내 라디오 버튼을 신규로 체크함.
            listRadio_action();                               //입력폼을 비움(등록모드로 전환됨)
        }
    }
}