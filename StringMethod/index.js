// string method = allow you to maniplulate and work with text (strings)

/*

let username = "billybob";

username = username;

let result = username.includes(" ");
           //username.startsWith()
           //username.endsWith()
           //console.log(username)
           //console.log(username.length);
           //username.indexOf("e")
           //username.charAt(0)
           //username.lastIndexOf(M)



if (result){
    console.log("Your username cant include with an empty space");
}
else{
    console.log(username);
}

*/

let phoneNumber = "918-845-3928";

phoneNumber = phoneNumber.padEnd(15,"0")
           //phoneNumber.padStart(15, "0")
           //phoneNumber.padEnd(15,"0")
           //phoneNumber.replaceAll("-", "")

console.log(phoneNumber)
