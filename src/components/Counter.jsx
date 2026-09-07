// 함수형 컴포넌트 Counter을 선언 
//state = 컴포넌트 안에서 사용하고 관리되는 데이터 변수 ! 
import { useState } from "react";
// ↑ React가 제공하는 useState 함수를 가져옴.
// useState는 컴포넌트 안에서 "상태(state)"를 만들고 관리할 수 있게 해주는 Hook(도구)임.
// 이걸 import 안 하면 useState is not defined 에러가 남.

function Counter(){
    // ↑ Counter라는 이름의 함수형 컴포넌트를 선언.
    // 이 함수가 화면에 그려질 때마다(렌더링될 때마다) 아래 코드가 실행됨.

    //[2-3]
    //const 는 기본 자료형에 대해서 한번 방을 만들면 값을 바꿀 수 없습니다.
    //그러나 이 아래 방들은 Array : 참조자료형이기 때문에 값을 바꿀 수 있습니다.
    //각 배열의 위치를 구조분해해서 count/setCount 라는 변수로 직접 
    const [count,setCount] =useState(0);
    // ↑ useState(0)을 호출하면 [현재값, 값을바꾸는함수] 형태의 배열이 반환됨.
    // 이 배열을 구조분해할당(destructuring)해서
    //   count    → 현재 상태값 (초기값 0으로 시작)
    //   setCount → count 값을 변경할 때 쓰는 전용 함수
    // 로 각각 이름 붙여서 꺼내씀.
    // 주의: count를 count = count + 1 처럼 직접 바꾸면 안 되고, 
    // 반드시 setCount를 통해서만 값을 바꿔야 화면이 다시 렌더링됨.

    
return (<>
    // ↑ 이 컴포넌트가 화면에 그릴 JSX를 반환.
    // <> </> 는 Fragment라고 부르며, 여러 태그를 하나로 묶되
    // 실제 HTML에는 흔적(div 등)을 안 남기고 싶을 때 사용.

<button onClick={()=>setCount(count+1)}>{count}</button>
{/* ↑ 클릭 가능한 버튼을 렌더링.
    - onClick={...} : 버튼을 클릭했을 때 실행할 함수를 지정.
      ()=>setCount(count+1) 는 "클릭하면 count에 1을 더한 값으로 setCount를 호출해라"는 뜻인
      화살표 함수(익명 함수). 클릭할 때마다 새로 실행됨.
    - setCount가 호출되면 count 상태가 바뀌고, React가 자동으로 이 컴포넌트를 다시 렌더링함.
    - {count} : 버튼 안에 현재 count 값을 텍스트로 표시. 
      값이 바뀔 때마다 화면에 보이는 숫자도 같이 바뀜. */}
</>

)
// ↑ return 문의 끝. 이 JSX가 Counter 컴포넌트가 그리는 실제 화면임.


}
export default Counter; 
// ↑ 이 Counter 함수를 다른 파일에서도 가져다 쓸 수 있도록 기본 내보내기(default export).
// 다른 파일에서는 import Counter from './components/Counter.jsx' 형태로 가져와서 <Counter /> 로 사용.    