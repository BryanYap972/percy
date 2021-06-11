const PercyScript = require('@percy/script');

PercyScript.run(async (page, percySnapshot) => {
  await page.goto('https://fervent-wilson-f1924f.netlify.app/');

  await percySnapshot('homepage');
})
