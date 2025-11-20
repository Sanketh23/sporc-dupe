import { Link } from "react-router-dom";
import { quizzes } from "../data/quizzes";
import { useState } from "react";
import SearchBar from "../ui/SearchBar";

export default function HomePage() {

    const [query, setQuery] = useState("");

    const filteredQuizzes = quizzes.filter((q) =>
        q.title.toLowerCase().includes(query) ||
        q.description.toLowerCase().includes(query) ||
        q.tags.some((t) => t.toLowerCase().includes(query))
    );

    return (
        <div className="w-full min-h-screen flex flex-col items-center justify-start pt-20">

            {/* HERO SECTION */}
            <div className="text-center space-y-4 mb-12">
                <h1 className="text-5xl font-bold tracking-tight text-white">
                    NBA Trivia Lab
                </h1>

                <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                    Test your NBA knowledge with fast, modern, and fun trivia quizzes.
                    More categories coming soon.
                </p>

                {/* MAIN ACTION BUTTONS */}
                <div className="flex gap-6 justify-center mt-6">
                    <Link
                        to="#quizzes"
                        className="px-8 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 
                       text-slate-900 font-semibold text-lg transition"
                    >
                        Play Quizzes
                    </Link>

                    <Link
                        to="/create"
                        className="px-8 py-3 rounded-xl bg-yellow-400 hover:bg-yellow-300
                       text-slate-900 font-semibold text-lg transition"
                    >
                        Create a Quiz
                    </Link>
                </div>
            </div>

            {/* QUIZ LIST */}
            <div id="quizzes" className="w-full max-w-5xl px-6">
                <h2 className="text-3xl font-bold mb-6 text-white">
                    Featured Quizzes
                </h2>

                {/* SEARCH BAR */}
                <SearchBar
                    placeholder="Search quizzes..."
                    onChange={setQuery}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredQuizzes.map((quiz) => (
                        <Link
                            key={quiz.id}
                            to={`/quiz/${quiz.id}`}
                            className="group rounded-2xl bg-slate-900 border border-slate-800 
                                        p-6 transition hover:border-emerald-400 hover:bg-slate-900/70"
                        >
                            <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-emerald-300">
                                {quiz.title}
                            </h3>
                            <p className="text-sm text-slate-400 mb-4">{quiz.description}</p>
                            <div className="flex justify-between text-xs text-slate-500">
                                <span className="uppercase">Difficulty: {quiz.difficulty}</span>
                                <span>{quiz.tags.join(" • ")}</span>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>

        </div>
    );
}
