/**
 * 접근 제어자 (Access Modifier)
 * : 클래스를 만들 때 특정 필드나 메서드에 접근할 수 있는 범위를 설정하는 문법
 * => 종류 : public, private, protected
 */

class Employee {
    // 필드

    // 생성자
    constructor(
        // 아래의 인수 앞에 접근 제어자를 작성하여 접근 범위를 설정할 수 있는데 
        // 위 필드 설정에서 접근 제어자를 설정하고 이 생성자의 인수에도 접근 제어자를 설정하면 중복되었다는 오류가 발생함
        // => 생성자에 접근 제어자를 설정할 경우 필드에서는 설정하면 안 됨
        // 그리고 이렇게 인수에 접근 제어자를 설정하면 this.name = name; 으로 초기값을 설정하는 코드를 작성하지 않아도 알아서 받은 인수로 초기값을 설정해줌
        
        public name: string,  // public 접근 제어자는 기본값이므로 필드명 앞에 따로 접근 제어자를 설정하지 않으면 알아서 public으로 설정됨, 외부에서 접근 가능
        private age: number,  // private 접근 제어자를 사용하면 이 Employee 클래스 내에서만 접근할 수 있음 (파생 클래스나 외부에서 읽을 수조차 없음)
        protected position: string  // protected 접근 제어자를 사용하면 이 Employee 클래스와 파생 클래스 내에서만 접근 할 수 있음 (외부에서 읽을 수조차 없음)
    ) {
        // this.name = name;
        // this.age = age;
        // this.position = position;
    }

    // 메서드
    work() {
        console.log("일함");
    }
}


const employee = new Employee("이정환", 27, "개발자");
employee.name = "홍길동";
// emplyee.age = 30;  >> 오류 발생
// emplyee.position = "디자이너";  >> 오류 발생
console.log(employee);
// ts-noed를 이용한 출력 결과 : Employee { name: '홍길동', age: 27, position: '개발자' }
