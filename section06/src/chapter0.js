/**
 * 자바스크립트의 클래스
 */

let studentA = {
    name: "이정환",
    grade: "A+",
    age: 27,
    study() {
        console.log("열심히 공부 함");
    },
    introduce() {
        console.log("안녕하세요!");
    },
};

let studentB = {
    name: "홍길동",
    grade: "B-",
    age: 27,
    study() {
        console.log("열심히 공부 함");
    },
    introduce() {
        console.log("안녕하세요!");
    },
};

// 중복 코드 발생
// 학생이 수십명에서 수백명에 이르면 굉장히 비효율적인 코드
// 이럴 때 자바스크립트의 클래스 사용

// 클래스 생성
class Student {
    // 클래스 안에서는 "," 사용 X
    // 필드 설정
    name;
    grade;
    age;

    // 생성자 생성 (메서드 형태를 가짐);
    constructor(name, grade, age) {
        // 매개변수로 받아온 name, grade, age 값들을 실제 만들 객체의 프로퍼티 값으로 설정해줘야 함
        // 이 때 아래의 this는 클래스가 생성하고 있는 객체를 나타냄
        this.name = name;
        this.grade = grade;
        this.age = age;
    }

    // 메서드
    study () {
        console.log("열심히 공부 함");
    }
    introduce () {
        console.log(`안녕하세요 ${this.name} 입니다!`);
    }
}


// 클래스 상속
class StudentDeveloper extends Student{
    // 필드
    faboriteSkill;

    // 생성자
    constructor(name, grade, age, faboriteSkill) {
        super(name, grade, age);
        // super라는 함수를 이용하면 부모(수퍼)클래스의 생성자가 호출됨
        this.faboriteSkill = faboriteSkill;
    }

    // 메서드
    prgramming () {
        console.log(`${this.faboriteSkill}로 프로그래밍 함`);
    }
}


let studentC = new Student("김민지", "A", 27);
// 클래스를 호출해서 객체를 생성할 때에는 new라는 키워드를 사용
// new 뒤에 클래스명을 작성하고 소괄호를 열고 인수를 전달하게 되면 실제로는 해당 클래스에 있는 생성자를 호출하게 됨
// 이렇게 클래스를 이용해서 만든 객체를 '인스턴스'라고 함
// => studentC: Student 인스턴스

console.log(studentC);
// node를 이용한 출력 결과 : Student { name: '김민지', grade: 'A', age: 27 }
studentC.study();
// node를 이용한 출력 결과 : 열심히 공부 함
studentC.introduce();
// node를 이용한 출력 결과 : 안녕하세요 김민지 입니다!


const studentDeveloper = new StudentDeveloper('이해리', 'B+', 27, "TypeScript");
console.log(studentDeveloper);
// node를 이용한 출력 결과 : StudentDeveloper {name: '이해리', grade: 'B+',  age: 27,  faboriteSkill: 'TypeScript'}
studentDeveloper.prgramming();
// node를 이용한 출력 결과 : TypeScript로 프로그래밍 함
// => Student 클래스와 StudentDeveloper 클래스가 너무 비슷함 
// ==> 클래스의 상속을 이용하면 됨