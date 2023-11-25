/** 열거형 타입 (Enum Type) */
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
// 자바스크립트에는 없고 타입스크립트에만 있는 타입
// 숫자형 이넘
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUEST"] = 2] = "GUEST";
})(Role || (Role = {}));
;
// 문자형 이넘
var Language;
(function (Language) {
    Language["korean"] = "ko";
    Language["english"] = "en";
})(Language || (Language = {}));
const user1 = {
    name: "cathy",
    role: Role.ADMIN,
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
export {};
