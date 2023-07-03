function printCourse(title, subtitle, lessonsCount) {
    if (title === void 0) { title = "TITLE"; }
    if (subtitle === void 0) { subtitle = "SUBTITLE"; }
    if (lessonsCount === void 0) { lessonsCount = 0; }
    console.log("Title: ".concat(title, ", Subtitle: ").concat(subtitle, " lessons count: ").concat(lessonsCount));
}
printCourse("Typescript Bootcamp", "Learn the language fundamentals, build practical projects", 10);
printCourse("Typescript Bootcamp", "Learn the language fundamentals, build practical projects");
printCourse();
