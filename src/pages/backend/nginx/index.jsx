import React, { useEffect } from "react"
import { Box } from "@mui/system";
import { Card, CardContent, CardHeader, Divider, List, ListItem, ListItemText, Typography } from "@mui/material";
import moment from "moment";

export default function Nginx()
{
    useEffect(()=>{
        document.title = "Abdussamed ULUTAŞ | NGINX ";
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
        <dh.H1>NGINX</dh.H1>
        <Box display="flex" flexDirection="row" flexWrap="wrap">

        <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>NGINX Nedir?</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                    NGINX; açılımı Engine-ex (Telaffuz: enciniks) olan geniş çaplı web sunucu yazılımıdır.
                    Sunucu içerisinde çalışan birden fazla php, java, nodejs projeleri gibi projeler için
                    ters bağlantı (reverse proxy), kolay sertifika kurulumu, yük dengeleme ve önbellek
                    depolama gibi birden fazla görevi oldukça anlaşılabilir yapılandırma dosyaları sayesinde 
                    yönetmesini ve üstlenmesini sağlayabilirsiniz.
                </CardContent>
            </Card>
            <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>NGINX Ne İşe Yarar?</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                    Tüm web projelerinin yapısı ve yapılandırmaları farklıdır, dosya yükleme, hız limiti veya
                    klasör yolu, protokolleri açılacak olan portlar ve onların güvenliğinin ayrı ayrı yönetilmesi
                    bazen oldukça sıkıcı bir hale gelebilir. NGINX yazılımını sunucuza kurduktan sonra yapılandırmalarını
                    tamamladıktan sonra sunucunuza gelen isteği tek noktadan yönetebilir sertifikalarını topluca
                    ayarlayabilir, yoğun istek akışında farklı sunuculara aktarabilirsiniz. 
                </CardContent>
            </Card>
            <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>Neden NGINX?</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                    Bir sunucuya tek bir proje kuruyorsanız bir yönetim paneline veya temel sunucu yazılımlarına genelde
                    ihtiyacınız yoktur fakat birden fazla domain gibi teknik ayrımlarda veya docker ve kubernates gibi
                    sanallaştırma teknolojilerinde ortak bir sunucu yapılandırmasına ihtiyacınız vardır.
                    NGINX, Apache, Lighttpd, LiteSpeed, Kestrel gibi yazılımlar temelde sunucuya gelen verileri ön kontrolden
                    geçirerek işlemek, filtrelemek ve yönlendirmek için kullanılır, NGINX yazılımının diğer yazılımlardan farkı
                    ise küçük yazılım boyutu ve yapılandırmayı anlaşılması kolay bir hale getirmesidir
                </CardContent>
            </Card>
            <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>Platform Desteği</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                    NGINX, temelde unix ve linüx sistemlerde oldukça başarılı bir şekilde çalışmaktadır, Windows üzerinde de 
                    çalıştığını ancak diğer platformlar kadar performans gösteremediğinide belirtmek gerekiyor
                </CardContent>
            </Card>
            <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>Ters Bağlantı (Reverse Proxy)</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                    Apache, Lighttpd yazılımları gibi sunucu yazılımlarının aksine NGINX yazılımında projenizin içine özel
                    yapılandırma dosyaları eklemeniz gerekmez. Projenizi herhangi bir portta çalıştırarak nginx yapılandırmalarında
                    o porttan alarak 80. ve 443. portlara yönlendirmesini söylersiniz ve nginx belirli domain adresine gelen
                    isteği projenize yönlendirir böylece projeniz ile nginx arasında bir yapılandırma kurmanıza gerek kalmaz ayrıca
                    projenizde dahili ssl yoksa bile nginx üzerinden ssl yerleştirebilirsiniz, böylece dağınık sertifika dosyalarına
                    da gerek duymamış olursunuz. NGINX bu işlemleri sadece HTTP protokolü üzerinden değil websoket (ws), datagram (udp),
                    geçiş kontrol protokolü (tcp), gerçek zamanlı mesajlaşma (RMTP), mail protokolleri (IMAP veya pop3 gibi) bir
                    çok protokolü tek yapılandırma içerisinden sunabilirsiniz
                </CardContent>
            </Card>
            <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>Yük Dengeleme</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                    Düşük trafik altında projeniz yüksek kaynak harcıyor olabilir veya belirli ziyaretçi oranının üzerinde sunucunuz
                    yavaşlıyor olabilir. Böyle bir durumda projenizi ikinci bir sunucuya daha yükleyerek ilk sunucunun yoğun olduğu
                    zaman diliminde istekleri ikinci sunucuya yönlendirebilirsiniz böylece ikinci bir domain veya dns servisleriyle
                    uğraşmadan sunucunuzun yükünü paylaşmasını sağlayabilirsiniz
                </CardContent>
            </Card>
            <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>NGINX ve Güvenlik</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                    NGINX, tekil bir sunucu yazılımı değildir gerek kendi içerisinde kurulu gelen ek katmanlar ve aktif eklentiler
                    gerekse harici yazılımlar üzerinden yeni yetenekler eklenebilir. NGINX varsayılan yapılandırmaları içerisinde
                    ip banlama, ağ maskeleme ve sunucunuza tek noktadan veya dağınık olarak gelen saldırıları engelleyerek veya
                    yönlendirme yoluyla sunucunuzu saldırılardan koruyabilir ayrıca sunucunuza sonradan kuracağınız nginx uyumlu
                    yazılımlar veya güvenlik yazılımları ile birlikte hareket ederek ek güvenlik katmanları yerleştirebilirsiniz
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