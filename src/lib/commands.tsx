import {JSX} from "react";
import About from "@/components/cli/commands/About";
import Help from "@/components/cli/commands/Help";

export type CommandHandler = () => JSX.Element | string;

export const commands: Record<string, CommandHandler> = {
    help: () => <Help/>,
    about: () => <About/>,
    clear: () => "",
}