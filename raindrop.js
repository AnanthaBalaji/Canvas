//Canvas Properties
function Circle(x, y, dx, dy, radius) {
    this.x = x
    this.y = y
    this.dx = dx
    this.dy = dy
    this.radius = radius
    this.length2
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)]
    this.drawLine = function () {
        context.fillStyle = this.color;
        context.beginPath();
        context.moveTo(this.x, this.y);
        context.lineTo(this.x, this.y+this.dy+20);        
        // context.arc(this.x, this.y, this.radius, 0, 180, false)
        context.strokeStyle = this.color;
        // context.fill();
        context.stroke();
        this.updateLine()
    }
    this.updateLine = function (){
        if (this.y + this.radius > canvas.height)
            this.y = Math.random() * (innerHeight/2 - (2 * radius)) + radius
        this.y -= this.dy
    }
}

function Arc(){
    this.drawArc=()=>{
        context.beginPath();
        context.arc(400, 600, 200, 1*Math.PI,0*Math.PI, false)
        context.strokeStyle="white"
        context.stroke();
    }
    
}

//Initialize contents
init = function () {
    var canvas = document.getElementById('canv')
    canvas.height = window.innerHeight
    canvas.width = window.innerWidth
    //Context Properties
    context = canvas.getContext('2d')
    circleArr = []
    var count = 2000;
    for(i=0;i<2000;i++) {
        radius = Math.random() * 3 + 1

        //arcX = Math.random() * (innerWidth - (2 * radius)) + radius
        //arcY = Math.random() * (innerHeight - (2 * radius)) + radius

        x = Math.random() * (innerWidth - (2 * radius)) + radius
        y = Math.random() * (innerHeight - (2 * radius)) + radius
        dx = Math.random()-0.5*20
        dy = Math.random()-0.5*20
        circleArr.push(new Circle(x, y, dx, dy, radius))
    }
}

//Draw circle function
animate = function () {
    requestAnimationFrame(animate)
    context.clearRect(0, 0, innerWidth, innerHeight)
    for (i = 0; i < circleArr.length; i++){
        circleArr[i].drawLine()
        // arc = new Arc();
        // arc.drawArc()
    }
}



var canvas = document.getElementById('canv')
canvas.height = window.innerHeight
canvas.width = window.innerWidth
//Context Properties
context = canvas.getContext('2d')
circleArr = []
colorArray = ['#222326', '#3A3B40', '#545559','#88898C','#F2F2F2']


window.addEventListener('resize', function () {
    canvas.height = window.innerHeight
    canvas.width = window.innerWidth
    init()
})
init()
animate()