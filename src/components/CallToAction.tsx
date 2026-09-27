import { ArrowRight } from "lucide-react";

function CallToAction() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16 md:py-24">
      <p className="font-mono text-sm uppercase tracking-wide text-emerald-400">
        // Connect
      </p>
      {/* <h2 className="mt-2 font-mono text-2xl font-semibold text-zinc-100 md:text-3xl">
        Endpoints
      </h2> */}
      <h2 className="mt-2 font-mono text-2xl font-semibold text-zinc-100 md:text-3xl">
        Get in touch
      </h2>

      <div className="mt-10 grid gap-6">
        <div className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-6">
          <h3 className="font-mono text-lg text-zinc-100">
            Let’s Build Something{" "}
            <span className="text-sm font-normal text-zinc-500">
              (Consulting / 1099)
            </span>
          </h3>
          <p className="mt-4 text-sm text-zinc-400">
            I am available for select 1099 consulting and technical
            partnerships. I specialize in helping Architects and teams execute
            complex visions. If you need a thorough code review, a custom
            AWS/Node integration, or want to finally get your org on a modern
            CI/CD pipeline, let’s talk.
          </p>
          <a
            href="#"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-emerald-400 px-4 py-2 font-mono text-sm font-medium text-zinc-950 transition-colors hover:bg-emerald-300"
          >
            Book a Technical Chat
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        {/* <div className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-6">
          <h3 className="font-mono text-lg text-zinc-100">
            Learn in Public{" "}
            <span className="text-sm font-normal text-zinc-500">
              (Follow the Journey)
            </span>
          </h3>
          <p className="mt-4 text-sm text-zinc-400">
            No newsletters or "5-step guru guides" here. I'm currently exploring
            the world of private, air-gapped AI homelabs (Docker, Ollama,
            pgvector) and sharing what I learn along the way. Sometimes I know
            exactly what I'm doing; sometimes I'm figuring it out live. Come
            watch me break things and fix them.
          </p>
          <div className="mt-6 flex items-center gap-4">
            <a
              href="#"
              aria-label="Twitch"
              className="text-zinc-500 transition-colors hover:text-emerald-400"
            >
              <SiTwitch className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="text-zinc-500 transition-colors hover:text-emerald-400"
            >
              <SiYoutube className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-label="GitHub"
              className="text-zinc-500 transition-colors hover:text-emerald-400"
            >
              <SiGithub className="h-5 w-5" />
            </a>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default CallToAction;
