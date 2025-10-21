import { Domain, Status } from "@/types/internship";
import { Badge } from "@/components/ui/badge";

const domains: { key: Domain; label: string; color: string }[] = [
  { key: "health", label: "Health", color: "bg-domain-health" },
  { key: "technology", label: "Technology", color: "bg-domain-technology" },
  { key: "business", label: "Business", color: "bg-domain-business" },
  { key: "arts", label: "Arts", color: "bg-domain-arts" },
  { key: "science", label: "Science", color: "bg-domain-science" },
];

const statuses: { key: Status; label: string; color: string }[] = [
  { key: "concept", label: "Concept", color: "bg-status-concept" },
  { key: "visible-all", label: "Visible All", color: "bg-status-visible-all" },
  { key: "visible-student", label: "Visible Student", color: "bg-status-visible-student" },
  { key: "visible-teacher", label: "Visible Teacher", color: "bg-status-visible-teacher" },
  { key: "finished", label: "Finished", color: "bg-status-finished" },
];

export function Legend() {
  return (
    <div className="bg-card border-t p-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-sm font-semibold mb-3 text-foreground">Domains</h3>
            <div className="flex flex-wrap gap-2">
              {domains.map((domain) => (
                <div key={domain.key} className="flex items-center gap-2">
                  <div className={`w-4 h-4 rounded ${domain.color}`} />
                  <span className="text-sm text-muted-foreground">{domain.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-3 text-foreground">Status</h3>
            <div className="flex flex-wrap gap-2">
              {statuses.map((status) => (
                <Badge key={status.key} className={`${status.color} text-white`}>
                  {status.label}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
