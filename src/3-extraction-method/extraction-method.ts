import * as path from "path";

export const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

export const extractionMethod = () => {
  /*get method*/

  const filename = path.basename(__filename);
  console.log(`filename: ${filename}`);

  return { minimum };
};

function minimum(arr: number[][]) {
  let result = Number.POSITIVE_INFINITY;
  for (let x = 0; x < arr.length; x++)
    for (let y = 0; y < arr[x].length; y++) result = min(result, arr, x, y);
  return result;
}
function min(result: number, arr: number[][], x: number, y: number) {
  if (result > arr[x][y]) result = arr[x][y];
  return result;
}
