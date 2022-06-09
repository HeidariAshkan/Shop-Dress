import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor:'#203040'
    },
    footer: {
        display:'flex !important',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50px',
        fontSize: '17px',
        color: '#fff'
    }
}));