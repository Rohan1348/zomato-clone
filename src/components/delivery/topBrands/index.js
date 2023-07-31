import React from 'react';
import './topBrands.css';
import NextArrow from '../../common/carousel/nextArrow';
import PrevArrow from '../../common/carousel/prevArrow';
import Slider from 'react-slick';

const topBrandList = [
    {
        id: 1,
        time: "21 min",
        title: "La Pino'z Pizza",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/144bce4c7101359f0c0b54b8fc761a6f_1648017785.png?output-format=webp"
    },
    {
        id: 2,
        time: "30 min",
        title: "Domino's Pizza",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/5caf38856d23347b351bb7abf97134d3_1521806923.png?output-format=webp"
    },
    {
        id: 3,
        time: "39 min",
        title: "Pizza Hut",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/2f32014b8ff892ba75217e3ef050e1bd_1648017751.png?output-format=webp"
    },
    {
        id: 4,
        time: "30 min",
        title: "Behrouz Biryani",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/d500dedcd7c797c52071e64e6b3df6b4_1638299963.png?output-format=webp"
    },
    {
        id: 5,
        time: "32 min",
        title: "KFC",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589433965.png?output-format=webp"
    },
    {
        id: 6,
        time: "19 min",
        title: "Chicago Pizza",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/1dc9563533730bc3829922fa50c9814b_1654533773.png?output-format=webp"
    },
    {
        id: 7,
        time: "34 min",
        title: "The Belgian Waffle Co.",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/8d99caf8e66456a90a9d1853a9849392_1671190013.png?output-format=webp"
    },
    {
        id: 8,
        time: "28 min",
        title: "Faasos - Wraps & Rolls",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/45137b90df2f1154a8766b00c03c8fc3_1655798523.png?output-format=webp"
    },
];

const settings = {
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

const TopBrands = () => {
  return (
    <div className='max-width'>
        <div className='collection-title'>Top brands for you</div>
        <Slider {...settings}>
            {topBrandList.map((brand)=>{
                return <div className='brand-item'>
                    <div className='top-brands-cover cur-po absolute-center'>
                        <img src={brand.cover} alt='BrandCover' className='top-brands-image'/>
                    </div>
                    <div className='brand-title'>{brand.title}</div>
                    <div className='brand-time'>{brand.time}</div>
                </div>;
            })}
        </Slider>
    </div>
  )
}

export default TopBrands