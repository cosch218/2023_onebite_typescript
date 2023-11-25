/**
 * 타입 추론
 */

let a = 10; 
// const로 변수 선언하면 number literal type으로 추론되는 것과 달리
// let으로 변수를 선언하면 좀 더 범용적인 number 타입으로 추론됨 => 타입 넓히기

let b = "hello";
let c = {
    id: 1,
    name: "이정환",
    profile: {
        nickname: "winterlood",
    },
    url: ["https://winterlood.com"],
};

let {id, name, profile} = c;

let [one, two, three] = [1, "hello", true];

function func(message = "hello") {
    return "hello";
}


let d; // *암묵적*으로 any 타입으로 추론됨 => any 타입의 진화
d = 10; // number 타입으로 바뀜
d.toFixed();
d = "hello"; // string 타입으로 바뀜
d.toUpperCase();
// d.toFixed(); 오류 발생

const num = 10; // => number literal type으로 추론됨
const str = "hello"; // => string literal type으로 추론됨


let arr = [1, "string"]; // number와 string의 union type으로 추론됨