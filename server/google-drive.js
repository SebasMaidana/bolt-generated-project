const { google } = require('googleapis');
    const dotenv = require('dotenv');

    dotenv.config();

    const SCOPES = ['https://www.googleapis.com/auth/drive'];

    const auth = new google.auth.GoogleAuth({
      keyFile: 'path/to/your/service-account-key.json',
      scopes: SCOPES,
    });

    const drive = google.drive({ version: 'v3', auth });

    const uploadFile = async (fileMetadata, media) => {
      try {
        const response = await drive.files.create({
          resource: fileMetadata,
          media: media,
          fields: 'id',
        });
        return response.data.id;
      } catch (error) {
        throw new Error(error.message);
      }
    };

    module.exports = { uploadFile };
