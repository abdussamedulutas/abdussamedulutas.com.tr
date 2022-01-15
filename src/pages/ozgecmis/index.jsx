import React, { useEffect } from "react"
import { Box } from "@mui/system";
import { Card, CardContent, CardHeader, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, useMediaQuery } from "@mui/material";
import moment from "moment";
import { Facebook, GitHub, Google, Instagram, Twitter } from "@mui/icons-material";


export default function Ozgecmis()
{
    let age = moment("0001-01-01").add({days:moment(moment.now()).diff("1998-03-17","days")},"years").get("year");

    let isMobile = useMediaQuery("(max-width: 768px)");
    useEffect(()=>{
        document.title = "Abdussamed ULUTAŞ | Özgeçmiş";
    },[]);

    const styleProps = {
        sx:{
            width:{
                sm:"25vw",
                xs:"100%",
                md: "25vw"
            },
            maxWidth:{sm:"1000px"},
            minWidth:{
                sm:"100%",
                xs:"100%",
                md: "700px",
                lg: "1000px"
            }
        },
        maxWidth: "500px",
        margin: "auto"
    };

    return <>
        <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="flex-start">
            <Box {...styleProps}>
                <Card variant="elevation" elevation={3}>
                    <CardContent style={{textAlign:"justify"}}>
                        <dh.H1 textAlign="center">Abdussamed ULUTAŞ</dh.H1>
                        <dh.H2 textAlign="center">Kıdemli Yazılım Uzmanı | Yazılım Mimarisyeni | Full Stack Developer</dh.H2>
                        Adım Abdussamed ULUTAŞ ve {age} yaşındayım. Kendini güncel bilgisayar ağları ve web teknolojilerine adamış kıdemli yazılım
                        uzmanıyım.
                        <dh.H3 textAlign="center">Kişisel</dh.H3>
                        <List>
                            {[
                                ["Yaş",age],
                                ["Askerlik Durumu", "Tecilli"],
                                ["Medeni Durumu", "Bekar"],
                                ["Ehliyet", "B1 Sınıfı Ehliyet"],
                                ["Yaşadığı Yer", "Türkiye / Kayseri"],
                                ["Uzmanlık Alanı", "PHP, NodeJS, ES6, ReactJS, HTML5, SCSS ve diğer frontend teknolojileri"],
                                ["Frameworkler", "Laravel, ReactJS, NodeJS, WebSocket, Hemex Text Mining, QT5 C++, ASP.NET"],
                                ["Aşina Olduğu Teknolojiler","C/C++/C#, BashScript, TypeScript, Java, Selenium Otomasyon, FFMPEG"]
                            ].map((e,arr,key) => {
                                return <>
                                {!isMobile ? <ListItem key={key}>
                                    <ListItemText sx={{flex:5}}>
                                        {e[0]}
                                    </ListItemText>
                                    <ListItemText sx={{flex:10}}>
                                        {e[1]}
                                    </ListItemText>
                                </ListItem> : <ListItem key={key}>
                                    <ListItemText secondary={e[1]}>
                                        {e[0]}
                                    </ListItemText>
                                </ListItem>}
                                <Divider />
                                </>
                            })}
                        </List>
                        <dh.H3 textAlign="center">Eğitim</dh.H3>
                        <List>
                            <ListItem>
                                <ListItemText sx={{flex:10}} secondary="Yönetim Bilişim Sistemleri, Lisans">
                                    Eskişehir Anadolu Üniversitesi
                                </ListItemText>
                            </ListItem>
                            <Divider />
                            <ListItem>
                                <ListItemText secondary="Bilgisayar Programcılığı, Önlisans">
                                    Kayseri Erciyes Üniversitesi
                                </ListItemText>
                            </ListItem>
                            <Divider />
                            <ListItem>
                                <ListItemText secondary="Lise">
                                    Kayseri Anadolu İmam Hatip Lisesi
                                </ListItemText>
                            </ListItem>
                        </List>
                        <dh.H3 textAlign="center">Tecrübe</dh.H3>
                        <List>
                            <ListItem>
                                <ListItemText secondary="Kıdemli Yazılım Mühendisi, Javascript Uzmanı, ARGE Personeli">
                                    KC Tek Arge Bilişim ve Enerji Sanayi ve Ticaret LTD. ŞTİ.
                                </ListItemText>
                            </ListItem>
                            <Divider />
                            <ListItem>
                                <ListItemText secondary="Yazılım Mimarisyeni, FrontEnd Developer, Javascript Uzmanı">
                                    Duha Yazılım LTD. ŞTİ.
                                </ListItemText>
                            </ListItem>
                            <Divider />
                            <ListItem>
                                <ListItemText secondary="Full Stack Web Developer">
                                    Toy Medya Reklam Tanıtım ve Prodüksiyon Ajansı LTD. ŞTİ.
                                </ListItemText>
                            </ListItem>
                        </List>
                        <dh.H3 textAlign="center">Sosyal Medya Hesapları</dh.H3>
                        <List>
                            {[
                                ["Github", <GitHub />, "/abdussamedulutas","https://github.com/abdussamedulutas"],
                                ["Facebook",<Facebook/>,"/saQut","https://facebook.com/saQut"],
                                ["Twitter",<Twitter/>,"@ownbubynter","https://twitter.com/ownbubynter"],
                                ["Instagram",<Instagram />, "@abdussamedulutas","https://instagram.com/abdussamedulutas"],
                                ["Google",<Google />, "@saqutsoftware","mailto:saqutsoftware@gmail.com"],
                                ["Delphican",<Google />, "@saqutsoftware","mailto:saqutsoftware@gmail.com"]
                            ].map((e,arr,key) => {
                                return <>
                                {!isMobile ? <ListItemButton key={key} onClick={() => window.open(e[3])}>
                                    <ListItemIcon>
                                        {e[1]}
                                    </ListItemIcon>
                                    <ListItemText sx={{flex:10}}>
                                        {e[0]}
                                    </ListItemText>
                                    <ListItemText sx={{flex:20}}>
                                        {e[2]}
                                    </ListItemText>
                                </ListItemButton> : <ListItemButton key={key} onClick={() => window.open(e[3])}>
                                    <ListItemIcon>
                                        {e[1]}
                                    </ListItemIcon>
                                    <ListItemText secondary={e[2]}>
                                        {e[0]}
                                    </ListItemText>
                                </ListItemButton>}
                                <Divider />
                                </>
                            })}
                        </List>
                        <dh.H3 textAlign="center">Referanslar</dh.H3>
                        <List>
                            {[
                                ["Yasin İLKAYA", "https://yasinilkaya.com.tr/"],
                                ["Yakup ULUTAŞ","https://yakupulutas.com/"]
                            ].map((e,arr,key) => {
                                return <>
                                {!isMobile ? <ListItemButton key={key} onClick={() => window.open(e[1])}>
                                    <ListItemText sx={{flex:10}}>
                                        {e[0]}
                                    </ListItemText>
                                    <ListItemText sx={{flex:20}}>
                                        {e[1]}
                                    </ListItemText>
                                </ListItemButton> : <ListItemButton key={key} onClick={() => window.open(e[1])}>
                                    <ListItemText secondary={e[1]}>
                                        {e[0]}
                                    </ListItemText>
                                </ListItemButton>}
                                <Divider />
                                </>
                            })}
                        </List>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    </>;
};

class dh{
    static H1(props)
    {
        return <Typography variant="h1" color="text.primary"  style={{margin:0,marginBottom:20,fontSize:"2em",fontWeight:700}} {...props} />
    }
    static H2(props)
    {
        return <Typography variant="h2" color="text.primary"  style={{margin:0,marginTop: -10,marginBottom:30,fontSize:"1.2em",fontWeight:300}} {...props} />
    }
    static H3(props)
    {
        return <Typography
            variant="h3"
            color="text.primary"
            style={{marginBottom:30,marginTop:30,fontSize:"1em",fontWeight:500}}
            {...props}
            sx={{
                display:"flex",
                '&:after':{
                    "content":"''",
                    "flex":" 1",
                    "display":"inline-block",
                    "height":"1px",
                    "backgroundColor":"#ffffff4f",
                    "marginTop":"auto",
                    "marginBottom":"auto",
                    "marginLeft":"10px",
                },
                '&:before':{
                    "content":"''",
                    "flex":" 1",
                    "display":"inline-block",
                    "height":"1px",
                    "backgroundColor":"#ffffff4f",
                    "marginTop":"auto",
                    "marginBottom":"auto",
                    "marginRight":"10px"
                }
            }}
        />
    }
}