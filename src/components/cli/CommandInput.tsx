"use client";
import {useState} from "react";

export default function CommandInput({onSubmit} : {onSubmit: (cmd: string) => void}) {
    const [value, setValue] = useState("");

    const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            onSubmit(value);
            setValue("");
        }
    }

    return (
        <div>
            <span>{"> "}</span>
            <input className="bg-black text-green-400 outline-none"
                   value={value}
                   onChange={(e) => setValue(e.target.value)}
                   onKeyDown={handleKey}
                   autoFocus
            />
        </div>
    );
}