

// import kaboom lib
import kaboom from "https://unpkg.com/kaboom@3000.0.1/dist/kaboom.mjs";

// initialize kaboom context
kaboom();

loadSprite("kartka","tlo.png")
loadSprite("stefan","stefan.png")
loadSound("muzyka","muzyka.mp3")

add([
    sprite("kartka")
])


const stefan = add([
    sprite("stefan"),
    pos(0,200)
])

let wprawo = true
stefan.onUpdate(()=> {
    if(wprawo && stefan.pos.x < 600)
    stefan.pos.x += 1
    else if(!wprawo && stefan.pos.x>50)
    stefan.pos.x -=1
    else wprawo ^= true

})





onMouseRelease(()=>play("muzyka"))