import DatabaseComponent from "../components/DatabaseComponent";

const json = require('C:\\Users\\admin\\Source\\Repos\\json.json');
const dataRows = json.songs.map((value: any, index: number, _: any[]) => {
    const result = {
      id: index,
      ...value,
    };
    return result;
  });

const Component = () =>    <DatabaseComponent songs={dataRows}/>

export default Component;