/**
 * 타입 좁히기
 * : 조건문 등을 이용해 넓은 타입에서 좁은 타입으로 타입을 상황에 따라 좁히는 방법을 말함
 */

type Person = {
    name: string;
    age: number;
}

// value의 타입에 따라
// value: number 이면 toFixed 값 출력
// value: string 이면 toUpperCase 값 출력
// value: Date 이면 getDate 값 출력
// value: Person 이면 "name은 age살 입니다." 출력
function func(value: number | string | Date | null | Person) {
    value; // value: number | string
    // value.toUpperCase(); => 오류 발생
    // value.toFixed(); => 오류 발생
    
    if (typeof value === "number") {
        console.log(value.toFixed()); // value는 number 타입으로 추론됨
    } else if (typeof value === "string") {
        console.log(value.toUpperCase()); // value는 string 타입으로 추론됨
    } else if (value instanceof Date) {
        // (typeof value === "object") 를 조건문으로 사용하는 것은 좋지 않은 방법임
        // 왜냐하면 자바스크립트 연산자인 typeof 연산자는 null 값에 typeof 를 해도 "object"를 반환하기 때문에 바로 오류 발생함
        // instanceof : 왼쪽에 있는 변수의 값이 오른쪽에 있는 클래스의 인스턴스인지 확인함
        // Date : 자바스크립트의 내장 클래스이기 때문에 instanceof 연산자의 오른쪽에 올 수 있음
        // => value에 null 값이 와도 null은 Date 객체가 아니니까 통과하지 못함
        console.log(value.getDate()); // value는 Date 객체로 추론됨
    } else if (value && "age" in value) {
        // (value instanceof Person) 조건문을 사용하면 "'Person'은 형식만 참조하지만, 여기서는 값으로 사용되고 있습니다." 라고 오류 발생함
        // 형식만 참조한다 => Person은 타입이라는 뜻
        // 이럴 때에는 in 연산자를 사용함
        // ("age" in value) 조건문을 사용하면 value에 Person과 null 타입이 올 수 있다고 오류가 발생함
        // 이럴 때에는 조건문 앞에 value && 를 붙여서 value가 있을 때에만 age가 value에 있냐고 검사시키면 됨
        console.log(`${value.name}은 ${value.age}살 입니다.`);
    }
}