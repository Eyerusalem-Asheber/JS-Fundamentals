

const size = parseInt(process.argv[2]);

if (isNaN(size)) {
  console.log("Missing size");
} else {
  const line = "X".repeat(size);
  let i = 0;
  while (i < size) {
    console.log(line);
    i++;
  }
}
