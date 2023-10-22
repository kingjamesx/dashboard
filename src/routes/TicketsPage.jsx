import React from 'react'
import { Box,Stack,Typography,Paper,Chip } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import MoreVertIcon from '@mui/icons-material/MoreVert';
// import CustomerName from '../components/CustomerName';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SortIcon from '@mui/icons-material/Sort';
import {Row} from '../data/index'
const TicketsPage = () => {
  const columns = [
    { 
      field: 'ticketDetails', headerName: 'Ticket details', width: 440,sortable: false,filterable: false,headerClassName:"ticket-cell",
      renderCell:(params)=>{
         const title=params.row.ticketDetails.title
        const text=params.row.ticketDetails.text
        const img=params.row.ticketDetails.img

        return  (
          <Box sx={{display:"flex",alignItems:"center",gap:"24px",ml:"31px"}}>
            <Box component='img' src={img} alt='img' sx={{width:"44px",height:"44px",borderRadius:"50%",objectFit:"cover",objectPosition:"center 0%"}}></Box>
             <Stack>
           <Typography fontWeight="600" fontSize="14px" color="#252733">{title}</Typography>
           <Typography mt='4px' color="#C5C7CD" fontSize="12px">{text}</Typography>
          </Stack>
          </Box>
        )
      }
  },
    {
       field: 'customerName', headerName: 'Customer name', width: 248,sortable: false,menu:false,headerClassName:"head-cell",
       renderCell: (params) => {
        const title=params.row.customerName.title
        const text=params.row.customerName.text
        return (
          <Stack>
           <Typography fontSize="14px" fontWeight="600" color="#252733">{title}</Typography>
           <Typography color="#C5C7CD" fontSize="12px">{text}</Typography>
          </Stack>)
       }
      },
    {
       field: 'date', headerName: 'Date', width: 170,sortable: false,headerClassName:"head-cell",
       renderCell:(params)=>{
         const title=params.row.date.title
         const text=params.row.date.text
         return (
           <Stack>
            <Typography color="#252733" fontSize="14px">{title}</Typography>
            <Typography color="#C5C7CD" fontSize="12px">{text}</Typography>
           </Stack>
         )
       }
   },
    {
      field: 'priority',
      headerName: 'Priority',
      type: 'number',
      headerClassName:"head-cell",
      // width: 144,
      align:'left',
      headerAlign: 'left',
      sortable: false,
      renderCell:(params)=>{
        const status=params.row.priority
        const chipStyle = {
          color: 'white', // Text color
          backgroundColor: 'default', // Default background color
        };
        if (status === 'High') {
          chipStyle.backgroundColor = '#F12B2C';
        } else if (status === 'Low') {
          chipStyle.backgroundColor = '#FEC400';
        } else if (status === 'Normal') {
          chipStyle.backgroundColor = '#29CC97';
        }
        return <Chip label={status} size='small' style={chipStyle} />
      }
    },
   
    {
      field: 'action', // Custom field for the icon
      width:"40",
      headerClassName:"head-cell",
      headerName: '',
      renderCell: (params) => (
        <MoreVertIcon  style={{ cursor: 'pointer' }} />
      ),
      sortable: false,
    },
  ];
  
  const rows = Row;
  
  return (
    <Box >
      <Paper sx={{ width: '100%', mb: 2,mt:"54px"}}>
      <Stack direction='row' justifyContent='space-between'>
        <Typography ml="40px" fontSize="19px" fontWeight="700" mt="32px" color="#252733">Tickets</Typography>
        <Stack direction="flex" gap="32px" mt="32px" mr="32px">
            <Stack direction="row" gap="8px" alignItems="center" >
            <SortIcon  />
              <Typography fontWeight="600" fontSize="14px">Sort</Typography>
            </Stack>
            <Stack direction="row" gap="8px" alignItems="center">
            <FilterAltIcon />
            <Typography fontWeight="600" fontSize="14px">Filter</Typography>

            </Stack>

        </Stack>
      </Stack>
 <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        showToolbar={false}
        disableColumnMenu={true}
        rowHeight={75}
      />
      </Paper>
    </Box>
  )
}

export default TicketsPage