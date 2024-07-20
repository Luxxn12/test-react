import React from 'react';
import { Card } from 'antd';
// import Img5 from '../assets/img5.svg'


const { Meta } = Card;

const App = ({ url, title, desc }) => (
    <Card
        hoverable
        style={{ width: 320 }}
        cover={<div className='py-5 flex flex-row w-full justify-center items-center '>
            <img alt="example" className='w-20 ml-[38%] ' src={url} />
        </div>}
    >
        <div className=' w-44 flex flex-col justify-center items-center w-full'>
            <p className='text-lg font-semibold'>{title}</p>
            <p className='text-md text-center'>{desc}</p>
        </div>
        {/* <Meta className='bg-red-700 w-full' title="Pendidikan" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do e" /> */}

        <button className='w-full  h-10 border text-green-500 border-green-500 rounded-xl mt-5'>Lihat Lebih Lanjut</button>
    </Card>
);

export default App;