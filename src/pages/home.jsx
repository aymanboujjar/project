import React  from 'react';
import { UseAppContext } from '../context';
import teamLogos from '../json/data.json'; // Adjust the path as needed
import { useNavigate } from 'react-router-dom';
import { LuArrowUpRight } from "react-icons/lu";

export const Home = () => {
  const { counti } = UseAppContext();
  const navigate = useNavigate()
  const navigae = useNavigate()

 

  return (
    <div className='flex flex-col gap-y-10'>
      <div  className='flex gap-x-5 '>
        {
          counti.map((team,i)=>(
            <img className=' cursor-pointer h-12 ms-2' onClick={() => navigate(`/team/${team.name}`)} width={50}  src={teamLogos[team.name]} alt="" />
          ))
        }
      </div>
    <div className='flex justify-between  w-full   p-4relative'>


<div className="p-6  mx-auto bg-white">
            <h1 className="text-3xl font-bold mb-6">Premier League Overview</h1>

            <div className="mb-6 p-4 bg-white rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold mb-4">General Information</h2>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Description:</strong> The Premier League is the highest level of the English football league system. Contested by 20 clubs, it operates on a system of promotion and relegation with the English Football League (EFL). Seasons usually run from August to May, with each team playing 38 matches: two against each other, one home and one away.</li>
                    <li><strong>Founding Date:</strong> 20 February 1992</li>
                    <li><strong>Founding Reason:</strong> Decision of First Division clubs to break away from the English Football League</li>
                    <li><strong>Number of Teams:</strong> 20</li>
                    <li><strong>Relegation and Promotion:</strong> Clubs may still be relegated to and promoted from the EFL Championship</li>
                </ul>
            </div>

            <div className="mb-6 p-4 bg-white rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold mb-4">Broadcasting</h2>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Domestic Rights:</strong>
                        <ul className="list-disc pl-6 space-y-1">
                            <li><strong>Sky:</strong> 128 games</li>
                            <li><strong>BT Group:</strong> 32 games</li>
                        </ul>
                    </li>
                    <li><strong>Television Deal:</strong>
                        <ul className="list-disc pl-6 space-y-1">
                            <li><strong>Current Value:</strong> £5 billion</li>
                            <li><strong>Future Value:</strong> £6.7 billion (2025–2029)</li>
                            <li><strong>Overseas Rights:</strong> Earnings projected at $7.2 billion (2022–2025)</li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div className="mb-6 p-4 bg-white rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold mb-4">Management</h2>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Type:</strong> Corporation</li>
                    <li><strong>Manager:</strong> Chief Executive</li>
                    <li><strong>Shareholders:</strong> Member clubs</li>
                    <li><strong>Revenue:</strong>
                        <ul className="list-disc pl-6 space-y-1">
                            <li><strong>Central Payment:</strong> £2.4 billion (2016–17)</li>
                            <li><strong>Solidarity Payments:</strong> £343 million to EFL clubs</li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div className="mb-6 p-4 bg-white rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold mb-4">Popularity</h2>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Most Watched:</strong> Yes</li>
                    <li><strong>Broadcast Coverage:</strong>
                        <ul className="list-disc pl-6 space-y-1">
                            <li><strong>Territories:</strong> 212</li>
                            <li><strong>Homes:</strong> 643 million</li>
                            <li><strong>Potential Audience:</strong> 4.7 billion people</li>
                        </ul>
                    </li>
                    <li><strong>Average Match Attendance:</strong> 38,181</li>
                    <li><strong>Highest Aggregated Attendance:</strong> 14,508,981</li>
                    <li><strong>Stadium Occupancy:</strong> Most near capacity</li>
                </ul>
            </div>

            <div className="mb-6 p-4 bg-white rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold mb-4">UEFA Ranking</h2>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Position:</strong> 1</li>
                    <li><strong>Comparison:</strong> Ranked first in UEFA coefficient rankings, ahead of Spain's La Liga</li>
                </ul>
            </div>

            <div className="mb-6 p-4 bg-white rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold mb-4">European Titles</h2>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Number of Titles:</strong> 15</li>
                    <li><strong>Record:</strong> Six English clubs</li>
                    <li><strong>Title:</strong> Second-highest number of European Cup / UEFA Champions League titles</li>
                </ul>
            </div>

            <div className="p-4 bg-white rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold mb-4">Clubs</h2>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Number of Clubs:</strong> 51</li>
                    <li><strong>Clubs Competing:</strong>
                        <ul className="list-disc pl-6 space-y-1">
                            <li><strong>English:</strong> 49</li>
                            <li><strong>Welsh:</strong> 2</li>
                        </ul>
                    </li>
                    <li><strong>Title Winners:</strong>
                        <ul className="list-disc pl-6 space-y-1">
                            <li><strong>Manchester United:</strong> 13</li>
                            <li><strong>Manchester City:</strong> 8</li>
                            <li><strong>Chelsea:</strong> 5</li>
                            <li><strong>Arsenal:</strong> 3</li>
                            <li><strong>Blackburn Rovers:</strong> 1</li>
                            <li><strong>Leicester City:</strong> 1</li>
                            <li><strong>Liverpool:</strong> 1</li>
                        </ul>
                    </li>
                    <li><strong>Special Notes:</strong>
                        <ul className="list-disc pl-6 space-y-1">
                            <li><strong>Most Titles:</strong>
                                <ul className="list-disc pl-6 space-y-1">
                                    <li><strong>Club:</strong> Manchester United</li>
                                    <li><strong>Titles:</strong> 13</li>
                                </ul>
                            </li>
                            <li><strong>Most Successive Titles:</strong>
                                <ul className="list-disc pl-6 space-y-1">
                                    <li><strong>Club:</strong> Manchester City</li>
                                    <li><strong>Titles:</strong> 4</li>
                                </ul>
                            </li>
                            <li><strong>Clubs in Every Season:</strong>
                                <ul className="list-disc pl-6 space-y-1">
                                    <li>Arsenal</li>
                                    <li>Chelsea</li>
                                    <li>Everton</li>
                                    <li>Liverpool</li>
                                    <li>Manchester United</li>
                                    <li>Tottenham Hotspur</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        <div className='flex flex-col w-full items-center gap-y-10'>
          <div className='flex flex-col border-2 h-fit px-5 mx-3 gap-y-3 py-6 mt-32  w-[90%] border-black '>
            <img width={400} src={teamLogos['Premier League']} alt="" />
            <p><b>Founded</b> : 	20 February 1992; 32 years ago</p>
            <p><b>Country</b> : 	England</p>
            <p><b>Confideration</b> : <a href="https://en.wikipedia.org/wiki/UEFA">UEFA</a></p>
            <p><b>Number of teams</b> : 20 (since 1995–96)</p>
            <p><b>Level on pyramid</b> : 1</p>
            <p><b>Relegation to</b> : <a href="https://en.wikipedia.org/wiki/EFL_Championship">	EFL Championship</a></p>
            <div className='flex gap-x-5'><b>Domestic cup(s)</b> : <div className='flex flex-col'><a href="https://en.wikipedia.org/wiki/FA_Cup">Fa Cups</a> <a href="https://en.wikipedia.org/wiki/FA_Community_Shield">FA Community Shield</a></div></div>
            <p><b>League cup(s)</b> : <a href="https://en.wikipedia.org/wiki/EFL_Cup">EFL Cup</a></p>
            <div className='flex gap-x-5'><b>International cup(s)</b> : <div className='flex flex-col'><a href="https://en.wikipedia.org/wiki/UEFA_Champions_League">UEFA Champions League</a> <a href="https://en.wikipedia.org/wiki/UEFA_Europa_League">UFEA Europa League</a> <a href="https://en.wikipedia.org/wiki/UEFA_Conference_League">UEfA Conference League</a></div></div>
            <p><b>Current champions</b> : 	Manchester City (8th title)(2023–24)</p>
            <p><b>Most championships</b> : Manchester United (13 titles)</p>
            <p><b>Most appearances</b> : 	Gareth Barry (653)</p>
            <p><b>Top goalscorer</b> : Alan Shearer (260)</p>
            <div className='flex items-center'><b>Website</b> : <a href="https://www.premierleague.com/matchweek/18392/blog">premierleague.com</a> <LuArrowUpRight /></div>
     </div>
       <div className='w-[90%] bg-white text-black border border-black ps-5 '>
        <div className='bg-white text-center p-4 text-xl font-bold'>Premier League Table</div>
        <div className='flex bg-white text-black font-semibold '>
          <span className=' text-center flex items-center justify-center p-4 border-b mr-18'></span>
          <span className='w-1/12  text-left flex items-center p-4 '>Team</span>
          <span className='w-1/12 ml-[16vw] text-center flex items-center justify-center p-4  ps-8'>PL</span>
          <span className='w-1/12 text-center flex items-center justify-center p-4  ps-16'>Points</span>
        </div>
        {counti.map((team, index) => (
          <div key={index} className={`flex items-center p-4 relative`}>
            {index < 4 && <div className="bg-green-500 w-1 h-7 absolute left-2 "></div>}
            {index === 4 && <div className="bg-blue-500 w-1 h-7 absolute left-2 "></div>}
            {index >= 17 && <div className="bg-red-500 w-1 h-7 absolute left-2 "></div>}
            <span className='w-1/12 text-center flex items-center justify-center'>{index + 1}</span>
            
            <span onClick={() => navigate(`/team/${team.name}`)} className='w-full text-left flex items-center cursor-pointer'>
              
                <img src={teamLogos[team.name]} alt="" className='w-8 h-8 mr-2' />
              {team.name}
            </span>
            <span className='w-1/12 text-center flex items-center ms pr-6 justify-center'>{team["all-matches"].played}</span>
            <span className='w-2/12 text-center flex items-center mr-8 ps-12 justify-center'>{team["total-points"]}</span>
          </div>
        ))}
      </div>
      </div>
         {/* <div onClick={() => { navigate(`/new`) }} className='text-black absolute bottom-5 right-10 cursor-pointer'>
            all matches ...
        </div> */}
        <div onClick={() => { navigae(`/table`) }} className='text-black absolute bottom-[-240vh] right-10 cursor-pointer'>
          full Table format  ...
        </div> 
        <div onClick={() => { navigae(`/new`) }} className='text-black absolute bottom-[-245vh] right-10 cursor-pointer'>
          Premier League Planing  ...
        </div> 
    </div>
 {/* <div className='flex items-center justify-center flex-wrap gap-5 text-black'>
    <h1 className='text-5xl'>Premier League 2024/2025 Planing</h1>
            {
                Object.keys(groupedMatches).map((round, i) => (
                    <div key={i} className="w-full">
                        <h1 className="text-center text-xl font-bold"> {round}</h1>
                        <div className="flex flex-wrap gap-5 justify-center ">
                            {
                                groupedMatches[round].map((e, j) =>
                                    <div key={j} className="w-[40%] py-2 flex px-8 justify-between mt-5  border border-black gap-y-5 items-center gap-x-5">
                                        <div  className='flex gap-8 flex-col '>
                                            <div className='flex items-center gap-2 cursor-pointer'>
                                                <img src={teamLogos[e.team1]} alt={e.team1} className="w-8 h-8"/>
                                                <h1>{e.team1}</h1>
                                            </div>
                                            <div className='flex items-center gap-2 cursor-pointer'>
                                                <img src={teamLogos[e.team2]} alt={e.team2} className="w-8 h-8"/>
                                                <h1>{e.team2}</h1>
                                            </div>
                                        </div>
                                        <div className='flex flex-col items-center gap-y-4 me-9'>
                                            <h1>{e.date}</h1>
                                            <h1>{e.time}</h1>
                                        <h1 className="relative after:content-[':'] after:absolute after:left-[62px] after:-translate-x-1/2 tracking-wider">
                                            Score: {e.score.ft}
                                        </h1>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                ))
            }
        </div> */}
        </div>

  );
};
