import {
  extractionMethod,
  matrix,
} from "./3-extraction-method/extraction-method";

console.log(`main`);
const min = extractionMethod().minimum(matrix);
console.log(min);
