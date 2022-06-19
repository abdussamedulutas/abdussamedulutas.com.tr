import React, { useEffect } from "react"
import { Box } from "@mui/system";
import { Card, CardContent, CardHeader, Divider, List, ListItem, ListItemText, Typography } from "@mui/material";
import moment from "moment";

export default function ManjaroNedir()
{
    useEffect(()=>{
        document.title = "Abdussamed ULUTAŞ | Manjaro OS";
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
        <dh.H1>Manjaro Linux OS</dh.H1>
        <Box display="flex" flexDirection="row" flexWrap="wrap">
            <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>Manjaro nedir?</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                    Manjaro, Arch linüx işletim sisteminin üzerine inşa edilmiş kullanıcı dostu
                    hızlı, güçlü ve hafif bir işletim sistemidir.
                    Debian tabanlı (örn. Ubuntu) işletim sistemleri gibi uygulamaları yaygınlaştırmak, işlemleri basitleştirmek ve güncel sürümler yerine
                    sadece stabil paketleri yayımlayan işletim sistemlerinin aksine,
                    Manjaro linüx kernel üzerine daha fazla geliştirme yaparak üzerinde çalışan uygulamaların daha stabil daha hızlı, güncel ve daha güvenli olmasını sağlar
                </CardContent>
            </Card>
            <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>Minimum Gereksinim</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                    Manjaro yeni ve eski tüm donanım türevlerini tanımlayabilecek şekilde en son linüx çekirdeği üzerine kurulur (Şuanda 5.15 kullanıyor)
                    Böylece Wayland üzerinde KDE kurulumu üzerinde 800mb kadar bellek harcarken, Org üzerinde XFCE kurulumunda 400mb bellek ile gayet rahat
                    bir şekilde çalışabilr. Resmi olarak Arm, AArch, 64bit ve 32bit olmak üzere 4 tip en az 2ghz işlemci, 2gb ram ve en az 8gb disk alanında çalışabilir ancak tipik bir manjaro kurulumu için
                    4bg ram, 2.5ghz işlemci ve ev kullanıcıları için 20gb mesleki kullanımı için 40gb disk alanı önerilir 
                </CardContent>
            </Card>
            <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>Dil Desteği</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                    Manjaro Türkçe, İngilizce, Arapça, Fransızca, Çince ve Japoncada dahil olamak üzere 50'den fazla dili destekler ve olabilecek
                    tüm klavye düzenlerinide içerisinde barındırır
                </CardContent>
            </Card>
            <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>Görünüm</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                    Manjaro resmi olarak Plasma, Xfce, Gnome ve Mate masaüstü yöneticilerini destekler ve topluluk tarafından
                    eklenmiş resmi desteği bulunmayan Budgie, Cinnamon, I3 ve Sway masaüstü yöneticilerini destekler
                </CardContent>
            </Card>
            <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>Destek ve Yazılım Kurulumu</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                    Manjaronun resmi olarak oldukça aktif ingilizce ve türkçe forum websitesi bulunmaktadır.
                    Yazılım kurma, kaldırma, güncelleme ve yapılandırma paket yöneticisi olarak pacman isimli yazılım ile birlikte gelir.
                    Manjaro yazılım mağazasında (depolarında) oldukça geniş yelpazeli yüzlerce açık kaynak yazılım barındır ve olabildiğince güncel tutar,
                    Ayrıca Arch linüx dağıtımlarında bulunan AUR (Kullanıcı destekli github yazılım depoları) sayesinde neredeyse Manjaroya yük leyemeyeceğiniz
                    açık kaynak kodlu bir yazılım yoktur.
                    Ayrıca resmi deposunda bulamadığınız yazılımlar için AppImage kullanabilir Snap ve Flatpack paketlerini aktifleştirebilirsiniz
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