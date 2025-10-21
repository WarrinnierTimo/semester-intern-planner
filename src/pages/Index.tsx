import { CalendarGrid } from "@/components/CalendarGrid";
import { Legend } from "@/components/Legend";
import { students, internships, TOTAL_WEEKS, SEMESTER_NAME } from "@/data/mockData";

const Index = () => {
  return (
    <div className="flex flex-col h-screen bg-background">
      <CalendarGrid 
        students={students}
        internships={internships}
        totalWeeks={TOTAL_WEEKS}
        semesterName={SEMESTER_NAME}
      />
      <Legend />
    </div>
  );
};

export default Index;
