const main = document.querySelector('main');
const voicesSelect = document.getElementById('voices');
const textarea = document.getElementById('text');
const readBtn = document.getElementById('read');
const toggleBtn = document.getElementById('toggle');
const closeBtn = document.getElementById('close');
const emotionsbtn = document.getElementById('emotions');
const animalbtn = document.getElementById('animals');
const fruitsbtn = document.getElementById('fruits');
const vegetablesbtn = document.getElementById('vegetables');
const insectsbtn = document.getElementById('insects');
const form = document.getElementById('upload');
const imageid=document.getElementById('myimage');
const sub=document.getElementById('submitid')
const desname=document.getElementById('mytext');
var imagename,textname,dist;
imageid.addEventListener('change', function() {
    const reader = new FileReader();
    reader.addEventListener("load", () =>{
        imagename=reader.result;
        console.log(imagename);
    })
    reader.readAsDataURL(this.files[0]);
  });
sub.addEventListener('click', function(event){
    event.preventDefault();
    main.innerHTML="";
    textname=desname.value;
    dist={
        image: imagename,
        text: textname
    }
    data.push(dist);
    data.forEach(createBox);
    console.log(data);
    document.getElementById('text-box').classList.remove('show')
});
var data = [
    {
        image: './img/Animals/Atlantic Puffin.webp',
        text: "Atlantic Puffin"
    },
    {
        image: './img/Animals/Bobcat.webp',
        text: "Bobcat"
    },
    {
        image: './img/Animals/Cheetah.webp',
        text: "Cheetah"
    },
    {
        image: './img/Animals/Dusky Dolphin.webp',
        text: "Dusky Dolphin"
    },
    {
        image: './img/Animals/European Robin.webp',
        text: "European Robin"
    },
    {
        image: './img/Animals/Firefish.webp',
        text: "Firefish"
    },
    {
        image: './img/Animals/Green Turtle.webp',
        text: "Green Turtlen"
    },
    {
        image: './img/Animals/Hippopotamus.webp',
        text: "Hippopotamus"
    },
    {
        image: './img/Animals/Indri.webp',
        text: "Indri"
    }, {
        image: './img/Animals/Jumping Spider.webp',
        text: "Jumping Spider"
    },
    {
        image: './img/Animals/Komodo Dragon.webp',
        text: "Komodo Dragon"
    },
    {
        image: './img/Animals/Lion.webp',
        text: "Lion"
    },
    {
        image: './img/Animals/Marine Iguana.webp',
        text: "Marine Iguana"
    },
    {
        image: './img/Animals/Nene Goose.webp',
        text: "Nene Goose"
    },
    {
        image: './img/Animals/Ocelot.webp',
        text: "Ocelot"
    },
    {
        image: './img/Animals/Pronghorn.webp',
        text: "Pronghorn"
    },
    {
        image: './img/Animals/Quetzal.webp',
        text: "Quetzal"
    },
    {
        image: './img/Animals/Roseate Spoonbill.jpg',
        text: "Roseate Spoonbill"
    },
    {
        image: './img/Animals/Snow Leopard.webp',
        text: "Snow Leopard"
    },
    {
        image: './img/Animals/Tufted Titmouse.webp',
        text: "Tufted Titmouse"
    },
    {
        image: './img/Animals/Uinta Ground Squirrel.webp',
        text: "Uinta Ground Squirrel"
    },
    {
        image: './img/Animals/Viceroy.webp',
        text: "Viceroy"
    },
    {
        image: './img/Animals/Whale Shark.jpg',
        text: "Whale Shark"
    },
    {
        image: './img/Animals/Xenarthra.webp',
        text: "Xenarthra"
    },
    {
        image: './img/Animals/Yellow Warbler.webp',
        text: "Yellow Warbler"
    },
    {
        image: './img/Animals/Zebra Finch.webp',
        text: "Zebra Finch"
    }
];

animalbtn.addEventListener("click", function () {
 
    main.innerHTML = '';
    data = [
        {
            image: './img/Animals/Atlantic Puffin.webp',
            text: "Atlantic Puffin"
        },
        {
            image: './img/Animals/Bobcat.webp',
            text: "Bobcat"
        },
        {
            image: './img/Animals/Cheetah.webp',
            text: "Cheetah"
        },
        {
            image: './img/Animals/Dusky Dolphin.webp',
            text: "Dusky Dolphin"
        },
        {
            image: './img/Animals/European Robin.webp',
            text: "European Robin"
        },
        {
            image: './img/Animals/Firefish.webp',
            text: "Firefish"
        },
        {
            image: './img/Animals/Green Turtle.webp',
            text: "Green Turtlen"
        },
        {
            image: './img/Animals/Hippopotamus.webp',
            text: "Hippopotamus"
        },
        {
            image: './img/Animals/Indri.webp',
            text: "Indri"
        }, {
            image: './img/Animals/Jumping Spider.webp',
            text: "Jumping Spider"
        },
        {
            image: './img/Animals/Komodo Dragon.webp',
            text: "Komodo Dragon"
        },
        {
            image: './img/Animals/Lion.webp',
            text: "Lion"
        },
        {
            image: './img/Animals/Marine Iguana.webp',
            text: "Marine Iguana"
        },
        {
            image: './img/Animals/Nene Goose.webp',
            text: "Nene Goose"
        },
        {
            image: './img/Animals/Ocelot.webp',
            text: "Ocelot"
        },
        {
            image: './img/Animals/Pronghorn.webp',
            text: "Pronghorn"
        },
        {
            image: './img/Animals/Quetzal.webp',
            text: "Quetzal"
        },
        {
            image: './img/Animals/Roseate Spoonbill.jpg',
            text: "Roseate Spoonbill"
        },
        {
            image: './img/Animals/Snow Leopard.webp',
            text: "Snow Leopard"
        },
        {
            image: './img/Animals/Tufted Titmouse.webp',
            text: "Tufted Titmouse"
        },
        {
            image: './img/Animals/Uinta Ground Squirrel.webp',
            text: "Uinta Ground Squirrel"
        },
        {
            image: './img/Animals/Viceroy.webp',
            text: "Viceroy"
        },
        {
            image: './img/Animals/Whale Shark.jpg',
            text: "Whale Shark"
        },
        {
            image: './img/Animals/Xenarthra.webp',
            text: "Xenarthra"
        },
        {
            image: './img/Animals/Yellow Warbler.webp',
            text: "Yellow Warbler"
        },
        {
            image: './img/Animals/Zebra Finch.webp',
            text: "Zebra Finch"
        }
    ];
    data.forEach(createBox);
});
fruitsbtn.addEventListener("click", function () {
 
    main.innerHTML = '';
    data = [
        {
            image: './img/Fruits/apple.jpg',
            text: "Apple"
        },
        {
            image: './img/Fruits/Avocado.jpg',
            text: "Avocado"
        },
        {
            image: './img/Fruits/banana.jpg',
            text: "Banana"
        },
        {
            image: './img/Fruits/Berry.jpg',
            text: "Berry"
        },
        {
            image: './img/Fruits/Blueberry.jpg',
            text: "Blueberry"
        },
        {
            image: './img/Fruits/Cherry.jpg',
            text: "Cherry"
        },
        {
            image: './img/Fruits/Custard Apple.jpg',
            text: "Custard Apple"
        },
        {
            image: './img/Fruits/Date.jpg',
            text: "Date"
        },
        {
            image: './img/Fruits/Elderberry.jpg',
            text: "Elderberry"
        },
        {
            image: './img/Fruits/Fig.webp',
            text: "Fig"
        },
        {
            image: './img/Fruits/Gooseberry.jpg',
            text: "Gooseberry"
        },
        {
            image: './img/Fruits/Grapes.jpg',
            text: "Grapes"
        },
        {
            image: './img/Fruits/Guava.jpg',
            text: "Guava"
        },
        {
            image: './img/Fruits/Honeyberry.jpg',
            text: "Honeyberry"
        },
        {
            image: './img/Fruits/Jackfruit.jpg',
            text: "Jackfruit"
        },
        {
            image: './img/Fruits/Java plum.jpg',
            text: "Java plum"
        },
        {
            image: './img/Fruits/Kiwi.webp',
            text: "Kiwi"
        },
        {
            image: './img/Fruits/Litchi.jpg',
            text: "Litchi"
        },
        {
            image: './img/Fruits/Mango.jpg',
            text: "Mango"
        },
        {
            image: './img/Fruits/Muskmelon.jpg',
            text: "Musk-melon"
        },
        {
            image: './img/Fruits/Orange.jpg',
            text: "Orange"
        },
        {
            image: './img/Fruits/Papaya.jpg',
            text: "Papaya"
        },
        {
            image: './img/Fruits/Peach.jpg',
            text: "Peach"
        },
        {
            image: './img/Fruits/Pineapple.webp',
            text: "Pineapple"
        },
        {
            image: './img/Fruits/Pomegranate.webp',
            text: "Pomegranate"
        },
        {
            image: './img/Fruits/Raisins.jpg',
            text: "Raisins"
        },
        {
            image: './img/Fruits/Starfruit.jpg',
            text: "Starfruit"
        },
        {
            image: './img/Fruits/Strawberry.jpg',
            text: "Strawberry"
        },
        {
            image: './img/Fruits/Sweetlime.webp',
            text: "Sweetlime"
        },
        {
            image: './img/Fruits/Tamarind.jpg',
            text: "Tamarind"
        },
        {
            image: './img/Fruits/Water-melon.jpg',
            text: "Water-melon"
        }
    ];
    data.forEach(createBox);
})
vegetablesbtn.addEventListener("click", function () {
 
    main.innerHTML = '';
    data = [
        {
            image: './img/Vegetables/artichoke.png',
            text: "artichoke"
        },
        {
            image: './img/Vegetables/ash-gourd.png',
            text: "ash-gourd"
        },
        {
            image: './img/Vegetables/asparagus.png',
            text: "asparagus"
        },
        {
            image: './img/Vegetables/beetroot-1.png',
            text: "beetroot"
        },
        {
            image: './img/Vegetables/bell-pepper.png',
            text: "bell-pepper"
        },
        {
            image: './img/Vegetables/bitter-gourd.png',
            text: "bitter-gourd"
        },
        {
            image: './img/Vegetables/bok-choy.png',
            text: "bok-choy"
        },
        {
            image: './img/Vegetables/broccoli.png',
            text: "broccoli"
        },
        {
            image: './img/Vegetables/cabbage.png',
            text: "cabbage"
        },
        {
            image: './img/Vegetables/carrot.png',
            text: "carrot"
        },
        {
            image: './img/Vegetables/cauliflower.png',
            text: "cauliflower"
        },
        {
            image: './img/Vegetables/celery.png',
            text: "celery"
        },
        {
            image: './img/Vegetables/chayote.png',
            text: "chayote"
        },
        {
            image: './img/Vegetables/collard-greens.png',
            text: "collard-greens"
        },
        {
            image: './img/Vegetables/coriander.png',
            text: "coriander"
        },
        {
            image: './img/Vegetables/corn.png',
            text: "corn"
        },
        {
            image: './img/Vegetables/eggplant.png',
            text: "eggplant"
        },
        {
            image: './img/Vegetables/endive.png',
            text: "endive"
        },
        {
            image: './img/Vegetables/fennel.png',
            text: "fennel"
        },
        {
            image: './img/Vegetables/garlic.png',
            text: "garlic"
        },
        {
            image: './img/Vegetables/ginger.png',
            text: "ginger"
        },
        {
            image: './img/Vegetables/green-bean.png',
            text: "green-bean"
        },
        {
            image: './img/Vegetables/green-chilies.png',
            text: "green-chilies"
        },
        {
            image: './img/Vegetables/horseradish.png',
            text: "horseradish"
        },
        {
            image: './img/Vegetables/kholarbi.png',
            text: "kholarbi"
        },
        {
            image: './img/Vegetables/knol-khol.png',
            text: "knol-khol"
        },
        {
            image: './img/Vegetables/leek.png',
            text: "leek"
        },
        {
            image: './img/Vegetables/lemon.png',
            text: "lemon"
        },
        {
            image: './img/Vegetables/lettuce.png',
            text: "lettuce"
        },
        {
            image: './img/Vegetables/mint.png',
            text: "mint"
        },
        {
            image: './img/Vegetables/moringa.png',
            text: "moringa"
        },
        {
            image: './img/Vegetables/mushroom.png',
            text: "mushroom"
        },
        {
            image: './img/Vegetables/okra.png',
            text: "okra"
        },
        {
            image: './img/Vegetables/olive.png',
            text: "olive"
        },
        {
            image: './img/Vegetables/onion.png',
            text: "onion"
        },
        {
            image: './img/Vegetables/parsnip.png',
            text: "parsnip"
        },
        {
            image: './img/Vegetables/pea (1).png',
            text: "pea"
        },
        {
            image: './img/Vegetables/potato.png',
            text: "potato"
        },
        {
            image: './img/Vegetables/pumpkin.png',
            text: "pumpkin"
        },
        {
            image: './img/Vegetables/radish.png',
            text: "radish"
        },
        {
            image: './img/Vegetables/red-cabbage.png',
            text: "red-cabbage"
        },
        {
            image: './img/Vegetables/red-chilies.png',
            text: "red-chilies"
        },
        {
            image: './img/Vegetables/spinach.png',
            text: "spinach"
        },
        {
            image: './img/Vegetables/spring-onion.png',
            text: "spring-onion"
        },
        {
            image: './img/Vegetables/sweet-potato.png',
            text: "sweet-potato"
        },
        {
            image: './img/Vegetables/swiss-chard.png',
            text: "swiss-chard"
        },
        {
            image: './img/Vegetables/tomato.png',
            text: "tomato"
        },
        {
            image: './img/Vegetables/turnip.png',
            text: "turnip"
        },
        {
            image: './img/Vegetables/yam.png',
            text: "yam"
        },
        {
            image: './img/Vegetables/zucchini.png',
            text: "zucchini"
        }
    ]
    data.forEach(createBox);
})
insectsbtn.addEventListener("click", function () {
 
    main.innerHTML = '';
    data = [
        {
            image: './img/Insects/Ant.jpg',
            text: "Ant"
        },
        {
            image: './img/Insects/Bedbug.webp',
            text: "Bedbug"
        },
        {
            image: './img/Insects/Bee.jpg',
            text: "Bee"
        },
        {
            image: './img/Insects/Beetle.jpg',
            text: "Beetle"
        },
        {
            image: './img/Insects/Bug.jpg',
            text: "Bug"
        },
        {
            image: './img/Insects/Butterfly.jpg',
            text: "Butterfly"
        },
        {
            image: './img/Insects/Caterpillar.jpg',
            text: "Caterpillar"
        },
        {
            image: './img/Insects/Centipede.jpg',
            text: "Centipede"
        },
        {
            image: './img/Insects/Cockroach.jpg',
            text: "Cockroach"
        },
        {
            image: './img/Insects/Cricket.webp',
            text: "Cricket"
        },
        {
            image: './img/Insects/Firefly.jpg',
            text: "Firefly"
        },
        {
            image: './img/Insects/Flea.jpg',
            text: "Flea"
        },
        {
            image: './img/Insects/Fruit fly.jpg',
            text: "Fruit fly"
        },
        {
            image: './img/Insects/Grasshopper.jpg',
            text: "Grasshopper"
        },
        {
            image: './img/Insects/House Fly.jpg',
            text: "House Fly"
        },
        {
            image: './img/Insects/Locust.jpg',
            text: "Locust"
        },
        {
            image: './img/Insects/louse.jpg',
            text: "louse"
        },
        {
            image: './img/Insects/Mosquito.jpg',
            text: "Mosquito"
        },
        {
            image: './img/Insects/Moth.jpg',
            text: "Moth"
        },
        {
            image: './img/Insects/Praying Mantis.jpg',
            text: "Praying Mantis"
        },
        {
            image: './img/Insects/Scorpion.jpg',
            text: "Scorpion"
        },
        {
            image: './img/Insects/Spider.jpg',
            text: "Spider"
        },
        {
            image: './img/Insects/Stick Insect.jpg',
            text: "Stick Insect"
        },
        {
            image: './img/Insects/Termite.jpg',
            text: "Termite"
        },
        {
            image: './img/Insects/Tick.jpg',
            text: "Tick"
        },
        {
            image: './img/Insects/Wasp.jpg',
            text: "Wasp"
        },
        {
            image: './img/Insects/Worm.jpg',
            text: "Worm"
        }
    ]
    data.forEach(createBox);
})
data.forEach(createBox);

function createBox(item) {
    const box = document.createElement('div');

    const { image, text } = item;

    box.classList.add('box');

    box.innerHTML = ` 
    <img src="${image}" alt="${text}" />
    <p class="info">${text}</p>
    <button id="deletebtn" class="del" >DELETE</button>`;

    box.addEventListener('click', () => {
        setTextMessage(text);
        speakText();
        const answer = confirm("Do you want to delete this card?");
        if (answer){
            remove(item);
        }
        box.classList.add('active');
        setTimeout(() => box.classList.remove('active'), 800);

    });
    
    main.appendChild(box);
}
function remove(item){
  main.innerHTML="";
  const i=data.indexOf(item);
  data.splice(i,1);
  data.forEach(createBox);
}
form.addEventListener('submit', function(){
  dict={
    image: imageid.value,
    text: textid.value
  };
  data.appendChild(dict);
  main.innerHTML="";
  data.forEach(createBox);
})
const message = new SpeechSynthesisUtterance();



function setTextMessage(text) {
    message.text = text;
}

function speakText() {
    speechSynthesis.speak(message);
}

function setVoice(e) {
    message.voice = voices.find(voice => voice.name === e.target.value);
}

toggleBtn.addEventListener('click', () => {
    imageid.value="";
    desname.value="";
    document.getElementById('text-box').classList.toggle('show');
});

closeBtn.addEventListener('click', () =>
    document.getElementById('text-box').classList.remove('show')
);
