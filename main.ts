namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`
    //% blockIdentity=images._tile
    export const tile2 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
let myLargeEnemies = sprites.allOfKind(SpriteKind.Enemy)
let varNumLargeEnemies = 6
for (let index = 0; index <= varNumLargeEnemies; index++) {
    myLargeEnemies[index] = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . 1 1 1 1 1 1 1 1 1 1 . . . 
. . . 1 f f 1 1 1 1 f f 1 . . . 
. . . 1 1 1 1 1 1 1 1 1 1 . . . 
. . 1 1 1 1 1 f f 1 1 1 1 1 . . 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 . 1 1 . 1 1 . 1 1 . 1 1 . 1 
1 1 . 1 1 . 1 1 . 1 1 . 1 1 . 1 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
    myLargeEnemies[index].setPosition(20 + 20 * index, 30)
    myLargeEnemies[index].setVelocity(10, 0)
}
game.onUpdate(function () {
    for (let index = 0; index <= varNumLargeEnemies; index++) {
        if (myLargeEnemies[index].x > 150) {
            for (let index = 0; index <= varNumLargeEnemies; index++) {
                myLargeEnemies[index].y += 8
                myLargeEnemies[index].x += -2
                myLargeEnemies[index].vx = -10
            }
        }
    }
    for (let index = 0; index <= varNumLargeEnemies; index++) {
        if (myLargeEnemies[index].x < 10) {
            for (let index = 0; index <= varNumLargeEnemies; index++) {
                myLargeEnemies[index].y += 8
                myLargeEnemies[index].x += 2
                myLargeEnemies[index].vx = 10
            }
        }
    }
})
