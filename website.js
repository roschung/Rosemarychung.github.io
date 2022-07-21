function welcomeUser(){
 let name = prompt("What's your name?");
 name = name.toLocaleLowerCase();
 name = name.trim();
 if (name.length > 0){
     alert (“Welcome” + name+ “!”)
}else{
Alert(“Have a great day!”);
}
}
welcomeUser();