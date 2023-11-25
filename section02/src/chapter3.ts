/** 객체 */
// 객체의 타입을 정의할 때 object를 사용하면 해당 변수가 객체인 것은 알지만 프로퍼티나 메서드에 접근하면 오류가 발생하기 때문에 잘 쓰지 않는다.
// 이 때에는 아래와 같이 객체의 모든 프로퍼티들의 타입까지 구조적으로 정의할 수 있는 방식인 객체 리터럴 타입을 사용하면 된다.
// 타입스크립트 : 구조 기준 => 구조적 타입 시스템 => Property Based Type System
// C언어, Java : 이름 기준 => 명목적 타입 시스템 
let user: {
  // id가 있어도 되고 없어도 되는 프로퍼티라면 ?를 추가로 작성해주면 된다 => 선택적 프로퍼티(Optional Property)
  id?: number;
  name: string;
} = {
  id: 1,
  name: "josh"
}

user.id;

user = {
  name: "cathy"
}


let config:{
  // 절대 수정되면 안 되는 값이 있다면 readonly를 사용하여 읽기 전용으로 만들어 주면 된다.
  readonly apiKey: string;
} = {
  apiKey: "My API KEY"
}

// config.apiKey="hacked"; 오류 발생



// 실습
let dog: {
  id: number;
  name: string;
  color: string;
} = {
  id: 1,
  name: "밤이",
  color: "brown"
}

dog.name;