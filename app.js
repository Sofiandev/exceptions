class Rectangle {
  constructor(height, width) {
    if (height <= 0 || width <= 0) {
      //throw stop execution
      throw new Error(
        "Impossible d'avoir une forme avec des valeurs nulles ou négatives "
      );
    }
    this.height = height;
    this.width = width;
  }

  get perimeter() {
    return this.height * 2 + this.width * 2;
  }

  get isValid() {
    if (this.height > 0 && this.width > 0) {
      return true;
    } else {
      return false;
    }
  }

  isBiggerThan(shape) {
    if (this.perimeter < shape.perimeter) {
      return `${this.perimeter} est plus petit que ${shape.perimeter}`;
    } else if (this.perimeter > shape.perimeter) {
      return `${this.perimeter} est plus grand que ${shape.perimeter}`;
    } else {
      return "ils sont égaux";
    }
  }
}

class Square extends Rectangle {
  constructor(width) {
    super(width, width);
  }
}
function promptRectangle() {
  try {
    const height = parseInt(prompt("hauteur"), 10);
    const width = parseInt(prompt("Largeur"), 10);
    const r = new Rectangle(height, width);
    return r;
  } catch (e) {
    throw new Error("Entrée utilisateur invalide");
  }
}

promptRectangle();
// to catch error
// try {
//   const r = new Rectangle(-10, 20);
// } catch (e) {
//   console.log(e.message);
// }

const r = new Rectangle(10, 20);
console.log(r.perimeter);
console.log(r.isValid);
const r2 = new Rectangle(-10, 20);
console.log(r.isValid);
const c = new Square(10);
console.log(c.perimeter);
console.log(c.isBiggerThan(r));
