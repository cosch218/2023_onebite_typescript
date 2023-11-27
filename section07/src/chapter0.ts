/**
 * 제네릭
 * : 
 */

// 제네릭 함수
// * 꺽쇄 안의 T : 타입을 저장하는 변수, 타입 변수
function func<T>(value: T): T {
    return value;
}

let num = func(10);

let bool = func(true);

let str = func("string");

// 튜플 타입으로 추론됨
let arr2 = func<[number, number, number]>([1, 2, 3]);