/**
 * 타입 단언 (Type Assertion)
 * : 실제로 값을 그 타입으로 바꾸는 것이 아닌 타입스크립트 컴파일러의 눈을 잠깐 가리고 그냥 그렇게 믿도록 만드는 효과
 * => 업 캐스팅, 다운 캐스팅과는 다름
 * ==> 단언을 사용할 땐 조심해서, 확신할 때에만 사용하는 것 추천
 */

type Person = {
    name: string;
    age: number;
};

let person = {} as Person;
person.name = "이정환";
person.age = 27;

type Dog = {
    name: string;
    color: string;
};

let dog = {
    name: "돌돌이",
    color: "brown",
    breed: "진도",
} as Dog;



/** 
 * 타입 단언의 규칙
 * 단언식 : 값 as 단언 (A as B)
 * 이 때 A가 B의 슈퍼 타입이거나 A가 B의 서브 타입이어야 함
 */

let num1 = 10 as never; 
// => 이게 가능한 이유는 never는 모든 타입의 서브 타입이고 10(number)은 never의 슈퍼 타입이기 때문임

let num2 = 10 as unknown;
// => 이게 가능한 이유는 unknown은 모든 타입의 슈퍼 타입이고 10(number)은 unknown의 서브 타입이기 때문임

// let num3 = 10 as string;
// 오류 발생
// 이유는 number와 string은 교집합이 없기 때문에 10(number)은 string의 슈퍼 타입도 서브 타입도 아니기 때문임

// 다중 단언
// 좋은 방법이 아니기 때문에 정말 하다하다 안 되겠다 싶을 때만 참고해서 사용
let num4 = 10 as unknown as string;
// 10(number)을 unknown으로 단언, 그 후 unknown을 string으로 단언
// => 10(number)은 unknown의 서브 타입이고 unknown은 string의 슈퍼 타입이기에 가능함



/**
 * const 단언
 */

let num5 = 10 as const;
// => const로 선언한 것과 같은 결과를 줌

let cat = {
    name: "야옹이",
    color: "yellow",
} as const;
// => 모든 프로퍼티가 readonly로 바뀜, 변경 불가



/**
 * Non Null 단언
 * :=>어떤 값이 null 이거나 undefined 이 아니라고 단언하는 것
 * 연산자 : !
 */

// 게시판 만들 때
type Post = {
    title: string;
    author?: string;
};

let post: Post = {
    title: "게시글1",
    author: "이정환",
};

// const len: number = post.author?.length;
// post.author?.length 에서 물음표 키워드는 자바스크립트에서 제공하는 옵셔널 체이닝이라는 키워드
// 옵셔널 체이닝 : 물음표 기호 앞의 평가 대상이 undefined 또는 null이면 평가를 멈추고 undefined를 반환함
// => post.author?.length의 값이 number | undefined 이기에 이 값을 number 타입으로 지정할 수 없어서 오류가 발생하는 것
// 이럴 때 Non Null 단원을 사용하면 되는데 물음표를 느낌표로 바꿔주면 됨
// 이 값이 null 또는 undefined가 아닐 것이라고 타입 스크립트 컴파일러가 믿도록 만드는 효과
const len: number = post.author!.length;
