import { createFileRoute } from "@tanstack/react-router";
import { Dashboard } from "@/components/inventory/Dashboard";
import { useParts } from "@/hooks/use-parts";

export const Route = createFileRoute("/")({ component: IndexPage });

function IndexPage() {
  const { parts, loading } = useParts();
  return <Dashboard parts={parts} loading={loading} />;
}
