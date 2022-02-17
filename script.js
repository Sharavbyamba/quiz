// Quiz... 

function Quiz(question, answers, correctAnswer){
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
}


Quiz.prototype.printQuestion = function(){
    console.log(this.question);
    this.answers.forEach(function(answers , index){
        console.log(`${index}: ${answers}`);
    })
};

Quiz.prototype.checkAnswer = function(yourAnswer){
    if( yourAnswer === this.correctAnswer){
        console.log('Зөв');
    }else {
        console.log("Буруу");
    }
}

q1 = new Quiz('Чингис хааны том хүүгийн нэр хэн бэ?' , ['Зүчи', "Өгөөдэй", "Цагаадай", "Тулуй"] , 0);
q2 = new Quiz('Хабул хааны дараа хэн хаан ширээнд суусан бэ?' , ['Хотула', "Хадаан баатар", "Амбагай", "Бартан баатар"] , 2);
q3 = new Quiz('Чингис хаан хэдэн онд таалал төгссөн бэ?' , [1206, 1162, 1227 ,1207] , 2);
q4 = new Quiz('Чингис Жамухатай хэдэн удаа анд болоцсон бэ?' , [1, 9, 6, 3] , 3);
q5 = new Quiz('Бөртэ хатныг аль аймгийн хүмүүс ирж булаан авдаг вэ?' , ['Тайчууд', "Мэргид", "Найман", "Татар"] , 1);
q6 = new Quiz('Жамухын эцгийн нэр?' , ['Хар хадаан', "Сэнгүм", "Бартан баатар", "Хөхөчү"] , 0);
q7 = new Quiz('Алунгуа хатны эр нөхөр хэн бэ?' , ['Дува сохор', "Боданчар", "Добу мэргэн", "Бүгүнүтэй"] , 2);
q8 = new Quiz('Чингисийн хүзүүг хэн харвасан бэ?' , ['Зургаадай', "Сорхоншар", "Хасар", "Чу мэргэн"] , 0);
q9 = new Quiz('Тоорил ханы хөвүүн хэн бэ?' , ['Хадагбаатар', "Сэнгүм", "Алтан", "Хучар"] , 1);
q10 = new Quiz('Мэнлиг эцэг хэдэн хөвүүнтэй байсан бэ?' , [4, 5, 6, 7] , 3);

quizzes = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

var runQuestion = () => {
    
    let random = Math.floor(Math.random() * 10);

    if(quizzes.length === 0){
        console.log('Асуултыг амжилттай давлаа');
    }else if(quizzes.length !== 0 && random < quizzes.length){
        console.log(`${11 - quizzes.length}-р асуулт`);
        quizzes[random].printQuestion();
        myAnswer = +prompt('Зөв хариултын индексийг бич');
        quizzes[random].checkAnswer(myAnswer);
        console.log('----------------------');
        console.log('----------------------');
        quizzes.splice(random, 1);
        runQuestion();
    }
}
runQuestion();






