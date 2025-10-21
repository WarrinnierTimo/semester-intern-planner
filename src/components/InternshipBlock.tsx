import { Internship } from "@/types/internship";
import { Badge } from "@/components/ui/badge";
import { MapPin, User } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface InternshipBlockProps {
  internship: Internship;
  weekWidth: number;
}

const domainColors = {
  health: "bg-domain-health/20 border-domain-health text-domain-health",
  technology: "bg-domain-technology/20 border-domain-technology text-domain-technology",
  business: "bg-domain-business/20 border-domain-business text-domain-business",
  arts: "bg-domain-arts/20 border-domain-arts text-domain-arts",
  science: "bg-domain-science/20 border-domain-science text-domain-science",
};

const statusLabels = {
  "concept": "Concept",
  "visible-all": "Visible All",
  "visible-student": "Visible Student",
  "visible-teacher": "Visible Teacher",
  "finished": "Finished",
};

const statusColors = {
  "concept": "bg-status-concept text-white",
  "visible-all": "bg-status-visible-all text-white",
  "visible-student": "bg-status-visible-student text-white",
  "visible-teacher": "bg-status-visible-teacher text-white",
  "finished": "bg-status-finished text-white",
};

export function InternshipBlock({ internship, weekWidth }: InternshipBlockProps) {
  const duration = internship.endWeek - internship.startWeek + 1;
  const width = duration * weekWidth;
  const left = (internship.startWeek - 1) * weekWidth;

  return (
    <TooltipProvider delayDuration={200}>
      <Tooltip>
        <TooltipTrigger asChild>
          <div
            className={`absolute top-1 bottom-1 rounded-lg border-2 ${domainColors[internship.domain]} hover:shadow-lg transition-all cursor-pointer overflow-hidden`}
            style={{
              left: `${left}px`,
              width: `${width}px`,
            }}
          >
            <div className="p-2 h-full flex flex-col justify-between">
              <div className="space-y-1">
                <div className="font-semibold text-xs truncate">
                  {internship.department}
                </div>
                {width > 150 && (
                  <div className="flex items-center gap-1 text-[10px] opacity-80">
                    <User className="w-3 h-3" />
                    <span className="truncate">{internship.teacher}</span>
                  </div>
                )}
              </div>
              <Badge 
                className={`text-[9px] px-1 py-0 h-4 w-fit ${statusColors[internship.status]}`}
              >
                {statusLabels[internship.status]}
              </Badge>
            </div>
          </div>
        </TooltipTrigger>
        <TooltipContent className="max-w-xs bg-card border shadow-lg pointer-events-auto">
          <div className="space-y-2">
            <div className="font-semibold">{internship.department}</div>
            <div className="space-y-1 text-sm">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{internship.teacher}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Week {internship.startWeek} - {internship.endWeek}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">Domain:</span>
                <span className="capitalize">{internship.domain}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">Status:</span>
                <Badge className={`${statusColors[internship.status]}`}>
                  {statusLabels[internship.status]}
                </Badge>
              </div>
            </div>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
