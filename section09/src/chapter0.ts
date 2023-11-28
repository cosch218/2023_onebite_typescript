/**
 * 조건부 타입
 */

type A = number extends string ? string : number;
// => 넘버타입이 스트링 타입을 확장하는 타입인가에 대한 조건에 참이면 스트링, 거짓이면 넘버 타입이 되는 것
// ==> 답은 거짓이므로 type A는 넘버 타입이 됨

type ObjA = {
    a: number;
}

type ObjB = {
    a: number;
    b: number;
}

type B = ObjB extends ObjA ? number : string;
// => ObjB타입이 ObjA 타입을 확장하는 타입인가에 대한 조건에 참이면 넘버, 거짓이면 스트링 타입이 되는 것
// ==> 답은 참이므로 type B는 넘버 타입이 됨



/**
 * 제네릭과 조건부 타입
 * : 조건부 타입은 제네릭과 함께 사용했을 때 진가를 발휘함
 */

// 예시 1.
type StringNumberSwitch<T> = T extends number? string : number;

let varA: StringNumberSwitch<number>; // string 타입이 됨
let varB: StringNumberSwitch<string>; // number 타입이 됨


// 예시 2.
/*
function removeSpaces<T>(text: T): T extends string? string : undefined {
    if (typeof text === "string") {
        // * replaceAll() : 첫 번째 인수에 해당하는 모든 문자를 찾아서 두 번째 인수에 해당하는 문자로 변경하는 메서드
        // * as any가 없다면 오류가 발생함
        //      왜냐하면 타입 변수 T가 함수 내부에서는 unknown 타입이 되기 때문
        //      애초에 T가 unknown으로 취급되기에 함수 내부에서 T extends string? string : undefined 이 조건부의 결과를 알 수 없게 되는 것
        //      그래서 return 문에서 string 타입일거다, undefined 타입일거다 하고 반환하면 오류가 발생하는 것
        //      >> 이럴 땐 어쩔 수 없이 as any로 단언을 해서 해결해야 함       return text.replaceAll(" ", "");
        //      >>>> 하지만 any로 단언하는 것은 text.replaceAll(" ", "") 대신 숫자를 전달해도 검사가 되지 않게 됨
        //      >>>>>> 이것을 해결하려면 밑의 결과 코드처럼 함수 오버로딩을 사용하면 된다!!
        return text.replaceAll(" ", "") as any; 
    } else {
        return undefined as any;
    }
}
*/

/* 결과 (함수 오버로딩 사용) */ 
// 오버로드 시그니쳐
function removeSpaces<T>(text: T): T extends string? string : undefined; 
// 구현 시그니쳐
function removeSpaces<T>(text: any) {
    if (typeof text === "string") {
        return text.replaceAll(" ", ""); 
    } else {
        return undefined;
    }
}

let result = removeSpaces("hi im winterlood"); // string 타입, hiimwinterlood

let result2 = removeSpaces(undefined); // undefined 타입