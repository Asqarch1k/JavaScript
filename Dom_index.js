const li = document.getElementsByTagName("li");

const navItems = document.getElementsByClassName("");
const getEyeIcon = document.getElementById("eye");

function foo() {
  const currentInputType = document.getElementById("pas").getAttribute("type");

  if (currentInputType === "password") {
    document.getElementById("pas").setAttribute("type", "text");
    getEyeIcon.setAttribute("class", "fa-solid fa-eye");
  }else{
    document.getElementById('pas').setAttribute("type", "password")
    getEyeIcon.setAttribute('class', 'fa-solid fa-eye-slash')
  }
}

function changedIcon(){
    if(getEyeIcon.getAttribute('class')  === 'fa-solid fa-eye'){
        'src'
    }else{
        'src'
    }
}