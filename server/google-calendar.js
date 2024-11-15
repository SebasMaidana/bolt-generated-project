const { google } = require('googleapis');
    const dotenv = require('dotenv');

    dotenv.config();

    const SCOPES = ['https://www.googleapis.com/auth/calendar'];

    const auth = new google.auth.GoogleAuth({
      keyFile: 'path/to/your/service-account-key.json',
      scopes: SCOPES,
    });

    const calendar = google.calendar({ version: 'v3', auth });

    module.exports = calendar;
