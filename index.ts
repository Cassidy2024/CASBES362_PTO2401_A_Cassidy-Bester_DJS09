// Number Types mini-challenge 10 10.2
// Write a function that will only accept numbers and attend to 
// all TypeScript weakness flags.
// : number
const reviewTotalDisplay = document.querySelector('#reviews')
const userNameDisplay = document.querySelector('#user')
const returningUserDisplay = document.querySelector('#returning-user')
const propertyContainer = document.querySelector('.properties')
const footer = document.querySelector('.footer')
const reviewContainer = document.querySelector('.reviews')
const container = document.querySelector('.container')
const button = document.querySelector('button')





let isLoggedIn: boolean

interface Review {
    name: string; 
    stars: number; 
    loyaltyUser: boolean; 
    date: string;   
    
}

const reviews :Review[] = [
    


    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: true,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: false,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: true,
        date: '27-03-2021',
        //description: 'Great hosts, location was a bit further than said',
    },
]



function showReviewTotal (value : number, reviewer: string, isLoyalty : boolean) {
    const iconDisplay = isLoyalty ? '⭐' : ''
    reviewTotalDisplay!.innerHTML = value.toString() + ' Review' + makeMultiple(value) + '| last reviewed by ' + reviewer + iconDisplay
}

showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)

// User
const you: {
    firstName: string;
    lastName: string;
    isReturning: boolean;
    age: number;
    stayedAt: string[]
} = {
    firstName: 'Bobby',
    lastName: 'Brown',
    
    isReturning: true,
    age: 35,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
}


interface Property {
    image: string;
    title: string;
    price: number;
    location: {
        firstLine: string;
        city: string;
        code: number | string;
        country: string
    }
    contact: [ number, string];
    isAvailable: boolean;
}


//Properties
const properties : Property [] =[

    {
        image: 'images/colombian-shack.webp',
        title: 'Colombian Shack',
        price: 45,
        location: {
            firstLine: 'shack 37',
            city: 'Bogota',
            code: 45632,
            country: 'Colombia'
        },
        contact: [+1123495082908, 'marywinkle@gmail.com'],
        isAvailable: true  
    },
    {
        image: 'images/poland-house.jpg',
        title: 'Polish Cottage',
        price: 34,
        location: {
            firstLine: 'no 23',
            city: 'Gdansk',
            code: 343903,
            country: 'Poland'
        },
        contact: [+1123495082908, 'garydavis@hotmail.com'],
        isAvailable: false 
    },
    {
        image: 'images/london-house.webp',
        title: 'London Flat',
        price: 23,
        location: {
            firstLine: 'flat 15',
            city: 'London',
            code: 35433,
            country: 'United Kingdom',
        },
        contact: [ +1123495082908, 'andyluger@aol.com'],
        isAvailable: true
    },
    {
        image: 'images/Malia-hotel-room.jpg',
        title: 'Malia Hotel',
        price: 35,
        location: {
            firstLine: 'Room 4',
            city: 'Malia',
            code: 45334,
            country: 'Malaysia'
        },
        contact: [ +60349822083, 'lee34@gmail.com'],
        isAvailable: false
    }
]

function populateUser(isReturning: boolean, userName: string ) {
   if (isReturning){
       returningUserDisplay!.innerHTML = 'back'
   }
   userNameDisplay!.innerHTML = userName
}

populateUser(you.isReturning, you.firstName)

let authorityStatus : any

isLoggedIn = true

function showDetails(authorityStatus: boolean | Permissions, element : HTMLDivElement, price: number) {
   if (authorityStatus) {
       const priceDisplay = document.createElement('div')
       priceDisplay.innerHTML = price.toString() + '/night'
       element.appendChild(priceDisplay)
   }
}


function makeMultiple(value: number) : string {
    if (value > 1 || value == 0 ) {
        return 's'
    } else return ''
}


function getTopTwoReviews(reviews: {
    name: string;
    stars: number;
    
    date: string;
}[]) : {
    name: string;
    stars: number;
    
    date: string;  
}[]  {
 const sortedReviews = reviews.sort((a, b) => b.stars - a.stars)
 return sortedReviews.slice(0,2)
}
   


for (let i = 0; i < properties.length; i++) {
    const card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = properties[i].title
    const image = document.createElement('img')
    image.setAttribute('src', properties[i].image)
    card.appendChild(image)
    propertyContainer!.appendChild(card)
    showDetails(isLoggedIn, card, properties[i].price)
}


//Broken code
let count = 0
function addReviews(array: {
    name: string;
    stars: number;
    
    date: string;
}[] ) : void {
    if (!count ) {
        count++
        const topTwo = getTopTwoReviews(array)
        for (let i = 0; i < topTwo.length; i++) {
            const card = document.createElement('div')
            card.classList.add('review-card')
            card.innerHTML = topTwo[i].stars + ' stars from ' + topTwo[i].name
            reviewContainer!.appendChild(card)
        }
        container!.removeChild(button!) 
    }
}

button!.addEventListener('click', () => addReviews(reviews))

let currentLocation : [string, string, number] = ['Abu Dhabi', '14:45', 28]
footer!.innerHTML = currentLocation[0] + ' ' + currentLocation[1] + ' ' + currentLocation[2] + '°'



// Classes
class MainProperty {
    src: string
    title: string
    reviews: Review[]
    constructor(src: string, title: string, reviews: Review[]) {
        this.src = src
        this.title = title
        this.reviews = reviews
    }
}

let yourMainProperty = new MainProperty(
    'images/italian-house.jpg', 
    'Italian House',
    [{
        name: 'Olive',
        stars: 5,
        loyaltyUser: true,
        date: '12-04-2021'
    }] )

const mainImageContainer = document.querySelector('.main-image')
const image = document.createElement('img')
image.setAttribute('src', yourMainProperty.src)
mainImageContainer!.appendChild(image)