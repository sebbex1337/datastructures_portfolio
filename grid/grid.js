export default class Grid {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;
    this.grid = Array.from({ length: rows }, () => Array(cols).fill(null));
  }

  set(row, col, value) {
    this.grid[row][col] = value;
  }

  get(row, col) {
    return this.grid[row][col];
  }

  indexFor(row, col) {
    return row * this.cols + col;
  }

  rowColFor(index) {
    const row = Math.floor(index / this.cols);
    const col = index % this.cols;
    return { row, col };
  }

  neighbours(row, col) {
    const neighbours = [];
    if (row > 0) {
      neighbours.push({ row: row - 1, col }); // Check up
    }
    if (row < this.rows - 1) {
      neighbours.push({ row: row + 1, col }); // Check Down
    }
    if (col > 0) {
      neighbours.push({ row, col: col - 1 }); // Check Left
    }
    if (col < this.cols - 1) {
      neighbours.push({ row, col: col + 1 }); // Check Right
    }
    return neighbours;
  }

  neighbourValues(row, col) {
    return this.neighbours(row, col).map(({ row, col }) => this.get(row, col));
  }

  nextInRow(row, col) {
    if (col < this.cols - 1) {
      return { row, col: col + 1 };
    }
    return undefined;
  }

  nextInCol(row, col) {
    if (row < this.rows - 1) {
      return { row: row + 1, col };
    }
    return undefined;
  }

  north(row, col) {
    if (row > 0) {
      return { row: row - 1, col };
    }
    return undefined;
  }

  south(row, col) {
    if (row < this.rows - 1) {
      return { row: row + 1, col };
    }
    return undefined;
  }

  west(row, col) {
    if (col > 0) {
      return { row, col: col - 1 };
    }
    return undefined;
  }

  east(row, col) {
    if (col < this.cols - 1) {
      return { row, col: col + 1 };
    }
    return undefined;
  }

  rows() {
    return this.rows;
  }

  cols() {
    this.cols;
  }

  size() {
    return this.rows * this.cols;
  }

  fill(value) {
    for (let row = 0; row < this.rows; row++) {
      for (let col = 0; col < this.cols; col++) {
        this.set(row, col, value);
      }
    }
  }
}