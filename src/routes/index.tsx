import { A } from "@solidjs/router"
import { createMemo, createSignal, For, Show } from "solid-js"
import { Question } from "~/types";


const TodayQuestion = () => {

  const question: Question = {
    "difficulty": 1,
    "tag": "solidjs",
    "question": "What is the core concept behind SolidJS's reactivity system?",
    "options": [
      {
        "key": "a",
        "text": "Virtual DOM diffing",
        "correct": false,
        "explanation": "Virtual DOM diffing is used by frameworks like React, but not SolidJS.",
        "count": 456,
      },
      {
        "key": "b",
        "text": "Proxies and Signals",
        "correct": true,
        "explanation": "SolidJS uses proxies to track dependencies and signals to hold and update reactive values.",
        "count": 1245
      },
      {
        "key": "c",
        "text": "Two-way data binding",
        "correct": false,
        "explanation": "While SolidJS can achieve two-way binding, it's not the core of its reactivity.",
        "count": 328
      },
      {
        "key": "d",
        "text": "Immutable data structures",
        "correct": false,
        "explanation": "Immutable data structures are a different approach to managing state, not the core of SolidJS.",
        "count": 22
      }
    ]
  }


  const [answer, setAnswer] = createSignal<number>(-1);

  const totCount = createMemo(() => {
    return question.options.reduce((acc, option) => acc + (option.count ?? 0), 0);
  });

  const isCorrect = createMemo(() => {
    return answer() === question.options.findIndex((option) => option.correct);
  });


  return (
    <div class="page pt-[15vh]!">
      <div class="title">Day 1 Challenge 😁</div>
      <p>Fancy a little SolidJS challenge? A new question pops up here . Reckon you can keep up and get 'em all right?</p>
      <span>*********</span>
      <p class="font-bold">{question.question}</p>
      <ul classList={{ "pointer-events-none": answer() !== -1 }}>
        <For each={question.options}>
          {(option, oIndex) => {
            const percent = Math.round((option.count ?? 0) / totCount() * 100);
            return (
              <li class="mb-2">
                <label classList={{
                  "font-bold": answer() === oIndex(),
                  "global": answer() === oIndex(),
                  "text-red-600": answer() !== -1 && answer() !== oIndex() && option.correct,
                  "text-green-600": answer() === oIndex() && option.correct,
                }} class="flex items-start w-full" on:click={() => setAnswer(oIndex())}>
                  <span class="whitespace-pre">{answer() === oIndex() ? "(*) " : "( ) "}</span>
                  <span class="flex-1" >{option.text}</span>
                  <Show when={answer() > -1}>
                    <span class="self-end">{"*".repeat(Math.floor(percent / 10))}{" "}{percent}%</span>
                  </Show>
                </label>
              </li>
            )
          }}
        </For>
      </ul>
      <Show when={answer() !== -1}>
        <p class="mt-4  text-green-600">
          Answer: {question?.options?.find(option => option.correct)?.explanation}
        </p>
        <Show when={isCorrect()} fallback={
          <p class="text-sm">Oops! No worries! Why not tackle a few <A href="/challenges">more challenges</A> to boost your skills?</p>
        }>
          <p class="text-sm">Fantastic! How about trying some <A href="/challenges">[more challenges]</A>? You’re on a roll!</p>

        </Show>
      </Show>
    </div >
  )
};

const Index = () => {


  return <div class="section" >
    <div class="page">
      <img src="/images/logo.svg" class="w-24 pb-4 -mt-12" />
      <div class="title w-[11ch] animate-typing overflow-hidden border-r-2 whitespace-pre-wrap">SolidIFY...</div>
      <div class="font-courier whitespace-pre-line">
        <p>Are you curious about your Solid-JS skills? Take our challenges to get a clear picture of your strengths and weaknesses.</p>
        <p><span class="font-bold">Identify Knowledge Gaps:</span> <br />Pinpoint the areas where you need to focus your learning. Our challenges helps you identify specific Solid-JS concepts you might be missing.</p>
        <p><span class="font-bold">Build a Strong Foundation:</span> <br />Use the challenges results to create a targeted learning plan and solidify your understanding of Solid-JS fundamentals.</p>
      </div>
      <A href="/challenges">[Start Challenge!]</A>{" "}
      <A href="/#today">[Today's Question]</A>
    </div>

    {/* <A name="today" x> */}
    <TodayQuestion />
    {/* </A> */}
  </div >
}


export default Index