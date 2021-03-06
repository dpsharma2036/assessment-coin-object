    console.log("Assessment:Coin-Object.");


    let coin ={
    state: 0,
    flip: function() {
        this.state = Math.floor(Math.random() *2);
        return this.state
        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
    },
    toString: function() {
        if (this.state === 0){
            return "Head"
            
        }
        else {
            return "Tail"
        }

        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
    },
    toHTML: function() {
        let image = document.createElement('img');
        
        if (this.state === 0){
             image.src = './images/Head.jpg'
        }
        else {
            image.src = './images/Tail.jpg'
        }
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
        return image;
    }
    
}

console.log(coin.flip())
console.log(coin.toString())
console.log(coin.toHTML())
let images = document.createElement('div');
images.append(coin.toHTML());
document.body.append(images);

const display20flips = (coin)=> {
for (let i = 0; i <= 20; i++) {
    coin.flip()
    let p = document.createElement('p')
    p.innerHTML = `${coin.toString()}`
    document.body.appendChild(p)
    }
}

display20flips(coin)
function display20images(displayimages){
    for (let i = 0; i <= 20; i ++){
        coin.flip()
        document.body.appendChild(coin.toHTML())

    }
    
}




