"use client"
import {useState} from "react";
import CommandInput from "@/components/cli/CommandInput";

export default function Terminal() {
    const [history, setHistory] = useState<string[]>([]);

    const handleCommand = (cmd: string) => {
        setHistory([...history, cmd]);
    };

    return (
        <div className="bg-black text-green-400 font-mono p-2">
            {history.map((line, i) => (
                <div key={i}>{"> "}{line}</div>
            ))}
            <CommandInput onSubmit={handleCommand} />
        </div>
    );
}

