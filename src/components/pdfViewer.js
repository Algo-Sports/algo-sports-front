import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';

class PdfViewer extends Component {
  state = {
    numPages: null,
    pageNumber: 1,
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }

  render() {
    const { pageNumber, numPages } = this.state;
    return (
      <div>
        <Document
          size="A4"
          file={this.props.filename}
          onLoadSuccess={this.onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} wrap={false}/>
        </Document>
        <p>
         <button onClick={() => pageNumber > 1 ?
            this.setState({
              numPages: numPages,
              pageNumber: pageNumber - 1
            }) : null}>
            &lt;
         </button>
          <span>Page {pageNumber} of {numPages}</span>
         <button onClick={() => pageNumber < numPages ?
            this.setState({
              numPages: numPages,
              pageNumber: pageNumber + 1
            }) : null}>
            &gt;
         </button>
        </p>
      </div>
    )
  }
}

export default PdfViewer;