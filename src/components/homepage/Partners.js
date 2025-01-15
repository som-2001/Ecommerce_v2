import { Box, Grid, Typography } from "@mui/material"
const logos=[
    {
        icons:"amazon.png"
    },
    {
        icons:"google.png"
    },
    {
        icons:"uber.png"
    },
    {
        icons:"gobike.svg"
    },
    {
        icons:"porter.png"
    },
    {
        icons:"rapido.png"
    },
]
export const Partners=()=>{
    return(
       <Box  sx={{
        backgroundColor: "black",
        color: "white",
        padding: {xs:"5px",sm:"3rem"},
        height:{xs:"570px",sm:"470px"}
      }}>
          <Typography variant="body2" color="#999999" gutterBottom align="center">
        Your Best Ride Starts here
      </Typography>
      <Typography variant="h3" gutterBottom align="center" sx={{mb:3}}>
        Our Partners
      </Typography>
        <Grid container spacing={2} sx={{mt:2,p:2,}}>
            {logos.map((data,index)=>(
                <Grid item xs={6} sm={2} sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <img src={`../../images/${data.icons}`} alt="" style={{width:"150px"}}/>
                </Grid>
            ))}
        </Grid>
        </Box>
    )
}