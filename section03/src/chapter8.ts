/**
 * 서로소 유니온 타입 (=태그드 유니온 타입)
 * : 교집합이 없는 타입들로만 만든 유니온 타입을 말함
 */

type Admin = {
    tag: "ADMIN";
    name: string;
    kickCount: number;
};

type Member = {
    tag: "MEMBER";
    name: string;
    point: number;
};

type Guest = {
    tag: "GUEST";
    name: string;
    visitCount: number;
};

type User = Admin | Member | Guest;

// user가 Admin이면, "{name}님 현재까지 {kickCount}명 강퇴했습니다." 출력
// user가 Member이면, "{name}님 현재까지 {point}포인트 모았습니다." 출력
// user가 Guest이면, "{name}님 현재까지 {visitCount}번 방문하셨습니다." 출력
function login(user: User) {
    /* 방법 1 */
    switch (user.tag) {
        case "ADMIN" : {
            console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
            break;
        }
        case "MEMBER" : {
            console.log(`${user.name}님 현재까지 ${user.point}포인트 모았습니다.`);
            break;
        }
        case "GUEST" : {
            console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문하셨습니다.`);
            break;
        }
    }
    
    /* 방법 2 */
    if (user.tag === "ADMIN") {
        console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
    } else if (user.tag === "MEMBER") {
        console.log(`${user.name}님 현재까지 ${user.point}포인트 모았습니다.`);
    } else {
        console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문하셨습니다.`);
    }
}



/** 복습 겸 한 가지 더 사례 */
// 비동기 작업의 결과를 처리하는 객체

type LoadingTask = {
    state: "LOADING";
};

type FailedTask = {
    state: "FAILED";
    error: {
        message: string;
    };
};

type SuccessTask = {
    state: "SUCCESS";
    response: {
        data: string;
    };
};

type AsyncTask = LoadingTask | FailedTask | SuccessTask

// state가 LOADING이라면, 콘솔에 "로딩중" 출력
// state가 FAILED라면, 콘솔에 "실패 : 에러메세지" 출력
// state가 SUCCESS라면, 콘솔에 "성공: 데이터" 출력
function processResult(task: AsyncTask) {
    switch(task.state) {
        case "LOADING" : {
            console.log("로딩중");
            break;
        }
        case "FAILED" : {
            console.log(`실패 : ${task.error.message}`);
            break;
        }
        case "SUCCESS" : {
            console.log(`성공 : ${task.response.data}`);
            break;
        }
    }
}

const loading: AsyncTask = {
    state: "LOADING",
}

const failed: AsyncTask = {
    state: "FAILED",
    error: {
        message: "오류 발생 원인은 ~~~",
    },
};

const success: AsyncTask = {
    state: "SUCCESS",
    response: {
        data: "데이터 ~~~"
    },
};