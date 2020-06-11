//초기화면 구성을 담당하는 코드들

//더미데이터 출력용 함수, member_add()함수의 뿌리. [유효성 검사 생략함]
function dumiDataPutter(name, age, sex, phone_number, join_date, payment_date, endup_date, weight_at_join, weight_at_update, target_weight, Q_delrow){
    var table = document.getElementById("membertable"); //수정 목표 테이블 지정
    var CTID = `CTID_`+member_index;       //id 지정에 쓰일 변수

    if(Q_delrow){
        table.deleteRow(-1);                   //신규 버튼을 위한 더미 행 삭제
    }
    
    var insrow = table.insertRow(-1);      //마지막 부분에 행 추가

    var col = 0;                           //11개의 열에 대한 배열
    var cell = new Array();
    while(col < 11) {
        cell[col] = insrow.insertCell(col);
        col = col + 1;
    }

    insrow.setAttribute("id", CTID);       //추가될 행에 대한 id값 추가

    col = 0;                               //11개의 열에 대한 id값 추가
    while(col < 11) {
        cell[col].setAttribute("id", CTID+`-`+col);
        col = col + 1;
    }


    cell[0].innerHTML = member_index+` <input type="radio" name="CT_select" id="CTID_`+member_index+`_Radio" value="CTID_`+member_index +`" onclick="G_listRadio_action()"></input>`;
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
   
    document.getElementById(`CTID_`+member_index+`_Radio`).checked = true;

    member_index = member_index + 1;

    col = 0;
    var insrow = table.insertRow(-1);      //신규 버튼을 위한 빈행 추가
    while(col < 11) {
        cell[col] = insrow.insertCell(col);
        col = col + 1;
    }
    col = 1;
    insrow.setAttribute("id", "N");
    cell[0].innerHTML = `N <input type="radio" name="CT_select" value="new" onclick="G_listRadio_action()"></input>`;
    while(col < 11) {
        cell[col].innerHTML = "-";
        col = col + 1;
    }
}

dumiDataPutter("안지수", "27", "남성", "010-4831-7921", "2020-02-10", "2020-05-10", "2020-08-10", "89", "87", "75", 0);
dumiDataPutter("박남일", "22", "남성", "010-4641-3133", "2020-06-10", "2020-06-10", "2020-09-10", "85", "85", "80", 1);
G_listRadio_action();