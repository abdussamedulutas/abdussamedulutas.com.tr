import React, { useEffect, useState } from "react"
import { Box } from "@mui/system";
import { Alert, AlertTitle, Button, Card, CardContent, CardHeader, CircularProgress, Divider, Input, List, ListItem, ListItemText, TextField, Typography } from "@mui/material";


export default function Iletisim()
{
    useEffect(()=>{
        document.title = "Abdussamed ULUTAŞ | Hemex Yüksek Hızlı Metin İşleyici";
    },[]);

    const cardProperty = {
        variant:"elevation",
        elevation:3,
        sx:{
            width: {sm:"100%",md:"50%"},
            minWidth:"300px",
            flex:{md:1},
            m:1
        }
    };

    return <>
        <dh.H1>HemexJS</dh.H1>
        <Box display="flex" flexDirection="row" flexWrap="wrap">
            <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>HemexJS Nedir?</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                    Hemex, düzenli ve sıralı bir formata ait yazılımlar tarafından direkt okunamayan yazı formatındaki
                    verileri işlemcinin sıralı erişebileceği Obje veya Listelere hızlıca dönüştürmek için İşleyici (Lexer),
                    Parser (Ayrıştırıcı) ve compiler (derleyici)  oluşturmaya yarayan bir kütüphanedir
                </CardContent>
            </Card>
            <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>Neden Hemex?</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                    Hemex; XML, JSON, YAML, markdown, HTML, CSV veya kendiniz belirleyeceğiniz veya tasarlayacağınız bir formatı
                    farklı bir formata dönüştürebilir, işleyebilir, onarabilir veya yapılandırabilir. Her ne kadar platformlar
                    bütün bu formatları halihazırda okumayı ve değiştirmeyi destekliyor olsada ayrıntıya indiğinizde çoğu kütüphane
                    ve platform formatlar konusunda kurallar konusunda zorundalık ve tekillik içerir
                </CardContent>
            </Card>
            <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>HemexJS Hangi Platformları Kapsıyor?</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                    HemexJS açık kaynak kodlu bir algoritmadır ve şimdilik yanlızca javascript çalıştıran platformlarda çalışmaktadır.
                    Şuan tarayıcılar ve sunucu tarafında nodejs üzerinde stabil olarak çalışmaktadır.
                </CardContent>
            </Card>
            <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>HemexJS Avantajı Nedir?</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                    Tamamen verilen kurallara (Lexers) ve şablonlara göre ilerleyerek hızlıca size çıktı veren bir yapıya sahiptir.
                    Kuralları kendiniz tasarlamanız bellek, işlemci gücü veya disk kaynağı arasında seçim yapabilmenize olanak tanır.
                    Turing sistemi ile çalıştığı için yapısal olarak sanal format katmanları arasında ileri-geri hareket etmenize olanak tanır
                </CardContent>
            </Card>
            <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>HemexJS Dezvantajı Nedir?</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                    Tamamen Binary (ikili) dosyaları veya formatları işleyemezsiniz. Yapısal olarak sağladığı yardımcı metotlar farklı senaryolarda
                    ortaya çıkan mantıksal hataları engellemediği için ek olarak verileri kontrol etmeye zorlar
                </CardContent>
            </Card>
        </Box>
    </>;
};

class dh{
    static H1(props)
    {
        return <Typography variant="h1" color="text.primary"  style={{margin:0,marginBottom:20,fontSize:"2em",fontWeight:700}} {...props} />
        return <h1 style={{marginTop:0}} {...props} />;
    }
    static H2(props)
    {
        return <h2 style={{margin:0,fontSize:".8em",fontWeight:100}} {...props} />;
    }
}