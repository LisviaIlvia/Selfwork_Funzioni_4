
// Scrivi una funzione che prenda in input una stringa e restituisca TRUE se è palindroma, FALSE se non lo è.

let str = prompt('Inserisci una frase e verifica se è palindroma:');

// Ho modificato la funzione .replace() per rimuove tutti i caratteri non alfanumerici ma mantenendo i caratteri accentati.
// Ho concatenato la funzione .normalize() per scomporre i caratteri accentati nei loro componenti di base ( il carattere senza accento + il suo carattere diacritico [accento]).
// Ho concatenato la funzione replace(/[\u0300-\u036f]/g, "") per rimuovere i caratteri diacritici.
// Ho aggiunto la funzione toLowerCase() per convertire eventuali lettere maiuscole in minuscole.

let strClear = str.replace(/[^\wÀ-ÿ]/g, "").normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase();


let frase = strClear.split('').reverse().join('');

if (strClear == frase) {

    console.log('Questa frase è palindroma!');

} else {

    console.log('Questa frase non è palindroma!');
}

console.log(strClear);

console.log(frase);
