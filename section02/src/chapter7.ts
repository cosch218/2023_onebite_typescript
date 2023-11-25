/** void */
// void : 공허 => 아무것도 없다
// 아무것도 없음을 의미하는 타입
function func1(): string {
  return "hello";
};

// return문을 사용하지 않고 싶은 함수에서 사용
function func2(): void {
  // 함수가 정상적으로 종료되지만 반환문이 없는 함수
  console.log("hello");
};

// void 타입으로 지정한 변수는 undefined 외 어떤 값도 담을 수 없다.
let a: void;
a = undefined;
// a = 1;
// a = "hello";
// a = {};



/** never */
// never : 존재하지 않는
// 불가능한 타입
function func5(): never  {
  // 무한 루프를 도는 함수처럼 절대로 정상적으로 종료될 수 없어서 이 함수에 반환값이 있는 것 자체가 모순일 경우
  while (true) {}
};

// 무한 루프 외에도 의도적으로 오류를 발생시키는 함수를 never 타입으로 반환값 타입을 정의할 수 있다.
function func6(): never {
  throw new Error();
}

//변수의 타입을 never로 정의하면 any를 포함해 그 어떠한 타입의 값도 이 변수에 담을 수 없다.
let b: never;
// b = 1; 
// b = null;
// b = undefined;
// b = a;