import { useParams, Link } from "react-router-dom";
import { quizzes } from "../data/quizzes";
import { useState } from "react";
import SearchBar from "../ui/SearchBar";


export default function CategoryDetailPage() {
    const { categoryId } = useParams();
    const filteredQuizzes = quizzes.filter((q) => q.category === categoryId);

    const [query, setQuery] = useState("");

    const filtered = filteredQuizzes.filter((quiz) =>
        quiz.title.toLowerCase().includes(query) ||
        quiz.description.toLowerCase().includes(query)
    );


    return (
        <div className="w-full min-h-screen flex flex-col items-center pt-20 px-6">
            <h1 className="text-4xl font-bold text-white mb-10 capitalize">
                {categoryId} Quizzes
            </h1>
            <SearchBar placeholder="Search quizzes..." onChange={setQuery} />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl w-full">
                {filtered.map((quiz) => (
                    <Link
                        key={quiz.id}
                        to={`/quiz/${quiz.id}`}
                        className="group rounded-2xl bg-slate-900 border border-slate-800 p-6 
                       transition hover:border-emerald-400 hover:bg-slate-900/70"
                    >
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-emerald-300">
                            {quiz.title}
                        </h3>

                        <p className="text-sm text-slate-400 mb-4">
                            {quiz.description}
                        </p>

                        <div className="flex justify-between text-xs text-slate-500">
                            <span className="uppercase">Difficulty: {quiz.difficulty}</span>
                            <span>{quiz.tags.join(" • ")}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
