import house from './house';
import kitchen from './kitchen';
import clothing from './clothing';
import URL from '../config/url';
import { getRandom, randomSort } from '../utils';

// 所有类型
const allType = {
    house,
    kitchen,
    clothing
}

const MAX_NUMBER = 4;

class Example {
    constructor(type) {
        this.type = type;
        this.allData = this.handleAllData(type);
    }

    // 获取所有类型字符，返回一个数组
    getType () {
        return Object.keys(allType);
    }
    
    // 获取类型下面的数据
    getData () {
        const allData = JSON.parse(JSON.stringify(this.allData));
        const data = [];

        allData.forEach(item => {
            const obj = {};
            obj.audio = `${URL.audioUrl}?audio=${item.name}&type=2`;
            obj.name = item.name;
            obj.count = item.count;
            for(let i = 1; i <= MAX_NUMBER; i++) {
                if (obj.image) {
                    obj.image.push(this.randomImageData(allData, obj.image));
                } else {
                    const img = getRandom(1, obj.count);
                    obj.image = [{
                        url: `${URL.imageUrl}/images/${this.type}/${obj.name}/${img}.jpg`,
                        name: obj.name,
                        structure: -1,
                        index: i
                    }];
                }
            }
            // 随机排序
            obj.image.sort(randomSort);
            data.push(obj);
        });
        return {
            type: this.type,
            data: data.sort(randomSort)
        }
    }

    randomImageData(allData, arrImage) {
        let str = '';
        arrImage.forEach(item =>　{
            str += item.name + ',';
        });
        const newArray = [];

        allData.forEach(item => {
            if (str.indexOf(item.name) === -1) {
                newArray.push(item);
            }
        });
        
        const num = getRandom(0, newArray.length);  // 单词随机
        const leng = newArray[num].image.length;
        const numImg = getRandom(0, leng);      // 单词里面的图片随机

        return newArray[num].image[numImg];
    }

    /**
     * 处理所有图片数据，拼接音频，图片
     * @param {string} type 类型名词
     */
    handleAllData(type) {
        const data = JSON.parse(JSON.stringify(allType[type]));
        data.forEach((item) => {
            item.audio = `${URL.audioUrl}?audio=${item.name}&type=2`;
            for(let i = 1; i <= item.count; i++) {
                if (item.image) {
                    item.image.push({
                        url: `${URL.imageUrl}/images/${type}/${item.name}/${i}.jpg`,
                        name: item.name,
                        structure: -1,
                        index: i,
                    });
                } else {
                    item.image = [{
                        url: `${URL.imageUrl}/images/${type}/${item.name}/${i}.jpg`,
                        name: item.name,
                        structure: -1,
                        index: i,
                    }];
                }
            }
        });
        return data;
    }
}

export default Example;