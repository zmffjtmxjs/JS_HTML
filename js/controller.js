var member_index = 1;

function member_add(){
    var G_name = document.getElementById("G_name").value;
    var G_age = document.getElementById("age").value;
    var G_phone_number = document.getElementById("phone_number").value;
    var G_join_date = document.getElementById("join_date").value;
    var G_payment_date = document.getElementById("payment_date").value;
    var G_endup_date = document.getElementById("endup_date").value;
    var G_weight_at_join = document.getElementById("weight_at_join").value;
    var G_weight_at_update = document.getElementById("weight_at_update").value;
    var G_target_weight = document.getElementById("target_weight").value;
    //테이블 행 추가를 위한 변수
    if((document.getElementById("male").checked === true)||(document.getElementById("female").checked === true)){
        var table = document.getElementById("membertable");
        var row = table.insertRow(-1);      //마지막 부분에 행 추가

        var col = 0;
        var cell = new Array()
        while(col < 11) {
            cell[col] = row.insertCell(col)
            col = col + 1;
        }

        cell[0].innerHTML = member_index+` <input type="radio" name="slect" value="`+ member_index +`"></input>`;
        cell[1].innerHTML = G_name;
        cell[2].innerHTML = G_age;
        if(document.getElementById("male").checked === true) {
            cell[3].innerHTML = "남성";
        } else if(document.getElementById("female").checked === true) {
            cell[3].innerHTML = "여성";
        } 
        cell[4].innerHTML = G_phone_number;
        cell[5].innerHTML = G_join_date;
        cell[6].innerHTML = G_payment_date;
        cell[7].innerHTML = G_endup_date;
        cell[8].innerHTML = G_weight_at_join;
        cell[9].innerHTML = G_weight_at_update;
        cell[10].innerHTML = G_target_weight;

        member_index = member_index + 1;
    }else {
        alert("성별을 선택해주십시오.");
        return;
    }
    
}

//더미데이터 출력용 함수
function init(name, age, sex, phone_number, join_date, payment_date, endup_date, weight_at_join, weight_at_update, target_weight){
        var table = document.getElementById("membertable");
        var row = table.insertRow(-1);      //마지막 부분에 행 추가
        var col = 0;
        var cell = new Array()
        while(col < 11) {
            cell[col] = row.insertCell(col)
            col = col + 1;
        }

        cell[0].innerHTML = member_index+` <input type="radio" name="slect" value="`+ member_index +`"></input>`;
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
}

init("안지수", "27", "남", "315-4831-7921", "2020-02-10", "2020-05-10", "2020-08-10", "89", "87", "75");
init("박남일", "22", "남", "315-4641-3133", "2020-06-10", "2020-06-10", "2020-09-10", "85", "85", "80");