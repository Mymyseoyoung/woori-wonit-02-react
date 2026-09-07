//정상 표시 나오는 것 . ( 값에 따라서 ( 정상 / 휴면 )에 따라 css 연동해서 사용)
// 계좌 상태에 따라 뱃지 색을 바꿀거임 .

const colors ={
 "정상": "#00FF00",
 "휴면":"#858685",
 "지급정지": "#FF0000",
 "해지": "#1f1f1f"

}

//inline(코드 사이에 css를 입힐 때): style{{key: value}}  형식으로 작성함. 
//span : 자기 영역만큼만 ! 색을 입힘
function StatusBadge({status}){
    return (
        //자기 영역만큼만 차지하도록 span 태그 사용 ! 
        <span className="badge" style={{backgroundColor: colors[status]}}>
            {status}
        </span>
    )
}

export default StatusBadge;