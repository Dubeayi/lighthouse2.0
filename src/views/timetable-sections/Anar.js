import React, {useState} from "react";
import { Document, Page } from 'react-pdf';
// /dist/esm/entry.webpack';
//  import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import pdf from "./dailytimetable.pdf";

export default function SectionTimetable(props) {

    return (
    <div>
      <Document
        file={pdf}
        options={{ workerSrc: "/pdf.worker.js" }}
      >
      <Page pageNumber={1} />
      </Document>
    </div>
  );
}