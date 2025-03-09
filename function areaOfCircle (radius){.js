function areaOfCircle(radius) {
  return Math.PI * Math.pow(radius, 2);
}
areaOfCircle(14);
console.log(areaOfCircle(7));

function circumference(radius) {
  return 2 * Math.PI * areaOfCircle(radius);
}
console.log(circumference(7));

function cylinderArea(radius, height) {
  // const circ =circumference(radius)
  return circumference(radius) * height;
}
console.log(cylinderArea(14, 7));
function totalSurfaceArea(radius, height) {
  const alala = areaOfCircle(radius);
  return cylinderArea(radius, height) + 2 * alala;
}
console.log(totalSurfaceArea(7, 4));
