const express = require('express');
    const { uploadFile } = require('../google-drive');

    const router = express.Router();

    router.post('/create', async (req, res) => {
      const { fileMetadata, media } = req.body;

      try {
        const fileId = await uploadFile(fileMetadata, media);
        res.status(200).json({ fileId });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    });

    module.exports = router;
