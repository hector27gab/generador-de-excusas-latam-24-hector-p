window.onload = function(){

    let excuses = () => {


        let who = ['the dog','my classmate','the airplane'];
        let action = ['peed','tore','crashed'];
        let what = ['on my new pants','my homework','twin towers'];
        let when = ['on the way to work','before the class','right on time'];
        let randomWho = Math.floor(Math.random() * who.length);
        let randomAction = Math.floor(Math.random() * action.length);
        let randomWhat = Math.floor(Math.random() * what.length);
        let randomWhen = Math.floor(Math.random() * when.length);

        return who[randomWho] + ' ' + action[randomAction] + ' ' + what[randomWhat] + ' ' + when[randomWhen];

    };
    const creatorOfExcuses = document.getElementById('excuse');
    creatorOfExcuses.innerText = excuses();
};


        // const randomindex = Math.floor(Math.random() * array)
        // return randomndex