// =========================
// 3. BACKEND (Node.js)
// =========================

// installer : npm init -y
// npm install express cors body-parser googleapis

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { google } = require('googleapis');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// CONFIG GOOGLE
const CLIENT_ID = 'TON_CLIENT_ID';
const CLIENT_SECRET = 'TON_CLIENT_SECRET';
const REDIRECT_URI = 'http://localhost:3000/oauth2callback';
const REFRESH_TOKEN = 'TON_REFRESH_TOKEN';

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);

oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

app.post('/create-event', async (req, res) => {
  try {
    const { name, date, time } = req.body;

    const startDateTime = new Date(`${date}T${time}:00`);
    const endDateTime = new Date(startDateTime.getTime() + 60 * 60 * 1000);

    const event = {
      summary: `RDV avec ${name}`,
      start: {
        dateTime: startDateTime,
        timeZone: 'Indian/Reunion'
      },
      end: {
        dateTime: endDateTime,
        timeZone: 'Indian/Reunion'
      }
    };

    await calendar.events.insert({
      calendarId: 'primary',
      resource: event
    });

    res.json({ message: 'Rendez-vous créé !' });

  } catch (error) {
    console.error(error);
    res.json({ message: 'Erreur lors de la création' });
  }
});

app.listen(3000, () => console.log('Serveur lancé sur http://localhost:3000'));
