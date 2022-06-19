import React, { useEffect } from "react"
import { Box } from "@mui/system";
import { Card, CardContent, CardHeader, Divider, List, ListItem, ListItemText, Typography } from "@mui/material";
import moment from "moment";

export default function WebRTC()
{
    useEffect(()=>{
        document.title = "Abdussamed ULUTAŞ | WebRTC";
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
        <dh.H1>Web Real Time Connection (WebRTC)</dh.H1>
        <Box display="flex" flexDirection="row" flexWrap="wrap">
            <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>WebRTC Nedir?</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                    WebRTC <b>tarayıcılar</b> arasında yüksek hızlı iletişim sağlayan ses ve görüntü
                    iletişimini en düşük gecikme ile karşı taraFa ileten karmaşık, güvenilir ve gelişmiş bir teknolojidir.
                    Şuan bir çok görüntülü konuşma, anlık sesli iletişim, mesajlaşma, P2P dosya paylaşımı yapan sistemler
                    alt yapısında webrtc kullanmaktadır
                </CardContent>
            </Card>
            <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>WebRTC Nasıl Çalışır?</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                    Sunucuya bağlı eşler kendi aralarında birbirlerini tanımlamak için sinyalizasyon sürecine girerler.
                    Bu aşamada eşler birbirlerine IP adreslerini, destekledikleri kodek bilgilerini ve bazı platform bilgilerini paylaşırlar.
                    Eşler bu aşamayı başarılı bir şekilde gerçekleştirdiklerinde birbirlerine arada sunucu olmadan bağlanmaya başlarlar,
                    bağlantı başarılı bir şekilde gerçekleştiğinde canlı video, canlı ses, canlı konum, canlı ekran paylaşımı vb. 
                    medya akışlarına başlarlar. WebRTC tüm bağlantı süresi boyunca ağ trafiğine uyum sağlayacak şekilde kaliteyi
                    artırır veya düşürür, yeni bağlantılarını, yeni video akışlarını veya ağ değişimlerini diğer eşlere bildirilmesi için
                    otomatik olarak yeni paketler üretir.
                </CardContent>
            </Card>
            <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>WebRTC ile Neler Paylaşılabilir?</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                    WebRTC teknolojisi alt yapısal olarak stream veya stream olmayan verileri iletebilir
                    Stream tarayısı apileri üzerinden kameraya, mikrofona ve ekrana erişim sağlanarak alınabilir,
                    WebRTC görüntü ve ses verilerini UDP bağlantısı sağlayarak düşük gecikmeyle ulaştırabilmektedir.
                    WebRTC ayrıca datachannel denilen bir TCP bağlantısı üzerinden binary, json, xml gibi verileride iletebilmektedir.
                </CardContent>
            </Card>
            <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>WebRTC için Sunucu Yapılandırması Gerekli mi?</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                    WebRTC için sunucu sadece sinyalizasyon aşamasında bağlanacak kişilerin arasında ilk veriyi sağlamak için gereklidir.
                    Bunun dışında gerçek ipnizin bulunmasını zorlaştıracak vpn veya proxy gibi bir ağ geçidi kullanıyorsanız veya okul, şirket, fabrika
                    gibi güvenlik duvarının bağlantıyı engelleyebileceği durumlarda TURN/STUN sunucusu kullanmanız gerekebilir
                </CardContent>
            </Card>
            <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>İnternet hızım WebRTC için Yeterli mi?</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                    WebRTC kişilerin interneti, iletme süresi, trafik yoğunluğuna gibi etkenlere bağlı olarak
                    görüntü ve ses kalitesini yükseltecek veya azaltmak için trafiği sürekli analiz eden teknolojilere sahiptir.
                    Görüntülü konuşma içerisinde en yüksek kalite ancak sizin bilgisayarınız, internet çıkışınız
                    ve bağlı olduğunuz kişinin bilgisayarı
                    ve internet çıkışına göre belirlenecektir. 
                </CardContent>
            </Card>
            <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>WebRTC Hangi Platformları Kapsıyor?</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                    WebRTC mobil ve masaüstü farketmeksizin <b>güncel</b> tüm web tarayıcılarında aktif olarak desteklenmektedir 
                </CardContent>
            </Card>
            <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>WebRTC Güvenli mi?</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                    WebRTC her bağlantıda <b>DTLS</b> denilen protokolleri devreye sokar,
                    bu protokol UDP/TCP/TLS bağlantılarını şifrelemede <b>web sitesinin aktif SSL güvenliğini kullanır</b>.
                    Kısacası webrtc güvenliği girdiğiniz sitenin güvenlik oranına
                    göre değişir ki <u>SSL olmayan web sitelerinde çalışmaz</u>
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