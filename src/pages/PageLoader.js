import { Box } from "@mui/material"
import {ScaleLoader} from 'react-spinners';
import styles from '../styles/PageLoader.module.css'

export const PageLoader=()=>{
    return(
        <Box className={styles.PageLoader}>   
            <ScaleLoader color="#f6f6f6"/>
        </Box>
    )
}