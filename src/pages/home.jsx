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
                    <li><b>Description:</b> The Premier League is the highest level of the English football league system. Contested by 20 clubs, it operates on a system of promotion and relegation with the English Football League (EFL). Seasons usually run from August to May, with each team playing 38 matches: two against each other, one home and one away.</li>
                    <li><b>Founding Date:</b> 20 February 1992</li>
                    <li><b>Founding Reason:</b> Decision of First Division clubs to break away from the English Football League</li>
                    <li><b>Number of Teams:</b> 20</li>
                    <li><b>Relegation and Promotion:</b> Clubs may still be relegated to and promoted from the EFL Championship</li>
                </ul>
            </div>

            <div className="mb-6 p-4 bg-white rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold mb-4">Broadcasting</h2>
                <ul className="list-disc pl-6 space-y-2">
                    <li><b>Domestic Rights:</b>
                        <ul className="list-disc pl-6 space-y-1">
                            <li><b>Sky:</b> 128 games</li>
                            <li><b>BT Group:</b> 32 games</li>
                        </ul>
                    </li>
                    <li><b>Television Deal:</b>
                        <ul className="list-disc pl-6 space-y-1">
                            <li><b>Current Value:</b> £5 billion</li>
                            <li><b>Future Value:</b> £6.7 billion (2025–2029)</li>
                            <li><b>Overseas Rights:</b> Earnings projected at $7.2 billion (2022–2025)</li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div className="mb-6 p-4 bg-white rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold mb-4">Management</h2>
                <ul className="list-disc pl-6 space-y-2">
                    <li><b>Type:</b> Corporation</li>
                    <li><b>Manager:</b> Chief Executive</li>
                    <li><b>Shareholders:</b> Member clubs</li>
                    <li><b>Revenue:</b>
                        <ul className="list-disc pl-6 space-y-1">
                            <li><b>Central Payment:</b> £2.4 billion (2016–17)</li>
                            <li><b>Solidarity Payments:</b> £343 million to EFL clubs</li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div className="mb-6 p-4 bg-white rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold mb-4">Popularity</h2>
                <ul className="list-disc pl-6 space-y-2">
                    <li><b>Most Watched:</b> Yes</li>
                    <li><b>Broadcast Coverage:</b>
                        <ul className="list-disc pl-6 space-y-1">
                            <li><b>Territories:</b> 212</li>
                            <li><b>Homes:</b> 643 million</li>
                            <li><b>Potential Audience:</b> 4.7 billion people</li>
                        </ul>
                    </li>
                    <li><b>Average Match Attendance:</b> 38,181</li>
                    <li><b>Highest Aggregated Attendance:</b> 14,508,981</li>
                    <li><b>Stadium Occupancy:</b> Most near capacity</li>
                </ul>
            </div>

            <div className="mb-6 p-4 bg-white rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold mb-4">UEFA Ranking</h2>
                <ul className="list-disc pl-6 space-y-2">
                    <li><b>Position:</b> 1</li>
                    <li><b>Comparison:</b> Ranked first in UEFA coefficient rankings, ahead of Spain's La Liga</li>
                </ul>
            </div>

            <div className="mb-6 p-4 bg-white rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold mb-4">European Titles</h2>
                <ul className="list-disc pl-6 space-y-2">
                    <li><b>Number of Titles:</b> 15</li>
                    <li><b>Record:</b> Six English clubs</li>
                    <li><b>Title:</b> Second-highest number of European Cup / UEFA Champions League titles</li>
                </ul>
            </div>

            <div className="p-4 bg-white rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold mb-4">Clubs</h2>
                <ul className="list-disc pl-6 space-y-2">
                    <li><b>Number of Clubs:</b> 51</li>
                    <li><b>Clubs Competing:</b>
                        <ul className="list-disc pl-6 space-y-1">
                            <li><b>English:</b> 49</li>
                            <li><b>Welsh:</b> 2</li>
                        </ul>
                    </li>
                    <li><b>Title Winners:</b>
                        <ul className="list-disc pl-6 space-y-1">
                            <li><b>Manchester United:</b> 13</li>
                            <li><b>Manchester City:</b> 8</li>
                            <li><b>Chelsea:</b> 5</li>
                            <li><b>Arsenal:</b> 3</li>
                            <li><b>Blackburn Rovers:</b> 1</li>
                            <li><b>Leicester City:</b> 1</li>
                            <li><b>Liverpool:</b> 1</li>
                        </ul>
                    </li>
                    <li><b>Special Notes:</b>
                        <ul className="list-disc pl-6 space-y-1">
                            <li><b>Most Titles:</b>
                                <ul className="list-disc pl-6 space-y-1">
                                    <li><b>Club:</b> Manchester United</li>
                                    <li><b>Titles:</b> 13</li>
                                </ul>
                            </li>
                            <li><b>Most Successive Titles:</b>
                                <ul className="list-disc pl-6 space-y-1">
                                    <li><b>Club:</b> Manchester City</li>
                                    <li><b>Titles:</b> 4</li>
                                </ul>
                            </li>
                            <li><b>Clubs in Every Season:</b>
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
