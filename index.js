function writeCards(names) {
    const letters = []
    for (let i = 0; i < names.length; i++) {
       letters.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
    }
    return letters
}

writeCards(["Guadalupe", "Ollie", "Aki"]);

function countDown() {
    let counting = 0;
    while (counting <= 10) {
      console.log(counting++);
    }
}