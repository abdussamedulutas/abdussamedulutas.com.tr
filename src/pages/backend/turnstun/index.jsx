import React, { useEffect } from "react"
import { Box } from "@mui/system";
import { Card, CardContent, CardHeader, Divider, List, ListItem, ListItemText, Typography } from "@mui/material";
import moment from "moment";

export default function Nginx()
{
    useEffect(()=>{
        document.title = "Abdussamed ULUTAŞ | STUN/TURN Sunucuları ";
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
        <dh.H1>STUN/TURN</dh.H1>
        <Box display="flex" flexDirection="row" flexWrap="wrap">

            <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>STUN Nedir?</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                    Türkçe açılımı ile "oturum geçişi yardımcı programları" demektir. Amacı ise birbirini bulmak isteyen ancak teknik,
                    yazılımsal veya coğrafi koşullardan dolayı birbirlerinin ip bilgilerini sorgulayamayan veya ulaşamayan eşleri
                    NAT yönlendiricilerinin etkisinide ortadan kaldırarak birbirine tanıtmaktır. Bu bazı proxy, vpn veya tor ağı gibi
                    ip adresini gizleyen veya C-NAT (ara yönlendirici) kullanan kişilerin kendilerine veya kendisinin
                    o kişilere açık ip adreslerini belirterek birbirlerine ulaşmalarına yardımcı olur
                </CardContent>
            </Card>
            <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>TURN Nedir?</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                    Web veya masaüstü uygulamalarında multimedya uygulamaları için NAT routerlerını, proxy sistemlerini veya güvenlik
                    duvarlarını aşmak için ara köprü sunucu kullanan bir sistemdir. Görüntülü konuşma benzeri gibi sistemlerde TCP
                    protokolünden daha çok UDP protokolleri kullanılır, bu durum yönlendiricilerin, çoğu güvenlik duvarlarının bağlantıları
                    engellemesine veya vpn yazılımlarının filtre bağlantıları engellemesine sebep olabilir. TURN sunucusu iki eş arasında
                    UDP bağlantısı yerine DTLS protokolü kullanarak hem eşlerin birbirlerini bulmasına hemde verilerini güvenlik duvarlarına
                    NAT yönlendiricilerine takılmadan güvenli iletişim kurmanızı sağlar
                </CardContent>
            </Card>
            <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>TURN ile STUN farkı nedir?</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                    STUN sunucusu kişilere kendi gerçek coğrafi veya açık ip adresini vererek kendisine hangi yollardan ulaşılabileceği
                    konusunda harita çıkarır.
                    TURN sunucusu, STUN sunucunun yaptığı işin yanında normal yollardan birbirine bağlanamayan anormal eşlerin ses ve
                    video akışınıda üstlenerek hem kişiler arasındaki bilgilendirmeleri hemde iletişimi kendi üzerinden sağlar
                </CardContent>
            </Card>
            <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>TURN/STUN için Sunucu Yapılandırması Gerekli mi?</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                    Evet, bazı hosting firmaları "TURN Server" adı altında paralı hizmet verselerde kendi sunucunuza açık kaynak kodlu yazılım olan
                    coturn yazılımını kurarak kendi sunucunuzu turn/stun sunucusu haline getirebilirsiniz. Ancak turn sistemini kullanırken dikkat
                    etmeniz gereken bir diğer husus turn protokolünün hızının veya kişi sayısının sunucunuzun band genişliğini kullandığıdır
                    düşük bant genişliğinde bir sunucu hızın yavaşlamasına veya bağlanabilecek kişi sayısının düşmesine sebep olacaktır
                </CardContent>
            </Card>
            <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>Hangi durumlarda kullanılabilir?</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                    Güvenlik duvarı kurulu olan veya ip adresinizi gizleyebilecek şirket, okul, üniversite, otel veya devlet kurumlarının
                    internet alt yapılarında veya kişisel ağınızda kullandığınız proxy, vpn, tor, no-watched-network'lerde kullanılması gereklidir.
                    İki veya iki eşten herhangi biri bu şartlar altındaysa duruma göre tüm eşlerin veya sadece ulaşılamayan eşin turn/stun kullanması
                    gerekir.
                </CardContent>
            </Card>
            <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>Uygulama alanları nelerdir?</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                    Merkezi olmayan P2P iletişimlerinin tamamında SDP protokolü üzerinden STUN kullanılabilir.
                    Web üzerinden WebRTC ortamında eşler arasında P2P iletişimi kurarken TCP, UDP, DTLS ve SDP
                    protokolü üzerinden TURN ve STUN kullanılır.
                    Bazı ipTV veya hls kullanmayan online radyo sistemlerinde UDP üzerinden TURN kullanılabilir.
                    Bazı ekran paylaşımı yazılımlarında SOAP/TCP üzerinden STUN kullanılır.
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