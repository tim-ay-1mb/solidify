import { A, createAsync } from "@solidjs/router";
import { createMemo, For } from "solid-js";
import getResponses from "../../resources/getResponses";

const Responses = () => {
  const _responses = createAsync(() => getResponses());

  const responses = createMemo(() => _responses());

  // console.log(responses());

  return (
    <div class="section">
      <div class="page">
        <div class="title">Leaderboard 🏆</div>
        <div class="font-courier whitespace-pre-line">
          <p>
            Fancy a peek at the standings? Check out the rankings of other Solid developers and see where you stack up! 📊✨ It's a brilliant way to get inspired and perhaps pick up a few tips from the top performers. Dive in and discover the community's best! 🌟
          </p>
          <div class="mt-8 pb-16">
            <div class="flex underline-offset-1 underline">
              <span class="flex-1">User</span>
              <span class="w-36 text-right max-lg:hidden">Date</span>
              <span class="w-36 text-right">Score</span>
            </div>
            <ul class="min-h-[20vh]">
              <For each={responses()}>
                {(response, index) => (
                  <li class="flex justify-between">
                    <p class="p-0 flex-1 leading-3">
                      {response.userDisplayName}
                      <br />
                      <A href={`/challenges/${response.challenge.slug}`} class="text-greay-500 text-sm">
                        {response.challenge.title}
                      </A>
                    </p>

                    <span class="w-36 text-sm text-right max-lg:hidden">
                      {new Date(response?.completedAt!).toISOString().split("T")[0]}<br />
                      {new Date(response?.completedAt!).toISOString().split("T")[1]!.split(".")[0]}
                    </span>
                    <span class="w-36 text-right">
                      {response.score}/{response.challenge.questionCount}
                    </span>
                  </li>
                )}
              </For>
            </ul>
          </div>
        </div >
      </div >
    </div >
  );
};

export default Responses;
