/** 조건부 타입 기반의 유틸리티 타입들 */

/**
 * Exclude<T, U>
 * : 제외하다, 추방하다
 * => T에서 U를 제거하는 타입
 */

type Exclude<T, U> = T extends U ? never : T;
// 1 단계.
// Exclude<string, boolean>  =>  string
// Exclude<boolean, boolean>  =>  never

// 2단계.
// string | never
// never는 공집합이기 때문에 유니언으로 합집합 시 사라짐

// 최종 결과.
// string 

type A = Exclude<string | boolean, boolean>; // string



/**
 * Extract<T, U>
 * : 추출하다
 * => T에서 U를 추출하는 타입
 */

type Extract<T, U> = T extends U ? T : never;
// 1 단계.
// Extract<string, boolean>  =>  never
// Extract<boolean, boolean>  =>  boolean

// 2단계.
// never | boolean
// never는 공집합이기 때문에 유니언으로 합집합 시 사라짐

// 최종 결과.
// boolean 

type B = Extract<string | boolean, boolean> // boolean



/**
 * ReturnType<T>
 * => 함수의 반환값 타입을 추출하는 타입
 */

type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : never;

function funcA() {
    return "hello";
}

function funcB() {
    return 10;
}

type ReturnA = ReturnType<typeof funcA>; // string

type ReturnB = ReturnType<typeof funcB>; // number