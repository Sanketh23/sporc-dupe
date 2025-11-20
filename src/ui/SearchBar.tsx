import { useState } from "react";

interface SearchBarProps {
  placeholder?: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ placeholder, onChange }: SearchBarProps) {
  const [input, setInput] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setInput(value);
    onChange(value.toLowerCase());
  }

  return (
    <div className="w-full flex justify-center mb-8">
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder={placeholder ?? "Search..."}
        className="
          w-full max-w-xl px-4 py-3 
          rounded-xl bg-slate-900 border border-slate-700
          focus:outline-none focus:ring-2 focus:ring-emerald-500
          text-slate-200 placeholder-slate-500
        "
      />
    </div>
  );
}
