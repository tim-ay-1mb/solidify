import { createMemo, Show, useContext } from "solid-js";
import { A } from "@solidjs/router";
import { PanelContext } from "../context";

const PanelFooter = ({ onSubmit }: { onSubmit: () => void }) => {

    const data = useContext(PanelContext);

    if (!data) return;
    const { answers, challenge, scrollToQuestion } = data

    const currIndex = createMemo(() => data.currIndex())
    const slug = createMemo(() => challenge().slug)
    const total = createMemo(() => challenge().questions.length ?? 0)

    const onNext = () => {
        console.log(total(), currIndex())
        const i = currIndex() + Number(currIndex() < total() - 1);
        scrollToQuestion(i);
    }

    const onPrevious = () => {
        const i = currIndex() - Number(currIndex() > 0);
        scrollToQuestion(i);
    }

    const completed = createMemo(() => {
        return !answers.some(ans => ans === -1);
    })

    return (
        <div class="fixed bottom-0 right-0 p-4 w-full flex items-end justify-between">

            <A href="#" class="w-16" classList={{ disabled: currIndex() <= 0 }} on:click={onPrevious}>{"Prev"}</A>
            <Show when={true}><div class="text-right">
                [{currIndex() + 1}/{total()}]
            </div></Show>
            <Show fallback={
                <A href="#" on:click={onSubmit} class="w-16 text-right" classList={{ disabled: !completed() }}>Submit</A>
            } when={currIndex() !== total() - 1}>
                <A href="#" class="w-16 text-right" classList={{ disabled: currIndex() === total() - 1 }} on:click={onNext}>{"Next"}</A>
            </Show>
        </div>
    )
}

export default PanelFooter;