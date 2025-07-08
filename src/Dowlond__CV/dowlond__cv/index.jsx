import React from 'react';
import "./dowlond__cv.scss";

const DowlondCV = () => {

    const handleDownload = () => {
        const cvUrl = "/Files/Amirov__Suhrob.CV.pdf"; 
        const link = document.createElement('a');
        link.href = cvUrl;
        link.download = 'Amirov__Suhrob.CV.pdf'; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
            <button
                className='dowlond__cv-btn'
                id="dowlond__cv"
                onClick={handleDownload}
            >
                Download CV
            </button>
        </>
    );
};

export default DowlondCV;
