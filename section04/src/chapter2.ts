/**
 * 함수 타입 호환성
 * : 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단, 두가지 기준을 모두 통과해야 가능
 * 기준 1. 반환값의 타입이 호환되는가
 * 기준 2. 매개변수의 타입이 호환되는가
 */


// 기준 1. 반환값의 타입이 호환되는가
type A = () => number;
type B = () => 10;

let a: A = () => 10; // number 타입
let b: B = () => 10; // number literal 타입


a = b; // 업 캐스팅
// b = a; 다운 캐스팅 => 오류 발생
// ∴ 반환값의 타입이 기준일 땐 업 캐스팅만 호환 가능



// 기준 2. 매개변수의 타입이 호환되는가
// 2-1. 매개변수의 개수가 같을 때

type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c = d; 업 캐스팅 => 오류 발생
d = c; // 다운 캐스팅

type Animal = {
    name: string;
}

type Dog = {
    name: string;
    color: string;
}

let animalFunc = (animal: Animal) => {
    console.log(animal.name);
};

let dogFunc = (dog: Dog) => {
    console.log(dog.name);
    console.log(dog.color);
};

// animalFunc = dogFunc; 업 캐스팅 => 오류 발생
/** 위의 할당은 아래의 함수를 만드는 것과 같다
 * let testFunc = (animal: Animal) => {
 *      console.log(animal.name);
 *      console.log(animal.color);  ====>  'Animal' 형식에 'color' 속성이 없기 때문에 오류 발생
 * }
 */
dogFunc = animalFunc; // 다운 캐스팅
/**
 * 위의 할당은 아래의 함수를 만드는 것과 같다
 * let testFunc = (dog: Dog) => {
 *      console.log(dog.name);
 * }
 */

// ∴ 매개변수 개수가 같을 때 매개변수의 타입이 기준이면 다운 캐스팅만 호환 가능


// 2-2. 매개변수의 개수가 다를 때
// 호환하려는 매개변수의 타입이 같을 때에만 가능

type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2;
// func2 = func1; => 오류 발생
// ∴ 매개변수 개수가 같을 때 매개변수의 타입이 기준이면 할당하려고 하는 우항의 합수 타입에 매개변수 개수가 더 적을 때만 호환 가능