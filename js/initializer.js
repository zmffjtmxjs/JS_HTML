var member_index = 1;

//더미데이터 출력용 함수 member_add()함수의 뿌리.
function dumiDataPutter(name, age, sex, phone_number, join_date, payment_date, endup_date, weight_at_join, weight_at_update, target_weight){
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

dumiDataPutter("안지수", "27", "남", "010-4831-7921", "2020-02-10", "2020-05-10", "2020-08-10", "89", "87", "75");
dumiDataPutter("박남일", "22", "남", "010-4641-3133", "2020-06-10", "2020-06-10", "2020-09-10", "85", "85", "80");