const hairEl = document.querySelector('.hair-el')
const earEl = document.querySelector('.ears-el')
const eyeEl = document.querySelector('.eyes-el')
const mouthEl = document.querySelector('.mouth-el')
const neckEl = document.querySelector('.neck-el')
const legEl = document.querySelector('.leg-el')
const accessoriesEl = document.querySelector('.accessories-el')
const backgroundEl = document.querySelector('.background-el')

const hairImg = document.querySelector('.hair-img')
const earsImg = document.querySelector('.ears-img')
const eyesImg = document.querySelector('.eyes-img')
const mouthImg = document.querySelector('.mouth-img')
const neckImg = document.querySelector('.neck-img')
const legImg = document.querySelector('.leg-img')
const accessoriesImg = document.querySelector('.accessories-img')
const random = document.getElementById('random')
const download = document.getElementById('download')
const image = document.getElementById('image')

const accessoriesBtn = document.querySelector('.accessories-btns')
const styleBtns = document.querySelector('.style-btns')

const styles = [
    {
        hair: [
            {
                text: "Default",
                src: "./alpaca/hair/default.png"
            },
            {
                text: "Bang",
                src: "./alpaca/hair/bang.png"
            },
            {
                text: "Curls",
                src: "./alpaca/hair/curls.png"
            },
            {
                text: "Elegant",
                src: "./alpaca/hair/elegant.png"
            },
            {
                text: "Fancy",
                src: "./alpaca/hair/fancy.png"
            },
            {
                text: "Quiff",
                src: "./alpaca/hair/quiff.png"
            },
            {
                text: "Short",
                src: "./alpaca/hair/short.png"
            }
        ]
    },
    {
        ears: [
            {
                text: "Default",
                src: "./alpaca/ears/default.png"
            }, 
            {
                text: "Tilt-backward",
                src: "./alpaca/ears/tilt-backward.png"
            },
            {
                text: "Tilt-forward",
                src: "./alpaca/ears/tilt-forward.png"
            }]
    },
    {
        accessories : [
            {
                text: "Headphone",
                src: "./alpaca/accessories/headphone.png"
            },
            {
                text: "Earings",
                src: "./alpaca/accessories/earings.png"
            },
            {
                text: "Flower",
                src: "./alpaca/accessories/flower.png"
            },
            {
                text: "Glasses",
                src: "./alpaca/accessories/glasses.png"
            }
        ]
    },
    {
        eyes: [
            {
                text: "Default",
                src: "./alpaca/eyes/default.png"
            },
            {
                text: "Angry",
                src: "./alpaca/eyes/angry.png"
            },
            {
                text: "Naughty",
                src: "./alpaca/eyes/naughty.png"
            },
            {
                text: "Panda",
                src: "./alpaca/eyes/panda.png"
            },
            {
                text: "Smart",
                src: "./alpaca/eyes/smart.png"
            },
            {
                text: "Star",
                src: "./alpaca/eyes/star.png"
            }
        ]
    },
    {
        mouth: [
            {
                text: "Default",
                src: "./alpaca/mouth/default.png"
            },
            {
                text: "Astonished",
                src: "./alpaca/mouth/astonished.png"
            },
            {
                text: "Eating",
                src: "./alpaca/mouth/eating.png"
            },
            {
                text: "Laugh",
                src: "./alpaca/mouth/laugh.png"
            },
            {
                text: "Tongue",
                src: "./alpaca/mouth/tongue.png"
            }
        ]
    },
    {
        neck: [
            {
                text: "Default",
                src: "./alpaca/neck/default.png"
            },
            {
                text: "Bend-backward",
                src: "./alpaca/neck/bend-backward.png"
            },
            {
                text: "Bend-forward",
                src: "./alpaca/neck/bend-forward.png"
            },
            {
                text: "Thick",
                src: "./alpaca/neck/thick.png"
            },
        ]
    },
    {
        leg: [
            {
                text: "Default",
                src: "./alpaca/leg/default.png"
            },
            {
                text: "Bubble-tea",
                src: "./alpaca/leg/bubble-tea.png"
            },
            {
                text: "Cookie",
                src: "./alpaca/leg/cookie.png"
            },
            {
                text: "Game-console",
                src: "./alpaca/leg/game-console.png"
            },
            {
                text: "Tilt-backward",
                src: "./alpaca/leg/tilt-backward.png"
            },
            {
                text: "Tilt-forward",
                src: "./alpaca/leg/tilt-forward.png"
            },
        ]
    }
]

const background = [
    {
        text: "Blue 50",
        src: './alpaca/backgrounds/blue50.png'
    },
    {
        text: "Blue 70",
        src: './alpaca/backgrounds/blue60.png'
    },
    {
        text: "Blue 70",
        src: './alpaca/backgrounds/blue70.png'
    },
    {
        text: "Dark-blue 30",
        src: './alpaca/backgrounds/darkblue30.png'
    },
    {
        text: "Dark-blue 50",
        src: './alpaca/backgrounds/darkblue50.png'
    },
    {
        text: "Dark-blue 70",
        src: './alpaca/backgrounds/darkblue70.png'
    },
    {
        text: "Green 50",
        src: './alpaca/backgrounds/green50.png'
    },
    {
        text: "Green 60",
        src: './alpaca/backgrounds/green60.png'
    },
    {
        text: "Green 70",
        src: './alpaca/backgrounds/green70.png'
    },
    {
        text: "Grey 40",
        src: './alpaca/backgrounds/grey40.png'
    },
    {
        text: "Grey 70",
        src: './alpaca/backgrounds/grey70.png'
    },
    {
        text: "Grey 80",
        src: './alpaca/backgrounds/grey80.png'
    },
    {
        text: "Red 50",
        src: './alpaca/backgrounds/red50.png'
    },
    {
        text: "Red 60",
        src: './alpaca/backgrounds/red60.png'
    },
    {
        text: "Red 70",
        src: './alpaca/backgrounds/red70.png'
    },
    {
        text: "Yellow 50",
        src: './alpaca/backgrounds/yellow50.png'
    },
    {
        text: "Yellow 60",
        src: './alpaca/backgrounds/yellow60.png'
    },
    {
        text: "Yellow 70",
        src: './alpaca/backgrounds/yellow70.png'
    }
]

function generateBtns(id,accessory){
    const accessories = styles[id][accessory]
    const buttons = []

    for (let i = 0; i < accessories.length; i++){
        const btn = `
            <button onclick="updateImage( ${accessory}Img, '${accessories[i].src}')">${accessories[i].text}</button>
        `
        buttons.push(btn)
    }
    // remove existing buttons
    styleBtns.innerHTML=''

    // add new buttons
    buttons.forEach(btn=>{
        styleBtns.innerHTML += btn
    })
}

// generate background buttons
function generateBgBtns(){
    const buttons = [];
    const len = background.length;

    for (let i = 0; i < len; i++){
        const btn = `
            <button onclick="updateBg('${background[i].src}')">${background[i].text}</button>
        `
        buttons.push(btn)
    }
     // remove existing buttons
    styleBtns.innerHTML=''

    // add new buttons
    buttons.forEach(btn=>{
        styleBtns.innerHTML += btn
    })
}

function updateImage(accessory,imgSrc){
    accessory.src = imgSrc
}

function updateBg(bgSrc){
    const img = document.querySelector('.img')
    img.style.backgroundImage = `url(${bgSrc})`
}

function removeActive(){
    accessoriesBtn.querySelectorAll('button').forEach(btn=>{
            btn.classList.remove('active')
    })
}

function randomAccessories(){
    const hairImgSrc = styles[0]["hair"][Math.floor(Math.random()*7)].src
    const earsImgSrc = styles[1]["ears"][Math.floor(Math.random()*3)].src
    const accessoriesImgSrc = styles[2]["accessories"][Math.floor(Math.random()*4)].src
    const eyesImgSrc = styles[3]["eyes"][Math.floor(Math.random()*6)].src
    const mouthImgSrc = styles[4]["mouth"][Math.floor(Math.random()*5)].src
    const neckImgSrc = styles[5]["neck"][Math.floor(Math.random()*4)].src
    const legImgSrc = styles[6]["leg"][Math.floor(Math.random()*6)].src

    updateImage(hairImg, hairImgSrc)
    updateImage(earsImg, earsImgSrc)
    updateImage(accessoriesImg, accessoriesImgSrc)
    updateImage(eyesImg, eyesImgSrc)
    updateImage(mouthImg, mouthImgSrc)
    updateImage(neckImg, neckImgSrc)
    updateImage(legImg, legImgSrc)

    const bgSrc = background[Math.floor(Math.random()*18)].src
    updateBg(bgSrc)
}

download.addEventListener('click', ()=>{
    html2canvas(image).then(function(canvas) {
        const fileName = "alpaca";
        const link = document.createElement("a");
        link.download = fileName + ".png";

        canvas.toBlob(function (blob) {
            link.href = URL.createObjectURL(blob);
            link.click();
        })
});
})

hairEl.addEventListener('click', ()=>{
    removeActive();
    hairEl.classList.add('active')
    generateBtns(0, "hair")
})
earEl.addEventListener('click', ()=>{
    removeActive();
    earEl.classList.add('active')
    generateBtns(1, "ears")
})
accessoriesEl.addEventListener('click', ()=>{
    removeActive();
    accessoriesEl.classList.add('active')
    generateBtns(2, "accessories")
})
eyeEl.addEventListener('click', ()=>{
    removeActive();
    eyeEl.classList.add('active')
    generateBtns(3, "eyes")
})
mouthEl.addEventListener('click', ()=>{
    removeActive();
    mouthEl.classList.add('active')
    generateBtns(4, "mouth")
})
neckEl.addEventListener('click', ()=>{
    removeActive();
    neckEl.classList.add('active')
    generateBtns(5, "neck")
})
legEl.addEventListener('click', ()=>{
    removeActive();
    legEl.classList.add('active')
    generateBtns(6, "leg")
})
backgroundEl.addEventListener('click', ()=>{
    removeActive();
    backgroundEl.classList.add('active')
    generateBgBtns()
})
random.addEventListener('click',()=>{
    randomAccessories()
})





