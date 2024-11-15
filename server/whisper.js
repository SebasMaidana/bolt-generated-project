const axios = require('axios');
    const dotenv = require('dotenv');

    dotenv.config();

    const WHISPER_API_URL = 'https://api.whisper.ai/v1/transcribe';
    const WHISPER_API_KEY = process.env.WHISPER_API_KEY;

    const transcribeAudio = async (audioData) => {
      try {
        const response = await axios.post(WHISPER_API_URL, audioData, {
          headers: {
            'Authorization': `Bearer ${WHISPER_API_KEY}`,
            'Content-Type': 'application/json',
          },
        });

        return response.data;
      } catch (error) {
        throw new Error(error.response.data.message);
      }
    };

    module.exports = { transcribeAudio };
