// const vision = require("@google-cloud/vision");

// const CREDENTIALS = {
//   type: "service_account",
//   project_id: "thai-ocr-reader",
//   private_key_id: "62460d0c85822f5515a7a556aff593a6e48cfdf3",
//   private_key:
//     "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCWHy1OM4ytgSKL\nSyMxlxEtlZftGF299lqhnDaVn8hOAYRIRazP7plFlkKcJ3pt36CmBhWsCAeqDH7u\ngo46PJ5i7S35NLzBptb/c9L5sIwdRXDwSsSFumE9nCBi6wDBWm0jWvn/sGxTVZpT\nV41IyUZxtDz/UW3tH0k7/vDo/dw6HQA1tqeAcxPkSBUIdELv/UgJeoO0xA+nziAf\nL0EvH018RgfsNLrdX/nJniz2sx0moxEEeB2s+5RZ6iQYCbUjYJIX7swif/jYhugH\nuu5vvxeIC7ZuiIz7nf3NMbIFXNEjmFIoplKHgQ001F0eX/vN5I4eyXlKiV4v3O7k\n1K2ckSv7AgMBAAECggEAQc+wImDJ8sQyWyNY7eP+pV+3xzqP2ffWepPLgCOYgc37\nal2VKWC9s7pwQBm0e9d2C2KOfKjWh09MFA6LAG/TtaWpql7awwB7r2hc3JZvjmOD\nY+w7JC71czdvIT5Jyfn073NyNovmqU/VRGUU7IxERBOSTBGsIbA+AD2+6j1kHtss\nppDQGPRnaPQ/G/sZHYfry389tRjfV9xh6CFhBNeFb7FoRyH48VYJpGsJNWMKltwk\nSZExXddoY0Cs4i6PL44w/D9QoGLlfgOQQpgvX20eFdigydevFOo4wueN7bKSV7CZ\n4SalFeUfZZ/1FEXP0TggVRFv75VMKP6dClp2Me7glQKBgQDQiPWCfk5VC0k1nb7B\nevXCbZPEdNLhmZ6V30R0N20W6F3+8reJWPPlFwyKYzarHv7s8mezqD90PXCOvTU9\nVLkfB3jZ5brCPRoAdcMLuN7ecRFR/yEvBfeKGC2i9KILrF75OI0H0yYjf6aQ0SKj\nvIfHyFTzpmCy5VxYiOM9Lk487QKBgQC4So/xwyftfqtolNS+on6MaIl+WRGWaEo/\nHf0DHTH2pM+QG/TnY5QjQMgW/JKzCDNSF0N1ORcCZw3p2nMVQwHQV+EZaiIJ1Clt\nneClyLt9ZIcc6WaQ1kdJlQQNKkn9/tBeeA/vDUdrOPcCvNonGbmtsb1ecJaAOXjb\ndaQDDDTXhwKBgQC1bmOEHFYUodQZJNyBQ3Ssq1+D7kxHYbtbE7xgDJUJ+DNHjG7o\nvY69Q5dyk61NppMPHjvhUEGc5ZOXbMD0UlEZ0QtxMPGS60xDGDIRcc/d4qu6FmoN\nmnhrGmwiOgr+cwLSfEQfibLF8dq+ZmZn5LCRvhdDQP8ixnDYyohCg5YoZQKBgDgq\nGSZgCJoboZeUzCVxFkoqTcTg1jhVflMwC3zYd/KoFc3gh0nBklMQGirPPNItLJ7X\nEir2hCmqSJY9ihcvvazGK4b4TnlaXGnY1K8RtvonGfpYs3Zup3koXfy5J6Wt88jm\npEyBaoOl77m43m9OKsVhxsmyXFulqEyR1LNNFAmfAoGACsFOO5CLt1qrzc9QxaeN\nMDIv9utC6i126KF3vqQkttpKhWv46bIDvGgMHCBlNajVW9i52HDwQ7aO4LsUh0W0\nzxbNeXmviQr5cRrfUXSTHqfntRSH9Q+b8uXE7P2/R3YzgK8Z+//D8PJfO9+0NmnC\nDYGEs1gOt5iDPhKIbGiSgLc=\n-----END PRIVATE KEY-----\n",
//   client_email: "thai-id-ocr@thai-ocr-reader.iam.gserviceaccount.com",
//   client_id: "116970342531750100390",
//   auth_uri: "https://accounts.google.com/o/oauth2/auth",
//   token_uri: "https://oauth2.googleapis.com/token",
//   auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
//   client_x509_cert_url:
//     "https://www.googleapis.com/robot/v1/metadata/x509/thai-id-ocr%40thai-ocr-reader.iam.gserviceaccount.com",
//   universe_domain: "googleapis.com",
// };

// const client = new vision.ImageAnnotatorClient({
//   credentials: {
//     private_key: CREDENTIALS.private_key,
//     client_email: CREDENTIALS.client_email,
//   },
// });

// const detectThaiIDInfo = async (file_path) => {
//     try {
//       const [result] = await client.textDetection(file_path);
//       const fullText = result.fullTextAnnotation.text;

//       console.log('OCR Text:', fullText);

//       const identificationNumberRegex = /\d{1} \d{4} \d{5} \d{2} \d{1}/;
//       const nameRegex = /Name(?:\n| )(.+)/;
//       const lastNameRegex = /Last name(?:\n| )(.+)/;
//       const dobRegex = /(?:Date of Birth|เกิดวันที่)(?:\n| )(\d{1,2} [A-Za-z]+(?:[.] \d{4})?)/;
//       const issueDateRegex = /(?:Date of Issue|วันออกบัตร)(?:\n| )(.+)/;
//       const expiryDateRegex = /(?:Date of Expiry|วันบัตรหมดอายุ)(?:\n| )(.+)/;

//       const identificationNumberMatch = fullText.match(identificationNumberRegex);
//       const nameMatch = fullText.match(nameRegex);
//       const lastNameMatch = fullText.match(lastNameRegex);
//       const dobMatch = fullText.match(dobRegex);
//       const issueDateMatch = fullText.match(issueDateRegex);
//       const expiryDateMatch = fullText.match(expiryDateRegex);

//       const identificationNumber = identificationNumberMatch ? identificationNumberMatch[0] : null;
//       const name = nameMatch ? nameMatch[1] : null;
//       const lastName = lastNameMatch ? lastNameMatch[1] : null;
//       const dateOfBirth = dobMatch ? dobMatch[1] : null;
//       const dateOfIssue = issueDateMatch ? issueDateMatch[1] : null;
//       const dateOfExpiry = expiryDateMatch ? expiryDateMatch[1] : null;

//       const output = {
//         identification_number: identificationNumber,
//         name: name,
//         last_name: lastName,
//         date_of_birth: dateOfBirth,
//         date_of_issue: dateOfIssue,
//         date_of_expiry: dateOfExpiry,
//       };

//       console.log('Output:', output);
//     } catch (error) {
//       console.error('Error:', error.message);
//     }
//   };

//   detectThaiIDInfo('C:/Users/varsh/OneDrive/Desktop/thai_id_ocr/ThaiId.jpg');

const express = require("express");
const mongoose = require("mongoose");
const multer = require('multer');
const vision = require("@google-cloud/vision");
const cors = require('cors'); // Import the cors middleware

const CREDENTIALS = {
  type: "service_account",
  project_id: "thai-ocr-reader",
  private_key_id: "62460d0c85822f5515a7a556aff593a6e48cfdf3",
  private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCWHy1OM4ytgSKL\nSyMxlxEtlZftGF299lqhnDaVn8hOAYRIRazP7plFlkKcJ3pt36CmBhWsCAeqDH7u\ngo46PJ5i7S35NLzBptb/c9L5sIwdRXDwSsSFumE9nCBi6wDBWm0jWvn/sGxTVZpT\nV41IyUZxtDz/UW3tH0k7/vDo/dw6HQA1tqeAcxPkSBUIdELv/UgJeoO0xA+nziAf\nL0EvH018RgfsNLrdX/nJniz2sx0moxEEeB2s+5RZ6iQYCbUjYJIX7swif/jYhugH\nuu5vvxeIC7ZuiIz7nf3NMbIFXNEjmFIoplKHgQ001F0eX/vN5I4eyXlKiV4v3O7k\n1K2ckSv7AgMBAAECggEAQc+wImDJ8sQyWyNY7eP+pV+3xzqP2ffWepPLgCOYgc37\nal2VKWC9s7pwQBm0e9d2C2KOfKjWh09MFA6LAG/TtaWpql7awwB7r2hc3JZvjmOD\nY+w7JC71czdvIT5Jyfn073NyNovmqU/VRGUU7IxERBOSTBGsIbA+AD2+6j1kHtss\nppDQGPRnaPQ/G/sZHYfry389tRjfV9xh6CFhBNeFb7FoRyH48VYJpGsJNWMKltwk\nSZExXddoY0Cs4i6PL44w/D9QoGLlfgOQQpgvX20eFdigydevFOo4wueN7bKSV7CZ\n4SalFeUfZZ/1FEXP0TggVRFv75VMKP6dClp2Me7glQKBgQDQiPWCfk5VC0k1nb7B\nevXCbZPEdNLhmZ6V30R0N20W6F3+8reJWPPlFwyKYzarHv7s8mezqD90PXCOvTU9\nVLkfB3jZ5brCPRoAdcMLuN7ecRFR/yEvBfeKGC2i9KILrF75OI0H0yYjf6aQ0SKj\nvIfHyFTzpmCy5VxYiOM9Lk487QKBgQC4So/xwyftfqtolNS+on6MaIl+WRGWaEo/\nHf0DHTH2pM+QG/TnY5QjQMgW/JKzCDNSF0N1ORcCZw3p2nMVQwHQV+EZaiIJ1Clt\nneClyLt9ZIcc6WaQ1kdJlQQNKkn9/tBeeA/vDUdrOPcCvNonGbmtsb1ecJaAOXjb\ndaQDDDTXhwKBgQC1bmOEHFYUodQZJNyBQ3Ssq1+D7kxHYbtbE7xgDJUJ+DNHjG7o\nvY69Q5dyk61NppMPHjvhUEGc5ZOXbMD0UlEZ0QtxMPGS60xDGDIRcc/d4qu6FmoN\nmnhrGmwiOgr+cwLSfEQfibLF8dq+ZmZn5LCRvhdDQP8ixnDYyohCg5YoZQKBgDgq\nGSZgCJoboZeUzCVxFkoqTcTg1jhVflMwC3zYd/KoFc3gh0nBklMQGirPPNItLJ7X\nEir2hCmqSJY9ihcvvazGK4b4TnlaXGnY1K8RtvonGfpYs3Zup3koXfy5J6Wt88jm\npEyBaoOl77m43m9OKsVhxsmyXFulqEyR1LNNFAmfAoGACsFOO5CLt1qrzc9QxaeN\nMDIv9utC6i126KF3vqQkttpKhWv46bIDvGgMHCBlNajVW9i52HDwQ7aO4LsUh0W0\nzxbNeXmviQr5cRrfUXSTHqfntRSH9Q+b8uXE7P2/R3YzgK8Z+//D8PJfO9+0NmnC\nDYGEs1gOt5iDPhKIbGiSgLc=\n-----END PRIVATE KEY-----\n",
  client_email: "thai-id-ocr@thai-ocr-reader.iam.gserviceaccount.com",
  client_id: "116970342531750100390",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url: "https://www.googleapis.com/robot/v1/metadata/x509/thai-id-ocr%40thai-ocr-reader.iam.gserviceaccount.com",
  universe_domain: "googleapis.com",
};



// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/thai-id');

// Event listeners for MongoDB connection
mongoose.connection.on('connected', () => {
    console.log('MongoDB connected');
  });
  
  mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
  });
  
  mongoose.connection.on('disconnected', () => {
    console.log('MongoDB disconnected');
  });


// Define the OCR data schema

const idCardSchema = new mongoose.Schema({
    identification_number: String,
    name: String,
    last_name: String,
    date_of_birth: String,
    date_of_issue: String,
    date_of_expiry: String,
});


// Create the OCR data model
const IdCard = mongoose.model('IdCard', idCardSchema);

const client = new vision.ImageAnnotatorClient({
  credentials: {
    private_key: CREDENTIALS.private_key,
    client_email: CREDENTIALS.client_email,
  },
});

const app = express();

app.use(cors()); // Use cors middleware

// Multer setup for handling file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// app.get('/', async (req, res) => {
//   try {
//     const [result] = await client.textDetection('C:/Users/varsh/OneDrive/Desktop/thai_id_ocr/ThaiId.jpg');
//     const fullText = result.fullTextAnnotation.text;

//     console.log('OCR Text:', fullText);

//     const identificationNumberRegex = /\d{1} \d{4} \d{5} \d{2} \d{1}/;
//     const nameRegex = /Name(?:\n| )(.+)/;
//     const lastNameRegex = /Last name(?:\n| )(.+)/;
//     const dobRegex = /(?:Date of Birth|เกิดวันที่)(?:\n| )(\d{1,2} [A-Za-z]+(?:[.] \d{4})?)/;
//     const issueDateRegex = /(?:Date of Issue|วันออกบัตร)(?:\n| )(.+)/;
//     const expiryDateRegex = /(?:Date of Expiry|วันบัตรหมดอายุ)(?:\n| )(.+)/;

//     const identificationNumberMatch = fullText.match(identificationNumberRegex);
//     const nameMatch = fullText.match(nameRegex);
//     const lastNameMatch = fullText.match(lastNameRegex);
//     const dobMatch = fullText.match(dobRegex);
//     const issueDateMatch = fullText.match(issueDateRegex);
//     const expiryDateMatch = fullText.match(expiryDateRegex);

//     const identificationNumber = identificationNumberMatch ? identificationNumberMatch[0] : null;
//     const name = nameMatch ? nameMatch[1] : null;
//     const lastName = lastNameMatch ? lastNameMatch[1] : null;
//     const dateOfBirth = dobMatch ? dobMatch[1] : null;
//     const dateOfIssue = issueDateMatch ? issueDateMatch[1] : null;
//     const dateOfExpiry = expiryDateMatch ? expiryDateMatch[1] : null;

//     const output = {
//       identification_number: identificationNumber,
//       name: name,
//       last_name: lastName,
//       date_of_birth: dateOfBirth,
//       date_of_issue: dateOfIssue,
//       date_of_expiry: dateOfExpiry,
//     };

//     console.log('Output:', output);

//     // Save to MongoDB

//     const idCard = await IdCard.create(output);
//     await idCard.save();
//     res.json(output);

//   } catch (error) {
//     console.error('Error:', error.message);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });


// OCR endpoint for handling file upload and OCR
app.post('/api/ocr', upload.single('image'), async (req, res) => {
    try {
      const fileBuffer = req.file.buffer; // Assuming 'image' is the field name in your form
      const [result] = await client.textDetection(fileBuffer);
      const fullText = result.fullTextAnnotation.text;
  
      // Process the OCR result and save it to the database
      const identificationNumberRegex = /\d{1} \d{4} \d{5} \d{2} \d{1}/;
      const nameRegex = /Name(?:\n| )(.+)/;
      const lastNameRegex = /Last name(?:\n| )(.+)/;
      const dobRegex = /(?:Date of Birth|เกิดวันที่)(?:\n| )(\d{1,2} [A-Za-z]+(?:[.] \d{4})?)/;
      const issueDateRegex = /(?:Date of Issue|วันออกบัตร)(?:\n| )(.+)/;
      const expiryDateRegex = /(?:Date of Expiry|วันบัตรหมดอายุ)(?:\n| )(.+)/;
  
      const identificationNumberMatch = fullText.match(identificationNumberRegex);
      const nameMatch = fullText.match(nameRegex);
      const lastNameMatch = fullText.match(lastNameRegex);
      const dobMatch = fullText.match(dobRegex);
      const issueDateMatch = fullText.match(issueDateRegex);
      const expiryDateMatch = fullText.match(expiryDateRegex);
  
      const identificationNumber = identificationNumberMatch ? identificationNumberMatch[0] : null;
      const name = nameMatch ? nameMatch[1] : null;
      const lastName = lastNameMatch ? lastNameMatch[1] : null;
      const dateOfBirth = dobMatch ? dobMatch[1] : null;
      const dateOfIssue = issueDateMatch ? issueDateMatch[1] : null;
      const dateOfExpiry = expiryDateMatch ? expiryDateMatch[1] : null;
  
      const output = {
        identification_number: identificationNumber,
        name: name,
        last_name: lastName,
        date_of_birth: dateOfBirth,
        date_of_issue: dateOfIssue,
        date_of_expiry: dateOfExpiry,
      };
  
      // Save to MongoDB
      const idCard = new IdCard(output);
        await idCard.save();
  
      res.json(output);
  
    } catch (error) {
      console.error('Error:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

// API endpoint to update existing OCR data
app.put('/api/ocr/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;

        // Update the OCR record in the database
        const result = await IdCard.findByIdAndUpdate(id, updatedData, { new: true });

        if (!result) {
            return res.status(404).json({ error: 'OCR record not found' });
        }

        res.json(result);
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// API endpoint to fetch OCR data with filtering options
app.get('/api/ocr', async (req, res) => {
    try {
        const { status, startDate, endDate } = req.query;

        // Build the filter object based on query parameters
        const filter = {};
        if (status) filter.status = status;
        if (startDate) filter.timestamp = { $gte: new Date(startDate) };
        if (endDate) filter.timestamp = { ...filter.timestamp, $lt: new Date(endDate) };

        // Fetch OCR records from the database based on the filter
        const data = await IdCard.find(filter);

        res.json(data);
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// API endpoint to delete OCR records
app.delete('/api/ocr/:id', async (req, res) => {
    try {
        const { id } = req.params;

        // Delete the OCR record from the database
        const result = await IdCard.findByIdAndDelete(id);

        if (!result) {
            return res.status(404).json({ error: 'OCR record not found' });
        }

        res.json({ message: 'OCR record deleted successfully' });
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Set up the server to listen on a port
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

