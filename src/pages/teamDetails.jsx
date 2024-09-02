import React from 'react';
import { useParams } from 'react-router-dom';
import teamLogos from '../json/data2.json'; // Adjust the path as needed
import teamLogo from '../json/data.json'; // Adjust the path as needed

const TeamDetails = () => {
    const { teamName } = useParams();
    const team = teamLogos.find((team) => team.club === teamName) 

  
    return (
        <div className="flex flex-col py-6 px-4 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{team.club}</h1>
        <img src={teamLogo[team.club]} alt={`${team.club} logo`} className="w-40 h-40 mb-4 mx-auto object-contain" />
        <p className="text-lg text-gray-700 mb-2"><strong>Description:</strong> {team.description}</p>
        <p className="text-lg text-gray-700 mb-2"><strong>Stadium:</strong> {team.stadium}</p>
        <p className="text-lg text-gray-700 mb-2"><strong>Founded:</strong> {team.founding_year}</p>
        <p className="text-lg text-gray-700 mb-2"><strong>Manager:</strong> {team.manager}</p>
        <p className="text-lg text-gray-700 mb-2"><strong>Club Colors:</strong> {team.club_colors.join(', ')}</p>
        <p className="text-lg text-gray-700 mb-2"><strong>Major Rivalries:</strong> {team.major_rivalries.join(', ')}</p>
        <p className="text-lg text-gray-700 mb-2"><strong>Achievements:</strong></p>
        <ul className="list-disc list-inside pl-6 text-gray-700 mb-4">
            {team.achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
            ))}
        </ul>
        <p className="text-lg text-gray-700"><strong>Historical Context:</strong> {team.historical_context}</p>
    </div>
    
    );
};

export default TeamDetails;
