import { createFileRoute } from "@tanstack/react-router";
import { BarChart3 } from "lucide-react";

export const Route = createFileRoute("/reports")({
  head: () => ({ meta: [{ title: "Reports — PartsPro" }] }),
  component: () => <Placeholder title="Reports" desc="Detailed reports and exports are coming soon." />,
});

function Placeholder({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="min-h-[60vh] grid place-items-center text-center">
      <div className="max-w-md">
        <div className="size-16 mx-auto rounded-2xl gradient-primary grid place-items-center shadow-glow">
          <BarChart3 className="size-7 text-primary-foreground" />
        </div>
        <h1 className="font-display text-4xl font-bold mt-4">{title}</h1>
        <p className="text-muted-foreground mt-2">{desc}</p>
      </div>
    </div>
  );
}
