interface Course {
  title: string;
  subtitle: string;
  stats: {
    lessonsCount: number;
  };
}

let course: Course = {
  title: "Typescript Bootcamp",
  subtitle: "Learn the language fundamentals, build practical projects",
  stats: {
    lessonsCount: 10,
  },
};

const newCourse = { ...course };
let newCourse_2;
Object.assign(newCourse_2, course);

console.log(newCourse);

course.stats.lessonsCount = 100;

console.log(newCourse);
console.log(newCourse_2);
