import { GridColDef,GridValueFormatterParams  } from '@mui/x-data-grid';


const columns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'id',
    editable: true,
  },
  {
    field: 'Title',
    headerName: 'Title',
    editable: true,
  },
  {
    field: 'Artist',
    headerName: 'Artist',
    editable: true,
  },
  {
    field: 'Album',
    headerName: 'Album',
    editable: true,
  },
  {
    field: 'Genre',
    headerName: 'Genre',
    editable: true,
  },
  {
    field: 'Length',
    headerName: 'Length',
    editable: true,
  },
  {
    field: 'Size',
    headerName: 'Size',
    editable: true,
  },
  {
    field: 'Type',
    headerName: 'Type',
    editable: true,
    valueFormatter:(params:GridValueFormatterParams<string>)=>`.${params.value}`
  },
  {
    field: 'PathString',
    headerName: 'PathString',
    editable: true,
  },
  {
    field: 'Bitrate',
    headerName: 'Bitrate',
    editable: true,
  },
  {
    field: 'SampleRate',
    headerName: 'SampleRate',
    editable: true,
  },
  {
    field: 'Bpm',
    headerName: 'Bpm',
    editable: true,
  },
  {
    field: 'Comment',
    headerName: 'Comment',
    editable: true,
  },
  {
    field: 'Group',
    headerName: 'Group',
    editable: true,
  },
  {
    field: 'Composer',
    headerName: 'Composer',
    editable: true,
  },
  {
    field: 'Year',
    headerName: 'Year',
    editable: true,
  },
  {
    field: 'Key',
    headerName: 'Key',
    editable: true,
  },
  {
    field: 'IsMissing',
    headerName: 'IsMissing',
    editable: true,
  },
  {
    field: 'IsPlayed',
    headerName: 'IsPlayed',
    editable: true,
  },
];

export default columns;
