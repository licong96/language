import React, { } from 'react';
import { Switch, Route } from "react-router-dom";
import './index.scss';
import data from '../../data/tourism';
import Button from 'rsuite/lib/Button';
import FullImage from '../FullImage';


function Index(props) {

  const handlerOpenDeck = () => {
    console.log(props)
    props.history.push({
      pathname: '/home/fullImage'
    })
  }

  return (
    <div className="home">
      <ul>
        {
          data.map((item, index) => {
            return (
              <li className="list" key={index}>
                <img className="list__cover" src={item.cover} alt="" />
                <div className="list__main">
                  <p className="list__name">{item.name}</p>
                  <div className="list__operation">
                    <Button>地图位置</Button>
                    <Button onClick={handlerOpenDeck}>图片介绍</Button>
                    <Button>更多详细</Button>
                  </div>
                </div>
              </li>
            )
          })
        }
      </ul>
      <Switch>
        <Route exact path='/home/fullImage' component={FullImage} />
      </Switch>
    </div>
  );
}


// <script type="text/javascript" src="http://api.map.baidu.com/api?v=3.0&ak=TL5nQ3lFDKsuAYKj4eWfZ6YQfarnO89o"></script>

export default Index;