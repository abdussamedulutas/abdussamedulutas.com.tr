import { CreditScore, GitHub, Brightness7, Brightness4 } from "@mui/icons-material";
import { AppBar, Button, colors, FormControlLabel, FormGroup, Switch, Toolbar, Typography, useMediaQuery } from "@mui/material";
import React from "react"

import muilogo from "../../images/mui-logo.svg";
import reactlogo from "../../images/react-logo.svg";

import icon from "../../images/icon.webp";
import "./Appbar.scss";
import { useDispatch, useSelector } from "react-redux";

export default function Appbar()
{
    let isMobile = useMediaQuery("(max-width: 768px)");
    let {darkmode} = useSelector(e => e.defaultRedux);
    let dispatch = useDispatch();
    return <>
        <AppBar position="static">
            <Toolbar>
                <img src={icon} alt="Logo" className="logo-image" />
                <Typography
                    variant="h6"
                    noWrap
                    sx={{ mr: 2 }}
                >
                    Abdussamed ULUTAŞ
                </Typography>
                <div style={{marginLeft:"auto"}}></div>
                <Button
                    color="inherit"
                    startIcon={darkmode ? <Brightness7 /> : <Brightness4 />}
                    onClick={e => dispatch({type:"toggledarkmode"})}
                >
                    {!isMobile ? (darkmode ? "Açık Mod" : "Koyu Mod") : ""}
                </Button>
                <Button
                    sx={{display:{sm:"flex",xs:"none"}}}
                    color="inherit"
                    style={{marginLeft:10}}
                    startIcon={<CreditScore />}
                    onClick={e => window.open("https://choosealicense.com/licenses/mpl-2.0/")}
                >Mozilla License</Button>
                <Button
                    sx={{display:{sm:"flex",xs:"none"}}}
                    color="inherit"
                    style={{marginLeft:10}}
                    startIcon={<GitHub />}
                    onClick={e => window.open("https://github.com/abdussamedulutas/abdussamedulutas.com.tr")}
                >OpenSource</Button>
                <Button
                    sx={{display:{sm:"flex",xs:"none"}}}
                    color="inherit"
                    style={{marginLeft:10}}
                    startIcon={<img src={reactlogo} height="20px" alt="React Icon" title="React Icon"/>}
                    onClick={e => window.open("https://tr.reactjs.org/")}
                >React JS</Button>
                <Button
                    sx={{display:{sm:"flex",xs:"none"}}}
                    color="inherit"
                    startIcon={<img src={muilogo} height="20px" alt="Metarial UI Icon" title="Metarial UI Icon"/>}
                    onClick={e => window.open("https://mui.com/")}
                    style={{marginLeft:10}}
                >Metarial UI</Button>
            </Toolbar>
        </AppBar>
    </>;
}