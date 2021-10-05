import React, { useState, useEffect } from 'react';
// import { Image } from 'cloudinary-react';
import axios from 'axios';
import Card from '../card/Card';

const Home = () => {
    const [ resources, setResources ] = useState( [] )
    const loadImages = async () => {
        try {
            const result = await axios.get( 'http://localhost:4000/api/back-office/projets' );
            const data = await result.data;
            if ( result.status === 200 ) setResources( data );
        } catch ( err ) {
            console.error( err );
        }
    }
    useEffect( () => {
        loadImages();
    }, [] );
    return (
        <div>
            <h1 className="title">Projet Gallery</h1>
            <div className="gallery">
                {
                    resources && resources.map( ( resource, index ) => <Card key={index} resource={resource} /> )
                }
            </div>
        </div>
    );
}

export default Home;
