 "use strict";
let numberofFilms;
function start(){
     numberofFilms = +prompt('Сколько фильмов вы посмотрели?',""); 
     while (numberofFilms == ''|| numberofFilms == null ||  isNaN(numberofFilms)){
        numberofFilms = +prompt('Сколько фильмов вы посмотрели?',""); 
     }
}
start();
const personalMovieDB = {
    count: numberofFilms,
    movies: {},
    actors: {},
    genres:[],
    privat:false,
    };

    function rememberMyFilms(){
        for(let i = 0; i < 2; i++){
            const a = prompt('Один из последних просмотреных фильмов?','').trim (),
            b =  prompt('Насколько оцените его?','');
            
            if(a != null &&  b != null && a != '' && b!= '' && a.length<50){
                
                personalMovieDB.movies[a] = b;
                console.log('Прошел проверку')
            } else{
                console.log('Не прошел проверку');
                i--;
            } 
            console.log(personalMovieDB);
        }
    }
    rememberMyFilms();


function detectPersonalLevel(){
    if (personalMovieDB.count < 10){
        console.log('Просмотрено мало фильмов');
    }else if(personalMovieDB.count >= 10  && personalMovieDB.count <30 ){
        console.log('Вы классный зритель ');
    }else if(personalMovieDB.count >= 30){
        console.log('Вы киноман');
    }else{
        console.log('Ошибка');
    }
}

detectPersonalLevel();





function showMyDB(hidden){
if(!hidden){
    console.log(personalMovieDB);
}
}
showMyDB(personalMovieDB.privat);

function writeYourGenres(){
    for(let i = 1; i <= 3; i++){
        const genre =  prompt(`Ваш любимый жанр под номером ${i} `);
        personalMovieDB.genres[i - 1] = genre;
    }
}
writeYourGenres();

function learnJS(lang,calblack){
    console.log(`Я учу: ${lang}`);
    calblack();
}

learnJS('JavaScript',function(){
console.log('Я прошел этот урок');
});