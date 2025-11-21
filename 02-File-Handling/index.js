import { readFile, writeFile, appendFile, mkdir } from "fs/promises";

// Read file content
const read_file = async (fileName) => {
  const data = await readFile(fileName, "utf-8");
  console.log(data);
};

// read_file("sample.txt");

// Create file
const create_file = async (fileName, content) => {
  await writeFile(fileName, content);
  console.log("File succesfully created.");
};
// const content = "This is very unique course that has 5 project and e-commerce application with authentication.";
// create_file("sample.txt", content);

// Append extra content on exiting file
const append_file = async (fileName, content) => {
  await appendFile(fileName, content);
  console.log("Extra content added.");
};

// append_file(
//   "sample.txt",
//   "that has 5 project and e-commerce application with authentication."
// );

// createe folter - directory
const create_dir = async (dir) => {
  await mkdir(dir, { recursive: true });
  console.log("Folder created.");
};

// create_dir("public");
// create_dir("public/fonts");
