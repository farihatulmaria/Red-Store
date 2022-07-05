import React from 'react';

const Title = ({name}) => {
    return (
        <div className="title text-center my-6">
            <h2>{name}</h2>
            <div className="underline"></div>
        </div>
    );
};

export default Title;