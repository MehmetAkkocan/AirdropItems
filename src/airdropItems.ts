const fs = require("fs");

var dataHold = fs.readFileSync("./src/holderNFTRank.json");
var holdArray = JSON.parse(dataHold);
var holderItemsJson: Array<any> = []
var com: number = 0;
var unc: number = 0;
var rar: number = 0;
var epi: number = 0;
var leg: number = 0;

function AirdropItems(){
    for (let holder of holdArray) {
        let holderItems: any = {};
    
        RandomizeDrops(holder);
        holderItems[holder.Wallet]={        
            Common:com,
            Uncommon:unc,
            Rare:rar,
            Epic:epi,
            Legendary:leg
        }
        holderItemsJson.push(holderItems);
        fs.writeFileSync("./src/holderItems.json", JSON.stringify(holderItemsJson));
        com = 0;
        unc = 0;
        rar = 0;
        epi = 0;
        leg = 0;
    
    }

}
function RandomizeDrops(_holder: any) {

    /*Items upgrade change : 
        soldier => %75common - %11uncommon - %9rare - 4%epic - %1legendary
        captain => %75uncommon - %15rare - %7epic - %3legendary
        knight => %75rare - %20epic - %5legendary
        warlord => %75epic - %25legendary
    */
    //soldier
    for (let index = 0; index < _holder.Soldier; index++) {
        let x: number = Math.floor(Math.random() * 100) + 1;
        if (x > 0 && x < 76) {
            com++;
        }
        else if (x > 75 && x < 88) {
            unc++;
        }
        else if (x > 87 && x < 96) {
            rar++;
        }
        else if (x > 95 && x < 100) {
            epi++;
        }
        else if (x > 99 && x < 101) {
            leg++;
        }
        else {
            console.log("Error!");
        }
    }
    //Captain
    for (let index = 0; index < _holder.Captain; index++) {
        let x: number = Math.floor(Math.random() * 100) + 1;
        if (x > 0 && x < 76) {
            unc++;
        }
        else if (x > 75 && x < 91) {
            rar++;
        }
        else if (x > 90 && x < 98) {
            epi++;
        }
        else if (x > 97 && x < 101) {
            leg++;
        }
        else {
            console.log("Error!");
        }
    }
    //Knight
    for (let index = 0; index < _holder.Knight; index++) {
        let x: number = Math.floor(Math.random() * 100) + 1;
        if (x > 0 && x < 76) {
            rar++;
        }
        else if (x > 75 && x < 96) {
            epi++;
        }
        else if (x > 95 && x < 101) {
            leg++;
        }
        else {
            console.log("Error!");
        }
    }
    //Warlord
    for (let index = 0; index < _holder.Warlord; index++) {
        let x: number = Math.floor(Math.random() * 100) + 1;
        if (x > 0 && x < 76) {
            epi++;
        }
        else if (x > 75 && x < 101) {
            leg++;
        }
        else {
            console.log("Error!");
        }
    }
    //Legendary
    leg += _holder.Legendary;
}

export default AirdropItems();