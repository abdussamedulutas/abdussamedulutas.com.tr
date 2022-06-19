import React, { useEffect } from "react"
import { Box } from "@mui/system";
import { Card, CardContent, CardHeader, Divider, List, ListItem, ListItemText, Typography } from "@mui/material";
import moment from "moment";

export default function Ffmpeg()
{
    useEffect(()=>{
        document.title = "Abdussamed ULUTAŞ | MariaDB";
    },[]);

    let cardProperty = {
        variant:"elevation",
        elevation:3,
        sx:{
            width: {sm:"100%",md:"50%"},
            minWidth:"300px",
            flex:{md:1},
            m:1
        }
    }

    return <>
        <dh.H1>MariaDB Veritabanı Yazılımı</dh.H1>
        <Box display="flex" flexDirection="row" flexWrap="wrap">
            <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>Veritabanı Yazılımı Nedir?</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                    Veritabanı yazılımları uygulamaların verilerini düzenli ve yapısal, ilişkisel veya iç içe tutan verileri kaydetme, okuma,
                    değiştirme ve silme gibi fonksiyonlarını yerine getirmekten sorumlu yazılım katmanlarıdır
                </CardContent>
            </Card>
            <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>Peki MariaDB Nedir?</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                    MariaDB; MyISAM, Area, Memory, InnoDB ve CSV gibi bir çok depolama motorlarını kullanarak verileri ilişkisel düzende işleyen
                    veri bütünlüğü ve güvenlik katmanı sayesinde veri güvenliğini koruyan açık kaynak kodlu bir veritabanı yazılımdır
                </CardContent>
            </Card>
            <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>Neden MariaDB?</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                    MariaDB, MySQL yazılımı üzerine yazılmış MySQL'in devamı niteliğinde geliştirilen diğer ilişkisel veritabanı yazılımlarına göre daha
                    performanslı, hızlı, pratik ve ölçeklenebilir yapıya sahiptir. MySQL yazılımına kıyasla daha fazla bağlantı sayısı sağlar ve KILL, JSON işleme,
                    WITH gibi pratik uzantılar MariaDB ile beraber gelir.
                </CardContent>
            </Card>
            <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>MariaDB'nin Platform Desteği?</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                    MariaDB; Linux, Windows, MacOS, Solaris ve BSD gibi bir çok sistemler tarafından 
                </CardContent>
            </Card>
            <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>Güvenlik</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                    MariaDB, kullanıcı katmanı sayesinde kullanıcı adı ve şifre ile giriş ve
                    veritabanı tablo veya sütun bazında okuma/yazma yetkilendirme sistemi sayesinde
                    MariaDB sistemine bağlanan sistemlerin birbirlerini etkilemelerine toplu işlem yapmalarını
                    veya tüm sistemde okuma yazma yapma gibi işlemlerini kontrol altında tutabilirsiniz
                </CardContent>
            </Card>
            <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>Ölçekleme</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                    MariaDB, MySQL kabul edilen veriler dışında JSON, Geometrik ve Coğrafik verileri hızlıca işleme kabiliyetine sahiptir.
                    InnoDB üzerinde 4gb'lık veriyi indexli halde tek parça halinde işlerken MyISAM üzerinde bu 63gb boyutundadır.
                    Sektör bazında orta ve üst düzey işletmeler için önerilir ve ilişkisel veritabanı sistemleri arasında en iyilerindendir
                </CardContent>
            </Card>
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
        return <h2 style={{margin:0,fontSize:".8em",fontWeight:100}} {...props} />;
    }
}