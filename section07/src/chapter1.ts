/**
 *  첫번째 사례
 *  : 매개변수들의 타입이 다를 때
 */

function swap<T, U>(a: T, b: U) {
    return [b, a];
}

const [a, b] = swap("1", 2);

console.log([a, b]); 
// ts-node를 이용한 출력 결과 : [2, '1']



/**
 *  두번째 사례
 *  : 매개변수로 배열이 올 때
 */

// 배열 안의 값들이 같은 타입일 때
function returnFirstValue1<T>(data: T[]) {
    return data[0];
}

let num = returnFirstValue1([0, 1, 2]);
console.log(num);
// ts-node를 이용한 출력 결과 : 0


// 배열 안의 값들이 다른 타입일 때
function returnFirstValue2<T>(data: [T, ...unknown[]]) {
    return data[0];
}

let str = returnFirstValue2([1, "Hello", "mynameis"]);
console.log(str);
// ts-node를 이용한 출력 결과 : 1


/**
 *  세번째 사례
 *  : 조건을 걸어 타입에 제한이 필요할 때
 */

function getLength<T extends { length: number }>(data: T) {
    // <T extends { length: number }> 의 의미
    // : T라는 타입은 length가 number인 프로퍼티를 가지고 있는 객체를 확장하는 타입
    // >> 무조건 length라는 프로퍼티를 가지고 있는 타입이어야 함
    return data.length;
}

let var1 = getLength([1, 2, 3]);
console.log(var1);
// ts-node를 이용한 출력 결과 : 3

let var2 = getLength("12345");
console.log(var2);
// ts-node를 이용한 출력 결과 : 5

let var3 = getLength({ length: 10 });
console.log(var3);
// ts-node를 이용한 출력 결과 : 10

// let var4 = getLength(10);
// >> length 프로퍼티가 없기 때문에 오류 발생