var playerName = window.prompt("what is your fighters name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
var enemyName = "Roberto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    window.alert("Welcome to Robot Rumble!");

    var promptFight = window.prompt("would you like to Skip or Fight this battle? Enter 'Fight' or 'Skip' to choose. ");

    if(promptFight === "fight" || promptFight === "FIGHT") {

enemyHealth= enemyHealth - playerAttack;
console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " left "
);
if (enemyHealth <= 0) {
window.alert(enemyName + "has died! ");
} else{
    window.alert(enemyName + " still has " + enemyHealth + " health left. ");
}

playerHealth = playerHealth - enemyAttack;

console.log(
    enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
);
if (playerHealth <= 0) {
    window.alert(playerName + " has died.");
}
else {
    window.alert(playerName + " still has " + playerHealth + " health remaining ");
} 
    } else if (promptFight === "skip" || promptFight === "SKIP") {
        var confirmSkip = window.confirm("Are you sure you want to quit?");
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight, goodbye!");
            playerMoney = playerMoney - 2;
        } 
        else {
            fight();
        }
        window.alert(playerName + " has chosen to skip the fight! ");
    } else {
        window.alert(" you need to choose a valid option. Try again!")
    }
};
fight();