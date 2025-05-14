export interface SeniorHighSchool {
  semester: Semester;
  track: string;
  strand: string;
}

export enum Semester {
  firstSemester = 'First Semeseter',
  secondSemester = 'Second Semester',
}
