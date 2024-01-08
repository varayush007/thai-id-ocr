// Perfect Code till now

// const detectThaiIDInfo = async (file_path) => {
//     try {
//       const [result] = await client.textDetection(file_path);
//       const fullText = result.fullTextAnnotation.text;
  
//       console.log('OCR Text:', fullText);
  
//       const identificationNumberRegex = /เลขประจำตัวประชาชน(?:\n| )(\d{1,2} \d{4} \d{5} \d{2} \d{1})/;
//       const nameRegex = /Name(?:\n| )(.+)/;
//       const lastNameRegex = /Last name(?:\n| )(.+)/;
//       const dobRegex = /(?:เกิดวันที่|Date of Birth)(?:\n| )(\d+ \w+ \d{4})/;
//       const issueDateRegex = /(?:วันออกบัตร|Date of Issue)(?:\n| )(.+)/;
//       const expiryDateRegex = /(?:วันบัตรหมดอายุ|Date of Expiry)(?:\n| )(.+)/;
  
//       const identificationNumberMatch = fullText.match(identificationNumberRegex);
//       const nameMatch = fullText.match(nameRegex);
//       const lastNameMatch = fullText.match(lastNameRegex);
//       const dobMatch = fullText.match(dobRegex);
//       const issueDateMatch = fullText.match(issueDateRegex);
//       const expiryDateMatch = fullText.match(expiryDateRegex);
  
//       const identificationNumber = identificationNumberMatch ? identificationNumberMatch[1] : null;
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






// only dob remain
// const detectThaiIDInfo = async (file_path) => {
//     try {
//       const [result] = await client.textDetection(file_path);
//       const fullText = result.fullTextAnnotation.text;
  
//       console.log('OCR Text:', fullText);
  
//       const identificationNumberRegex = /\d{1} \d{4} \d{5} \d{2} \d{1}/;
//       const nameRegex = /Name(?:\n| )(.+)/;
//       const lastNameRegex = /Last name(?:\n| )(.+)/;
//       const dobRegex = /(?:Date of Birth|เกิดวันที่)(?:\n| )(\d{1,2} \w+ \d{4})/;
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





//dob with date only 

// const detectThaiIDInfo = async (file_path) => {
//     try {
//       const [result] = await client.textDetection(file_path);
//       const fullText = result.fullTextAnnotation.text;
  
//       console.log('OCR Text:', fullText);
  
//       const identificationNumberRegex = /\d{1} \d{4} \d{5} \d{2} \d{1}/;
//       const nameRegex = /Name(?:\n| )(.+)/;
//       const lastNameRegex = /Last name(?:\n| )(.+)/;
//       const dobRegex = /(?:Date of Birth|เกิดวันที่)(?:\n| )([\d\w.]+(?: \d{1,2},? \d{4})?)/;
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


  