export type Domain = "health" | "technology" | "business" | "arts" | "science";

export type Status = 
  | "concept" 
  | "visible-all" 
  | "visible-student" 
  | "visible-teacher" 
  | "finished";

export interface Internship {
  id: string;
  studentId: string;
  startWeek: number;
  endWeek: number;
  department: string;
  teacher: string;
  domain: Domain;
  status: Status;
}

export interface Student {
  id: string;
  name: string;
}
