/** 타입 별칭 */
// 타입 별칭은 동일한 스코프에 중복된 이름으로 타입 별칭을 선언하면 오류 발생
// 동일한 스코프가 아니라면 오류 발생하지 않는다.
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

function func() {
  type User= {};
};

let user1: User = {
  id:1,
  name : "cathy",
  nickname: "cathy00",
  birth: "2000.01.01",
  bio: "hello",
  location: "Seoul"
}

let user2: User = {
  id:2,
  name : "josh",
  nickname: "josh00",
  birth: "2000.01.01",
  bio: "hello",
  location: "Seoul"
}


/** 인덱스 시그니처 */
// key와 value의 규칙을 기준으로 객체의 타입을 정의할 수 있는 문법
type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};

type countryNumberCodes = {
  [key: string]: number;
  Korea: number;
};

let countryNumberCodes = {
  Korea: 410,
  UnitedState: 840,
  UnitedKingdom: 826,
};