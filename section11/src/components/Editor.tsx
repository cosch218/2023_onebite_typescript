import { useState } from "react";
import { TodoDispatchContext, useTodoDispatch } from "../App";

interface Props {}

export default function Editor(props: Props) {

    const dispatch = useTodoDispatch();
    
    const [text, setText] = useState("");
    // => useState 메서드는 초기값으로 설정한 괄호 안의 인수를 기준으로 state 함수와 state 변화 함수의 타입을 자동으로 추론해줌
    // ==> 제네릭 함수
    // * useState() : 기본값 undefined 타입
    // * useState("") : string 타입
    // * useState<string>() : string | undefined 타입

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {setText(e.target.value)};

    const onClickButton = () => {
        dispatch.onClickAdd(text);
        setText("");
    }

    return (
        <div>
            <input value={text} onChange={onChangeInput} />
            <button onClick={onClickButton}>추가</button>
        </div>
    )
}
