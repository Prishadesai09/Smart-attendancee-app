export interface TimeSlot {
  subject: string;
  teacher: string;
  room: string;
}

export interface DaySchedule {
  [timeSlot: string]: TimeSlot;
}

export interface Timetable {
  [day: string]: DaySchedule;
}

export interface DivisionTimetable {
  [year: string]: Timetable;
}

export interface TimetableData {
  [division: string]: DivisionTimetable;
}

// Sample timetable data
export const timetableData: TimetableData = {
  "A": {
    "SE": {
      "Monday": {
        "9:00-10:00": { subject: "Mathematics", teacher: "Dr. Smith", room: "101" },
        "10:00-11:00": { subject: "Physics", teacher: "Prof. Johnson", room: "102" },
        "11:00-12:00": { subject: "Chemistry", teacher: "Dr. Brown", room: "103" },
        "12:00-1:00": { subject: "Lunch Break", teacher: "", room: "" },
        "1:00-2:00": { subject: "Computer Science", teacher: "Prof. Davis", room: "104" },
        "2:00-3:00": { subject: "English", teacher: "Ms. Wilson", room: "105" }
      },
      "Tuesday": {
        "9:00-10:00": { subject: "Physics", teacher: "Prof. Johnson", room: "102" },
        "10:00-11:00": { subject: "Mathematics", teacher: "Dr. Smith", room: "101" },
        "11:00-12:00": { subject: "Computer Science", teacher: "Prof. Davis", room: "104" },
        "12:00-1:00": { subject: "Lunch Break", teacher: "", room: "" },
        "1:00-2:00": { subject: "Chemistry", teacher: "Dr. Brown", room: "103" },
        "2:00-3:00": { subject: "English", teacher: "Ms. Wilson", room: "105" }
      }
      // Add more days as needed
    },
    "TE": {
      // Add TE timetable
    }
  },
  "B": {
    "SE": {
      // Add SE timetable for division B
    },
    "TE": {
      // Add TE timetable for division B
    }
  }
  // Add more divisions as needed
}; 