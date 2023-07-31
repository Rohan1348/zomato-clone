import React from 'react';
import './diningOut.css';
import Collection from '../common/collections';
import {diningOut} from '../../data/diningOutRest';
import Filters from '../common/filters';
import Explore from '../common/exploreSection'

const collectionList = [
  {
    id: 1,
    title: "Great Cafes",
    cover: "https://b.zmtcdn.com/data/collections/61d06b1dc0a478a6216bcf07ff8b2d67_1687243519.jpg?output-format=webp",
    places: "13 Places"
  },
  {
    id: 2,
    title: "Best Luxury Dining Places",
    cover: "https://b.zmtcdn.com/data/collections/a1e31eb92bb9951aaf1750d88497adb4_1687244301.jpg?output-format=webp",
    places: "5 Places"
  },
  {
    id: 3,
    title: "Places for North Indian Delicacies",
    cover: "https://b.zmtcdn.com/data/collections/cb441382af822ed30451d127d4a9eb76_1682690432.jpg?output-format=webp",
    places: "14 Places"
  },
  {
    id: 4,
    title: "Ultimate Vegetarian Restaurants",
    cover: "https://b.zmtcdn.com/data/collections/d1849df0f8482f5d972930e3baf4a797_1687245492.png?output-format=webp",
    places: "5 Places"
  },
  {
    id: 5,
    title: "Local Favourite Places",
    cover: "https://b.zmtcdn.com/data/collections/c5d2b79c4f0e7788decbaf4548b4e0e2_1687244840.png?output-format=webp",
    places: "12 Places"
  },
  {
    id: 6,
    title: "Places for Bingeworthy Desserts",
    cover: "https://b.zmtcdn.com/data/collections/3b1f56c1936a6bfa702efd28188ebe6f_1688043045.png?output-format=webp",
    places: "7 Places"
  },
]

const diningFilters = [
  {
      id: 1,
      icon: <i class="fi fi-rr-settings-sliders absolute-center"></i>,
      title: 'Filters'
  },
  {
      id: 2,
      icon: <i class="fi fi-ss-crown absolute-center"></i>,
      title: 'Gold'
  },
  {
      id: 3,
      title: 'Rating: 4.0+'
  },
  {
      id: 4,
      title: 'Outdoor Seating',
  },
  {
      id: 5,
      title: 'Open Now',
}
]

const diningList = diningOut;

const DiningOut = () => {
  return (
    <div>
        <Collection list={collectionList}/>
        <div className='max-width'>
          <Filters filterList={diningFilters}/>
        </div>
        <Explore list={diningList} collectionName='Trending dining restaurants in Patna' />
    </div>
  )
}

export default DiningOut