import React, { useState, useEffect } from 'react';
import './style.css';
import qs from 'qs';
import Fab from '@material-ui/core/Fab';
import DialogEnd from '../../components/DialogEnd';
import Example from '../../data/getData';

let audio = null;
let onOff = false;  // 开关
let maxIndex = 0;
let detailData = {};

function Index(props) {
  const { type = 'house' } = qs.parse(window.location.href.split('?')[1]);
  // const maxIndex = detailData.data.length - 1;
  const [ detail, setDetail ] = useState({});  // 当前第几题
  let [ currentIndex, setCurrentIndex ] = useState(0);  // 当前做到第几题的下标
  const [ audioState, setAudioState ] = useState(false);
  const [ isShowDialogEng, setIsShowDialogEng ] = useState(false);

  useEffect(() => {
    audio = document.getElementById('audio');
    audio.addEventListener('pause', () => {
      setAudioState(false);
    });
    const data = new Example(type);
    detailData = data.getData();
    maxIndex = detailData.data.length - 1;
    setDetail(detailData.data[currentIndex]);
    console.log('detail-image', detailData);
  }, [type]);

  useEffect(() => {
    setDetail(detailData.data[currentIndex])
  }, [currentIndex]);

  const handlerAudioPlay = () => {
    function eventPlay() {
      setAudioState(false);
      audio.removeEventListener('pause', eventPlay);
    }
    audio.addEventListener('pause', eventPlay);
    setAudioState(true);
    audio.play();
  }

  const handlerList = (list) => {
    if (onOff) return;
    onOff = true;

    // 不直接修改源数据
    const newDetail = JSON.parse(JSON.stringify(detail));
    const detailList = newDetail.image.find(item => (item.name === list.name && item.index === list.index));

    if (detailList.name === detail.name) {
      detailList.structure = 1;
    } else {
      detailList.structure = 0;
    }
    setDetail(newDetail);
    setTimeout(() => {
      onOff = false;
      // 判断是否有下一题
      if (currentIndex < maxIndex) {
          setCurrentIndex(++currentIndex);
      } else {
        setIsShowDialogEng(true);
      }
    }, 500);
  }

  // 结束弹窗按钮事件
  const handlerDialogEndConfirm = () => {
    setIsShowDialogEng(false);
    setCurrentIndex(0);
  }
  const handlerDialogEndCancel = () => {
    setIsShowDialogEng(false);
    props.history.goBack();
  }

  return (
    <div className="detail">
      {
        detail 
        ? <>
            <div className="detail__item">
              <div className="detail__audio" onClick={handlerAudioPlay}>
                <audio id="audio" src={detail.audio} />
                <Fab color="secondary">
                  <i className={`icon__audio iconfont ${audioState ? 'icon-caozuo-bofang-zanting' : 'icon-kaishi' }`}></i>
                </Fab>
              </div>
              <ul className="detail__image">
                {
                  detail.image && detail.image.map((list, index) => {
                    return (
                      <li className="detail__block" key={index} onClick={() => handlerList(list)}>
                        <img className="img" src={list.url} />
                        {
                          list.structure === 0 ? <i className="icon__img iconfont icon-Group-"></i> : null
                        }
                        {
                          list.structure === 1 ? <i className="icon__img iconfont icon-dui"></i> : null
                        }
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </> 
        : <p>全部完成</p>
      }
      <DialogEnd 
        isShowDialogEng={isShowDialogEng} 
        handlerDialogEndConfirm={handlerDialogEndConfirm} 
        handlerDialogEndCancel={handlerDialogEndCancel}
      />
    </div>
  );
}

export default Index;