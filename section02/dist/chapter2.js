/** 배열 */
let numArr = [1, 2, 3];
let strArr = ["have", "a", "good", "day"];
// 제네릭 문법
let boolArr = [true, true, false, false];
// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr = [1, "hello"];
// 다차원 배열의 타입을 정의하는 방법
let doubleArr = [
    [1, 2, 3],
    [4, 5]
];
/** 튜플
 * : 자바스크립트에서는 존재하지 않고 타입스크립트에서만 존재하는 타입
 * : 길이와 타입이 고정된 배열
 */
let tup1 = [1, 2];
let tup2 = [1, "2", true];
const users = [
    ["josh", 1],
    ["minji", 2],
    ["cathy", 3],
    ["tom", 4],
    // [5, "john"] 오류 발생
];
export {};
