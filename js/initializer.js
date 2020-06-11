//초기화면 구성을 담당하는 코드들

//더미데이터 출력용 함수, member_add()함수의 뿌리. [유효성 검사 생략함]
function dumiDataPutter(name, age, sex, phone_number, join_date, payment_date, endup_date, weight_at_join, weight_at_update, target_weight, ask_delrow) {
    var table = document.getElementById("membertable"); //수정 목표 테이블 지정
    var member_index_id = `member_index_` + member_index;       //id 지정에 쓰일 변수

    if(ask_delrow) {
        table.deleteRow(-1);                   //신규 버튼을 위한 더미 행 삭제
    }
    
    var insrow = table.insertRow(-1);      //마지막 부분에 행 추가

    var cell = new Array();                //11개의 열에 대한 배열
    for(var col = 0; col <= 10; col++) {
        cell[col] = insrow.insertCell(col);
    }

    insrow.setAttribute("id", member_index_id);       //추가될 행에 대한 id값 추가

    for(var col = 0; col <= 10; col++) {   //11개의 열에 대한 id값 추가
        cell[col].setAttribute("id", member_index_id + `-` + col);
    }


    cell[0].innerHTML = `<input type="radio" name="member_select" id="member_index_` + member_index + `_Radio" value="member_index_` + member_index + `" onclick="listRadio_action(1)"></input>`;
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

    var insrow = table.insertRow(-1);      //신규 버튼을 위한 빈행 추가

    //신규 행의 열 추가
    for(var col = 0; col <= 10; col++) {
        cell[col] = insrow.insertCell(col);
    }

    cell[0].innerHTML = `<input type="radio" name="member_select" id="new" value="new" onclick="listRadio_action(1)"></input>`;
    cell[1].innerHTML = "신규"
    for(var col = 2; col <= 10; col++) {
        cell[col].innerHTML = "-";
    }
    //신규 행의 열 추가 종료

    document.getElementById("new").checked = true;
    
}

dumiDataPutter("안지수", "27", "남성", "010-4831-7921", "2020-02-10", "2020-05-10", "2020-08-10", "89", "87", "75", 0);
dumiDataPutter("박남일", "22", "남성", "010-4641-3133", "2020-06-10", "2020-06-10", "2020-09-10", "85", "85", "80", 1);
dumiDataPutter("김건우", "25", "남성", "010-1541-9432", "2020-01-25", "2020-04-25", "2020-07-25", "80", "78", "75", 1);
dumiDataPutter("김미혜", "21", "여성", "010-9785-1374", "2019-12-07", "2020-06-07", "2020-09-07", "70", "65", "60", 1);

listRadio_action(0);