enum CourseType {
  FREE = "FREE",
  PREMIUM = "PREMIUM",
  PRIVATE = "PRIVATE",
  HIDDEN = "HIDDEN",
}

enum CourseType2 {
  FREE,
  PREMIUM,
  PRIVATE,
  HIDDEN,
}

const course = {
  title: "Typescript Bootcamp",
  type: CourseType.HIDDEN,
};

const course2 = {
  title: "Typescript Bootcamp2",
  type: CourseType2.HIDDEN,
};

console.log(course);
console.log(course2);
