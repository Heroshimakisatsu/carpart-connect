import { createFileRoute } from "@tanstack/react-router";
import { useParts } from "@/hooks/use-parts";
import { partStatus } from "@/lib/parts";
import { InventoryTable } from "@/components/inventory/InventoryTable";

export const Route = createFileRoute("/alerts")({
  head: () => ({ meta: [{ title: "Low Stock Alerts — PartsPro" }] }),
  component: AlertsPage,
});

function AlertsPage() {
  const { parts, loading } = useParts();
  const filtered = parts.filter((p) => partStatus(p) !== "in");
  return (
    <div className="space-y-6">
      <div>
        <div className="text-xs uppercase tracking-widest text-destructive font-semibold">Attention Required</div>
        <h1 className="font-display text-4xl font-bold mt-1">Low Stock Alerts</h1>
        <p className="text-muted-foreground mt-1">{filtered.length} parts at or below their threshold.</p>
      </div>
      <InventoryTable parts={filtered} loading={loading} />
    </div>
  );
}
