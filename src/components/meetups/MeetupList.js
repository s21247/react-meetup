import classes from './MeetupList.module.css'
import MeetUpItem from "./MeetUpItem";

function MeetupList(props){

    return <ul className={classes.list}>
        {props.items.map((items) => <MeetUpItem
            key={items.id}
            id={items.id}
            image={items.image}
            title={items.title}
            address={items.address}
            description={items.description}
            />
        )}
    </ul>
}

export default MeetupList;