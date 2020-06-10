// var index_num = '';
// var name = '';
// var age = '';
// var sex = '';
// var phone_number = '';
// var join_date = '';
// var payment_date = '';
// var endup_date = '';
// var weight_at_join = '';
// var weight_at_update = '';
// var target_weight = '';

function member_add(name, age, sex, phone_number, join_date, payment_date, endup_date, weight_at_join, weight_at_update, target_weight){
//테이블 행 추가를 위한 변수
var table = document.getElementById("membertable");
var row = table.insertRow(-1);      //마지막 부분에 행 추가
var cell1 = row.insertCell(0);      //<td></td>추가
var cell2 = row.insertCell(1);      
var cell3 = row.insertCell(2);
var cell4 = row.insertCell(3);
var cell5 = row.insertCell(4);
var cell6 = row.insertCell(5);
var cell7 = row.insertCell(6);
var cell8 = row.insertCell(7);
var cell9 = row.insertCell(8);
var cell10 = row.insertCell(9);
var cell11 = row.insertCell(10);

cell1.innerHTML = "";
cell2.innerHTML = name;
cell3.innerHTML = age;
cell4.innerHTML = sex;
cell5.innerHTML = phone_number;
cell6.innerHTML = join_date;
cell7.innerHTML = payment_date;
cell8.innerHTML = endup_date;
cell9.innerHTML = weight_at_join;
cell10.innerHTML = weight_at_update;
cell11.innerHTML = target_weight;
}

function dumidata(){
member_add("안지수", "27", "남", "315-4831-7921", "2020-02-10", "2020-05-10", "2020-08-10", "89", "87", "75");
member_add("박남일", "22", "남", "315-4641-3133", "2020-06-10", "2020-06-10", "2020-09-10", "85", "85", "80");
}