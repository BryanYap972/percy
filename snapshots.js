const PercyScript = require('@percy/script');

PercyScript.run(async (page, percySnapshot) => {
  await page.goto('https://60c325dcd80bdadbb2118880--fervent-wilson-f1924f.netlify.app/');

  await percySnapshot('homepage');
})
