type Field = {
  label: string;
  text?: string;
  list?: string[];
};

interface ProjectCardProps {
  title: string;
  meta?: string;
  fields: Field[];
  link?: string;
}

function ProjectCard({ title, meta, fields, link }: ProjectCardProps) {
  return (
    <div
      onClick={
        link
          ? () => window.open(link, "_blank", "noopener,noreferrer")
          : undefined
      }
      className={`rounded-lg border border-zinc-800 bg-zinc-900/40 p-6${
        link ? " cursor-pointer transition-colors hover:border-zinc-700" : ""
      }`}
    >
      <h3 className="font-mono text-lg text-zinc-100">
        {title}
        {meta && (
          <span className="ml-2 text-sm font-normal text-zinc-500">{meta}</span>
        )}
      </h3>
      <dl className="mt-4 space-y-3">
        {fields.map((field) => (
          <div key={field.label}>
            <dt className="font-mono text-xs uppercase tracking-wide text-emerald-400">
              {field.label}
            </dt>
            {field.text && (
              <dd className="mt-1 text-sm text-zinc-400">{field.text}</dd>
            )}
            {field.list && (
              <dd className="mt-1">
                <ul className="list-inside list-disc space-y-1.5 text-sm text-zinc-400">
                  {field.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </dd>
            )}
          </div>
        ))}
      </dl>
    </div>
  );
}

export default ProjectCard;
