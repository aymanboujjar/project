import React from 'react';
import { UseAppContext } from '../context';
import teamLogos from '../json/data.json'; 

export const News = () => {

    const { count } = UseAppContext();

    const groupMatchesByRound = (matches) => {
        return matches.reduce((acc, match) => {
            if (!acc[match.round]) {
                acc[match.round] = [];
            }
            acc[match.round].push(match);
            return acc;
        }, {});
    };

    const groupedMatches = groupMatchesByRound(count);

    return (
        <div className='flex items-center justify-center flex-wrap gap-5 text-black'>
            {
                Object.keys(groupedMatches).map((round, i) => (
                    <div key={i} className="w-full">
                        <h1 className="text-center text-xl font-bold"> {round}</h1>
                        <div className="flex flex-wrap gap-5 justify-center ">
                            {
                                groupedMatches[round].map((e, j) =>
                                    <div key={j} className="w-[40%] py-2 flex px-8 justify-between mt-5  border border-black gap-y-5 items-center gap-x-5">
                                        <div className='flex gap-8 flex-col'>
                                            <div className='flex items-center gap-2'>
                                                <img src={teamLogos[e.team1]} alt={e.team1} className="w-8 h-8"/>
                                                <h1>{e.team1}</h1>
                                            </div>
                                            <div className='flex items-center gap-2'>
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
        </div>
    );
};
