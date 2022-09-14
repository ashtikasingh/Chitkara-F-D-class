function Circle(c_radius) {
    this.c_radius = c_radius;
  }

Circle.prototype.area = function () {
    return Math.PI * this.c_radius * this.c_radius;
  };

  Circle.prototype.perimeter = function () {
    return Math.PI * this.c_radius * 2;
  };
  var rad = prompt("Radius of the circle: ");
  var cir = new Circle(rad);


console.log("Area of circle")
console.log(cir.area().toFixed(2));
console.log("Perimeter of circle")
console.log(cir.perimeter().toFixed(2));