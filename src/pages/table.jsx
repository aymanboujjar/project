import React from 'react';
import { UseAppContext } from '../context';
import teamLogos from '../json/data.json'; // Adjust the path as needed
import { useNavigate } from 'react-router-dom';

const Table = () => {
    const { counti } = UseAppContext();
    const navigate = useNavigate();

    return (
      <div className='flex items-center justify-center py-6'>
          <div className='w-full max-w-4xl bg-gray-800 text-white '>
            <div className='bg-gray-900 text-center p-4 text-xl font-bold'>Premier League Table</div>
            <div className='flex bg-gray-700 text-white font-semibold '>
              <span className=' text-center flex items-center justify-center p-4 border-b border-gray-600 mr-28'></span>
              <span className='w-1/12  text-left flex items-center p-4 border-b border-gray-600'>Team</span>
              <span className='w-1/12 ml-[9vw] text-center flex items-center justify-center p-4 border-b border-gray-600 ps-8'>PL</span>
              <span className='w-1/12 text-center flex items-center justify-center p-4 border-b border-gray-600 ps-6'>W</span>
              <span className='w-1/12 text-center flex items-center justify-center p-4 border-b border-gray-600'>D</span>
              <span className='w-1/12 text-center flex items-center justify-center p-4 border-b border-gray-600'>L</span>
              <span className='w-1/12 text-center flex items-center justify-center p-4 border-b border-gray-600 pr-6'>+/-</span>
              <span className='w-1/12 text-center flex items-center justify-center p-4 border-b border-gray-600 ps-16'>Points</span>
            </div>
            {counti.map((team, index) => (
              <div key={index} className={`flex items-center p-4 hover:bg-gray-600 relative`}>
                {index < 4 && <div className="bg-green-500 w-1 h-7 absolute left-5 "></div>}
                {index === 4 && <div className="bg-blue-500 w-1 h-7 absolute left-5 "></div>}
                {index >= 17 && <div className="bg-red-500 w-1 h-7 absolute left-5 "></div>}
                <span className='w-1/12 text-center flex items-center justify-center'>{index + 1}</span>
                
                <span 
                    className='w-3/12 text-left flex items-center cursor-pointer' 
                    onClick={() => navigate(`/team/${team.name}`)}
                >
                    <img src={teamLogos[team.name]} alt="" className='w-8 h-8 mr-2' />
                    {team.name}
                </span>
                <span className='w-1/12 text-center flex items-center ms-14 justify-center'>{team["all-matches"].played}</span>
                <span className='w-1/12 text-center flex items-center justify-center'>{team["all-matches"].won}</span>
                <span className='w-1/12 text-center flex items-center justify-center'>{team["all-matches"].drawn}</span>
                <span className='w-1/12 text-center flex items-center justify-center'>{team["all-matches"].lost}</span>
                <span className='w-1/12 text-center flex items-center justify-center'>{team["all-matches"]["goal-difference"]}</span>
                <span className='w-2/12 text-center flex items-center justify-center'>{team["total-points"]}</span>
              </div>
            ))}
          </div>
      </div>
    );
};

export default Table;
