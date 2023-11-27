/**
 * 인터페이스
 */

interface Person {
    readonly name: string;
    age?: number;
    sayHi(): void; // 메서드의 오버로딩을 구현하고 싶다면 이와 같은 호출 시그니처 사용 권장
    sayHi(a: number): void;
    sayHi(a: number, b: number): void;
    // sayHi: () => void; 와 같이 작성도 가능
}

const person: Person = {
    name: "이정환",
    sayHi:function() {
        console.log("Hi");
    }
};

person.sayHi();
person.sayHi(1);
person.sayHi(2);


// 주의할 점 1
// : 타입 별칭에서는 다음과 같이 Union이나 Intersection 타입을 정의할 수 있었지만 인터페이스에서는 불가능
// => 인터페이스로 만든 타입을 Union이나 Intersection으로 이용해야한다면 아래와 같이 타입 별칭과 함께 사용하거나 타입 주석에서 직접 사용해야 함

type Type1 = number | string | Dog;
type Type2 = number & string & Dog;

interface Dog {
    name: string;
    age: number;
}

const dog: Dog | string = {
    name: "초코",
    age: 3
};