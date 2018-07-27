import React, { Component } from 'react';
import './ThreeFileExporter.css';

import { STLExporter } from 'three/STLExporter';
import FileSaver from 'file-saver';

class ThreeFileExporter extends Component {
  constructor(props) {
    super(props);

    this.onFileDownload = this.onFileDownload.bind(this);
  }

  onFileDownload() {
    const { scene, name } = this.props;
    console.log(scene);

    const exporter = new THREE.STLExporter();
    let stlString = exporter.parse( scene ); // Export the scene
    let blob = new Blob( [stlString], { type : 'text/plain' } ); // Generate Blob from the string
    let fileName = name.replace(/\W+/g, '-').toLowerCase();   //W converters nonalphanumeric characters e.g. &
    FileSaver.saveAs( blob, fileName + '.stl' ); //Save the Blob to file.stl
  }

  render() {
    return(
      <button className="three-file-exporter-button" onClick={this.onFileDownload}>Download File (.STL)</button>
    );
  }
}

export default ThreeFileExporter;
