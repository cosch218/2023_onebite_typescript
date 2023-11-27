/**
 *  선언 합침 (Declaration Merging)
 */

interface Person {
    name: string;
}

interface Person {
    age: number
}

// 타입 별칭은 동일한 스코프 내에 중복된 이름으로 선언할 수 없는 반면에 인터페이스는 가능함
// 왜냐하면 중복된 이름의 인터페이스 선언은 결국 하나로 합쳐지기 때문

const person: Person = {
    name: "이정환",
    age: 27
}

// 주의할 점
// : 동일한 이름의 인터페이스들이 동일한 이름의 프로퍼티를 서로 다른 타입으로 정의하면 오류 발생
// (ex) 첫번째 Person 인터페이스에서 name 프로퍼티를 sting으로 정의했다면 두번째 Person 인터페이스의 name 프로퍼티에서는 무조건 string타입을 사용해야 함
// ==> 이 때 인터페이스 확장과 달리 서브타입도 쓸 수 없음


// 보통 선언 합침은 간단한 프로그래밍에서는 잘 사용되지 않고,
// 타입스크립트의 모듈, 즉 라이브러리의 타입 정의가 좀 부실한 경우에 직접 타입을 추가하거나 정확하게 만들어주는 일종의 '모듈 보강'이라는 작업을 할 때 주로 사용됨


/**
 *  모듈 보강
 */

interface Lib {
    a: number;
    b: number;
}

interface Lib {
    c: string;
}

const lib: Lib = {
    a: 1,
    b: 2,
    c: "hello",
}
// 위와 같이 Lib이라는 인터페이스를 사용해 lib이라는 객체를 생성할 때
// lib 객체에 c 프로퍼티를 바로 추가하면 오류 발생함
// 이럴 때 선언 합침을 사용하면 된다