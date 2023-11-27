/**
 * 타입스크립트의 클래스
 */

const empolyee = {
    name: "이정환",
    age: 27,
    position: "개발자",
    work() {
        console.log("일함");
    },
};


class Employee {
    // 필드
    // * 필드를 설정할 때에는 각 필드의 타입을 설정해도 오류가 발생하는데 이건 생성자에게 할당하면 오류 사라짐 (name: string = ""; 처럼 임의의 초기값을 설정해도 됨)
    name: string;
    age: number;
    position: string;

    // 생성자
    constructor(name: string, age: number, position: string) {
        this.name = name;
        this.age = age;
        this.position = position;
    }

    // 메서드
    work() {
        console.log("일함");
    }
}


// 클래스 상속
class ExecutiveOfficer extends Employee {
    // ExecutiveOfficer만을 위한 추가 필드
    officeNumber: number;

    // 생성자
    constructor(
        name: string, 
        age: number, 
        position: string, 
        officeNumber: number
    ) {
        super(name, age, position); // super 함수를 생략하거나 인수 중 하나만 빠져도 오류 발생
        this.officeNumber = officeNumber;
    }
}


const empolyeeB = new Employee("최민수", 28, "개발자");
console.log(empolyeeB);
// ts-node를 이용한 출력 결과 : Employee { name: '최민수', age: 28, position: '개발자' }


// 타입스크립트의 클래스는 자바스크립트의 클래스로 취급되면서 동시에 하나의 타입으로도 취급됨
// 타입스크립트는 구조적 타입 시스템을 따르기에 클래스의 구조를 보고 이런 필드와 이런 메서드가 있으면 어떤 타입이라고 하자는 결정을 하기 때문임
const employeeC: Employee = {
    name: "이지수",
    age: 27,
    position: "개발자",
    work() {},
};
console.log(employeeC);
// ts-node를 이용한 출력 결과 : Employee { name: '이지수', age: 27, position: '개발자', work: [Function: work] }