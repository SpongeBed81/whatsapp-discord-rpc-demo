const status = require("./src/StatusController")
const spotifyhandler = require("./src/SpotifyControllerCore")
const discord = require("discord.js")
const client = new discord.Client()
const puppeteer = require("puppeteer")

async function bruh() {
    const browser = await puppeteer.launch(
        {
            headless: false,
            userDataDir: "./user_data"
        }
        );
    const page = await browser.newPage();
    await page.goto('https://web.whatsapp.com');
    var firecount = 0
    var isbrowseropen = false

    client.on("ready", () => {
        console.log("hazır")
    })
    
    
    client.on("presenceUpdate", async(oldPresence, newPresence) => {
        if(firecount == 1) {
            firecount = 0
        } else {
            firecount++
            if(isbrowseropen == true) {
                status.openChange(newPresence, userid, browser, page)
            }
            isbrowseropen = true
            status.change(newPresence, userid, browser, page)        
        }
    })
    
    client.login("token")
}




async function spotify() {
var browseraçıldımı = false
    client.on("ready", async() => {
        console.log("hazır")

        const browser = await puppeteer.launch(
            {
                headless: false,
                userDataDir: "./user_data"
            }
            );
        const page = await browser.newPage();
        await page.goto('https://web.whatsapp.com');


        setInterval(() => {
            if(browseraçıldımı == false) {
                spotifyhandler.change(client.users.cache.get("userid").presence, browser, page)
                browseraçıldımı = true
            } else {
                spotifyhandler.update(client.users.cache.get("userid").presence, browser, page)
            }
        //    console.log(client.users.cache.get("userid").presence)            
        }, 5000);
    })
 
    client.login("token")
}




   

