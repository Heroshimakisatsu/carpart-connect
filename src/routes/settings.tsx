import { createFileRoute } from "@tanstack/react-router";
import { Settings as Cog } from "lucide-react";

export const Route = createFileRoute("/settings")({
  head: () => ({ meta: [{ title: "Settings — PartsPro" }] }),
  component: () => (
    <div className="min-h-[60vh] grid place-items-center text-center">
      <div className="max-w-md">
        <div className="size-16 mx-auto rounded-2xl gradient-primary grid place-items-center shadow-glow">
          <Cog className="size-7 text-primary-foreground" />
        </div>
        <h1 className="font-display text-4xl font-bold mt-4">Settings</h1>
        <p className="text-muted-foreground mt-2">Workspace settings will live here.</p>
      </div>
    </div>
  ),
});
