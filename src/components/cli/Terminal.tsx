"use client"
import {useState} from "react";
import CommandInput from "@/components/cli/CommandInput";
import {commands} from "@/lib/commands";
import OutputLine from "./OutputLine";

export default function Terminal() {
    const [history, setHistory] = useState<string[]>([]);

    const handleCommand = (cmd: string) => {
        if(cmd === "clear"){
            setHistory([]);
            return;
        }
        const handler = commands[cmd];
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        setHistory([...history, cmd, handler ? handler() : `command not found: ${cmd}`]);
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

