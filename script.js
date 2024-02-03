const button = document.querySelector('#button');
// button.style.cssText

button.addEventListener('click', function(){
    const box = document.querySelector('.box');
    box.style.color = 'White';
    box.style.backgroundColor = 'blue';
    // console.log();
})




const showButton = document.querySelector('#sub_button');
  
showButton.addEventListener('click', function(){
    const inputName = document.querySelector('#input_name');
    const name = inputName.value;
    // console.log(name);

    const inputEmail = document.querySelector('#input_email');
    const email = inputEmail.value;

    const combined = name + "<br>" + email;

    // console.log(email);

    const message = document.querySelector('.show');

    const div = document.createElement('div');
    div.innerHTML = combined;

    message.appendChild(div);
})

