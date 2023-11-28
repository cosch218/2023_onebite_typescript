/**
 * Mapped(맵드) 타입
 * : 기존의 객체 타입으로부터 새로운 객체 타입을 만드는 타입
 */

interface User {
    id: number;
    name: string;
    age: number;
}

// 회원 정보 수정을 위해 User 타입의 모든 프로퍼티가 선택적인 새로운 타입 필요 시
type PartialUser = {
    // key in 대괄호가 끝나는 지점에 물음표 붙이면 됨
    [key in "id" | "name" | "age"]?: User[key];
}

type BooleanUser = {
    [key in keyof User]: boolean;
    // User 타입의 모든 프로퍼티가 boolean 타입인 새로운 타입 생성
}

type ReadonlyUser = {
    readonly[key in keyof User]: User[key];
    // User 타입의 모든 프로퍼티가 읽기 전용인 새로운 타입 생성
}
