import React from 'react';
import { Helmet } from 'react-helmet-async';

const CompanyProfilePage = () => {
    window.scrollTo(0, 0);
    const pdfUrl = '/pdfs/portfolio.pdf';
    return (
        <>
            <Helmet>
                <title>SoftTech | Company Profile</title>
            </Helmet>
            {/* <div className=" w-2/3 mx-auto">
                <div style={{ height: '100vh', width: '100%' }}>
                    <iframe
                        src={`${pdfUrl}#toolbar=0`}
                        title="PDF Viewer"
                        width="100%"
                        height="100%"
                        style={{ border: 'none', display: 'block', maxHeight: '100vh' }}
                    />

                </div>
            </div> */}
            <div className="min-h-screen flex justify-center items-center">
                <p className="text-4xl lg:text-[200px] font-bold text-universe_secondary">Coming soon</p>
            </div>
        </>
    );
};

export default CompanyProfilePage;