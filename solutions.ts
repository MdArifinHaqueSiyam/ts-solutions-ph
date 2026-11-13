// Prob 1
function multiplyValue(value: number, multiplier: number = 2): number {
  return value * multiplier;
}

// Prob 2
function processInput(value: string | number | boolean): string | number {
  if (typeof value === "string") {
    return value.trim().toLowerCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else {
    return value ? "Active" : "Inactive";
  }
}

// Prob 3
function formatCoordinate(coordinate: readonly [number, number, string]): string {
  const lat = coordinate[0];
  const lon = coordinate[1];
  const name = coordinate[2];
  return `Location: ${name} (${lat}, ${lon})`;
}

// Problem 4
function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.reduce((acc, currentArray) => acc.concat(currentArray), []);
}

// Prob 5
interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

function getPopularCourses(courses: Course[], minStudents: number): Course[] {
  return courses.filter((course) => course.isPublished === true && course.students >= minStudents);
}

// Prob 6
function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
  return items.map((item) => item[key]);
}

// prob 7
class Employee {
  protected name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  getDetails(): string {
    return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
  }
}

class Manager extends Employee {
  private department: string;

  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);
    this.department = department;
  }

  getRoleInfo(): string {
    return `Manager of ${this.department}: ${this.name}`;
  }
}

// prob8
async function validateAgeAsync(age: number): Promise<string> {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      setTimeout(() => {
        resolve("Access Granted");
      }, 1000);
    } else {
      reject(new Error("Access Denied: Must be 18 or older"));
    }
  });
}