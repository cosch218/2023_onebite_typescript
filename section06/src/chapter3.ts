/**
 * 인터페이스와 클래스
 */

// 아래의 인터페이스는 Character 클래스의 설계도 역할을 한다고 보면 됨
interface CharacterInterface {
    // 인터페이스로 정의하는 아래의 필드들은 무조건 public 접근 제어자로 설정됨
    // 그래서 이 인터페이스를 사용하는 클래스의 생성자에서 접근 제어자를 다른 옵션으로 설정하면 오류가 발생함
    // 만약 private 접근 제어를 사용한 필드가 필요하다면 인터페이스에 작성하지 말고 클래스에 따로 작성해야 함 (21번 줄 참고)
    name: string;
    moveSpeed: number;
    move(): void;
}

// implements를 사용한 이 문법은 CharacterInterface를 사용해 Character 클래스를 구현한다는 의미
class Character implements CharacterInterface{
    // 생성자
    constructor(
        public name: string,
        public moveSpeed: number,
        private extra: string,
    ) {}

    // 메서드
    move():void {
        console.log(`${this.moveSpeed} 속도로 이동!`);
    }
}
