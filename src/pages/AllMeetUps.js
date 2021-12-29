import { useState } from "react";
import { useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";


function AllMeetUpsPage(){
    const [isLoading,   setIsLoading] = useState(true)
    const [loadedMeetUps, setLoadedMeetUps] = useState([]);

    //use effect allows to run it once without it fetch would loop itself
    useEffect(() => {
        setIsLoading(true);
        fetch(
            'https://react-project-d0b8e-default-rtdb.firebaseio.com/meetups.json'
        ).then(response => {
            return response.json()
        }).then(data => {
            const meetUps = [];
            for(const key in data){
                const meetup = {
                    id:key,
                    ...data[key]
                };

                meetUps.push(meetup)
            }
            setIsLoading(false);
            setLoadedMeetUps(meetUps)
        })
        //[] is needed otherway useEffect would work as normal fetch
    }, [])

    if(isLoading){
        return <section>
            <p>Loading...</p>
        </section>
    }
    return <section>
        <h1>All meetups</h1>
        <MeetupList items={loadedMeetUps}/>

    </section>
}

export default AllMeetUpsPage;