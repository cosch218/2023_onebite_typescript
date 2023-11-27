/**
 *  제네릭 클래스
 */

class List<T> {
    // 생성자
    constructor (private list: T[]) {}

    // 메서드
    push(data: T) {
        this.list.push(data);
    }

    pop() {
        return this.list.pop();
    }

    print() {
        console.log(this.list);
    }
}

const numberList = new List([1, 2, 3]);
numberList.pop();
numberList.push(4);
numberList.print();

const stringList = new List(["one", "two", "three"]);
stringList.pop();
stringList.push("four");
stringList.print();