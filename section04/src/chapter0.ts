/**
 * 함수 타입 정의
 */

// 함수를 설명하는 가장 좋은 방법
// JS : 함수가 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 설명
// TS : 함수가 어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 결과값을 반환하는지 설명
function func(a: number, b: number): number {
    return a + b;
}



/**
 * 화살표 함수 타입 정의
 */

const add = (a: number, b: number): number => a + b;



/** 
 * 함수의 매개변수
 * : 필수 매개변수, 선택적 매개변수
 * => 선택적 매개변수는 필수 매개변수 뒤에 와야한다. 만약 선택적 매개변수 뒤에 필수 매개변수가 있다면 오류가 발생한다.
 */

function introduce(name: string, age: number, tall?: number) {
    console.log(`name : ${name}, age: ${age}`);
    if (typeof tall === "number") {
        console.log(`tall : ${tall + 10}`);
    }
}

introduce("이정환", 27, 175);
introduce("이정환", 27);


// 매개변수를 개수 제한 없이 받아올 수 있음
function getSum1(...rest: number[]) {
    let sum = 0;
    rest.forEach((it) => (sum += it));

    return sum;
}

// 튜플을 사용해 매개변수의 개수를 제한함
function getSum2(...rest: [number, number, number]) {
    let sum = 0;
    rest.forEach((it) => (sum += it));

    return sum;
}

getSum1(1, 2, 3, 4, 5);
getSum2(1, 2, 3);