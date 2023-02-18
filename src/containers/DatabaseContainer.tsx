import useData from '../useData';
import DatabaseComponent from '../components/DatabaseComponent';

function DatabaseContainer(){
    const { songs} = useData();

    return (<DatabaseComponent songs={songs}/>);


}
export default DatabaseContainer;