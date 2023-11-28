/**
 *  분산적인 조건부 타입
 */

type StringNumberSwitch<T> = T extends number? string : number;

let a: StringNumberSwitch<number>;
// string

let b: StringNumberSwitch<string>;
// number

let c: StringNumberSwitch<number | string>;
// string | number

let d: StringNumberSwitch<boolean | number | string>;
// 1단계.
// StringNumberSwitch<boolean>  =>  number
// StringNumberSwitch<number>  =>  string
// StringNumberSwitch<string>  =>  number

// 2단계.
// number | string | number

// 최종 결과.
// string | number


/**
 *  분산 방지
 */
type StringNumberSwitch2<T> = [T] extends [number]? string : number;

let e: StringNumberSwitch2<boolean | number | string>;
// boolean, number, string 합집합은 number의 서브타입이 아님
// => number


/**
 * 실용적인 예제
 */

// 예제 1.
type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;
// 1단계.
// Exclude<number, string>  =>  number는 string의 서브타입이 아님  ==>  number 
// Exclude<string, string>  =>  string은 string의 확장 타입 맞음  ==>  never
// Exclude<boolean, string>  =>  boolean은 string의 서브타입이 아님  ==>  boolean

// 2단계.
// number | never | boolean
// * 유니언 타입에 never가 있으면 never(공집합)가 사라짐

// 최종 결과.
// number | boolean
// ==> 특정 유니언 타입으로부터 특정 타입만 제거한 유니언 타입을 만드는 것도 가능하다는 것


// 예제 2.
type Extract<T, U> = T extends U ? T : never;

type B = Extract<number | string | boolean, string>;
// 1단계.
// Exclude<number, string>  =>  number는 string의 서브타입이 아님  ==>  never 
// Exclude<string, string>  =>  string은 string의 확장 타입 맞음  ==>  string
// Exclude<boolean, string>  =>  boolean은 string의 서브타입이 아님  ==>  never

// 2단계.
// never | string | never
// * 유니언 타입에 never가 있으면 never(공집합)가 사라짐

// 최종 결과.
// string
// ==> 특정 유니언 타입으로부터 특정 타입만 추출하는 것도 가능하다는 것