const express = require('express');
const app = express();

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.listen(PORT, () => {
  // eslint-disable-line no-use-before-define
  console.log('Server started on port 5000')
})

app.get('/health', (req, res) => {
  res.send('ok')
})

app.get('/version', (req, res) => {
  res.send('1') // change this string to ensure a new version deployed
})


/*
      - name: Test Success
        uses: rjstone/discord-webhook-notify@v1
        if: success()
        with:
            severity: info
            details: Test Succeeded!
            webhookUrl: ${{ secrets.DISCORD_WEBHOOK }}

      - name: Test Failure
        uses: rjstone/discord-webhook-notify@v1
        if: failure()
        with:
          severity: error
          details: The build has failed, app not deployed
          webhookUrl: ${{ secrets.DISCORD_WEBHOOK }}
*/