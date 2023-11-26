
document.querySelector('.submit').addEventListener('click', () => {
  console.log('hallo')
  let v = document.querySelector('.förnamn').value
  let v2 = document.querySelector('.efternamn').value
  document.querySelector('.name').innerHTML = v + " " + v2
  kontrollera(v2)
});


function kontrollera(efternamn) {
  const pattern = /^[A-ZÅÄÖ] [a-zåäö] + $/
  if (!pattern.test(efternamn)) {
    alert('namnet är fel!')
  }
}


/* function skrivText() {
  console.log('hallo')
  let v = document.querySelector('.förnamn').value
  let v2 = document.querySelector('.efternamn').value
  document.querySelector('.name').innerHTML = v + " " + v2
} */