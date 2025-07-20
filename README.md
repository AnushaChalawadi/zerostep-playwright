🧪 ZeroStep-Playwright

Supercharge your Playwright tests with AI! Use plain-text instructions to create resilient and maintainable end-to-end tests with ZeroStep.


📦Setup
--------------------------------------------------------

🛠️ Install the @zerostep/playwright dependency

    npm i @zerostep/playwright -D

🛠️  This package relies on an environment variable with your zerostep token being exposed to the playwright process, or a config file that holds the token. This token can         be found in your account on https://app.zerostep.com . You can expose the environment variable however you'd like, e.g.

     $ export ZEROSTEP_TOKEN="<your token here>"
     
     Alternatively, you can create a zerostep.config.json file in the root of your project and store the token there, e.g.

     {
         "TOKEN": "<your token here>"
     }
     
 🛠️  Import and use the ai function

     import { test } from '@playwright/test'
     import { ai } from '@zerostep/playwright'

     test('zerostep example', async ({ page }) => {
     await page.goto('https://zerostep.com/')

      // An object with page and test must be passed into every call
      const aiArgs = { page, test }
      const headerText = await ai('Get the header text', aiArgs)
      await page.goto('https://google.com/')
      await ai(`Type "${headerText}" in the search box`, aiArgs)
      await ai('Press enter', aiArgs)
      })

  🧪  Usage

      At minimum, the ai() function requires a plain text prompt and an argument that contains your page and test objects.
  
      ai('<your prompt>', { page, test })

  ▶️ Run the tests, with or without UI mode

      $ npm run test # or npm run test-ui


 🧪 References

   + Zero Step Account : https://app.zerostep.com/account 
   + Zero Step github link : https://github.com/zerostep-ai/zerostep 

