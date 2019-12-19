import URL from '../../config/url';
import { imgLoad } from '../../utils';

const data = [
    {
        name: '西安城墙',
        cover: `${URL.imgHost}/0.jpg`,
        number: 8,
        fullImage: [
            // require('../../assets/images/0/img-0.jpg'),
        ]
    },
    {
        name: '钟鼓楼',
        cover: `${URL.imgHost}/1.jpg`,
        number: 5,
        fullImage: []
    },
    {
        name: '回民街',
        cover: `${URL.imgHost}/2.jpg`,
        number: 3,
        fullImage: []
    },
    {
        name: '陕西博物馆',
        cover: `${URL.imgHost}/3.jpg`,
        number: 4,
        fullImage: []
    },
    {
        name: '大雁塔',
        cover: `${URL.imgHost}/4.jpg`,
        number: 7,
        fullImage: []
    },
    {
        name: '大唐芙蓉园',
        cover: `${URL.imgHost}/5.jpg`,
        number: 5,
        fullImage: []
    },
    {
        name: '秦始皇兵马俑博物馆',
        cover: `${URL.imgHost}/6.jpg`,
        number: 2,
        fullImage: []
    },
];

const container = document.getElementById('container');

data.forEach((item, index) => {
    for (let i = 0; i <= item.number; i++) {
        const img = `${URL.imgHost}/${index}/img-${i}.jpg`;
        data[index].fullImage.push(img);
        imgLoad(container, img);
    }
});

export default data;