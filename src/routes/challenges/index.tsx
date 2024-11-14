import { A, createAsync } from "@solidjs/router"
import { For } from "solid-js"
import getChallenges from "../../resources/getChallenges";




const Challenges = () => {

    const challenges = createAsync(() => getChallenges());

    return <div class="section">
        <div class="page">
            <div class="title">Challenges</div>
            <div class="font-courier whitespace-pre-line">
                <p>Ready to level up your SolidJS skills?  These challenges are perfect for developers who want to put their knowledge to the test.  From JSX fundamentals to advanced data management, we've got challenges for all levels. Dive in and see what you know!</p>
                <div class="mt-8">
                    <div class="flex underline-offset-1 underline">
                        <span class="flex-1">Challenge</span>
                        <span class="w-36 text-right max-lg:hidden">Questions</span>
                        <span class="w-36 text-right">Difficulty</span>
                    </div>
                    <ul class="min-h-[20vh]">
                        <For each={challenges()}>
                            {(challenge, index) => (
                                <li class="flex justify-between">
                                    <A class="flex-1" href={`/challenges/${challenge.slug}`}> {challenge.title}</A>
                                    <span class="w-36 text-right max-lg:hidden">{challenge.questionCount}</span>
                                    <span class="w-36 text-right">{"*".repeat(challenge.difficulty)}</span>

                                </li>
                            )}
                        </For>
                    </ul>
                </div>

            </div>
        </div>
    </div>
}


export default Challenges