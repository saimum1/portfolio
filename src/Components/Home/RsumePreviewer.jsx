
import React from 'react';
const RsumePreviewer = () => {
  const pdfUrl = 'https://flowcv.com/resume/48lesneokqu8'; 

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5F5F5', padding: '20px' }}>
      <div style={{ maxWidth: '400px', width: '100%', padding: '20px', backgroundColor: '#FFFFFF', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.5rem', color: '#333', marginBottom: '1rem' }}>Download PDF</h2>
        <p style={{ color: '#666', marginBottom: '1.5rem' }}>Click the link below to view or download the PDF document.</p>
        <iframe
            src={`${pdfUrl}#toolbar=0`} // #toolbar=0 hides the toolbar, adjust as needed
            title="PDF Preview"
            style={{ width: '100%', height: '100%', border: 'none' }}
            frameBorder="0"
          />
      </div>
    </div>
  );
};

export default RsumePreviewer;