/** any */
// 특정 변수의 타입을 우리가 확실히 모를 때 사용할 수 있다.
// 이 변수 anyVar가 아래와 같이 앞으로 범용적으로 사용되는 변수라고 가정해보자.
// 이 때 별다른 타입을 지정해주지 않으면 초기값 10의 타입인 number를 타입으로 인식해 "hello" 값을 담을 때 오류 발생
// 이러한 상황에서는 변수의 타입을 any로 지정해줄 수 있다.
let anyVar: any = 10;

anyVar = "hello";
anyVar = true;
anyVar = {};
anyVar = () => {};

/* (다음 unknown 내용을 진행하기 위해 잠시 주석 처리)
// 메소드도 타입에 상관없이 사용 가능
// 문자열 메소드
anyVar.toUpperCase();
// 숫자형 메소드
anyVar.toFixed();
*/

let num: number = 10;
num = anyVar;

// 이 코드를 ts-node를 통해 실행시켜보면 오류가 발생한다
// 이유는 anyVar라는 변수에 함수 값을 담았는데 이 상태에서 toUpperCase() 메소드를 호출하려 하니 타입 에러가 런타임에 발생
// any 타입을 쓰면 사실상 타입 검사를 안 하는 것과 똑같기 때문에 런타임에서 오류가 발생한다는 것이 치명적인 단점이다.
// 그러므로 any 타입은 가능한 한 최대한 사용하지 않는 편이 좋다.



/** unknown */
// 기본적으로는 any와 비슷한 타입
let unknownVar: unknown;

unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

// any와 비슷하게 모든 값을 저장할 수는 있지만 any와 차이점은 아래와 같이 그 반대로는 안된다는 것.
// num = unknownVar; 오류 발생

// 그리고 다른 타입의 메소드 사용 또한 안 됨, 연산도 안 됨
// unknownVar.toUpperCase(); 오류 발생

// 조건문으로 해당 변수의 타입을 밝혀주었을 때 정제해서 사용 가능
if (typeof unknownVar === "number") {
  num = unknownVar;
}

// 그러므로 런타임에서 오류를 일으키는 any보다는 unknown을 사용하는 것이 좀 더 안전하다.