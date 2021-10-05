import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const Upload = () => {
    const [ fileInputState, setFileInputState ] = useState( '' );
    const [ previewSoure, setPreviewSource ] = useState( '' );
    const [ selectedFile, setSelectedFile ] = useState( '' );
    const handleFileInputChange = ( e ) => {
        const file = e.target.files[ 0 ];
        previewFile( file );
    }
    const previewFile = ( file ) => {
        const reader = new FileReader();
        reader.readAsDataURL( file );
        reader.onloadend = () => {
            setPreviewSource( reader.result );
        }
    }
    const handleSubmitFile = ( e ) => {
        e.preventDefault();
        if ( !previewSoure ) return;
        uploadImage( previewSoure );
    }
    const uploadImage = async ( base64EncodedImage ) => {
        try {
            const message = await axios.post( '/api/upload', { data: base64EncodedImage } );
            alert( message );
        } catch ( error ) {
            alert( error );
        }
    }
    return (
        <div className="container">
            <h2>Upload</h2>

            <form onSubmit={handleSubmitFile} className="form-control">
                <div className="row">
                    <div className="col-7">
                        <input
                            type="text"
                            className="form-control"
                            name="title"
                            id="title"
                            placeholder="Title du projet"
                        />
                        <input
                            type="text"
                            className="form-control"
                            name="description"
                            id="description"
                            placeholder="Déscription du projet"
                        />
                        <input
                            type="text"
                            className="form-control"
                            name="alt"
                            id="alt"
                            placeholder="Texte alternative"
                        />
                    </div>
                    <div className="col-5">
                        <input
                            type="file"
                            name="image"
                            id="image"
                            onChange={handleFileInputChange}
                            value={fileInputState}
                            className="form-input"
                        />
                        <button type="submit" className="btn btn-primary">Submit</button>

                        {
                            previewSoure && ( <img src={previewSoure} alt="chosen" style={{ height: '500px', weight: '300px' }} /> )
                        }
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Upload;