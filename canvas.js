//Circle Class
function Circle(x,y,dx,dy,radius){
    this.x = x
    this.y = y
    this.dx = dx
    this.dy = dy
    this.radius = radius
    this.minRadius = radius
    this.color =  myArray[Math.floor(Math.random() * myArray.length)]


    this.draw = function(){
        context.fillStyle=this.color
        context.beginPath()
        context.arc(this.x,this.y,this.radius,0,180,false)
        context.strokeStyle = this.color
        context.fill()
        context.stroke()
    }

    this.update=function(){
        if(this.x+this.radius>canvas.width || this.x-this.radius<0){
            this.dx=-this.dx
        }
        if(this.y-this.radius<0 ||this.y+this.radius>canvas.height){
            this.dy=-this.dy
        }
        this.x+=this.dx
        this.y+=this.dy


        //mouse+circle position
        if(mouse.x-this.x<30 && mouse.x-this.x>-30 && mouse.y-this.y<30 && mouse.y-this.y>-30){ 
            if(this.radius<10)
                this.radius+=1            
        }
        else if(this.radius>this.minRadius){
            this.radius-=1
        }

        this.draw()
    }
}

//Initializing Values
function init(){
    circleArr=[]   
    console.log("init method called");
    for(i=0;i<1000;i++){
        radius=Math.random()*3+1
        x = Math.random()*(innerWidth - radius*2)+radius
        y = Math.random()*(innerHeight  - radius*2)+radius
        dx = Math.random()-0.5*4
        dy = Math.random()-0.5*4
        circleArr.push(new Circle(x,y,dx,dy,radius))
    }
}


//Drawing circle
function canvasArc(){
    requestAnimationFrame(canvasArc);
    context.clearRect(0,0,innerWidth,innerHeight)
    for(i=0;i<circleArr.length;i++){
        circleArr[i].update()
    }
}



var canvas = document.getElementById("canv")
canvas.width = window.innerWidth
canvas.height = window.innerHeight
context= canvas.getContext('2d');
mouse = {
    x:undefined,
    y:undefined,
}
circleArr=[]
myArray = ['#222326', '#3A3B40', '#545559','#88898C','#F2F2F2'];

window.addEventListener('mousemove',function(event){
    mouse.x = event.x
    mouse.y = event.y
})

window.addEventListener('resize',function(){
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    init()
})

for(x=0;x<10;x++){
    init()
    canvasArc()
}









































