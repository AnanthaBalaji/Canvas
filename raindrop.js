//Canvas Properties
function Circle(x, y, dx, dy, radius) {
    this.x = x
    this.y = y
    this.dx = dx
    this.dy = dy
    this.radius = radius
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)]
    this.drawArc = function () {
        context.fillStyle = this.color;
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, 180, false)
        context.strokeStyle = this.color;
        context.fill();
        context.stroke();
    }
    this.updateArc = function () {
        if (this.y + this.radius > 0) {
            this.y -= this.dy
        }
        this.drawArc()
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
    for(i=0;i<1000;i++) {
        radius = Math.random() * 3 + 1
        x = Math.random() * (innerWidth - (2 * radius)) + radius
        y = Math.random() * (innerWidth - (2 * radius)) + radius
        dx = Math.random() - 0.5 * 4
        dy = Math.random() - 0.5 * 4
        circleArr.push(new Circle(x, y, dx, dy, radius))
    }

}

//Draw circle function
animate = function () {
    requestAnimationFrame(animate)
    context.clearRect(0, 0, innerWidth, innerHeight)
    for (i = 0; i < circleArr.length; i++){
        circleArr[i].updateArc()
    }
}



var canvas = document.getElementById('canv')
canvas.height = window.innerHeight
canvas.width = window.innerWidth
//Context Properties
context = canvas.getContext('2d')
circleArr = []
colorArray = ['#222326', '#3A3B40', '#545559', '#88898C', '#F2F2F2'];

window.addEventListener('resize', function () {
    canvas.height = window.innerHeight
    canvas.width = window.innerWidth
    init()
})

window.addEventListener('click',()=>{
    init()
    animate()
})


init()
animate()