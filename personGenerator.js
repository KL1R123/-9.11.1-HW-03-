const personGenerator = {
    surnameJson: { "count": 15,
         "list": {
             "id_1": "Иванов",
         "id_2": "Смирнов",
          "id_3": "Кузнецов", 
          "id_4": "Васильев",
           "id_5": "Петров", 
           "id_6": "Михайлов", 
           "id_7": "Новиков", 
           "id_8": "Федоров",
            "id_9": "Кравцов",
             "id_10": "Николаев",
              "id_11": "Семёнов", 
              "id_12": "Славин", 
              "id_13": "Степанов", 
              "id_14": "Павлов", 
              "id_15": "Александров", 
              "id_16": "Морозов"
            
            } },


    firstNameMaleJson: { "count": 10,
         "list": { 
            "id_1": "Александр",
             "id_2": "Максим", 
             "id_3": "Иван",
              "id_4": "Артем",
               "id_5": "Винеамин",
                "id_6": "Константин", 
                "id_7": "Роман",
                 "id_8": "Даниил",
                  "id_9": "Егор",
                   "id_10": "Эдуард" 
                } },


    firstNameFemaleJson: { "count": 10,
         "list": {
             "id_1": "Алиса",
              "id_2": "Анастасия",
               "id_3": "Варвара",
                "id_4": "Мария", 
                "id_5": "Марина", 
                "id_6": "Катя",
                 "id_7": "Елена",
                  "id_8": "Ольга",
                   "id_9": "Елизавета",
                   "id_10": "Ксения" 
                } },


    gender: { 
        "male": "Мужчина", 
        "female": "Женщина" 
    },

    jobsMan:{"count": 10,
        "list":{
           "id_1": "Слесарь",
              "id_2": "Летчик",
               "id_3": "Военный",
                "id_4": "Программист", 
                "id_5": "Актер", 
                "id_6": "Хирург",
                 "id_7": "Бухгалтер",
                  "id_8": "Строитель",
                   "id_9": "Кассир",
                   "id_10": "Бизнесмен" 
        }
    },
    jobsWoman:{"count": 10,
        "list":{
           "id_1": "Актриса",
              "id_2": "Секретарь",
               "id_3": "Кассирша",
                "id_4": "Портной", 
                "id_5": "Сушеф-повар", 
                "id_6": "Учительница",
                 "id_7": "Бухгалтерша",
                  "id_8": "Инженер",
                   "id_9": "Кассирша",
                   "id_10": "Бизнесвумен" 
        }},

        


    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),
    randomValue: function (json) {
        const obj = json;
        const randomId = `id_${this.randomIntNumber(obj.count, 1)}`;
        return obj.list[randomId];
    },
    randomGender: function () {
        return Math.random() < 0.5 ? this.gender.male : this.gender.female; 
    },
    randomFirstName: function () {
        if (this.person.gender === this.gender.male) { 
            return this.randomValue(this.firstNameMaleJson);
        } else {
            return this.randomValue(this.firstNameFemaleJson);
        }
    },
    randomSurname: function () {
        const baseSurname = this.randomValue(this.surnameJson);
        return this.person.gender === this.gender.female ? baseSurname + "а" : baseSurname; 
    },

    randomYearNumber () {
        const minYear = 1950;
        const maxYear = 2006;
        const range = maxYear - minYear + 1; 
        return Math.floor(Math.random() * range + minYear);
    },

    randomDayMonthNumber () {
        const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const monthIndex = Math.floor(Math.random() * months.length);

  const day = Math.floor(Math.random() * months[monthIndex]) + 1;

  const monthNames = [
    "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
  ];


  return `${day} ${monthNames[monthIndex]}`;
    },

    randomJobs (){
         if(this.person.gender === this.gender.male){
            return this.randomValue(this.jobsMan);
         }else return this.randomValue(this.jobsWoman);

    },

    randomPatronymic (){
        const basePatronymic = this.randomValue(this.firstNameMaleJson);
        return this.person.gender === this.gender.female ? basePatronymic + "овна" : basePatronymic + "ович"; 
    },


    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surname = this.randomSurname();
        this.person.dayMonth = this.randomDayMonthNumber();
        this.person.year = this.randomYearNumber();
        this.person.jobs = this.randomJobs();
        this.person.patronymic = this.randomPatronymic();
        return this.person;
    },

    
};

console.log(personGenerator.getPerson());












