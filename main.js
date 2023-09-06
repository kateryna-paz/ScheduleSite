class Subject {
    Name = "subject";
    Teacher = "ПІП";
    Conferance = "";
    Link = "";
    Email = "...gmail.com";
    constructor(_name, _teacher, _conferance, _link, _email) { 
        this.Name = _name;
        this.Teacher = _teacher;
        this.Conferance = _conferance;
        this.Link = _link;
        this.Email = _email;
    }
    Name() { get; set }
    Teacher() { get; set }
    Conferance() { get; set }
    Link() { get; set }
    Email() { get; set }
    
}
DataBase = new Subject(
    "Бази Даних та інформаційні системи 📅",
    "Дребезов Денис",
    "538 972 1107 | 863367",
    "https://us02web.zoom.us/j/5389721107?pwd=REpKZ0JwRk5HdE1kY1FQbjMzOGgwQT09",
    "gurami152@gmail.com",
);
ComputingMethods = new Subject(
    "Методи обчислень 📊",
    "Гребенюк Сергій Миколайович",
    "882 516 0001 | 394394",
    "https://us02web.zoom.us/j/8825160001?pwd=Y2VUOHhjTHN6WU92elV6QUZzNXF4UT09",
    "gsm1212@ukr.net | 0975775631",
);
ModernIntTec = new Subject(
    "Сучасні інтернет технології 🌐",
    "Решевська Катерина Сергіївна",
    "511 572 8748 | 1s1gNH",
    "https://us04web.zoom.us/j/5115728748?pwd=allMZ2drQkhKU3EvbkZtRWorbjZYdz09",
    "reshka82zp@gmail.com",
);
DesignAndDevWebApp = new Subject(
    "Проектування та розробка Web-застосунків 📱",
    "Калюжняк Анастасія Вікторівна",
    "547 036 9954 | 8899",
    "https://us04web.zoom.us/j/5470369954?pwd=Yln1kGKRheFxXQrJKqdYA1mTTk7OTk.1",
    "anastasia.korgun@gmail.com",
);
ProbabTheoryAndMathStat = new Subject(
    "Теорія ймовірності та мат статистика 🎲",
    "Клименко Михайло Іванович",
    "BigBlueButtonMoodle or 517 422 6268 | C82BPh",
    "https://us04web.zoom.us/j/5174226268?pwd=ZDR3a2RCUW5yL1NPYWtoODA0b2g3Zz09",
    "m1655291@gmail.com",
);
ProbabTheoryAndMathStatPractice = new Subject(
    "Теорія ймовірності та мат статистика 🎲",
    "Левчук Сергій Анатолійович",
    "247 387 1962 | kQNKZ1",
    "#!",
    "levchukser65@gmail.com | Viber: (096) 77-68-353",
);

data = new Map([
    ['DataBase', DataBase],
    ['ComputingMethods', ComputingMethods],
    ['ModernIntTec', ModernIntTec],
    ['DesignAndDevWebApp', DesignAndDevWebApp],
    ['ProbabTheoryAndMathStat', ProbabTheoryAndMathStat],
    ['ProbabTheoryAndMathStatPractice', ProbabTheoryAndMathStatPractice],
]);



for (let btn of document.querySelectorAll('.btn')) {
    btn.addEventListener('click', changeSchedule);
}

function changeSchedule(e) {
    let id = e.target.getAttribute('id');
    
    if (id === "numerator") NumeratorChanged();
    else DenominatorChanged();
}

let btn1 = document.getElementById('numerator');
let btn2 = document.getElementById('denominator');
let changedElements = document.querySelectorAll('.changed');

function NumeratorChanged() {
    btn2.style.color = "black";
    btn1.style.color = "green";
    
    changedElements.forEach(elem => {
        if (elem.getAttribute('id') === null) {
            elem.innerHTML = "Проектув та розроб Web-застосунків 📱";
            elem.setAttribute('id', "DesignAndDevWebApp");

        } else {
            elem.innerHTML = "БД та інформаційні системи 📅";
            elem.setAttribute('id', "DataBase");
        }
    });
}
function DenominatorChanged() {
    btn1.style.color = "black";
    btn2.style.color = "red";
    
    changedElements.forEach(elem => {
        if (elem.getAttribute('id') === "DesignAndDevWebApp") {
            elem.removeAttribute('id');
            elem.innerHTML = "-";
            //element.style.cssText = '';
            //elem.style.backgroundColor = "rgb(240, 240, 240)";
        } else {
            elem.innerHTML = "Теорія ймовірності та мат статистика 🎲";
            elem.setAttribute('id', "ProbabTheoryAndMathStatPractice");
        }
    });
}


for (let td of document.getElementsByTagName('td')) {
    td.addEventListener('click', ShowInfo);
}

//let previousElement;
let previousMessage;
let message;

function ShowInfo(e) {
    if (previousMessage !== null && previousMessage !== undefined) {
        
        document.body.removeChild(previousMessage);
    }
    
    previousMessage = null;
    let id = e.target.getAttribute('id');

    if (id !== null) { 
        let positionX = e.clientX;
        let positionY = e.clientY;
    
        data.forEach((value, key, map) => {
            if (key === id) {
                message = document.createElement('div');
                
                message.classList.add('message');
                message.style.cssText = `
                    left: ${positionX}px;
                    top: ${positionY}px;`;
                
                message.innerHTML = `<h3 style="margin: 4px 0">${value.Name}</h3>` +
                    `<p style="margin: 5px 0"> Викладач: ${value.Teacher} <br> 
                    Конфа: <a href="${value.Link}">${value.Conferance} </a><br> 
                    E-mail: ${value.Email}</p>`;
                
                document.body.appendChild(message);

                previousMessage = message;
            }
        });
    }
}



// styles for td with textContent
const td = document.querySelectorAll('td');
td.forEach(elem => {
    if (elem.textContent == "-") {
        elem.style.backgroundColor = "rgb(240, 240, 240)";
    }
});



