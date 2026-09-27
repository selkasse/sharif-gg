import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <p className="font-mono text-sm uppercase tracking-wide text-emerald-400">
        // The Proof
      </p>
      <h2 className="mt-2 font-mono text-2xl font-semibold text-zinc-100 md:text-3xl">
        Portfolio &amp; Projects
      </h2>
      <p className="mt-4 max-w-2xl text-zinc-400">
        I like to treat Salesforce like actual software, not just a declarative
        database. When I’m not writing Apex, I’m usually building full-stack
        apps or messing with containerization.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <ProjectCard
          title="Descriptador"
          // meta="(A Saleshorse Product)"
          fields={[
            {
              label: "The Pitch",
              text: "An app built to solve a simple but incredibly annoying problem: undocumented Salesforce orgs.",
            },
            {
              label: "How it works",
              text: "It connects to a Salesforce environment via the Metadata API, flags custom objects and validation rules missing descriptions, and uses AI to auto-generate them. Also usable without AI as a bulk description editor.",
            },
            {
              label: "The Tech",
              text: "Full-stack web app, Salesforce REST/Metadata APIs, OAuth 2.0, LLM integration.",
            },
          ]}
        />

        <ProjectCard
          title="Dungeon Shell"
          fields={[
            {
              label: "The Pitch",
              text: "A web-based game designed to help users learn CLI commands.",
            },
            {
              label: "How it works",
              text: "It doesn’t just simulate a terminal—it connects to an actual Linux terminal exposed via Docker and WebSockets.",
            },
            {
              label: "Why I built it",
              text: "Because I love infrastructure and wanted an excuse to experiment with real-time bidirectional communication and containerization outside of the Salesforce ecosystem.",
            },
            {
              label: "The Tech",
              text: "Xterm.js, Docker, WebSockets, microservices backend",
            },
          ]}
        />
      </div>

      <div className="mt-6">
        <ProjectCard
          title="The 9-to-5"
          meta="(Enterprise Experience)"
          fields={[
            {
              label: "The Pitch",
              text: "I am currently the sole Salesforce developer at a credit union, acting as the bridge between standard CRM administration and modern software engineering.",
            },
            {
              label: "Recent Wins",
              list: [
                "Architected a complex data retention framework utilizing TypeScript LWCs, the Metadata API, and asynchronous Apex.",
                "Built custom integrations to process and manipulate real-time Mulesoft JSON payloads.",
                "Currently championing the team's transition away from manual change sets and into source-driven development (Git, GitHub Actions CI/CD, and TS/Apex linting).",
              ],
            },
          ]}
        />
      </div>
    </section>
  );
}

export default Projects;
