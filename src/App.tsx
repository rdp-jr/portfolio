import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import "./App.css";
import { useState } from "react";

function App() {
  const [whaleImage, setWhaleImage] = useState<string>("/whale-1.webp");

  return (
    <main className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-4xl font-semibold text-slate-700">
          Hey, I&apos;m <span className="font-bold">Obee</span>
        </h1>
        <h2 className="text-2xl text-slate-700 font-semibold">
          I'm a software engineer who likes to build cool stuff
        </h2>

        <div className="flex items-center gap-4">
          <a
            href="https://linkedin.com/in/rdprincipiojr/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-4 py-2 bg-slate-50 hover:bg-slate-200 rounded-lg transition-all duration-200 border-2 border-slate-600 border-b-4"
          >
            <IconBrandLinkedin className="w-6 h-6 text-slate-700" />
          </a>

          <a
            href="https://github.com/rdp-jr/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-4 py-2 bg-slate-50 hover:bg-slate-200 rounded-lg transition-all duration-200 border-2 border-slate-600 border-b-4"
          >
            <IconBrandGithub className="w-6 h-6 text-slate-700" />
          </a>
        </div>

        <div>
          <img
            src={whaleImage}
            className="animate-float"
            alt="Space Whale"
            width={200}
            onMouseEnter={() => setWhaleImage("/whale-2.webp")}
            onMouseLeave={() => setWhaleImage("/whale-1.webp")}
          />
        </div>
      </div>
    </main>
  );
}

export default App;
