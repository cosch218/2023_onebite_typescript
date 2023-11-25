/**
 * 대수 타입
 * : 여러 개의 타입을 합성해서 새롭게 만들어낸 타입
 * ex. 합집합 타입, 교집합 타입
 */



/**
 * 1. 합집합 타입 (Union Type)
 */

let a: string | number; // => string, number Union Type
a = 1;
a = "hello";

let b: string | number | boolean | undefined; // 필요한 만큼 여러개의 타입을 묶어 사용 가능

let arr: (number | string | boolean)[] = [1, "hello", true];

type Dog = {
    name: string;
    color: string;
};

type Person = {
    name: string;
    language: string;
};

type Union = Dog | Person;

let union1 : Union = {
    name: "",
    color: "",
};

let union2: Union = {
    name: "",
    language: "",
};

let union3: Union = {
    name: "",
    color: "",
    language: "",
};



/**
 * 2. 교집합 타입 (Intersection Type)
 * => 객체 타입에서 많이 사용함
 */

let variable: number & string; // => number 타입과 string 타입의 교집합 결과 이 변수는 never 타입으로 만들어짐

type Intersection = Dog & Person;

let intersection1: Intersection = {
    name: "",
    color: "",
    language: "",
    // 교집합이기 때문에 위 세가지 프로퍼티 중 하나라도 빠지게 되면 오류 발생
};