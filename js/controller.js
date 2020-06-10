var G_name = document.getElementById("G_name").value;
var G_age = document.getElementById("G_age").value;
var G_phone_number = document.getElementById("G_phone_number").value;
var G_join_date = document.getElementById("G_join_date").value;
var G_payment_date = document.getElementById("G_payment_date").value;
var G_endup_date = document.getElementById("G_endup_date").value;
var G_weight_at_join = document.getElementById("G_weight_at_join").value;
var G_weight_at_update = document.getElementById("G_weight_at_update").value;
var G_target_weight = document.getElementById("G_target_weight").value;

//날짜 유효성 검사
function isNotDatetime(d){
    var re = /[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;
    //         yyyy -       MM      -       dd           
    if (re.test(d))
        return false;
    return true;
}

//전화번호 유효성 검사
function isNotCellPhone(str) {
	var regTel = /^(01[016789]{1}|070|02|0[3-9]{1}[0-9]{1})-[0-9]{3,4}-[0-9]{4}$/;
	if(!regTel.test(str)) {
		return true;
	}
	return false;
};

//종합적인 입력값 유효성 검사
function G_data_checker(){
    {/* 출력 값 테스트
    console.log("이름 빔 :                 "+(G_name === ''));
    console.log("나이 빔 :                 "+(G_age == ''));
    console.log("나이 포맷 불효 :          "+(Number.isInteger(G_age)));
    console.log("전화번호 빔 :             " + (G_phone_number == ''));
    console.log("전화번호 포맷 불효 :      "+ (isNotCellPhone(G_phone_number)));
    console.log("가입일 빔 :               "+(G_join_date == ''));
    console.log("가입일 포맷 불효 :        " + (isNotDatetime(G_join_date)));
    console.log("만료일 빔 :               "+(G_endup_date == ''));
    console.log("만료일 포맷 불효 :        "+(isNotDatetime(G_endup_date)));
    console.log("가입시 몸무게 빔 :        "+(G_weight_at_join == ''));
    console.log("가입시 몸무게 포맷 불효 : "+(Number.isInteger(G_weight_at_join)));
    console.log("목표 몸무게 빔 :          "+(G_target_weight == ''));
    console.log("목표 몸무게 포맷 불효 :   "+(Number.isInteger(G_target_weight)));
    console.log("성별 선택 안함 :         "+(document.getElementById("male").checked === false)&&(document.getElementById("female").checked === false));
    */}
    if(G_name === ''){
        alert("이름을 입력해주세요.");
        return false;
    } else if((G_age == '') || (Number.isInteger(G_age))){
        alert("입력한 나이를 확인해주세요.");
        return false;
    } else if((G_phone_number == '') || (isNotCellPhone(G_phone_number))){
        alert("입력한 전화번호를 확인해주세요.");
        return false;
    } else if((G_join_date == '') || (isNotDatetime(G_join_date))){
        alert("입력한 가입일을 확인해주세요.");
        return false;
    } else if((G_endup_date == '') || (isNotDatetime(G_endup_date))){
        alert("입력한 만료일을 확인해주세요.");
        return false;
    } else if((G_weight_at_join == '') || (Number.isInteger(G_weight_at_join))){
        alert("입력한 현재 몸무게를 확인해주세요.");
        return false;
    } else if((G_target_weight == '') || (Number.isInteger(G_target_weight))){
        alert("입력한 목표 몸무게를 확인해주세요.");
        return false;
    } else if((document.getElementById("male").checked === false)&&(document.getElementById("female").checked === false)){
        alert("성별을 체크해주세요.");
        return false;
    } else{
        return true;
    }
}

function member_add(){
    G_name = document.getElementById("G_name").value;
    G_age = document.getElementById("G_age").value;
    G_phone_number = document.getElementById("G_phone_number").value;
    G_join_date = document.getElementById("G_join_date").value;
    G_endup_date = document.getElementById("G_endup_date").value;
    G_weight_at_join = document.getElementById("G_weight_at_join").value;
    G_target_weight = document.getElementById("G_target_weight").value;
    var checker = G_data_checker();

    if(checker){
            //테이블 행 추가를 위한 변수
            var table = document.getElementById("membertable");
            var row = table.insertRow(-1);      //마지막 부분에 행 추가
            //열 추가
            var col = 0;                        
            var cell = new Array()
            while(col < 11) {
                cell[col] = row.insertCell(col)
                col = col + 1;
            }
            // 열 내용 추가
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
            cell[6].innerHTML = G_join_date;
            cell[7].innerHTML = G_endup_date;
            cell[8].innerHTML = G_weight_at_join;
            cell[9].innerHTML = G_weight_at_join;
            cell[10].innerHTML = G_target_weight;
            // 열 추가 종료
        
            member_index = member_index + 1;        //인덱스 값 증가
    }
}