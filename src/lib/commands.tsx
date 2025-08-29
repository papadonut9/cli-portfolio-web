import {JSX} from "react";
import About from "@/components/cli/commands/About";
import Help from "@/components/cli/commands/Help";
import Contact from "@/components/cli/commands/Contact";
import Projects from "@/components/cli/commands/Projects";
import Resume from "@/components/cli/commands/Resume";

export type CommandHandler = () => JSX.Element | string;

export const commands: Record<string, CommandHandler> = {
    help: () => <Help/>,
    about: () => <About/>,
    projects: () => <Projects/>,
    resume: () => <Resume/>,
    contact: () => <Contact/>,
    clear: () => "",
};