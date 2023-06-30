"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TYPESCRIPT_COURSE = exports.COURSE_TOTAL = void 0;
exports.COURSE_TOTAL = 20;
exports.TYPESCRIPT_COURSE = {
    title: "Typescript Bootcamp",
    subtitle: "Learn the language fundamentals, build practical projects",
    lessonsCount: 10
};
function printCourse(course) {
    console.log("The course title is ".concat(course.title));
}
exports.default = printCourse;
