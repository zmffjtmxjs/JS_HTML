function G_data_checker_logger(){
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
}