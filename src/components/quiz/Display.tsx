import { createSignal, Show } from 'solid-js';

export interface Question {
  content: string,
  answers: string[],
  correctAnswer: number,
  explanation: string
}

export function QuestionDisplay(props: { list: Question[] }) {
  const [currentIdx, setCurrentIdx] = createSignal(0);
  const [explanationTitle, setExplanationTitle] = createSignal<string | null>(null);

  // Track current question
  const currentQuestion = () => props.list[currentIdx()]!;

  return <div>
    <p class='text-3xl text-justify font-bold mb-10'>{
      explanationTitle() 
        ?? currentQuestion()?.content 
        ?? "Congrats. You have finished all of the questions of this theme. Now you can:"
    }</p>

    <Show when={explanationTitle() === null} fallback={<>
      <p class='text-xl text-justify mb-10'>{currentQuestion().explanation}</p>
      <button class='btn btn-primary w-full text-lg' onMouseDown={() => {
        setExplanationTitle(null);
        setCurrentIdx(currentIdx() + 1);
      }}>Next question</button>
    </>}>
      <Show when={typeof currentQuestion() !== 'undefined'} fallback={<>
        <a class='btn btn-primary w-full text-lg mb-5' href='/quiz/themes'>Choose another theme</a>
        <a class='btn btn-primary w-full text-lg' href='/'>Back to homepage</a>
      </>}>
        <ul class='space-y-3'>{
          currentQuestion().answers.map((answer, idx) => <>
            <button class='py-2 px-3 rounded-lg btn-ghost text-xl text-left font-light max-w-full' onMouseDown={() => {
              setExplanationTitle(idx === currentQuestion().correctAnswer 
                ? "Well done. That's a correct answer" 
                : "Oopsies. That's incorrect"
              );
            }}>{String.fromCharCode(idx + 65)}. {answer}</button>
            <br />
          </>)
        }</ul>
      </Show>
    </Show>
  </div>;
}
