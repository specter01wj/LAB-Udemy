var course1 = {
    title: "Typescript Bootcamp",
    lessonsCount: 100,
};
var course2 = {
    title: "Angular For Beginners",
    lessonsCount: 20,
};
function printCourses(message) {
    var courses = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        courses[_i - 1] = arguments[_i];
    }
    console.log(message);
    for (var _a = 0, courses_1 = courses; _a < courses_1.length; _a++) {
        var course = courses_1[_a];
        console.log(course.title);
    }
}
// printCourses("Welcome to the Angular University", [course1, course2]);
printCourses("Welcome to the Angular University", course1, course2);
