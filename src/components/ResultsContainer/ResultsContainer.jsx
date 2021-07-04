import React from 'react';
import NameCard from '../NameCard/NameCard';
import './ResultsContainer.css';

const ResultsContainer = ({ suggestedNames }) => {
    const suggestNameJsx = suggestedNames.map((suggestedName,index) => {
        return <NameCard key={index} suggestedName={suggestedName} />;
    });

    return <div className="results-container">{suggestNameJsx}</div>;
};

export default ResultsContainer;