// ResumeContext.js
import { createContext, useContext, useEffect, useState } from 'react';
import { getCertificates, getEducation, getExperience, getPortfolio } from '../services/apiData';

const ResumeContext = createContext();




export const ResumeProvider = ({ children }) => {
    const [resumeData, setResumeDatas] = useState({
        education: [],
        experience: [],
        certificate: [],
        portfolio:[]
    })
    useEffect(function () {
        async function fetchData() {
            try {
                const [education, experience, certificate,portfolio] = await Promise.all(
                    [
                        getEducation(),
                        getExperience(),
                        getCertificates(),
                        getPortfolio()
                    ]
                )
                setResumeDatas((preventData) => ({
                    ...preventData,
                    education,
                    experience,
                    certificate,
                    portfolio
                }))
            } catch (err) {
                throw Error(err)
            }
        }
    fetchData()
    }, [])
    
    return (
        <ResumeContext.Provider value={resumeData}>
            {children}
        </ResumeContext.Provider>
    );
};

export const useResume = () => {
    return useContext(ResumeContext);
};