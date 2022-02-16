import React from "react";
import {Image, Title} from './Thumb.styles';
import { Link } from 'react-router-dom';


const Thumb = ({image, movieId, clickable, movieTitle}) => (
    <div>
        {
            clickable ? 
            (
                <Link to={`/${movieId}`}>
                    <Image src={image} alt='movie-thumb' />
                    <Title>{movieTitle}</Title>
                </Link>
            ) : (
                <Image src={image} alt='movie-thumb' />
            )
        }
    </div>
);

export default Thumb;