import { useParams } from "react-router-dom";
import { useState, useMemo, useEffect } from "react";
import { quizzes } from "../data/quizzes";
import CircleTimer from "../ui/CircleTimer";

export default function PlayQuizPage() {
  const { quizId } = useParams();
  const quiz = useMemo(() => quizzes.find((q) => q.id === quizId), [quizId]);
  console.log("quizId:", quizId);
  console.log("quiz IDs:", quizzes.map((q) => q.id));
  
  const [input, setInput] = useState("");
  const [correctSet, setCorrectSet] = useState<Set<string>>(new Set());
  const [isTimeUp, setIsTimeUp] = useState(false);

  const QUIZ_TIME = 60;
  const [timeLeft, setTimeLeft] = useState(QUIZ_TIME);

  useEffect(() => {
    if (isTimeUp) return;

    const interval = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(interval);
          setIsTimeUp(true);
          return 0;
        }
        return t - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isTimeUp]);

  if (!quiz) {
    return <div>Quiz not found.</div>;
  }
  
  const question = quiz.questions[0];
  
  if (!question) {
    return (
      <div className="text-center mt-10 text-lg text-slate-300">
        This quiz has no questions yet.
      </div>
    );
  }

  const normalizedAnswers =
    question.answers?.map((a) => a.trim().toLowerCase()) ?? [];

  const total = normalizedAnswers.length;
  const correct = correctSet.size;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (isTimeUp) return;

    const value = input.trim().toLowerCase();
    if (!value) return;

    if (normalizedAnswers.includes(value) && !correctSet.has(value)) {
      const newSet = new Set(correctSet);
      newSet.add(value);
      setCorrectSet(newSet);
    }
    setInput("");
  }

  return (
    <div className="space-y-8">
      <style>
        {`
        @keyframes pop {
          0% { transform: scale(1); }
          50% { transform: scale(1.08); }
          100% { transform: scale(1); }
        }
        .answer-pop { animation: pop 0.25s ease-out; }
        `}
      </style>

      <div className="text-center space-y-3">
        <h1 className="text-3xl font-bold">{quiz.title}</h1>
        <p className="text-slate-400 max-w-xl mx-auto">{quiz.description}</p>
      </div>

      {/* Timer */}
      <div className="flex justify-center pt-4">
        <CircleTimer timeLeft={timeLeft} totalTime={QUIZ_TIME} size={120} strokeWidth={8} />
      </div>



      <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 space-y-5 shadow-lg">
        <p className="text-lg font-medium">{question.prompt}</p>

        <form onSubmit={handleSubmit} className="flex gap-4">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={isTimeUp ? "Time's up!" : "Type a last name..."}
            disabled={isTimeUp}
            className={`flex-1 px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg
                       focus:outline-none focus:ring-2 focus:ring-emerald-500 
                       ${isTimeUp ? "opacity-50 cursor-not-allowed" : ""}`}
          />
          <button
            type="submit"
            disabled={isTimeUp}
            className="px-6 py-2 bg-emerald-500 text-slate-900 font-semibold rounded-lg
                       hover:bg-emerald-400 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Submit
          </button>
        </form>

        <div className="text-sm text-slate-400">
          Progress:{" "}
          <span className="text-emerald-400 font-semibold">
            {correct} / {total}
          </span>
        </div>

        {/* Reveal All */}
        <button
          onClick={() => {
            const s = new Set(normalizedAnswers);
            setCorrectSet(s);
          }}
          className="text-sm underline text-slate-300 hover:text-emerald-400"
        >
          Reveal all answers
        </button>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-3">
          {normalizedAnswers.map((ans) => (
            <div
              key={ans}
              className={`rounded-lg py-2 px-3 text-center text-sm font-semibold border transition
                ${
                  correctSet.has(ans)
                    ? "border-emerald-400 bg-emerald-500/10 text-emerald-300 answer-pop"
                    : "border-slate-800 bg-slate-900 text-slate-700"
                }`}
            >
              {correctSet.has(ans) ? ans.toUpperCase() : "— — —"}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
