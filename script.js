const list = document.getElementById('lista');
const filho = list.children[0];
function troca(){
  filho.textContent = 'Amapá';
}
list.addEventListener('click', troca)