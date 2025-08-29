import About from "@/components/cli/commands/About";
import Help from "@/components/cli/commands/Help";
import Contact from "@/components/cli/commands/Contact";
import Projects from "@/components/cli/commands/Projects";
import Resume from "@/components/cli/commands/Resume";
import {fakeFS} from "@/lib/utils";


export const commands = {
    help: () => <Help/>,
    about: () => <About/>,
    projects: () => <Projects/>,
    resume: () => <Resume/>,
    contact: () => <Contact/>,
    clear: () => "",
    ls: () => Object.keys(fakeFS).join("  "),
    cat: (filename?: string) => fakeFS[filename || ""] || "file not found",
};