import { useHistory } from 'react-router-dom'
import NewMeetUpForm from "../components/meetups/NewMeetUpForm";

function NewMeetUpPage(){
    //history reacthook
    const history =  useHistory();
    function addMeetUpHandler(meetUpData){
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(meetUpData)
        };
        fetch(
            'https://react-project-d0b8e-default-rtdb.firebaseio.com/meetups.json',
            requestOptions).then(response => response.json())
            .then( () => {
                history.replace('/')
            })
     }
    return <section>
        <h1>Add New Meet Up</h1>
        <NewMeetUpForm onAddMeetup={addMeetUpHandler}/>
    </section>


}

export default NewMeetUpPage;