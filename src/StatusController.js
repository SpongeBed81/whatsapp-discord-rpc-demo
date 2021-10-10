var vscvarmı = null
var vscvarsanerede = null
var browseron = false
var second = 0
module.exports = {
    change: async function(newPresence, userID, browser, page) {

     if(!newPresence) throw new TypeError("Specify New Presence!")
     const puppeteer = require("puppeteer")
     if(newPresence.user.id == userID) {
        newPresence.activities.forEach(function(activity, i) {
            if(activity.name == "Visual Studio Code") {
                vscvarsanerede = i
                vscvarmı = true
            }

        })
    }
    if(vscvarmı == true) {
        await page.waitForSelector(`div[title="Diğer seçenekler"]`).then(async() => {
            await page.evaluate(async(newPresence, vscvarsanerede) => {
                let button = document.querySelector('div[title="Diğer seçenekler"]');
                button.click();
                setTimeout(() => {
                    let button2 = document.querySelector('div[aria-label="Ayarlar"]');
                button2.click();
                setTimeout(() => {
                    let button3 = document.querySelector('div[data-testid="cell-frame-container"]');
                    button3.click();
                    setTimeout(() => {
                        let button4 = document.querySelector('button[title="Hakkımda üzerinde düzenleme yapmak için tıklayın"]')
                    button4.click();
                    setTimeout(() => {
                        let bruh = document.querySelectorAll('div[role="textbox"]')[1]
                        bruh.innerText = `${newPresence.activities[vscvarsanerede].name} - Editing: ${newPresence.activities[vscvarsanerede].details} - Workspace: ${newPresence.activities[vscvarsanerede].state}` 
                    }, 1000)
                    }, 100);
                }, 200);
                }, 200);
            }, newPresence, vscvarsanerede)
            setTimeout(async() => {
              
                    await page.waitForSelector('span[data-testid="checkmark"]').then(async() => {
                  await page.keyboard.press("s")    
                       await page.keyboard.press("Backspace")
                    await page.evaluate(async() => {
                        let button4 = document.querySelector('span[data-testid="checkmark"]')
                            button4.click();
                    })
                })

            }, 2000);
        })
     //  if(newPresence.activities[vscvarsanerede].name == undefined) {
       //    console.log(newPresence.activities[vscvarsanerede])
     ////  } else {
    //    console.log(newPresence.activities[vscvarsanerede].name + " - " + "Editing:" + newPresence.activities[vscvarsanerede].details + " - " + "Workspace: " + newPresence.activities[vscvarsanerede].state) 
    //   }
       
    }
    },
    openChange: async function(newPresence, userID, browser, page) {

        if(newPresence.user.id == userID) {

        page.evaluate(async(newPresence, vscvarsanerede) => {
          
       
                setTimeout(() => {
                    let button4 = document.querySelector('button[title="Hakkımda üzerinde düzenleme yapmak için tıklayın"]')
                button4.click();
                setTimeout(() => {
                    let bruh = document.querySelectorAll('div[role="textbox"]')[1]
                    bruh.innerText = `${newPresence.activities[vscvarsanerede].name} - Editing: ${newPresence.activities[vscvarsanerede].details} - Workspace: ${newPresence.activities[vscvarsanerede].state}` 
                }, 1000);
                }, 100);
           
         
        }, newPresence, vscvarsanerede)
    }
    }
}
