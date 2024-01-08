// OcrApp.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './OcrApp.css'; // Import the updated CSS file

const OcrApp = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [output, setOutput] = useState(null);
  const [history, setHistory] = useState([]);
  const [error, setError] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = async () => {
    try {
      if (!selectedFile) {
        setError('Please select a file');
        return;
      }

      const formData = new FormData();
      formData.append('image', selectedFile);

      const response = await axios.post('http://localhost:8000/api/ocr', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setOutput(response.data);
      setHistory((prevHistory) => [...prevHistory, { status: 'success', timestamp: new Date().toISOString() }]);
    } catch (error) {
      console.error('Error:', error);
      setError('OCR operation failed');
      setHistory((prevHistory) => [...prevHistory, { status: 'failed', timestamp: new Date().toISOString() }]);
    }
  };

  const fetchHistory = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/ocr');
      setHistory(response.data);
    } catch (error) {
      console.error('Error fetching history:', error);
    }
  };

  const updateRecord = async (id, updatedData) => {
    try {
      await axios.put(`http://localhost:8000/api/ocr/${id}`, updatedData);
      console.log('Record updated successfully');
      fetchHistory(); // Fetch updated history after a successful update
    } catch (error) {
      console.error('Error updating record:', error);
    }
  };

  const deleteRecord = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/ocr/${id}`);
      console.log('Record deleted successfully');
      fetchHistory();
    } catch (error) {
      console.error('Error deleting record:', error);
    }
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  return (
    <div className="ocr-container">
      <h1>Thai ID OCR Application</h1>
      <div className="upload-section">
        <input type="file" accept=".png, .jpeg, .jpg" onChange={handleFileChange} />
        <button onClick={handleUpload}>Upload</button>
      </div>

      {error && <p className="error-message">{error}</p>}

      {output && (
        <div className="output-section">
          <h2>OCR Result:</h2>
          <div className="result-display">
            <p>
              <strong>ID Number:</strong> {output.identification_number}
            </p>
            <p>
              <strong>Name:</strong> {output.name} {output.last_name}
            </p>
            <p>
              <strong>Date of Birth:</strong> {output.date_of_birth}
            </p>
            <p>
              <strong>Date of Issue:</strong> {output.date_of_issue}
            </p>
            <p>
              <strong>Date of Expiry:</strong> {output.date_of_expiry}
            </p>
          </div>
        </div>
      )}

      <h2>OCR History:</h2>
      <ul>
        {history.map((entry) => (
          <li key={entry._id} className={`history-row ${entry.status}`}>
            <span>
              {entry.status === 'success' ? 'Success' : 'Failed'} - {new Date(entry.timestamp).toLocaleString()} -{' '}
              <button onClick={() => updateRecord(entry._id, { status: 'success' })}>Mark as Success</button>{' '}
              <button onClick={() => deleteRecord(entry._id)}>Delete</button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OcrApp;
