import pro_1 from "../assets/relogios/5_pro/galaxy1.jpg";
import pro_2 from "../assets/relogios/5_pro/galaxy2.jpg";
import pro_3 from "../assets/relogios/5_pro/galaxy3.jpg";
import pro_4 from "../assets/relogios/5_pro/galaxy4.jpg";

import smart_2_1 from "../assets/relogios/band_2/smart1.jpg";
import smart_2_2 from "../assets/relogios/band_2/smart2.jpg";
import smart_2_3 from "../assets/relogios/band_2/smart3.jpg";
import smart_2_4 from "../assets/relogios/band_2/smart4.jpg";

import smart_7_2 from "../assets/relogios/band_7/smart1.jpg";
import smart_7_1 from "../assets/relogios/band_7/smart2.jpg";
import smart_7_3 from "../assets/relogios/band_7/smart3.jpg";
import smart_7_4 from "../assets/relogios/band_7/smart4.jpg";

import bip3_1 from "../assets/relogios/bip_3/Amazfit1.jpg";
import bip3_2 from "../assets/relogios/bip_3/Amazfit2.jpg";
import bip3_3 from "../assets/relogios/bip_3/Amazfit3.jpg";
import bip3_4 from "../assets/relogios/bip_3/Amazfit4.jpg";

import gts1 from "../assets/relogios/gts_2e/Amazfit1.jpg";
import gts2 from "../assets/relogios/gts_2e/Amazfit2.jpg";
import gts3 from "../assets/relogios/gts_2e/Amazfit3.jpg";
import gts4 from "../assets/relogios/gts_2e/Amazfit4.jpg";

import gts_4_2 from "../assets/relogios/gts_4/gts41.jpg";
import gts_4_3 from "../assets/relogios/gts_4/gts42.jpg";
import gts_4_4 from "../assets/relogios/gts_4/gts43.jpg";
import gts_4_1 from "../assets/relogios/gts_4/gts44.jpg";

import active1 from "../assets/relogios/s1_active/active1.jpg";
import active2 from "../assets/relogios/s1_active/active2.jpg";
import active3 from "../assets/relogios/s1_active/active3.jpg";
import active4 from "../assets/relogios/s1_active/active4.jpg";

import apple1 from "../assets/relogios/series_3/apple1.jpg";
import apple2 from "../assets/relogios/series_3/apple2.jpg";
import apple3 from "../assets/relogios/series_3/apple3.jpg";
import apple4 from "../assets/relogios/series_3/apple4.jpg";

import apple_8_1 from "../assets/relogios/series_8/apple1.jpg";
import apple_8_2 from "../assets/relogios/series_8/apple2.jpg";
import apple_8_3 from "../assets/relogios/series_8/apple3.jpg";
import apple_8_4 from "../assets/relogios/series_8/apple4.jpg";

import swin1 from "../assets/relogios/swin_2/swin1.jpg";
import swin2 from "../assets/relogios/swin_2/swin2.jpg";
import swin3 from "../assets/relogios/swin_2/swin3.jpg";
import swin4 from "../assets/relogios/swin_2/swin4.jpg";

import venu1 from "../assets/relogios/venu/venu1.jpg";
import venu2 from "../assets/relogios/venu/venu2.jpg";
import venu3 from "../assets/relogios/venu/venu3.jpg";
import venu4 from "../assets/relogios/venu/venu4.jpg";

import galaxy1 from "../assets/relogios/watch_5/Galaxy1.jpg";
import galaxy2 from "../assets/relogios/watch_5/Galaxy2.jpg";
import galaxy3 from "../assets/relogios/watch_5/Galaxy3.jpg";
import galaxy4 from "../assets/relogios/watch_5/Galaxy4.jpg";

import Heart from "../components/coracao";
import React, { createContext} from 'react';

export const ArrayContext = createContext();

export const array = [
    {
        id: 0,
        dis: "512",
        numeava: "234",
        title: "Galaxy Watch 5",
        img: `${ galaxy1 }`,
        img1: `${ galaxy2 }`,
        img2: `${ galaxy3 }`,
        img3: `${ galaxy4 }`,
        ava: "3.9",
        nprice: "1979.10",
        oprice: "1999.99",
        cor1: "#F5E4DD",
        cor2: "#DBD4E4",
        cor3: "#606166",
        cora: <Heart />,
    },
    {
        id: 1,
        dis: "782",
        numeava: "425",
        title: "Amazfit gts 2e",
        img: `${gts1}`,
        img1: `${ gts2 }`,
        img2: `${ gts3 }`,
        img3: `${ gts4 }`,
        ava: "4.6",
        nprice: "410.39",
        oprice: "499.90",
        cor1: "#DEC9D2",
        cor2: "#292929",
        cor3: "#F4E0D9",
        cora: <Heart />,
    },
    {
        id: 2,
        dis: "452",
        numeava: "132",
        title: "Amazfit Bip 3",
        img: `${ bip3_1 }`,
        img1: `${ bip3_2 }`,
        img2: `${ bip3_3 }`,
        img3: `${ bip3_4 }`,
        ava: "5.0",
        nprice: "258.00",
        oprice: "359.10",
        cor1: "#D9D6EB",
        cor2: "#F0D3D1",
        cor3: "#252525",
        cora: <Heart />,
    },
    {
        id: 3,
        dis: "534",
        numeava: "224",
        title: "Smartwatch apple series 3",
        img: `${ apple1 }`,
        img1: `${ apple2 }`,
        img2: `${ apple3 }`,
        img3: `${ apple4 }`,
        ava: "4.8",
        nprice: "3560.00",
        oprice: "3999.90",
        cor1: "#EEDAD9",
        cor2: "#353535",
        cor3: "#F3F2F0",
        cora: <Heart />,
    },
    {
        id: 4,
        dis: "99",
        numeava: "264",
        title: "Apple watch seriess 8",
        img: `${ apple_8_1 }`,
        img1: `${ apple_8_2 }`,
        img2: `${ apple_8_3 }`,
        img3: `${ apple_8_4 }`,
        ava: "4.5",
        nprice: "7800.90",
        oprice: "8200.60",
        cor1: "#3D3F43",
        cor2: "#BEA892",
        cor3: "#FFFFFF",
        cora: <Heart />,
    },
    {
        id: 5,
        dis: "24",
        numeava: "784",
        title: "Xioami smart band 7",
        img: `${ smart_7_1 }`,
        img1: `${ smart_7_2 }`,
        img2: `${ smart_7_3 }`,
        img3: `${ smart_7_4 }`,
        ava: "4.5",
        nprice: "243.54",
        oprice: "299.10",
        cor1: "#18191a",
        cor2: "#383B41",
        cor3: "#7f8383",
        cora: <Heart />,
    },
    {
        id: 6,
        dis: "173",
        numeava: "123",
        title: "Amazfit GTS 4 MINI Smartwatch",
        img: `${ gts_4_1 }`,
        img1: `${ gts_4_2 }`,
        img2: `${ gts_4_3 }`,
        img3: `${ gts_4_4 }`,
        ava: "4.2",
        nprice: "579.00",
        oprice: "610.89",
        cor1: "#252525",
        cor2: "#F4E0D9",
        cor3: "#DAECED",
        cora: <Heart />,
    },
    {
        id: 7,
        dis: "12",
        numeava: "2334",
        title: "Garmin Venu",
        img: `${ venu1 }`,
        img1: `${ venu2 }`,
        img2: `${ venu3 }`,
        img3: `${ venu4 }`,
        ava: "5.0",
        nprice: "1549.00",
        oprice: "1799.90",
        cor1: "#151515",
        cor2: "#E6E2DF",
        cor3: "#9E9E9E",
        cora: <Heart />,
    },
    {
        id: 8,
        dis: "712",
        numeava: "564",
        title: "Xioami Redmi Smart Band 2",
        img: `${ smart_2_1 }`,
        img1: `${ smart_2_2 }`,
        img2: `${ smart_2_3 }`,
        img3: `${ smart_2_4 }`,
        ava: "4.9",
        nprice: "141.90",
        oprice: "199.90",
        cor1: "#363739",
        cor2: "#D8D3CF",
        cor3: "#5FBCBF",
        cora: <Heart />,
    },
    {
        id: 9,
        dis: "122",
        numeava: "324",
        title: "Garmin swin 2",
        img: `${ swin1 }`,
        img1: `${ swin2 }`,
        img2: `${ swin3 }`,
        img3: `${ swin4 }`,
        ava: "4.6",
        nprice: "2199.00",
        oprice: "2699.00",
        cor1: "#D3D2D7",
        cor2: "#667282",
        cor3: "#171617",
        cora: <Heart />,
    },
    {
        id: 10,
        dis: "513",
        numeava: "167",
        title: "Galaxy Watch 5 pro",
        img: `${ pro_1 }`,
        img1: `${ pro_2 }`,
        img2: `${ pro_3 }`,
        img3: `${ pro_4 }`,
        ava: "4.9",
        nprice: "2125.63",
        oprice: "2500.90",
        cor1: "#292929",
        cor2: "#6E6D69",
        cor3: "#E33751",
        cora: <Heart />,
    },
    {
        id: 11,
        dis: "432",
        numeava: "12",
        title: "Xiaomi Watch S1 Active",
        img: `${ active1 }`,
        img1: `${ active2 }`,
        img2: `${ active3 }`,
        img3: `${ active4 }`,
        ava: "5.0",
        nprice: "755.92",
        oprice: "840.90",
        cor1: "#171617",
        cor2: "#363739",
        cor3: "#E1C54C",
        cora: <Heart />,
    }

]