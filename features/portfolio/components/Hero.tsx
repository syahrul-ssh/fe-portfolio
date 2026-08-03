import { CodeXml, Contact, FileText, GitFork, Mail, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export function Hero() {
  return (
    <header id="home" className="hero">
      <div>
        <p className="hello">Hello, I&apos;m</p>
        <h1>
          Syahrul Safarudin Hasan{" "}
          <span>
            <CodeXml aria-hidden="true" />
          </span>
        </h1>
        <h3>Backend Engineer</h3>
        <p className="lead">
          Experienced software engineer specializing in backend development.
          <br />
          Focused on data insights and process improvement,
          <br />
          and efficient software solutions.
        </p>
        <div className="buttons">
          <Button className="green" render={<a href="#projects" />} size="sm">
            <CodeXml aria-hidden="true" /> View Projects
          </Button>
          {/* <Button render={<a href="#docs" />} size="sm" variant="outline">
            <FileText aria-hidden="true" /> View API Docs
          </Button> */}
          <Button className="bg-black hover:bg-gray-800" render={<a href="https://github.com/syahrul-ssh" />} size="lg">
            <FaGithub />
          </Button>

          <Button className="bg-blue-500 hover:bg-blue-600" render={<a href="https://linkedin.com/in/syahrul-sh" />} size="lg">
            <FaLinkedinIn />
          </Button>
        </div>
        {/* <div className="contacts">
        </div> */}
      </div>
      <div className="code">
        <div className="codebar">
          <i />
          <i />
          <i />
          <span>about.json</span>
        </div>
        <pre>{`  {\n    "name": "Syahrul Safarudin Hasan",\n    "role": "Backend Engineer",\n    "location": "Bandung, Indonesia",\n    "experience": "3+ years",\n    "specialties": ["API Development", "Clean Code", "Query Optimization", "Problem Solving"],\n    "currently": "Building efficient software solutions"\n  }\n\n$ _`}</pre>
      </div>
    </header>
  );
}
