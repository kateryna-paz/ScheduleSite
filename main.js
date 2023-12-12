class Subject {
  Name = "subject";
  Teacher = "Name Surname";
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
  Name() {
    get;
    set;
  }
  Teacher() {
    get;
    set;
  }
  Conferance() {
    get;
    set;
  }
  Link() {
    get;
    set;
  }
  Email() {
    get;
    set;
  }
}
DataBase = new Subject(
  "Data Bases and Information Systems 📅",
  "David Cook",
  "853 373 1347 | 8hfve37",
  "https://us02web.zoom.us/",
  "gabrujeullufro-6270@yopmail.com"
);
ComputingMethods = new Subject(
  "Computing Methods 📊",
  "Stanley Diaz",
  "943 646 8651 | j7g3dde",
  "https://us02web.zoom.us/",
  "dimmenellinnoi-3210@yopmail.com"
);
ModernIntTec = new Subject(
  "Modern Internet Technologies 🌐",
  "Norman Ross",
  "574 357 3858 | 9g4e3NH",
  "https://us04web.zoom.us/",
  "xafeyaudefra-7716@yopmail.com"
);
DesignAndDevWebApp = new Subject(
  "Design and development of Web-Apps 📱",
  "Yukio Henderson",
  "847 054 9368 | 2g7jd3",
  "https://us04web.zoom.us/",
  "valevureje-5754@yopmail.com"
);
ProbabTheoryAndMathStat = new Subject(
  "Probability theory and math statistics 🎲",
  "Zayd Price",
  "858 406 6368 | d528Ph",
  "https://us04web.zoom.us/",
  "cigounnowoboi-3222@yopmail.com"
);
ProbabTheoryAndMathStatPractice = new Subject(
  "Probability theory and math statistics 🎲",
  "Valentino Moore",
  "375 747 1562 | gQNKZ8",
  "https://us04web.zoom.us/",
  "loppoilaufrezo-1112@yopmail.com"
);
Sociology = new Subject(
  "Sociology 🎭",
  "Solomon Jones",
  "Google Meet",
  "https://meet.google.com/",
  "kallibrummidou-3568@yopmail.com"
);
CinemaHistory = new Subject(
  "History of world cinema 🎬",
  "Kamden Wood",
  "648 737 9126 | 12835",
  "https://us04web.zoom.us/",
  "teuveumacreihi-4088@yopmail.com"
);

data = new Map([
  ["DataBase", DataBase],
  ["ComputingMethods", ComputingMethods],
  ["ModernIntTec", ModernIntTec],
  ["DesignAndDevWebApp", DesignAndDevWebApp],
  ["ProbabTheoryAndMathStat", ProbabTheoryAndMathStat],
  ["ProbabTheoryAndMathStatPractice", ProbabTheoryAndMathStatPractice],
  ["Sociology", Sociology],
  ["CinemaHistory", CinemaHistory],
]);

for (let btn of document.querySelectorAll(".btn")) {
  btn.addEventListener("click", changeSchedule);
}

function changeSchedule(e) {
  let id = e.target.getAttribute("id");

  if (id === "numerator") NumeratorChanged();
  else DenominatorChanged();
}

let btn1 = document.getElementById("numerator");
let btn2 = document.getElementById("denominator");
let changedElements = document.querySelectorAll(".changed");

function NumeratorChanged() {
  btn2.style.color = "black";
  btn1.style.color = "green";

  changedElements.forEach((elem) => {
    if (elem.getAttribute("id") === null) {
      elem.innerHTML = "Design and development of Web-Apps 📱";
      elem.setAttribute("id", "DesignAndDevWebApp");
    } else {
      elem.innerHTML = "Data Bases and Information Systems 📅";
      elem.setAttribute("id", "DataBase");
    }
  });
}
function DenominatorChanged() {
  btn1.style.color = "black";
  btn2.style.color = "red";

  changedElements.forEach((elem) => {
    if (elem.getAttribute("id") === "DesignAndDevWebApp") {
      elem.removeAttribute("id");
      elem.innerHTML = "-";
    } else {
      elem.innerHTML = "Probability theory and math statistics 🎲";
      elem.setAttribute("id", "ProbabTheoryAndMathStatPractice");
    }
  });
}

for (let td of document.getElementsByTagName("td")) {
  td.addEventListener("click", ShowInfo);
}

//let previousElement;
let previousMessage;
let message;

function ShowInfo(e) {
  if (previousMessage !== null && previousMessage !== undefined) {
    document.body.removeChild(previousMessage);
  }

  previousMessage = null;
  let id = e.target.getAttribute("id");

  if (id !== null) {
    let positionX = e.clientX;
    let positionY = e.clientY;

    data.forEach((value, key, map) => {
      if (key === id) {
        message = document.createElement("div");

        message.classList.add("message");
        message.style.cssText = `
                    left: ${positionX}px;
                    top: ${positionY}px;`;

        message.innerHTML =
          `<h3 style="margin: 4px 0">${value.Name}</h3>` +
          `<p style="margin: 5px 0"> Викладач: ${value.Teacher} <br> 
                    Conf: <a href="${value.Link}">${value.Conferance} </a><br> 
                    E-mail: ${value.Email}</p>`;

        document.body.appendChild(message);

        previousMessage = message;
      }
    });
  }
}

// styles for td with textContent
const td = document.querySelectorAll("td");
td.forEach((elem) => {
  if (elem.textContent == "-") {
    elem.style.backgroundColor = "rgb(240, 240, 240)";
  }
});
