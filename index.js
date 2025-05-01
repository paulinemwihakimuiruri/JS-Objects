//Create an object user
//define the properties
//add a method totalSteps to calculate total number of steps walked
//use stepsWalked.reduce to get the sum of every element in the array
//Average = totalSteps/stepsWalked.length

const User = {
    name:'Lucy',
    stepsWalked:[500,700,900,1000],
    totalSteps: function (){
        return this.stepsWalked.reduce((step, curr)=> step + curr, 0);
         
    },
    averageSteps: function (){
        return this.totalSteps()/this.stepsWalked.length;
                
    }
}

console.log(User.totalSteps());

console.log(User.averageSteps());


function Recipe(name,ingredients,cookTime){
    this.name = name,
    this.ingredients = ingredients,
    this.cookTime = cookTime,
    this.displayRecipe = function(){
        console.log(`Recipe for ${this.name}`);
        console.log("The ingredients are:");
        for(let i=0;i<ingredients.length;i++){
            console.log(`- ${this.ingredients[i]}`);
            
        }
          
    },
    this.isQuickMeal = function(){
    
           return this.cookTime<=30; 
    }
}
const meal = new Recipe('Matoke',
    ['raw bananas','potatoes','meat','onions','tomatoes'],
    30
);
console.log(meal);
console.log("-" + meal.displayRecipe());
console.log(meal.isQuickMeal());



const Car ={
    model: 'Harrier',
    mileage: 500,
    serviceHistory: [],
    
    addService: function(date){
    this.serviceHistory.push(date);
    return Car.serviceHistory;
    
    },
    lastServiceDate: function(){
        return this.serviceHistory[this.serviceHistory.length -1];
    }

}

Car.addService(new Date('12-10-2024'));
Car.addService(new Date('12-11-2024'));
console.log(Car.serviceHistory);

console.log(Car.lastServiceDate());



const Playlist={
    songs:[],
    addSong: function(title){
        this.songs.push(title);
    },
    removeSong: function(title){
        this.songs.pop(title);
    }
}

Playlist.addSong("Umbrella");
Playlist.addSong("Hello");
Playlist.addSong("Not Like Us");
console.log(Playlist.songs);
console.log(Playlist.removeSong());
























