import { Outlet, Link } from "react-router-dom";

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">

      {/* TOP NAV */}
      <header className="border-b border-slate-800 bg-slate-900/40 backdrop-blur">
        <div className="mx-auto max-w-6xl flex items-center justify-between py-4 px-6">
          <Link to="/" className="text-xl font-bold tracking-tight">
            NBA Trivia Lab
          </Link>
          <nav className="flex gap-6 text-sm">
            <Link className="hover:text-emerald-400" to="/">Quizzes</Link>
            <Link className="hover:text-emerald-400" to="/create">Create</Link>
            <Link className="hover:text-emerald-400" to="/categories">Create</Link>

          </nav>
        </div>
      </header>

      {/* FULL-WIDTH CONTENT */}
      <main className="w-full min-h-[calc(100vh-80px)] flex justify-center">
        <Outlet />
      </main>

    </div>
  );
}
