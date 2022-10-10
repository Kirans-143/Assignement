let printletters = (str, n) => {
    let i = parseInt(n / 2), output = "";
    while (i < n) {
        output += str[i]
        i++;
    }
    i = 0;
    while (i < parseInt(n / 2)) {
        output += str[i]
        i++;
    }
    i = 0;
    for (i; i < n; i++) {
        let result = ""
        for (let j = 0; j <= i; j++) {
            result += output[j] + " ";
        }
        console.log(result)
    }
}
let str = "WELCOME";
let n = str.length;
printletters(str, n)
console.log("-----------------")
str = "KIRAN";
n = str.length;
printletters(str, n)