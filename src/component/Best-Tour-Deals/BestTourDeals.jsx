import React from 'react';

function BestTourDeals({bigTitle, smallTitle}) {
    return (
        <div className="container">
            <h2 style={{ fontWeight: 'bold', paddingTop: '30px' }}>{bigTitle}</h2>
            <p style={{ color: '#828282' }}>{smallTitle}</p>
        </div>
    );
}

export default BestTourDeals;
