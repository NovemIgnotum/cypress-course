const get_index_of_char = (alphabet, char) => {
    for(let e = 0; e != alphabet.length; e++){
        if(alphabet.charAt(e) == char){
            return e
        }
    }
}

const letter_change = (cypher, char) => {
    let alphabet =  "abcdefghijklmnopqrstuvwxyz"
    let alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(alphabet.includes(char)){
        let index = get_index_of_char(alphabet , char);

        index += cypher;
        if(index - alphabet.length >= 0){
            index -= alphabet.length
        }

        return alphabet.charAt(index);
    }
    if(alphabetUpper.includes(char)){
        let index = get_index_of_char(alphabetUpper , char);

        index += cypher;
        if(index - alphabetUpper.length >= 0){
            index -= alphabetUpper.length
        }

        return alphabetUpper.charAt(index);
    }

    return char;


}

document.querySelector("button").addEventListener("click" , () => {
    let cypher = parseInt(document.querySelector("input[type='number']").value);
    let content = document.querySelector("input[type='text']").value;

    let res = ""

    for(let e = 0; e != content.length; e++){
        res +=  letter_change(cypher , content.charAt(e));
    }
    console.log(res)
    document.querySelector("#Result").textContent = res ;

})