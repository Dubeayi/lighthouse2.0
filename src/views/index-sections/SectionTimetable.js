import React, {useState} from "react";
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
 import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import "./dailytimetable.pdf";
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = 'pdf.worker.min.js';


export default function SectionTimetable() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
    }

  return (
    <div>
      <Document
        file="dailytimetable.pdf"
         onLoadSuccess={onDocumentLoadSuccess}
      >
      <Page pageNumber={pageNumber} />
      </Document>
      <p>Page {pageNumber} of {numPages}</p>
    </div>
  );
}
