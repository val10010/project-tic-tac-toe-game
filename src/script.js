(function() {
  const block = document.querySelector(".block");
  const btn = document.querySelector(".btn");

  let count = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      count++;
      const cell = document.createElement("span");
      cell.classList.add("cell");
      cell.setAttribute("data-count", count);
      cell.style.left = j * 80 + 1 * j + 1 + "px";
      cell.style.top = i * 80 + 1 * i + 1 + "px";
      block.appendChild(cell);
    }
  }
  const winComb = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
  ];
  const arrX = [];
  const arr0 = [];
  const moves = [];
  block.addEventListener("click", function() {
    let length = moves.length - 1;
    if (moves[length] != "X" && event.target.dataset.count) {
      event.target.innerHTML = "X";
      arrX.push(+event.target.dataset.count);
      moves.push(event.target.innerHTML);
      checkWin(arrX, event.target.innerHTML);
      event.target.removeAttribute("data-count");
    }
    if (moves[length] == "X" && event.target.dataset.count) {
      event.target.innerHTML = "O";
      arr0.push(+event.target.dataset.count);
      moves.push(event.target.innerHTML);
      checkWin(arr0, event.target.innerHTML);
      event.target.removeAttribute("data-count");
    }
  });
  const cell = document.querySelectorAll(".cell");
  btn.addEventListener("click", function() {
    for (let i = 0; i < cell.length; i++) {
      cell[i].innerHTML = "";
      cell[i].setAttribute("data-count", i + 1);
    }
    arrX.length = 0;
    arr0.length = 0;
    moves.length = 0;
  });

  const checkWin = function(elem, elemWin) {
    elem.sort();
    for (let i = 0; i < winComb.length; i++) {
      let checkedCrossArr = elem.filter(e => ~winComb[i].indexOf(e));

      if (JSON.stringify(winComb[i]) === JSON.stringify(checkedCrossArr)) {
        alert("win    " + elemWin);
        arrX.length = 0;
        arr0.length = 0;
        moves.length = 0;
        return;
      }
    }
    if (moves.length == 9) {
      alert("draw");
    }
  };
})();
