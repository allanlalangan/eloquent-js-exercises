function chessboard(size) {
  for (let i = 1; i <= size; i++) {
    let row = '';
    if (i % 2 !== 0) {
      // console.log('odd');
      for (let i = 1; i <= size; i++) {
        row += ' #';
      }
    } else {
      // console.log('even');
      for (let i = 1; i <= size; i++) {
        row += '# ';
      }
    }
    console.log(row);
  }
}

chessboard(8);
