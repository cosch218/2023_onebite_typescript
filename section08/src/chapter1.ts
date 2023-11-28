/**
 * 인덱스드 엑세스 타입
 * : 인덱스를 사용하여 객체, 배열, 튜플 타입에서 특정 프로퍼티 혹은 요소의 타입을 추출하는 타입
 */

// 예시 1. 객체
// : 객체 타입에서 특정 프로퍼티(author)를 추출해서 매개변수로 전달
// => 프로퍼티의 원본 타입이 추가되거나 수정 및 삭제 되더라도 그 변경사항이 즉시 반영되기 때문에 별도로 추가적인 작업을 하지 않아도 됨 
interface Post {
    title: string;
    content: string;
    author: {
        id: number;
        name: string;
        age: number;
    };
};

function printAuthorInfo1(author: Post["author"]) {
    console.log(`${author.name}-${author.id}`);
};

const post: Post = {
    title: "게시글 제목",
    content: "게시글 본문",
    author: {
        id: 1,
        name: "이정환",
        age: 27,
    },
};

printAuthorInfo1(post.author);



// 예시 2. 배열
type PostList = {
    title: string;
    content: string;
    author: {
        id: number;
        name: string;
        age: number;
    };
}[];

function printAuthorInfo2(author: PostList[number]["author"]) {
    console.log(`${author.name}-${author.id}`);
};

const postList: PostList[number] = {
    title: "게시글 제목",
    content: "게시글 본문",
    author: {
        id: 1,
        name: "이정환",
        age: 27,
    },
};



// 예시 3. 튜플
type Tup = [number, string, boolean];

type Tup0 = Tup[0];

type Tup1 = Tup[1];

type Tup2 = Tup[2];

// type Tup3 = Tup[3]; >> 오류 발생 : 존재하지 않음

type Tupnum = Tup[number] // 튜플 타입 안에 있는 모든 타입의 최적의 공동 타입을 추출함
// >> string | number | boolean
