import { A, createAsync, query, useParams } from "@solidjs/router"
import { createMemo, For, Show } from "solid-js"
import QuestionList from "~/components/QuestionList";
import getResponse from "~/resources/getResponse";
import { PanelContext } from "../../../../context";


const ChallengeResult = () => {

    const { id, slug } = useParams<{ slug: string, id: string }>();

    const _response = createAsync(async () => {
        const response = await getResponse(id);
        return response!;
    }, {
        deferStream: true
    });
    const response = createMemo(() => _response()!);

    const challenge = createMemo(() => response()?.challenge!);

    const score = createMemo(() => response()?.score ?? 0);

    const answers = createMemo(() => response()?.answers ?? []);

    const result = createMemo(() => {
        const result = (challenge()?.result ?? []).find(r => r.score[0]! <= score() && r.score[1]! >= score());

        console.log(score(), challenge()?.result, result);
        return result;
    });

    return <Show when={response()}>
        <PanelContext.Provider value={{ answers: answers(), setAnswers: () => { }, challenge, currIndex: () => 0, setCurrIndex: () => { }, scrollToQuestion: () => { }, showAnswer: true }}>
            <div class="section">
                <div class="page">
                    <div class="title">{score()}/{challenge()?.questionCount}</div>
                    <div class="font-courier whitespace-pre-line">
                        <p class="font-bold">{result()?.title}</p>
                        <p>{result()?.feedback}</p>

                        <A href="/challenges">[Back to Challenges]</A><br />
                        <A href={`/challenges/${slug}`}>[Try Again]</A>
                    </div>
                </div>

            </div>
            <QuestionList />
            <div class="section">
                <div class="page">
                    <div class="title">{score()}/{challenge()?.questionCount}</div>
                    <div class="font-courier whitespace-pre-line">
                        <p class="font-bold">{result()?.title}</p>
                        <p>{result()?.feedback}</p>

                        <A href="/challenges">[Back to Challenges]</A><br />
                        <A href={`/challenges/${slug}`}>[Try Again]</A>
                    </div>
                </div>

            </div>
        </PanelContext.Provider>
    </Show>
}


export default ChallengeResult