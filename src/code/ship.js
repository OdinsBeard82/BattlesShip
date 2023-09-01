class Ship {
    constructor(length) {
      this.length = length;
      this.hits = 0;
      this.sunk = false;
    }
  
    hit() {
      if (!this.isSunk()) {
        this.hits++;
        if (this.hits === this.length) {
          this.sunk = true;
        }
      }
    }
  
    isSunk() {
      return this.sunk;
    }
  }
  

  const ship1 = new Ship(4);
  const ship2 = new Ship(3);
  
  console.log(ship1);
  console.log(ship2);
  
  ship1.hit();
  console.log("Is ship1 sunk?", ship1.isSunk());
  