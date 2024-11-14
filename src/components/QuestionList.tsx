import { For, useContext } from "solid-js";
import QuestionItem from "./QuestionItem";
import { PanelContext } from "../context";



const QuestionList = () => {

    const { answers, setAnswers, challenge, scrollToQuestion, showAnswer = false } = useContext(PanelContext)!

    const onSelected = (qIndex: number, oIndex: number) => {
        const i = qIndex + Number(qIndex + 1 !== challenge()?.questions.length);
        setAnswers(qIndex, oIndex);
        setTimeout(() => {
            scrollToQuestion(i);
        }, 200)
    }
    return (
        <div class="section">
            <For each={challenge()?.questions}>
                {(question, qIndex) => (
                    <QuestionItem showAnswer={showAnswer} question={question} qIndex={qIndex} answers={answers} onSelected={onSelected} />
                )}
            </For >
        </div>
    )
}

export default QuestionList;