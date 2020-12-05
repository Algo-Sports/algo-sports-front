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
    const { numPages } = this.state;
    return (
      <div>
        <Document
          file={this.props.filename}
          onLoadSuccess={this.onDocumentLoadSuccess}
        >
          {Array.apply(null, Array(numPages))
            .map((x, i) => i + 1)
            .map(page => <Page pageNumber={page} />)}
        </Document>
      </div>
    )
  }
}

export default PdfViewer;