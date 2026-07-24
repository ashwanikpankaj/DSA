const soduku = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

function checkValidSoduku(arr) {
  const rows = Array.from({ length: 9 }, () => new Set());
  const columns = Array.from({ length: 9 }, () => new Set());
  const boxes = Array.from({ length: 9 }, () => new Set());

  for (let i = 0; i < arr.length; i++) {
    const oneDArr = arr[i];
    for (let j = 0; j < oneDArr.length; j++) {
      const value = arr[i][j];
      const boxIndex = Math.floor(i / 3) * 3 +     Math.floor(j / 3);;

      if (value === ".") continue;

      if (rows[i].has(value)) {
        return false;
      } else {
        rows[i].add(value);
      }

      if (boxes[boxIndex].has(value)) {
        return false;
      } else {
        boxes[boxIndex].add(value);
      }

      if (columns[j].has(value)) {
        return false;
      } else {
        columns[j].add(value);
      }
    }
  }

  return true
}
