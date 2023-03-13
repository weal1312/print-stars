export class Triangle {
  lines: number;
  maxLengthPerLine: number;
  starsArr?: string[];
  
  constructor(lines: number) {
    if (Number.isNaN(lines) || !Number.isInteger(lines) || lines < 1 || lines % 2 === 0) throw new TypeError('argument should be a positive odd integer');
    
    this.lines = lines;
    this.maxLengthPerLine = 1 + 2 * (lines - 1);

    this.generate();
  }

  /** @private */
  generate() {
    this.starsArr = [];

    for (let i = 0; i < this.lines; i++) {
      const starNums = 1 + 2 * i;
      const padPerSideNums = (this.maxLengthPerLine - starNums) / 2;
      
      const stars = ' '.repeat(padPerSideNums) + '*'.repeat(starNums) + ' '.repeat(padPerSideNums);
      this.starsArr.push(stars);
    }
  }

  print() {
    console.log(this.starsArr?.join('\n'));
  }
}