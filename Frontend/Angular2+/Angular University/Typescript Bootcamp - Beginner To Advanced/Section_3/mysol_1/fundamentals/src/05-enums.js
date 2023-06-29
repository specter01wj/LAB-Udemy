var CourseType;
(function (CourseType) {
    CourseType["FREE"] = "FREE";
    CourseType["PREMIUM"] = "PREMIUM";
    CourseType["PRIVATE"] = "PRIVATE";
    CourseType["HIDDEN"] = "HIDDEN";
})(CourseType || (CourseType = {}));
var CourseType2;
(function (CourseType2) {
    CourseType2[CourseType2["FREE"] = 0] = "FREE";
    CourseType2[CourseType2["PREMIUM"] = 1] = "PREMIUM";
    CourseType2[CourseType2["PRIVATE"] = 2] = "PRIVATE";
    CourseType2[CourseType2["HIDDEN"] = 3] = "HIDDEN";
})(CourseType2 || (CourseType2 = {}));
var course = {
    title: "Typescript Bootcamp",
    type: CourseType.HIDDEN,
};
var course2 = {
    title: "Typescript Bootcamp2",
    type: CourseType2.HIDDEN,
};
console.log(course);
console.log(course2);
