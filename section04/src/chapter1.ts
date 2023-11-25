/**
 * 함수 타입 표현식
 */

type Operation = (a: number, b: number) => number;

const add: Operation = (a, b) => a + b;
const sub: Operation = (a, b) => a - b;
const multiply: Operation = (a, b) => a * b;
const divide: Operation = (a, b) => a / b;



/**
 * 호출 시그니쳐 (콜 시그니쳐)
 */

type Operation2 = {
    // 함수의 타입을 정의하는데 중괄호를 열어 마치 객체 타입을 정의하듯 하는 이유는 사실 자바스크립트의 함수는 객체이기 때문. 그리고 함수는 값으로 취급됨
    // 이러한 특징 때문에 함수를 값으로 저장하는 함수 표현식이 가능하고, 다른 함수에 인수로 전달 가능
    // 자바스크립트 배열에 길이를 저장하는 length 프로퍼티가 있듯이 함수에도 함수의 이름을 저장하는 name 프로퍼티가 있다.
    (a: number, b: number): number;
    name: string; // 하이브리드 타입
}

const add2: Operation2 = (a, b) => a + b;
const sub2: Operation2 = (a, b) => a - b;
const multiply2: Operation2 = (a, b) => a * b;
const divide2: Operation2 = (a, b) => a / b;

add2(1,2);
add2.name;