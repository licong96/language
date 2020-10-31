// 获取一个区间随机数
export function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// 随机排序
export function randomSort(a, b) {
  return Math.random() >.5 ? -1 : 1;
}