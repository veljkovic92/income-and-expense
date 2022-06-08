const month = new Date().toLocaleString("en-US", { month: "long" });
const year = new Date().getFullYear();
const date = month + " " + year;

export { date };
