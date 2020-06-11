//삭제 기능관련 코드만 포함

function getRV(){
    var targetRow
    var d = document.getElementsByName('CT_select');
    for (var i = 0; i < d.length; i++) {
        if (d[i].checked) {          
            console.log(d[i].value);
            targetRow = d[i].value;
        }
    }
    var row = document.getElementById(targetRow);
    row.parentNode.removeChild(row);
}