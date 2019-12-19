
// 图片预加载
export function imgLoad(container, url) {
    const img = new Image();
    img.onload = () => {
        container.appendChild(img);
    }
    img.src = url;
}