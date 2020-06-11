//삽입 기능관련 코드만 포함

//더미데이터 출력용 함수, member_add()함수의 뿌리. [유효성 검사 생략함]
function dumiDataPutter(name, age, sex, phone_number, join_date, payment_date, endup_date, weight_at_join, weight_at_update, target_weight, Q_delrow){
    var table = document.getElementById("membertable"); //수정 목표 테이블 지정
    var CTID = `CTID_`+member_index;       //id 지정에 쓰일 변수

    if(Q_delrow){
        table.deleteRow(-1);                   //신규 버튼을 위한 더미 행 삭제
    }
    
    var insrow = table.insertRow(-1);      //마지막 부분에 행 추가

    var col = 0;                           //11개의 열에 대한 배열
    var cell = new Array()
    while(col < 11) {
        cell[col] = insrow.insertCell(col)
        col = col + 1;
    }

    insrow.setAttribute("id", CTID);       //추가될 행에 대한 id값 추가

    col = 0;                               //11개의 열에 대한 id값 추가
    while(col < 11) {
        cell[col].setAttribute("id", CTID+`-`+col)
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
   

    member_index = member_index + 1;

    col = 0;
    var insrow = table.insertRow(-1);      //신규 버튼을 위한 빈행 추가
    while(col < 11) {
        cell[col] = insrow.insertCell(col)
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

//입력값 유효성 검사 (삽입 기능 전용)
function G_value_checker(G_values){
    for (var arr_num = 0; arr_num <= 9; arr_num++){
        var V_check = G_values[arr_num];
        console.log(V_check);
    }
    console.log("배열 출력 끝");
    for (var arr_num = 0; arr_num <= 9; arr_num++){
        var V_check = G_values[arr_num];
        console.log(V_check);
        switch(arr_num){
            case 0:
                if(V_check === ''){
                    alert("이름을 입력해주세요.");
                    return false;
                }
                break;
            case 1:
                if((V_check == '') || (Number.isInteger(V_check))){
                    alert("입력한 나이를 확인해주세요.");
                    return false;
                }
                break;
            case 2:
                if(G_name === ''){
                    alert("성별을 체크해주세요.");
                    return false;
                }
                break;
            case 3:
                if((V_check == '') || (isNotCellPhone(V_check))){
                    alert("입력한 전화번호를 확인해주세요.");
                    return false;
                }
                break;
            case 4:
                if((V_check == '') || (isNotDatetime(V_check))){
                    alert("입력한 가입일을 확인해주세요.");
                    return false;
                }
                break;
            case 6:
                if((V_check == '') || (isNotDatetime(V_check))){
                    alert("입력한 만료일을 확인해주세요.");
                    return false;
                }
                break;
            case 7:
                if((V_check == '') || (Number.isInteger(V_check))){
                    alert("입력한 현재 몸무게를 확인해주세요.");
                    return false;
                }
                break;
            case 9:
                if((V_check == '') || (Number.isInteger(V_check))){
                    alert("입력한 목표 몸무게를 확인해주세요.");
                    return false;
                }
                break;
        }
    }
    return true;
}

//신규 멤버 추가 함수
function member_add(){                                                  
    var G_name = document.getElementById("G_name").value;
    var G_age = document.getElementById("G_age").value;
    if(document.getElementById("male").checked === true) {
        var G_sex = "남성";
    } else if(document.getElementById("female").checked === true) {
        var G_sex = "여성";
    }
    var G_phone_number = document.getElementById("G_phone_number").value;
    var G_join_date = document.getElementById("G_join_date").value;
    var G_payment_date = G_join_date;
    var G_endup_date = document.getElementById("G_endup_date").value;
    var G_weight_at_join = document.getElementById("G_weight_at_join").value;
    var G_weight_at_update = G_weight_at_join;
    var G_target_weight = document.getElementById("G_target_weight").value;
      
    var G_values = [G_name, G_age, G_sex, G_phone_number, G_join_date, G_payment_date, G_endup_date, G_weight_at_join, G_weight_at_update, G_target_weight]

    var checker = G_value_checker(G_values);                            //유효성 검사기
    var col;                                                            //반복문 '행' 카운터

    if(checker){
        var table = document.getElementById("membertable"); //수정 목표 테이블 지정
        var CTID = `CTID_`+member_index;                //id 지정에 쓰일 변수 출력예시 : CTID_1
    
        table.deleteRow(-1);                            //신규 버튼을 위한 더미 행 삭제
        
        var insrow = table.insertRow(-1);               //마지막 부분에 행 추가

        // 열 추가 작업
        var cell = new Array()                          //11개의 열에 대한 배열
        for(col=0; col < 11; col++) {
            cell[col] = insrow.insertCell(col)
        }
    
        insrow.setAttribute("id", CTID);                //추가될 행(<tr>)에 대한 id값 추가 [출력예시 : id="CTID_1"]
        
        for(col = 0 ;col < 11; col++) {                 //11개의 열(<td>)에 대한 id값 추가
            cell[col].setAttribute("id", CTID+`-`+col)  //출력예시: CTID_1-1
        }

        cell[0].innerHTML = member_index+` <input type="radio" name="CT_select" id="CTID_`+member_index+`_Radio" value="CTID_`+member_index+` onclick="G_listRadio_action()""></input>`;
        for(col = 1; col < 11; col++) {                 //내용 추가 작업
            cell[col].innerHTML = G_values[(col-1)]
        }
        // 열 추가 종료
        document.getElementById(`CTID_`+member_index+`_Radio`).checked = true;
        
        member_index = member_index + 1;        //인덱스 값 증가

        var insrow = table.insertRow(-1);       //신규 버튼을 위한 빈행 추가
        for(col = 0; col < 11; col++) {
        cell[col] = insrow.insertCell(col)
        }
        col = 1;
        cell[0].innerHTML = `N <input type="radio" name="CT_select" id="new" value="new" onclick="G_listRadio_action()"></input>`;
        for(col = 1; col < 11; col++) {
            cell[col].innerHTML = "-";
        }
    }
}