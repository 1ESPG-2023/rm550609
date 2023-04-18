const liElement = document.getElementsByTagName("li");

il

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}

console.log(liElement.lenght);

let nr1= [1,2,3,4,5];
let nr2= [6,7,8,9,10];
let nr3 = nr1 + nr2;

console.log(`Array- 1 $ {nr1}`);
console.log(`Array- 2 $ {nr1}`);

//Listando um array 

nr3.forEach((iemdoArray)=>{
    console.log(`ARRAY SENDO LISTADO $ {itemDoArray}`);

})

// listando array com map
    nr3.map((numero,key)=>{
        console.log(`${(key + 1)} itens do arrayyy - ${numero} `);
        numero.forEach((digitos)=>{

        })
    })
    
    const liElementHtml = document.getElementsByTagName("li");
    const liElementArray = [...liElementHtml];

    liElement.map((item,key)=>{
        if (item.textContent == "Item-39") {
        console.log(`${key+1} - ${item.textContent = "localizado"}`)
        }
    })

    function soma(){
        nr1=10;
        nr2=5;
        console.log(`resultado : ${nr1 + nr2}`);
        console.log(`ESTE É O PARAMETRO QUE FOI PASSADO PARA A FUNÇÃO: $(parametro)`)
    }

    soma();

 
