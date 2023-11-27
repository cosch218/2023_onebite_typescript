/**
 *  제네릭 인터페이스
 */

// K, V : 타입 변수 = 타입 파라미터 = 제네릭 타입 변수 = 제네릭 타입 파라미터
interface KeyPair<K, V> {
    key: K;
    value: V;
}

// 제네릭 인터페이스를 사용할 때에는 반드시 타입으로 정의할 때 타입 변수에 할당할 타입을 꺽쇄와 함께 반드시 작성해야 함
let keyPair: KeyPair<string, number> = {
    key: "key",
    value: 0,
};

let keyPair2: KeyPair<boolean, string[]> = {
    key: true,
    value: ["1"],
};



/**
 *  인덱스 시그니처
 */

interface NumberMap {
    [key: string]: number;
}

let NumberMap1: NumberMap = {
    key: -1231,
    key2: 123123,
};

interface Map<V> {
    [key: string]: V;
}

let stringMap: Map<string> = {
    key: "value",
};

let booleanMap: Map<boolean> = {
    key: true,
};



/**
 *  제네릭 타입 별칭
 */

type Map2<V> = {
    [key: string]: V;
}

let stringMap2: Map2<string> = {
    key: "hello",
};



/**
 *  제네릭 인터페이스의 활용 예시
 * => 유저 관리 프로그램
 * ==> 유저 구분 : 학생 유저 / 개발자 유저
 */

interface Student {
    type: "student";
    school: string;
}

interface Developer {
    type: "developer";
    skill: string;
}

interface User<T> {
    name: string;
    profile: T;
}

function goToSchool(user: User<Student>) {
    const school = user.profile.school;
    console.log(`${school}로 등교 완료`);
}

// goToSchool(developerUser);  >> 오류 발생
// 'User<Developer>' 형식의 인수는 'User<Student>' 형식의 매개 변수에 할당할 수 없기 때문

const developerUser: User<Developer> = {
    name: "이정환",
    profile: {
        type: "developer",
        skill: "TypeScript",
    },
};

const studentUser: User<Student> = {
    name: "홍길동",
    profile: {
        type: "student",
        school: "가톨릭대학교",
    },
};