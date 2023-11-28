/**
 * keyof 연산자
 * : 기존의 객체 타입으로부터 새로운 객체 타입을 만드는 타입
 */

interface Person {
    name: string;
    age: number;
}

function getPropertyKey(person: Person, key: keyof Person) {
    return person[key];
}

const person: Person = {
    name: "이정환",
    age: 27,
};

getPropertyKey(person, "name"); // 이정환
