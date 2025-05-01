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

//Create a constructor that contains name, ingredients and cookTime
//Add methods for displaying the recipe and to determine whether a meal is a quick meal
//Loop through the array for(let i=0;i<ingredients.length;i++)
//return each element in the array
//check whether cooktime is <= 30 min and return true
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


//create an object Car with a model, mileage and a serviceHistory
//add a method addService and push new dates to serviceHistory
//return the serviceHistory
//add another method that gets the last element in the array
//return this.serviceHistory.length -1
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


//create an object Playlist containing an array of songs
//add a method addSong
//this.songs.push to add a song
//add another method to remove a song
//this.songs.filter to loop through the array of songs and remove a song
//add a method listSongs
//this.songs.forEach(song=>console.log(song) to loop through the array and print the songs in the array

const Playlist={
    songs:[],
    addSong: function(title){
        this.songs.push(title);
    },
    removeSong: function(title){
       this.songs= this.songs.filter(song=>song!==title);
    },
    listSongs:function(){
        console.log("My playlist contains:")
        this.songs.forEach(song=>console.log(song));
    }
};

Playlist.addSong("Umbrella");
Playlist.addSong("Hello");
Playlist.addSong("Not Like Us");
Playlist.listSongs()
Playlist.removeSong("Hello")
Playlist.listSongs()


//Create a course constructor containing a title, array of lessons and array of completed lessons
//create an object markComplete
//this.completedLessons.push(lesson) to push a completed lesson and return
//create an object getProgress that returns number of completed lessons out of total lessons
function Course(title,lessons,completedLessons){
    this.title = title,
    this.lessons = lessons,
    this.completedLessons = completedLessons,

    this.markComplete = function(lesson){
        this.completedLessons.push(lesson);
        return completedLessons;
    },
    this.getProgress = function(){
        return `${this.completedLessons.length} out of ${this.lessons.length} lessons completed`

    }

}
const course = new Course ('Software Engineering',['Kotlin','QA','JavaScript','Python','DAS'],[]);
course.markComplete('JavaScript');
course.markComplete('DAS');
console.log(course.markComplete('Kotlin'));
console.log(course.getProgress());



























