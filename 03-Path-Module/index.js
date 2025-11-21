import path from "path";

// // join two or more files
// const fullPath = path.join("/users", "joe", "docs", "file.txt");
// console.log("Files join:", fullPath);

// // absolute path
// const absolute_path = path.resolve();
// console.log("We are in:", absolute_path);

const extreme = path.extname("resume.txt");
if (extreme == ".pdf") {
  console.log("Ok");
} else {
  console.log("Not supported");
}
