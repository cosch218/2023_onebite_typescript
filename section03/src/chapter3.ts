/**
 * 기본 타입 간의 호환성
 */

let num1: number = 10;
let num2: 10 = 10;

num1 = num2; // 업 캐스팅 => 가능
// num2 = num1; 다운 캐스팅 => 불가능



/**
 * 객체 타입 간의 호환성
 * => 어떤 객체 타입을 다른 객체 타입으로 취급해도 괜찮은가?
 */

type Animal = {
    name: string;
    color: string;
};

type Dog = {
    name: string;
    color: string;
    breed: string;
};

let animal: Animal = {
    name: "기린",
    color: "yello"
};

let dog: Dog = {
    name: "돌돌이",
    color: "brown",
    breed: "진도"
};

animal = dog; // 업 캐스팅 => 가능
// dog = animal; 다운 캐스팅 => 불가능

// 객체 타입은 프로퍼티를 통해 알 수 있다.
// name과 color만 있으면 Animal 타입에 속할 수 있지만 Animal 타입은 breed 프로퍼티를 가지고 있지 않기 때문에 Dog 타입에 속할 수 없다. 
// ∴ Animal 타입은 슈퍼 타입, Dog 타입은 서브 타입

type Book = {
    name: string;
    price: number;
};

type ProgrammingBook = {
    name: string;
    price: number;
    skill: string;
}

let book: Book;
let programmingbook: ProgrammingBook = {
    name: "한 입 크기로 잘라먹는 리액트",
    price: 33000,
    skill: "reactjs"
};

book = programmingbook; // 업 캐스팅 => 가능
// programmingbook = book; 다운 캐스팅 => 불가능



/**
 * 초과 프로퍼티 검사
 */

let book2: Book = {
    name: "한 입 크기로 잘라먹는 리액트",
    price: 33000,
    // skill: "reactjs"
}
// 초과 프로퍼티 검사란?
// : 위 book2처럼 변수를 초기화할 때 그 값으로 객체 리터럴을 사용하면 skill 프로퍼티와 같이 실제 타입에는 정의해 놓지 않은 프로퍼티를 작성할 수 있는데 이것을 막는 검사

// 만약 초과 프로퍼티 검사를 피하고 싶다면 아래와 같은 방법으로 코드를 작성해야 함
// 이 방법은 변수를 초기화 할 때 객체 리터럴을 사용한 것은 아니기 때문에 검사를 피할 수 있음
let book3: Book = programmingbook;

function func(book: Book) {};
func({
    name: "한 입 크기로 잘라먹는 리액트",
    price: 33000,
    // skill: "reactjs" => 인수로 객체 리터럴을 전달 시 초과 프로퍼티 검사 발생
});
func(programmingbook); // 인수로 변수를 전달 시 초과 프로퍼티 검사 발생하지 않음
