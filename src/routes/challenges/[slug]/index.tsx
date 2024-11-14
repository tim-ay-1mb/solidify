import { action, createAsync, redirect, useAction, useNavigate, useParams, useSubmission } from "@solidjs/router";
import { createMemo, createSignal, onMount, Show, useContext } from "solid-js";
import { createStore } from "solid-js/store";
import getChallenge from "~/resources/getChallenge";
import QuestionList from "../../../components/QuestionList";
import PanelFooter from "../../../components/PanelFooter";
import { AuthUserContext, PanelContext } from "../../../context";
import { isServer } from "solid-js/web";
import submitResponse from "../../../resources/submitResponse";




const Intro = () => {

  const { challenge } = useContext(PanelContext)!;

  const meta = [
    { label: "No. of questions", value: challenge().questions.length },
    { label: "Suggested time", value: `${challenge().questions.length * 1.5} mins.` },
    { label: "Difficulty", value: `${challenge().difficulty}` },
  ]
  return (
    <Show when={challenge()}>
      <div class="section">
        <div class="page">
          <div class="title">{challenge().title}</div>
          <pre class="font-courier whitespace-pre-line">{challenge().description}
          </pre>
          <br />
          {
            meta.map((m) => (
              <div class="whitespace-pre">{m.label.padEnd(25, " ")}{m.value}</div>
            ))
          }
        </div>
      </div ></Show>
  )
}




export default function ChallengeDetail() {

  const { slug } = useParams<{ slug: string }>();
  const _challenge = createAsync(async () => {
    const challenge = await getChallenge(slug);
    if (challenge && challenge.questions) {
      challenge.questions = challenge.questions.sort(() => Math.random() - 0.5);
      challenge.questions.forEach(question => {
        question.options = question.options.sort(() => Math.random() - 0.5);
      })
    }
    return challenge!;

  });
  const challenge = createMemo(() => _challenge()!);
  const [answers, setAnswers] = createStore<number[]>(Array(challenge()?.questions.length).fill(-1));
  const [currIndex, setCurrIndex] = createSignal<number>(-1);


  const getElementByIndex = (index: number) => {
    if (!isServer) {
      return (document as Document).querySelector(`[data-question-index="${index}"]`);
    }
  };

  const scrollToQuestion = (index: number) => {
    if (index !== currIndex()) {
      getElementByIndex(index)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  onMount(() => {
    // if scroll to question, update currIndex
    if (!isServer) {
      (window as Window).addEventListener("scroll", () => {
        const questionElements = document.querySelectorAll("[data-question-index]");
        const questionIndex = Array.from(questionElements).findLastIndex((element) => {
          return element.getBoundingClientRect().top <= window.innerHeight / 2;
        });
        setCurrIndex(questionIndex);
      });
    }
  })

  const navigate = useNavigate();
  const { user } = useContext(AuthUserContext)!;
  const action = useAction(submitResponse);
  const onSubmit = async () => {
    const { id } = await action({ challenge: challenge(), answers: answers, user: user()?.uid ?? "" });
    console.log(id);
    navigate(`/challenges/${slug}/result/${id}`);
  }



  return (
    <Show when={challenge()} fallback={<div>Loading...</div>}>
      <PanelContext.Provider value={{ answers, setAnswers, challenge, scrollToQuestion, currIndex, setCurrIndex, showAnswer: false }
      }>
        <main class="text-gray-700 w-full">
          <Intro />
          <QuestionList />
          <PanelFooter onSubmit={onSubmit} />
        </main>
      </PanelContext.Provider>
    </Show>
  );
}


