console.log('test ok');

const emailElement = document.getElementById('email-list');

for(let i=0; i<10; i++) {
    axios
    .get('https://flynn.boolean.careers/exercises/api/random/mail')
    .then((response) => {
        // console.log(response.data.response);

        addEmail = response.data.response;
        emailElement.innerHTML = emailElement.innerHTML + `<li>${addEmail}</li` 
    });
}