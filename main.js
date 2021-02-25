function foo () {
    let number =prompt('ingresa un numero');
    for(let i =1; i<=number ; i++){
        let answer='';
        if(i%3 === 0){
            answer+='fuzi';
        }
        if(i%5 === 0){
            answer+='busy';
        }
        if(answer===''){ 
            answer=i;
        }
        console.log(answer);
    }
}

