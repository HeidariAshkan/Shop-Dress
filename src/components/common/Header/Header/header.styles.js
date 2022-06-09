import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    root:{
        backgroundColor: '#203040',
    },
    header: {
        color: '#fff',
        '& p':{
            fontSize:'17px',
            padding: '20px 0'
        }
    }
}));
