import { createContext, useContext, useEffect, useState } from "react";

export const Mycontext = createContext()

export const MyProvider = ({ children }) => {
    const [count, setCount] = useState([])
    const [counti, setCounti] = useState([]);

    useEffect(() => {

        const fetchCountriesDate = async () => {
            let response = await fetch("https://raw.githubusercontent.com/openfootball/football.json/master/2024-25/en.1.json")
            let data = await response.json()
            setCount(data.matches)
        }

        fetchCountriesDate()
    }, [])


    useEffect(() => {
        var myHeaders = new Headers();
        myHeaders.append("x-rapidapi-key", "37fcb1f122msh24b7df75d4d91fcp1057efjsn5c51abcf9c1e");
        myHeaders.append("x-rapidapi-host", "football-web-pages1.p.rapidapi.com");
    
        var requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };
    
        const fetchData = async () => {
            const response = await fetch(
              "https://football-web-pages1.p.rapidapi.com/league-table.json?comp=1",
              requestOptions
            );
            const result = await response.json();
            setCounti(result["league-table"].teams); 
        };
    
        fetchData();
      }, []);
                const all = {  count , counti }

        
    return (
        <Mycontext.Provider value={all}>{children}</Mycontext.Provider>
    )
}

export const UseAppContext = () => useContext(Mycontext)





