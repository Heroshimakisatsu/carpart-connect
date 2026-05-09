import { createFileRoute, redirect } from "@tanstack/react-router";
import { Dashboard } from "@/components/inventory/Dashboard";
import { useParts } from "@/hooks/use-parts";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/dashboard")({
  head: () => ({ meta: [{ title: "Dashboard — PartsPro" }] }),
  beforeLoad: async () => {
    const { data } = await supabase.auth.getSession();
    if (!data.session) {
      throw redirect({ to: "/auth", search: { mode: "signin" } } as any);
    }
  },
  component: DashboardPage,
});

function DashboardPage() {
  const { parts, loading } = useParts();
  return <Dashboard parts={parts} loading={loading} />;
}