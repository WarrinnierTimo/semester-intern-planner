import { Student, Internship } from "@/types/internship";
import { InternshipBlock } from "./InternshipBlock";
import { ScrollArea } from "@/components/ui/scroll-area";

interface CalendarGridProps {
  students: Student[];
  internships: Internship[];
  totalWeeks: number;
  semesterName: string;
}

const WEEK_WIDTH = 100;
const ROW_HEIGHT = 80;
const HEADER_HEIGHT = 60;

export function CalendarGrid({ students, internships, totalWeeks, semesterName }: CalendarGridProps) {
  return (
    <div className="flex flex-col h-full">
      {/* Header with Semester name */}
      <div className="bg-card border-b px-6 py-4">
        <h1 className="text-2xl font-bold text-foreground">{semesterName} - Internship Calendar</h1>
      </div>

      <ScrollArea className="flex-1">
        <div className="min-w-max">
          {/* Week Headers */}
          <div className="sticky top-0 z-20 bg-card border-b">
            <div className="flex">
              <div className="w-48 border-r bg-muted/50" style={{ height: `${HEADER_HEIGHT}px` }}>
                <div className="h-full flex items-center justify-center font-semibold text-sm">
                  Students
                </div>
              </div>
              <div className="flex">
                {Array.from({ length: totalWeeks }, (_, i) => i + 1).map((week) => (
                  <div
                    key={week}
                    className="border-r bg-muted/30 flex items-center justify-center"
                    style={{ width: `${WEEK_WIDTH}px`, height: `${HEADER_HEIGHT}px` }}
                  >
                    <div className="text-center">
                      <div className="text-xs text-muted-foreground font-medium">Week</div>
                      <div className="text-lg font-bold text-foreground">{week}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Student Rows with Internships */}
          <div className="relative">
            {students.map((student, index) => {
              const studentInternships = internships.filter(
                (i) => i.studentId === student.id
              );

              return (
                <div
                  key={student.id}
                  className={`flex border-b ${index % 2 === 0 ? 'bg-background' : 'bg-muted/20'}`}
                >
                  <div
                    className="w-48 border-r flex items-center px-4 font-medium sticky left-0 bg-card z-10"
                    style={{ height: `${ROW_HEIGHT}px` }}
                  >
                    {student.name}
                  </div>
                  <div
                    className="relative flex-1"
                    style={{
                      width: `${totalWeeks * WEEK_WIDTH}px`,
                      height: `${ROW_HEIGHT}px`,
                    }}
                  >
                    {/* Week Grid Lines */}
                    {Array.from({ length: totalWeeks }, (_, i) => i).map((week) => (
                      <div
                        key={week}
                        className="absolute top-0 bottom-0 border-r border-border/50"
                        style={{ left: `${week * WEEK_WIDTH}px`, width: `${WEEK_WIDTH}px` }}
                      />
                    ))}
                    
                    {/* Internship Blocks */}
                    {studentInternships.map((internship) => (
                      <InternshipBlock
                        key={internship.id}
                        internship={internship}
                        weekWidth={WEEK_WIDTH}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
