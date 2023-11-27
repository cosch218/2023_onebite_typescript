/**
 * 인터페이스의 확장(상속)
 */

type Animal = {
    name: string;
    color: string;
}

interface Dog extends Animal {
    // 인터페이스는 객체 타입이면 다 확장할 수 있음
    // extends를 사용하면 Animal 타입이 Dog 타입의 슈퍼타입이 됨
    // => 아래 name과 같이 동일한 프로퍼티의 타입을 재정의할 때에는 원본 프로퍼티 타입의 서브타입이 되어야 함
    // ==> Animal 타입의 name 프로퍼티가 string이기 때문에 이 프로퍼티를 재정의할 때에는 리터럴 타입으로 가능함
    isBark: boolean;
}

const dog: Dog = {
    name: "",
    color: "",
    isBark: true,
};

interface Cat extends Animal {
    isScratch: boolean;
}

interface Chicken extends Animal {
    isFly: boolean;
}

interface DogCat extends Dog, Cat {

}

const dogCat: DogCat = {
    name: "",
    color: "",
    isBark: true,
    isScratch: true,
}