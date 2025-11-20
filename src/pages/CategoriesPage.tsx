import { Link } from "react-router-dom";
import { useState } from "react";
import SearchBar from "../ui/SearchBar";


const categories = [
    { id: "mvps", label: "MVPs", emoji: "🏆" },
    { id: "allstars", label: "All-Stars", emoji: "⭐" },
    { id: "teams", label: "Teams", emoji: "🏀" },
    { id: "drafts", label: "Draft Classes", emoji: "🎓" },
    { id: "leaders", label: "Leaders", emoji: "📊" },
    { id: "history", label: "NBA History", emoji: "📘" },
];

export default function CategoriesPage() {
    const [query, setQuery] = useState("");

    const filteredCategories = categories.filter((cat) =>
        cat.label.toLowerCase().includes(query)
    );

    return (
        <div className="w-full min-h-screen flex flex-col items-center pt-20 px-6">
            <h1 className="text-4xl font-bold text-white mb-10">
                Browse Categories
            </h1>

            {/* SEARCH BAR */}
            <SearchBar
                placeholder="Search categories..."
                onChange={setQuery}
            />


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl w-full">
                {filteredCategories.map((cat) => (
                    <Link
                        key={cat.id}
                        to={`/categories/${cat.id}`}
                        className="rounded-2xl bg-slate-900 border border-slate-800 p-8 
                 hover:border-emerald-400 hover:bg-slate-900/70 transition group"
                    >
                        <div className="text-4xl mb-4">{cat.emoji}</div>
                        <h2 className="text-2xl font-semibold group-hover:text-emerald-300">
                            {cat.label}
                        </h2>
                    </Link>
                ))}
            </div>

        </div>
    );
}
