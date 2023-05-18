import { PlayerData } from "./models";
import puppeteer from 'puppeteer';
import fs from 'fs';

(async () => {
  const browser = await puppeteer.launch({headless: false});

  const page = await browser.newPage();
  
  await page.goto('https://prosettings.net/lists/valorant/')
  await page.waitForSelector('tbody tr', { timeout: 10000 })
  // example data:
  // data = [{hz: 1000, dpi: 400, sens: 0.5, eDPI}, {same}]
  const data = await page.evaluate(() => {
    const rows = document.querySelectorAll('tbody tr');
    let playersData: PlayerData[] = [];

    rows.forEach(row => {
      const tds = row.querySelectorAll('tbody td');
      if(!tds)
        throw Error("td's no encontradas");
      
      // los 5 nodos de info q queremos
      const tdsSlice = Array.from(tds).slice(4, 9);
      
      const playerData: PlayerData = {hz: +tdsSlice[0].innerHTML, dpi: +tdsSlice[1].innerHTML, sens: +tdsSlice[2].innerHTML, eDPI: +tdsSlice[3].innerHTML, scopedSens: +tdsSlice[4].innerHTML}
      
      playersData.push(playerData);
    });

    return playersData;
  });

  console.log(data);

  const json = JSON.stringify(data, null, 2);

  fs.writeFile('playersData.txt', json, err => {
    if (err) {
      console.error(err);
    }
    // file written successfully
  });
  
  await browser.close();
})();