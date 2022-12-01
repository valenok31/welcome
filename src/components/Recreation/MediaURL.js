import {fetchEvents} from "../../api/api";
import {setRecreationData, setURL} from "../../redux/recreation_reducer";


export default function MediaURL(RecAreaID) {

    return (dispatch) => {
        //dispatch(toggleIsLoading(true));
        fetchEvents.fromArrImages(RecAreaID).then(data => {
            // dispatch(toggleIsLoading(false));
            dispatch(setRecreationData(data));
            dispatch(setURL(data));
        });

    }
}