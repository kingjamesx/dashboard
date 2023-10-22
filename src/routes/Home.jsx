import { Box,Paper,Stack,Typography,TextField,Checkbox } from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import HomeCard from '../components/HomeCard'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import Chart from '../components/Chart';

const Home = () => {
    const cardType=[
        {title:"Unresolved",value:"60"},
        {title:"Overdue",value:"16"},
        {title:"Open",value:"43"},
        {title:"On hold",value:"64"},

        
    ]
    const unresolved=[
      {title:"Waiting on Feature Request",value:"4238"},
      {title:"Waiting on Feature Request",value:"4228"},
      {title:"Waiting on Feature Request",value:"4218"},
      {title:"Waiting on Feature Request",value:"4258"}

    ]
    const Task=[
      {title:"Finish ticket update",chip:"URGENT",input:true},

      {title:"Finish ticket updates",chip:"URGENT",color:"white",bg:"#FEC400"},
      {title:"Create new ticket example",chip:"NEW",color:"white",bg:"#29CC97"},
      {title:"Update ticket report",chip:"DEFAULT",color:"#9FA2B4",bg:"#F0F1F7"}
    ]
      const stats=[
        {title:"Resolved",value:"449"},
        {title:"Received",value:"426"},
        {title:"Average first response time",value:"33m"},
        {title:"Average response time",value:"3h 8m"},
        {title:"Resolution within SLA",value:"94%"}
      ]
   
  return (
    <Box>
      <Stack direction='row' gap='30px'>
        {cardType.map((item)=>{
          return(
            <HomeCard key={item.title} title={item.title} value={item.value} />
          )
        })}
      </Stack>
      {/* chart */}
      <Paper  sx={{display:"flex",justifyContent:"space-between",marginTop:"32px"}}>
        <Box >
          <Stack sx={{ml:"32px",mt:"40px"}}>
            <Typography sx={{fontSize:"19px",color:"#252733",fontWeight:"700"}}>Today’s trends</Typography>
            <Typography sx={{color:"#9FA2B4",fontSize:"12px"}}>as of 25 May 2019, 09:41 PM</Typography>

          </Stack>
          <Chart/>
        </Box>
        <Stack direction="column"  sx={{borderLeft:"1px solid #DFE0EB"}}>
          {stats.map((item,index)=>{
             const isNotFirstItem = index > 0;

            return(
              <Stack  key={item.value} direction="column" alignItems="center" px="32px" py="24px" sx={{borderTop: isNotFirstItem ? "1px solid #DFE0EB" : "none",}}>
                <Typography sx={{fontWeight:"600",fontColor:"#9FA2B4"}}>{item.title}</Typography>
                <Typography sx={{fontWeight:"700",fontColor:"#252733",fontSize:"24px"}}>{item.value}</Typography>

              </Stack>
            )
          })}
        </Stack>
      </Paper>
      <Box sx={{display:"flex",gap:"30px",mt:"30px", pb:"30px"}}>
        <Paper sx={{borderRadius:"8px",width:"548px"}}>
          <Stack direction='row' justifyContent="space-between" p="32px" mb="36px">
            <Box>
              <Typography sx={{fontWeight:"700",fontSize:"19px"}}>Unresolved tickets</Typography>
              <Typography sx={{fontSize:"12px",fontWeight:"600"}}>Group: Support</Typography>
            </Box>
            <Typography sx={{color:"#3751FF"}}>View details</Typography>
          </Stack>
          {unresolved.map((item,index)=>{
             const isNotFirstItem = index > 0;
            return(<Stack key={item.value} direction='row' alignItems="center" justifyContent="space-between" pt="28px" pb="18px"  px="32px"  sx={{borderTop: isNotFirstItem ? "1px solid #DFE0EB" : "none",}}>
              <Typography sx={{fontWeight:"600",fontSize:"14px"}}>{item.title}</Typography>
              <Typography sx={{fontSize:"14px",color:"#9FA2B4",fontWeight:"600"}}>{item.value}</Typography>
            </Stack>)
          })}
        </Paper>
        <Paper sx={{borderRadius:"8px",width:"546px"}}>
        <Stack direction='row' justifyContent="space-between" p="32px" pb="36px">
            <Box>
              <Typography sx={{fontWeight:"700",fontSize:"19px",color:"#252733"}}>Tasks</Typography>
              <Typography sx={{fontSize:"12px",color:"#9FA2B4"}}>Today</Typography>
            </Box>
            <Typography sx={{color:"#3751FF"}}>View all</Typography>
          </Stack>
         
          {Task.map((item) => {
  if (item.input) {
    return  <Stack key={item.title} direction='row' mt='30px' justifyContent='space-between' px="32px" py="20px">
    <TextField id="standard-basic" variant="standard" placeholder='Create new task' sx={{width:"100%"}} InputProps={{ disableUnderline: true }} />
    <AddCircleIcon className='addCircle'/>
    </Stack>;
  } else {
    return (
      <Stack
        key={item.title}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        // pt="28px"
        // pb="18px"
        py="15px"
        px="32px"
        sx={{ borderTop: "1px solid #DFE0EB" }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Checkbox
            className="rounded-checkbox"
            icon={<RadioButtonUncheckedIcon />}
            checkedIcon={<CheckCircleIcon />}
          />
          <Typography sx={{fontWeight:"600",fontSize:"14px"}}>{item.title}</Typography>
        </Box>
        <Box bgcolor={item.bg} color={item.color} borderRadius='8px' p={0.5} px={1} fontSize="11px">{item.chip}</Box>
      </Stack>
    );
  }
})}

        </Paper>
      </Box>
    </Box>
  )
}

export default Home