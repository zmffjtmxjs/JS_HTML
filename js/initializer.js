var G_name = document.getElementById("G_name").value;
var G_age = document.getElementById("G_age").value;
var G_phone_number = document.getElementById("G_phone_number").value;
var G_join_date = document.getElementById("G_join_date").value;
var G_payment_date = document.getElementById("G_payment_date").value;
var G_endup_date = document.getElementById("G_endup_date").value;
var G_weight_at_join = document.getElementById("G_weight_at_join").value;
var G_weight_at_update = document.getElementById("G_weight_at_update").value;
var G_target_weight = document.getElementById("G_target_weight").value;

var member_index = 1;

//더미데이터 출력용 함수, member_add()함수의 뿌리.
function dumiDataPutter(name, age, sex, phone_number, join_date, payment_date, endup_date, weight_at_join, weight_at_update, target_weight){
    var table = document.getElementById("membertable");
    table.deleteRow(-1);
    var insrow = table.insertRow(-1);      //마지막 부분에 행 추가
    var col = 0;
    var cell = new Array()
    while(col < 11) {
        cell[col] = insrow.insertCell(col)
        col = col + 1;
    }
    insrow.setAttribute("id", `CTID_`+member_index);
    cell[0].innerHTML = member_index+` <input type="radio" name="CT_select" value="CTID_`+member_index +`"></input>`;
    cell[1].innerHTML = name;
    cell[2].innerHTML = age;
    cell[3].innerHTML = sex;
    cell[4].innerHTML = phone_number;
    cell[5].innerHTML = join_date;
    cell[6].innerHTML = payment_date;
    cell[7].innerHTML = endup_date;
    cell[8].innerHTML = weight_at_join;
    cell[9].innerHTML = weight_at_update;
    cell[10].innerHTML = target_weight;
   

    member_index = member_index + 1;

    col = 0;
    var insrow = table.insertRow(-1);      //신규 버튼을 위한 빈행 추가
    while(col < 11) {
        cell[col] = insrow.insertCell(col)
        col = col + 1;
    }
    col = 1;
    insrow.setAttribute("id", "N");
    cell[0].innerHTML = `N <input type="radio" name="CT_select" value="new"></input>`;
    while(col < 11) {
        cell[col].innerHTML = "-";
        col = col + 1;
    }
}

dumiDataPutter("안지수", "27", "남", "010-4831-7921", "2020-02-10", "2020-05-10", "2020-08-10", "89", "87", "75");
dumiDataPutter("박남일", "22", "남", "010-4641-3133", "2020-06-10", "2020-06-10", "2020-09-10", "85", "85", "80");