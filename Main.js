const toggle0 = document.querySelector('#btn0');
const toggle1 = document.querySelector('#btn1');
const toggle2 = document.querySelector('#btn2');
const toggle3 = document.querySelector('#btn3');
const toggle4 = document.querySelector('.btnn');
const div0 = document.querySelector('#slide0');
const div1 = document.querySelector('#slide1');
const div2 = document.querySelector('#slide2');
const div3 = document.querySelector( '#slide3');

const buttons = document.querySelectorAll('#btnnn');
  buttons.forEach(button => {
    button.addEventListener('click', function () {
      buttons.forEach(btn => btn.classList.remove('active'));

      // Add 'active' class to the clicked button
      this.classList.add('active');
    });
  });

toggle0.addEventListener( 'click', () => {
    if(div0.style.display === 'none') {
        div0.style.display = 'block';
    } else {
        div0.style.display = 'none';
    }
});

toggle1.addEventListener( 'click', () => {
    if(div1.style.display === 'none') {
        div1.style.display = 'block';
    } else {
        div1.style.display = 'none';
    }
});

toggle2.addEventListener( 'click', () => {
    if(div2.style.display === 'none') {
        div2.style.display = 'block';
    } else {
        div2.style.display = 'none';
    }
});

toggle3.addEventListener( 'click', () => {
    if(div3.style.display === 'none') {
        div3.style.display = 'block';
    } else {
        div3.style.display = 'none';
    }
});

function openModal(){
  document.getElementById("modal").style.display="block";
}

function closeModal(){
  document.getElementById("modal").style.display="none";
}

function login(){
  let user=document.getElementById("username").value
  let pass=document.getElementById("password").value
  if(user==="admin" && pass==="1234"){
    document.getElementById("modal").style.display="none"
    document.getElementById("userPage").style.display="block"
    document.getElementById("userDisplay").innerText=user
  }else{
    alert("Wrong login")
  }
}

function logout(){
  document.getElementById("userPage").style.display="none"
}