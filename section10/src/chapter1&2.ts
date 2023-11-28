/** Mapped(맵드) 타입 기반의 유틸리티 타입들 */

/**
 * Partial<T>
 * : 부분적인, 일부분의
 * => 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 바꿔주는 타입
 */

interface Post {
    title: string;
    tags: string[];
    content: string;
    thumbnailURL?: string;
}

type Partial<T> = {
    [key in keyof T]?: T[key];
};

// 임시 저장글
const draft: Partial<Post> = {
    title: "제목 나중에 짓자",
    content: "초안...",
};



/** 
 * Required<T>
 * : 필수의, 필수적인
 * => 특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 타입
 */

type Required<T> = {
    [key in keyof T]-?: T[key];
};

const withThumbnailPost: Required<Post> = {
    // 프로퍼티가 하나라도 생략되면 오류 발생
    title: "한입 타스 후기",
    tags: ["ts"],
    content: "",
    thumbnailURL: "https://...",
};



/**
 * Readonly<T>
 * : 읽기 전용, 수정 불가
 * => 특정 객체 타입에서 모든 프로퍼티를 읽기 전용 프로퍼티로 만들어주는 타입
 */

type Readonly<T> = {
    readonly[key in keyof T]: T[key];
};

const readonlyPost: Readonly<Post> = {
    title: "보호된 게시글 입니다.",
    tags: [],
    content: "",
};

// readonlyPost.content = ""; 오류 발생



/**
 * Pick<T, K>
 * : 뽑다, 고르다
 * => 객체 타입으로부터 특정 프로퍼티만 딱 골라내는 타입
 */

type Pick<T, K extends keyof T> = {
    // K extends keyof T 
    // => K extends "title" | "tags" | "content" | "thumbnailURL"
    // ==> "title" | "content" extends "title" | "tags" | "content" | "thumbnailURL"
    // ===> "title" | "content"
    [key in K]: T[key];
};

const legacyPost: Pick<Post, "title" | "content"> = {
    title: "옛날 글",
    content: "옛날 컨텐츠",
};



/**
 * Omit<T, K>
 * : 생략하다, 빼다
 * => 객체 타입으로부터 특정 프로퍼티를 제거하는 타입
 */

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
// T = Post, K = "title"
// => Pick<Post, Exclude<keyof Post, "title">>
// ==> Pick<Post, Exclude<"title" | "content" | "tags" | "thumbnailURL", "title">>
// ===> Pick<Post, "content" | "tags" | "thumbnailURL">
// ====> "content" | "tags" | "thumbnailURL"

const noTitlePost: Omit<Post, "title"> = {
    // => Post 타입으로부터 "title"프로퍼티만 제거한 객체를 만듦
    content: "",
    tags: [],
    thumbnailURL: "",
};



/**
 * Record<K, V>
 * => 객체 타입을 새롭게 정의할 때 프로퍼티마다 중복된 값이 있을 때 사용함
 */

type Record<K extends keyof any, V> = {
    [key in K]: V
}

type Thumbnail = Record<"large" | "medium" | "small" | "watch", { url: string, size: number }>