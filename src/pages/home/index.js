import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './style.css';
import Example from '../../data/getData';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const dataExample = new Example('kitchen');
console.log(dataExample.getType())

function Index() {
  const [ data, setData ] = useState(dataExample.getType());

    return (
      <div className="home">
        <ul className="home__wrap">
          {
            data.map((item, index) => {
              return (
                <div key={index}>
                    <Link className="home__list" to={`/detailAudio?type=${item}&mode=1`}>
                      <List component="nav" aria-label="secondary mailbox folders">
                        <ListItem button>
                          { item }
                        </ListItem>
                      </List>
                    </Link>
                </div>
              )
            })
          }
        </ul>
      </div>
    );
}


export default Index;