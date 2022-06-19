import React, { useEffect } from "react"
import { Box } from "@mui/system";
import { Card, CardContent, CardHeader, Divider, List, ListItem, ListItemText, Typography } from "@mui/material";
import moment from "moment";

export default function NedenManjaro()
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
        <dh.H1>Neden Manjaro Linux OS</dh.H1>
        <Box display="flex" flexDirection="row" flexWrap="wrap">
            <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>Kişiselleştirme</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                    Manjaro oldukça yapılandırılabilir bir yapı ile beraber gelir.
                    Pacman üzerinden Blender3D, Inkscape, Gimp, LMMS ve KDENLIVE yükleyerek bir stüdyo sistemi,
                    VS Code, Python, NodeJS, GCC, VMware, Java, Eclipse,Arduino IDE, Android Studyo gibi yazılımlar ile geliştirici sistemi,
                    nginx, ufw, docker, php, git, proftpd, btrfs, zfs veya Apache yazılımları ile server sistemi,
                    Steam, nvidia-bubleblee, optimus manager ve wine yükleyerek oyun sistemi,
                    qBittorrent, Firefox, Thunderbird, Onlyoffice, Libreoffice, okular yükleyerekde ev bilgisayarı yapılandırabilirsiniz
                </CardContent>
            </Card>
            <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>Intel, Nvidia ve AMD</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                    Manjaro içerisinde yüklü olarak gelen MHWD aracı sayesinde Intel, AMD ve Nvidia sürücülerinin yazılımlarını otomatik kurar ve yapılandırır.
                    Manjaro varsayılan olarak açık kaynak kodlu NVidia sürücüsü ile birlikte gelir bu CUDA çekirdeğini, NVidia Displayport ve HDMI çıkışlarını ve Gsync
                    özelliğini kullanmanıza olanak sağlar ancak oyun oynama, video veya 3d render etme, yüksek fps değerleri alınmaya yönelik durumlarda kapalı kaynak kodlu
                    NVidia sürücüsüne geçmenize olanak sağlar
                </CardContent>
            </Card>
            <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>AUR</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                    Manjaro, Arch linüx sisteminin kullandığı AUR paket yöneticisinide kullanır.
                    AUR, yazılım şirketleri gibi yazılım sağlayıcıların kendisi tarafından resmi olarak
                    sunulmayan ancak manjaro topluluğunca düzenlenen paketleri indirip derlemenize olanak sağlar. 
                </CardContent>
            </Card>
            <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>Sağlamlık</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                    Linüx dağıtımları, Windows işletim sistemi gibi çöp biriktirme, yığılma ve belirli periotlar ile bakım gerektiren çökme senaryolarının
                    hiç birini bünyesinde barındırmaz.
                    Manjaro kişisel ve ofis kullanımda resmi repolarında stabil yazılımları bulundurur ancak AUR repolarında herhangi bir garanti vermez,
                    AUR, Snap, flatpak ve AppImage kurulumlarında kullanıcının dikkatli olması gerekir.
                    Bunun dışında operasyonel durumlarda server, ofis, terminal, gömülü sistemler (minipc vs.) ve kişisel kullanımlarda oldukça stabil, hızlı
                    ve verimli bir işletim sistemidir.
                </CardContent>
            </Card>
            <Card {...cardProperty}>
                <CardHeader
                    title={<dh.H2>Steam ve Wine</dh.H2>}
                />
                <CardContent style={{textAlign:"justify"}}>
                    Wine içerisinde bulunan uyumluluk ara katmanları sayesinde Windows için geliştirilmiş ve tek tıkla çalıştırılabilen
                    uygulamaları Linüx platformunda da sorunsuzca çalıştırılabilir hale getirir.
                    PlayonLinüx platformu bununda bir üzerine çıkarak windows oyunları için gerekli olan c++ eklentilerinide Linüx platformuna kurarak
                    windows oyunlarının neredeyse tamamını linüx üzerinde çalışır hale getiriyor.
                    Valve Software tarafından geliştirilen protondb katmanı sayesinde ise oyunları linüxte en az windows kadar performanslı oynarken
                    aynı zamanda bilgisayarı kasmadan discord vb. uygulamalardan ekran paylaşımı veya yayın yapabilirsiniz.
                    Manjaro, Steam platformunda bulunan ilk 100'de bulunan 67 oyunu tek tıkla 19 oyunu ise belirli eklentiler ile sorunsuzca çalıştırabilmektedir.
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