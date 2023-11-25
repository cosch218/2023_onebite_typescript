/**
 * 함수 오버로딩
 * : 하나의 함수를 매개변수의 개수나 타입에 따라 여러가지 버전으로 정의하는 방법
 * : 자바스크립트에서는 지원 안 되고 타입스크립트에서만 지원됨
 */

// 하나의 함수 func
// 모든 매개변수의 타입은 number
// Ver1. 매개변수 1개 => 이 매개변수에 20을 곱한 값 출력
// Ver2. 매개변수 3개 => 이 매개변수들을 다 더한 값 출력

// 1단계. 오버로드 시그니쳐 생성
function func(a: number): void;
function func(a: number, b: number, c: number): void;

// 2단계. 함수 실제 구현부(구현 시그니쳐) 생성 
function func(a: number, b?: number, c?: number) {
    if ( typeof b === "number" && typeof c === "number") {
        console.log(a + b + c);
    } else {
        console.log(a * 20);
    }
}

// func(); => 오버로드 시그니쳐에 어긋나기 때문에 오류 발생
func(1);
// func(1,2); => 오버로드 시그니쳐에 어긋나기 때문에 오류 발생
func(1,2,3);

