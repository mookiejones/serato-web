import { DataGrid } from '@mui/x-data-grid';
import columns from './columns';
import Song from '@mookiejones/serato/dist/Song';


export type DatabaseComponentProps ={
  songs:Song[]
}


function DatabaseComponent(props:DatabaseComponentProps) {  
  
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <DataGrid
          rows={props.songs}
          columns={columns}
          experimentalFeatures={{ newEditingApi: true }}
        />
      </div>
    );
  }
  
  export default DatabaseComponent;
  