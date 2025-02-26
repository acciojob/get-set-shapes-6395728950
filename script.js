//complete this code
class Rectangle {
	public:
	width;
	height;
	
	Rectangle(width,height){
		this.width = width;
	 this.height = height;
	}
  get width(){
	  return width;
  }
 get height(){
	 return height;
 }
 getArea(){
	 return width*height;
 }
}

class Square extends Animal {
   public:
	side;
	super(width,height);
	Square(side){
		this.side = side;
	}
	getPerimeter(){
		return  4*side;
	}
	
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
