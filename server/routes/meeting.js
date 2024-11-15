const express = require('express');
    const calendar = require('../google-calendar');
    const { transcribeAudio } = require('../whisper');
    const { uploadFile } = require('../google-drive');

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

    router.post('/transcribe', async (req, res) => {
      const { audioData } = req.body;

      try {
        const transcription = await transcribeAudio(audioData);
        res.status(200).json(transcription);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });

    router.post('/upload', async (req, res) => {
      const { fileMetadata, media } = req.body;

      try {
        const fileId = await uploadFile(fileMetadata, media);
        res.status(200).json({ fileId });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });

    module.exports = router;
