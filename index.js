let math = 72;
let english = 74;
let science = 73;
let filipino = 75;
let mapeh = 75;

let genAve = (math + english + science + filipino + mapeh) / 5;

if (genAve >= 101) {
  console.log(`General Average: ${genAve}`);
  console.log("Invalid Grade!");
} else if (genAve >= 98) {
  console.log(`General Average: ${genAve}`);
  console.log("With Highest Honor");
} else if (genAve >= 95) {
  console.log(`General Average: ${genAve}`);
  console.log("With High Honor");
} else if (genAve >= 90) {
  console.log(`General Average: ${genAve}`);
  console.log("With Honor");
} else if (genAve >= 75) {
  console.log(`General Average: ${genAve}`);
  console.log("Passed");
} else {
  console.log(`General Average: ${genAve}`);
  console.log("Failed");
}
