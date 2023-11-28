/**
 *  infer
 *  : inference의 약자 (추론하다)
 */

type FuncA = () => string;

type FuncB = () => number;

type ReturnType<T> = T extends () => infer R ? R : never;
// 조건식을 참으로 만들기 위해 추론하는 R 타입
// => T에 FuncA가 오면 () => string 과 () => R 을 비교하는 조건문이 참이 되도록 R이 string으로 추론되어 string을 반환함
// 만약 number 와 () => R 을 비교하는 상황이 오면 추론이 불가능하기 때문에 never를 반환함

type A = ReturnType<FuncA>; // string

type B = ReturnType<FuncB>; // number

type C = ReturnType<number>; // 추론 불가능 => never



/**
 *  예제
 */

type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;
// 조건 1. T는 프로미스 타입이어야 한다
// 조건 2. 프로미스 타입의 결과값 타입을 반환해야 한다.

type PromiseA = PromiseUnpack<Promise<number>>;
// number

type PromiseB = PromiseUnpack<Promise<string>>;
// string