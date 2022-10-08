import {MySitesCard} from "./MySitesCard";

function MySitesCardList(props){
    const {mySites = []} = props;
    if(mySites.lenght) {
        return <h3>Nothing here</h3>;
    }
    return <div className="mySitesList">
        {
            mySites.map ( item => (
                <MySitesCard key={item.id} {...item}/>
            ))
        }
    </div>
}

export {MySitesCardList};