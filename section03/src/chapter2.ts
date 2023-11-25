/**
 * Unknown 타입
 * => 전체 집합 (모든 타입의 슈퍼 타입)
 */

function unknownExam() {
    let a: unknown = 1;
    let b: unknown = "hello";
    let c: unknown = true;
    let d: unknown = null;
    let e: unknown = undefined;
    
    let unknownVar: unknown;
    // let num: number = unknownVar; => 다운 캐스팅 => 오류 발생
    // let str: string = unknownVar; => 다운 캐스팅 => 오류 발생
    // let bool: boolean = unknownVar; => 다운 캐스팅 => 오류 발생
}


/**
 * Never 타입
 * => 공집합 (모든 타입의 서브 타입)
 */

function neverExam() {
    function neverFunc(): never {
        // 반환할 수 있는 값의 종류가 공집합('아무것도 없다')이라는 것 의미
        while (true) {}
    }

    let num: number = neverFunc(); // 업 캐스팅
    let str: string = neverFunc(); // 업 캐스팅
    let bool: boolean = neverFunc(); // 업 캐스팅

    // let never1: never = 10; => 다운 캐스팅 => 오류 발생
    // let never2: never = "string"; => 다운 캐스팅 => 오류 발생
    // let never3: never = true; => 다운 캐스팅 => 오류 발생
}


/**
 * Void 타입
 * : undefined의 슈퍼 타입
 */

function voidExam() {
    function voidFunc(): void {
        console.log("Hi");
        // return undefined; => 업 캐스팅
    }

    let voidVar: void = undefined; // 업 캐스팅
}


/**
 * Any 타입
 * : 치트키 타입
 * (any 타입은 모든 타입의 슈퍼 타입으로 존재하기도 하고, never를 제외한 모든 타입의 서브 타입으로 존재하기도 함)
 */

function anyExam() {
    let unknownVar: unknown;
    let anyVar: any;
    let undefinedVar: undefined;
    let neverVar: never;

    anyVar = unknownVar;
    undefinedVar = anyVar;
    // 위 두가지 예시는 타입계층도에서 다운 캐스팅이지만 허용이 됨
    // any 타입은 자신에게 오는 다운 캐스팅도 되고 자신이 다운 캐스팅하는 것도 됨 => 치트키 타입
    // ∴ 위험한 타입이기에 왠만하면 사용하지 않는 것 추천

    // neverVar = anyVar;
    // never 타입에 any 타입을 다운 캐스팅하는 것만은 안 됨
    // never 타입은 순수한 공집합이기 때문에 그 어떤 것도 다운 캐스팅 할 수 없음
}