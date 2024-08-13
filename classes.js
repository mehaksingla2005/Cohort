class Rectangle{
    constructor(width,height,color){
        this.width=width;
        this.height=height;
        this.color=color;
    }
    area(){
        const area=this.width * this.height;
        return area;
    }
    paint(){
        console.log(`painting with color ${this.color}`);
    }
}
const rect =new Rectangle(2,4,"red");
const area=rect.area();
console.log(`the area of the rectangle is ${area}`);
const paint=rect.paint();


//some more classes
const now=new Date();//created a new object of date class
console.log(now);


const map=new Map();
map.set('name','Mehak');
map.set('age',19);
console.log(map.get('age'));



