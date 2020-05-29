const list = document.querySelector('ul');

const input = document.querySelector('input');

const button = document.querySelector('button');


button.onclick = function() {
    let originalText = input.value;
    input.value = '';

    const liElement = document.createElement('li');
   
    const spanElement = document.createElement('span');
   
    const buttonElement = document.createElement('button');


    liElement.appendChild(spanElement);
    liElement.appendChild(buttonElement);
    spanElement.textContent = originalText;
    buttonElement.textContent = 'Delete';
    list.appendChild(liElement);

    buttonElement.onclick = function(e) {
      list.removeChild(liElement);
    }
    input.focus();

}

