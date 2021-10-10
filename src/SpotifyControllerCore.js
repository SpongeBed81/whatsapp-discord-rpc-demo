var playingnow = null
module.exports = {
    change: async function(newPresence, browser, page) {
     newPresence.activities.forEach(async(activity, i) => {
         if(activity.name == "Spotify") {
         //   if(playingnow !== `Listening: ${newPresence.activities[i].details} - By: ${newPresence.activities[i].state}`) {
                await page.waitForSelector(`div[title="Diğer seçenekler"]`).then(async() => {
                    await page.evaluate(async(newPresence, i) => {
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
                                bruh.innerText = `Listening: ${newPresence.activities[i].details} - By: ${newPresence.activities[i].state}`
                               // playingnow =  `Listening: ${newPresence.activities[i].details} - By: ${newPresence.activities[i].state}`
                            }, 1000)
                            }, 100);
                        }, 200);
                        }, 200);
                    }, newPresence, i)//s
                    setTimeout(async() => {//s
                      
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
    
    
    
    
    
                
                 console.log(activity.details)
         //   }
       
         }
     });
    },
    update: async function(newPresence, browser, page) {
        newPresence.activities.forEach(async(activity, i) => {
            if(activity.name == "Spotify") {
            
              
                 //   console.log(minutes+":"+seconds)
             
           //     if(playingnow !== `Listening: ${newPresence.activities[i].details} - By: ${newPresence.activities[i].state}`) {
               await page.waitForSelector('button[title="Hakkımda üzerinde düzenleme yapmak için tıklayın"]').then(async() => {
                await page.evaluate(async(newPresence, i) => {
                    setTimeout(() => {
                        let button4 = document.querySelector('button[title="Hakkımda üzerinde düzenleme yapmak için tıklayın"]')
                    button4.click();
                    setTimeout(() => {
                        let bruh = document.querySelectorAll('div[role="textbox"]')[1]
                        bruh.innerText = `Listening: ${newPresence.activities[i].details} - By: ${newPresence.activities[i].state}` 
                    }, 1000)
                    }, 100);
                }, newPresence, i)
               })

               setTimeout(async() => {//s
                  
                await page.waitForSelector('span[data-testid="checkmark"]').then(async() => {
              await page.keyboard.press("s")    
                   await page.keyboard.press("Backspace")
                await page.evaluate(async() => {
                    let button4 = document.querySelector('span[data-testid="checkmark"]')
                        button4.click();
                })
            })

        }, 2000);


           // console.log(newPresence.activities[i])
        }
            })




    }
}
