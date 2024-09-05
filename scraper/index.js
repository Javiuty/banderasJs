import puppeteer from "puppeteer";
import { writeFileSync } from "fs";

(async () => {
  const browser = await puppeteer.launch({
    headless: false
  })

  const page = await browser.newPage()

  await page.goto('https://banderasdelmundo.org/')

  const flagsRaw = await page.evaluate(() => {
    const $elements = [...document.querySelectorAll('.spectra-image-gallery__media')]

    const flags = $elements.map((element, i) => {
      const imgs = element.querySelector('img').src
      const name = element.querySelector('.spectra-image-gallery__media-thumbnail-caption').textContent

      return ({
        id: i,
        imgs,
        name
      })
    })

    return flags

  })

  // Guardar los datos en un archivo JSON
  writeFileSync('flags.json', JSON.stringify(flagsRaw, null, 2));

  await browser.close()

})()