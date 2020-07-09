          //-- створити об'єкт (не меньше 5ти властивостей) який описує
          //- собаку - людину - автомобіль - квартиру - книгу
//let dog = {name: "Radriga", age: 5, color: "black", 
//character: "funny", food: "chappi"}
//let person = {name: "Vanya", age: 90, job: "taxidermist",
//passion: "fishing", wife: "Ilona"}
//let car = {name: "Nissan", age: 10, owner: "Vanya", salon: "textil", gas:95}
//let flat ={room:5, color: "white", kitchen: "black", 
//price: 50000, city: "Jmerinka"}
//let book = {name:"Babai", tirage: 500, year: 2005, page: 255, color:"gray"}

          //-- Створити масив та вивести його в консоль:
          //- з 5 собак, 5 люде,5 автомобілів
//let dog1 = ["black", "funny", 5, "white", "angry"]
//console.log(dog1)
//let people = ["black", 45, "reach", "tall", "funny"]
//console.log(people)
//let car1 = ["red", 15, "fast", "small", "heavy"]
//console.log(car1)

          //-- створити об'єкт (не меньше 5ти властивостей) який описує, 
          //одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
//- будинок- водій- іграшк- стіл- сумка
//let house = {floor:5, city:"Jmerinka", color: "gray",
//room: ["kitchen", "badroom"],
//residents: {family: 5, nationality:"Ukrainian"}}

//let driver = {age:45, name: "Viktor", height: 178,
//clothes:["pant","shirt"],
//characteristic: {salary: 200, passion: "fishing"}}

//let toy = {price: 20, color:"red", age: 3,
//clothes:["pant","shirt"],
//accsessories: {bag:"red", inside: "lipstic"}}

//let table = {height:2, weight:4, color:"whitre",
//material : ["wood", "glass"],
//apply: {room:"kitchen", function:"decor"}}

//let bag = {color:"black", age: 5, material:"leather",
//material:["leather", "textil"],
//owner: {name:"Ilona", age:25}}

//Дан массив:
//let users = [
                //{name: 'vasya', age; 31, status; false}
                //{name: 'petya', age; 30, status; true}
                //{name: 'kolya', age; 29, status; true}
                //{name: 'olya', age; 28, status; false}
                //{name: 'max', age; 30, status; true}
                //{name: 'anya', age; 31, status; false}
                //{name: 'oleg', age; 28, status; false}
                //{name: 'andrey', age; 29, status; true}
                //{name: 'masha', age; 30, status; true}
                //{name: 'olya', age; 31, status; false}
                //{name: 'max', age; 31, status; true}
//- звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
//- статус Андрія
//- статус Максима
//- ім'я передостаннього об'єкту
//- ім'я третього об'єкта
//- вік Олега
//- вік Олі
//- вік + ім'я 5го об'єкта
//- вік + сатус Анни

//console.log(users[4].status)
//console.log(users[9].name)
//console.log(users[2].name)
//console.log(users[6].age)
//console.log(users[3].age)
//console.log(users[5].age, users[5].name)
//console.log(users[5].age, users[5].status)


//-- Напишіть код,  який за допомоги document.getElementById 
//або document.getElementsByClassName або document.getElementsByTagName :

//- отримує текст з параграфа з id "content"
//let contentp = document.getElementById('content')
//console.log(contentp.innerText)

//- отримує текст з блоку з id "rules"
//let rulesP = document.getElementById('rules')
//console.log(rulesP.innerText)

//- замініть текст параграфа з id 'content' на будь-який інший
//let contentp1 = document.getElementById('content')
//contentp1.innerText= 'hi, how are you'

//- замініть текст параграфа з id 'rules' на будь-який інший
//let rulesp1 = document.getElementById('rules')
//rulesp1.innerText = 'how old are you'

//- змініть кожному елементу колір фону на червоний
//let contentp2 = document.getElementById('content')
//contentp2.style.backgroundColor = 'red'

//let rulesp3 = document.getElementById('rules')
//rulesp3.style.backgroundColor = 'red'

//let FCRules = document.getElementsByClassName('fc_rules')
//for (let i=0; i<FCRules.length;i++) {
//FCRules[i].style.backgroundColor='red'}

//- змініть кожному елементу колір тексту на синій
//let contentp4 = document.getElementById('content')
//contentp4.style.color= 'blue'

//let rulesp4 = document.getElementById('rules')
//rulesp4.style.color = 'blue'

//let FCRules1 = document.getElementsByClassName('fc_rules')
//for (let i=0; i<FCRules1.length;i++) {
//FCRules1[i].style.color='blue'}

//- отримати весь список класів елемента з id=rules і вивести їх в console.log
//let rules7 = document.getElementById("rules")
//console.log(rules7)

//- отримати всі елементи з класом fc_rules
//let rules8 = document.getElementsByClassName("fc_rules")
//console.log(rules8)

//- поміняти колір тексту у всіх елементів fc_rules на червоний
//let rules9 = document.getElementsByClassName("fc_rules")
//for (let i=0; i<rules9.length;i++) {
//rules9[i].style.color='red'}



       //Взяти файл template_2.html та працювати в ньому
       //- Напишіть код, який :

       //-- змінює колір тексту елемнту з ід main_header на 
       //будь-який інший
//let header1 = document.getElementById("main_header")
//header1.style.color='red'

       //-- робить шириниу елементу ul 400 пікселів

//let ul1 = document.getElementsByTagName("ul")
//for (let i=0; i<ul1.length;i++) {
//ul1[i].style.width='400px'}

       //-- робить шириниу всіх елементів з класом linkList шириною 50%
//let linkList1 = document.getElementsByClassName("linkList")
//for (let i=0; i<linkList1.length;i++) {
//linkList1[i].style.width='50%'}
//console.log(linkList1)

       //-- отримує текст який зберігається в елементі з класом listElement2
//let list1 = document.getElementsByClassName('listElement2')
//console.log(list1.innerText)

       //-- отримує всі елементи li та змінює ім колір фону на сірий
//let li1 = document.getElementsByTagName("li")      
//for (let i=0; i<li1.length;i++) {
//li1[i].style.backgroundColor='silver'}

         //-- отримує всі елементи 'a' та додає їм клас anchor
//let a1 = document.getElementsByTagName('a')
//for (let i=0;i<a1.length;i++){
//a1[i].classList.add('anchor') }
//console.log(a1)

       //-- отримує всі елементи 'a' та у випадку, якщо текстовий контен 
       //елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
//let a2 = document.getElementsByTagName('a')
//for (let i=0;i<a2.length;i++) {
//let element = a2[i]; 
//if (element.textContent=='link3' )
//element.style.fontSize = '40px'}
//console.log(a2)

       //-- отримує всі елементи 'a' та додає їм клас element_XXX. 
       //Де XXX - текстовий контент елементу a
//let a3 = document.getElementsByTagName('a')
//for (let i=0;i<a3.length;i++){
//let element = a3[i]
//a3[i].classList.add("element_${element.text.Content}") }

       //-- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
//let b= prompt ('фон')
//let a4 = document.getElementsByTagName('sub-header')
//for (let i=0;i<a4.length;i++){
//let element = a4[i]
//element.style.background= b}

       //-- отримує всі елементи 'sub-header' та змінює колір
        //тексту у видаку якщо текст елемнту = content 2 segment .
        // Колір отримати з prompt()
//let b1= prompt ('фон')
//let a5 = document.getElementsByTagName('sub-header')
//for (let i=0;i<a5.length;i++){
//let element = a5[i]
//if (element.textContent=='content 2 segment') 
//element.style.color(b1)}

       //-- отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. 
       //Текст отримати з prompt()
//let b2 = prompt ('text')
//let a6 = document.getElementsByClassName('content_1')
//for (let i=0;i<a6.length;i++) {
//let element = a6[i]
//element.innerText=(b2)}
//console.log(a6)

       //-- отримати елементи p та змінити їм paddin на довільне значення
//let a6 = document.getElementsByTagName('p')
//for (let i=0;i<a5.length;i++){
//let element =a6 [i]
//element.style.padding = '20px'}

       //-- отримати елементи з класом text2 та змінити їм текст на
       // довільне значення
//let t = document.querySelectorAll('.text2')
//for (let i=0;i<t.length;i++){
//let element =t [i]   
//element.innerText= 'hi'}

    
 







 

