import ReactMarkdown from "react-markdown"

interface ProjectDescriptionProps {
  description: string
}

export function ProjectDescription({ description }: ProjectDescriptionProps) {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
      <div className="prose prose-invert prose-slate max-w-none">
        <ReactMarkdown
          components={{
            h1: ({ children }) => <h1 className="text-2xl font-bold text-slate-50 mb-4">{children}</h1>,
            h2: ({ children }) => <h2 className="text-xl font-semibold text-slate-50 mb-3 mt-6">{children}</h2>,
            h3: ({ children }) => <h3 className="text-lg font-medium text-slate-50 mb-2 mt-4">{children}</h3>,
            p: ({ children }) => <p className="text-slate-300 mb-4 leading-relaxed">{children}</p>,
            ul: ({ children }) => <ul className="text-slate-300 mb-4 space-y-1 list-disc list-inside">{children}</ul>,
            li: ({ children }) => <li className="text-slate-300">{children}</li>,
            strong: ({ children }) => <strong className="text-slate-50 font-semibold">{children}</strong>,
            code: ({ children }) => (
              <code className="bg-slate-700 text-slate-300 px-2 py-1 rounded text-sm">{children}</code>
            ),
          }}
        >
          {description}
        </ReactMarkdown>
      </div>
    </div>
  )
}
