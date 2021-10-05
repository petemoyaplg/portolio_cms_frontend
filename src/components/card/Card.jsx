import { BrowserRouter as Link } from 'react-router-dom';

const Card = ( { resource } ) => {
    return (
        <div>
            <div className="card">
                <img src={resource.url_image} className="card-img-top" alt={resource.alt} />
                <div className="card-body">
                    <h5 className="card-title">{resource.titre}</h5>
                    <button className="btn btn-primary">Détail</button>
                </div>
            </div>
        </div>
    )
}

export default Card;
