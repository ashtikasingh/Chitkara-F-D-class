function Cylinder(c_height, c_diameter) {
    this.c_height = c_height;
    this.c_diameter = c_diameter;
  }

Cylinder.prototype.Volume = function () {
    var radius = this.c_diameter / 2;
    return this.c_height * Math.PI * radius * radius;
  };
  
  var cyl = new Cylinder(7, 4);


console.log("Volume of cylinder")
console.log(cyl.Volume().toFixed(4));
