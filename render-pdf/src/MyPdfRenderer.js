import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
// import sample from './pdf-test.pdf'
import sample from './credit_report.pdf'
class MyPdfRenderer extends Component { 
    url = 'https://s3-ap-southeast-2.amazonaws.com/lendi-platform/users/9141d3d2-2733-4379-8ce7-63d05399aa8c/credit_report.pdf';
    state = {
        numPages: null,
        pageNumber: 1,
      }
     
      onDocumentLoad = ({ numPages }) => {
        this.setState({ numPages });
      }
      onLoadError = (err) => {
          console.log(err);
          
      }
     
      render() {
        const { pageNumber, numPages } = this.state;
     
        return (
          <div>
            <Document
              //file={this.url}
              file={sample}
              onLoadSuccess={this.onDocumentLoad} 
              onLoadError={this.onLoadError}
            >
              <Page pageNumber={pageNumber} />
            </Document>
            <p>Page {pageNumber} of {numPages}</p>
          </div>
        );
      }
};

export default MyPdfRenderer;