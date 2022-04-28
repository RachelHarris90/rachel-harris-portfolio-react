import React, { useState } from 'react';
import resumePDF from './../assets/rachel-harris-resume.pdf';
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function Resume() {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <h1>Resume</h1>
      <button> 
        <a href = {resumePDF} target = "_blank">Download resume</a>
      </button>
      <div className="resume-document">
        <Document
          file={resumePDF}
          onLoadSuccess={onDocumentLoadSuccess}
        >
        {Array.from(
          new Array(numPages),
          (el, index) => (
            <Page
              size="A4"
              key={`page_${index + 1}`}
              pageNumber={index + 1}
            />
          ),
        )}
        </Document>
      </div>
    </div>
  );
}