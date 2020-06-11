//삭제 기능관련 코드만 포함

function member_del(){
    var targetRow
    var d = document.getElementsByName('CT_select');
    for (var i = 0; i < d.length; i++) {
        if (d[i].checked) {          
            targetRow = d[i].value;
        }
    }
    if(targetRow == "new")
        return alert("신규 작성 행은 삭제할 수 없습니다.");
    else if(targetRow == undefined)
        return alert("삭제할 고객 정보를 선택하십시오.");

    var row = document.getElementById(targetRow);
    row.parentNode.removeChild(row);
}