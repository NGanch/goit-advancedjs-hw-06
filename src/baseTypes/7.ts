/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

// enum Role {
//   WORKDAY,
//   WEEKEND,
// }

// const person = {
//   role: Role.WORKDAY,
// };

// function isWeekend(week: Role) {
//   if (person.role === week) {
//     return true;
//   }
//   return false;
// }

enum Role {
  Monday = "MONDAY",
  Tuesday = "TUESDAY",
  Wednesday = "WEDNESDAY",
  Thursday = "THURSDAY",
  Friday = "FRIDAY",
  Saturday = "SATURDAY",
  Sunday = "SUNDAY",
}

function isWeekend(week: Role) {
  switch (week) {
    case "MONDAY":
      return false;
    case "TUESDAY":
      return false;
    case "WEDNESDAY":
      return false;
    case "THURSDAY":
      return false;
    case "FRIDAY":
      return false;
    case "SATURDAY":
      return true;
    case "SUNDAY":
      return true;
    default:
      return true;
  }
}

export {};
