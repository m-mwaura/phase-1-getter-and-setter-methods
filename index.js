// Add your Circle class here
class Circle {
    constructor(radius) {
        this.radius = radius;
    
}

//get diameter 
get diameter () {
    return this.radius * 2;
}

//set for diameter
set diameter(diameter) {
    this.radius = diameter / 2;
}
//get the circumference
get circumference() {
    return Math.PI * this.diameter;
}

set circumference(circumference) {
    this.radius = circumference / (2 * Math.PI);
}

//Get area

get area() {
    return Math.PI * this.radius ** 2;
}

//set area

set area(area) {
    this.radius = Math.sqrt(area/Math.PI);
}

}