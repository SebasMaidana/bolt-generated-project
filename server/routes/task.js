const express = require('express');
    const calendar = require('../google-calendar');

    const router = express.Router();

    router.post('/create', async (req, res) => {
      const { summary, description, start, end } = req.body;

      try {
        const response = await calendar.events.insert({
          calendarId: 'primary',
          requestBody: {
            summary,
            description,
            start: {
              dateTime: start,
            },
            end: {
              dateTime: end,
            },
          },
        });

        res.status(200).json(response.data);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });

    module.exports = router;
