import { useState,useEffect} from 'react';
import {Song} from '@mookiejones/serato';
const json = require('C:\\Users\\admin\\Source\\Repos\\json.json');



const useData = ()=>{

    const [songs,setSongs] = useState<Song[]>([]);

    useEffect(()=>{
        const dataRows = json.songs.map((value: any, index: number, _: any[]) => {
            const result = {
              id: index,
              ...value,
            };
            return result;
          });
        setSongs(dataRows);
    },[]);

    return {
        songs,
        setSongs
    }
}

export default useData;