class Player {
    constructor(pilih) {
      this.pilih = pilih;
    }
    choose() {}
  }
  
  class HumanPlayer extends Player {
    constructor(pilih) {
      super(pilih);
    }
    choose(tangan) {
      this.pilih = tangan;
    }
  }
  
  class ComputerPlayer extends Player {
    constructor(pilih) {
      super(pilih);
    }
    choose() {
      this.pilih = this.random();
    }
    random() {
      return Math.floor(Math.random() * 3 + 1);
    }
  }
  
  class Game {
      vs = document.getElementById("vs");
      humanWin = document.getElementById("humanWin");
      comWin = document.getElementById("comWin");
      draw = document.getElementById("draw");
    
      winner(playerOne, playerTwo) {
          if (playerOne > playerTwo) {
              vs.style.display = display[vs.style.display]
              humanWin.style.display = display[humanWin.style.display]
              return;
          }
          if (playerOne < playerTwo) {
              vs.style.display = display[vs.style.display]
              comWin.style.display = display[comWin.style.display]
              return;
          } else {
              vs.style.display = display[vs.style.display]
              draw.style.display = display[draw.style.display]
          }
    }
  }
  
  const human = new HumanPlayer(0);
  const computer = new ComputerPlayer(0);
  const game = new Game();
  
  const display = {
      none: "block",
      block: "none"
  }
  
  function handleClick(tangan) {
    human.choose(tangan);
    computer.choose();
  
    game.winner(human.pilih, computer.pilih);
  }
  
  function refresh(){
      location.reload();
  }