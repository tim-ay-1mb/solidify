import { For } from "solid-js";
import { Question } from "~/types";


const QuestionItem = ({ showAnswer, question, answers, qIndex, onSelected }: { showAnswer: boolean; question: Question, qIndex: () => number, answers: number[], onSelected: (qIndex: number, oIndex: number) => void }) => {



    return (
        <div class="page" data-question-index={qIndex()}>
            <span class="text-lg text-primary-700">({qIndex() + 1})</span>
            <p class="text-lg text-primary-700">{question.question}</p>
            <ul class="mt-8">
                <For each={question.options}>
                    {(option, oIndex) => (
                        <li class="mb-2">
                            <label class="flex items-start " classList={{
                                "text-green-600": showAnswer && option.correct,
                                "text-red-600": showAnswer && answers[qIndex()] === oIndex() && !option.correct
                            }} on:click={() => onSelected(qIndex(), oIndex())}>
                                <span class="whitespace-pre">{answers[qIndex()] === oIndex() ? "(*) " : "( ) "}</span>
                                <span><span classList={{
                                    "font-bold": answers[qIndex()] === oIndex()
                                }}>{option.text}</span> <br />
                                    <p class="my-4 text-xs leading-5">{showAnswer && option.explanation}</p>
                                </span>
                            </label>
                        </li>
                    )}
                </For>
            </ul>
        </div>
    );
}

export default QuestionItem;