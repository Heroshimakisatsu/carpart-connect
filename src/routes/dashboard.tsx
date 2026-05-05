import { createFileRoute } from "@tanstack/react-router";
import { Dashboard } from "@/components/inventory/Dashboard";
import { useParts } from "@/hooks/use-parts";

export const Route = createFileRoute("/dashboard")({
  head: () => ({ meta: [{ title: "Dashboard — PartsPro" }] }),
  component: DashboardPage,
});

function DashboardPage() {
  const { parts, loading } = useParts();
  return <Dashboard parts={parts} loading={loading} />;
}