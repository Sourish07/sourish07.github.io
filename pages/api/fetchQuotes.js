// pages/api/fetchSheetData.js
import { google } from 'googleapis';

// const auth = await google.auth.getClient({
//   scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
// });

// const sheets = google.sheets({ version: 'v4', auth });

const sheets = google.sheets({ version: 'v4', auth: process.env.GOOGLE_SHEETS_API_KEY });


export default async (req, res) => {
  console.log(process.env.GOOGLE_SHEETS_API_KEY)
  if (req.method === 'GET') {
    try {
      const fileId = '1dh0wJPbDnUAQ7NKElK8KVubQIAf3oawN1_wClPQ8uHg';
      const sheetName = 'quotes';
      const range = 'A1:B10';

      const response = await sheets.spreadsheets.values.get({
        spreadsheetId: fileId,
        range: `${sheetName}!${range}`,
      });
      console.log(response.data);
      res.status(200).json(response.data);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Error fetching data from Google Sheets' });
    }
  } else {
    res.setHeader('Allow', 'GET');
    res.status(405).end('Method Not Allowed');
  }
};
