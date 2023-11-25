/** 열거형 타입 (Enum Type) */
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
// 자바스크립트에는 없고 타입스크립트에만 있는 타입

// 숫자형 이넘
enum Role {
  ADMIN,
  USER,
  GUEST,
};

// 문자형 이넘
enum Language {
  korean = "ko",
  english = "en",
}

const user1 = {
  name: "cathy",
  role: Role.ADMIN, // 0 <- 관리자
  language: Language.korean,
};

const user2 = {
  name: "tom",
  role: Role.USER, // 1 <- 일반 유저
};

const user3 = {
  name: "susan",
  role: Role.GUEST, // 2 <- 게스트
};

console.log(user1, user2, user3);


