var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var course = {
    title: "Typescript Bootcamp",
    subtitle: "Learn the language fundamentals, build practical projects",
    stats: {
        lessonsCount: 10,
    },
};
var newCourse = __assign({}, course);
var newCourse_2;
Object.assign(newCourse_2, course);
console.log(newCourse);
course.stats.lessonsCount = 100;
console.log(newCourse);
console.log(newCourse_2);
