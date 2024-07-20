import React from 'react';
import { Card } from 'antd';
import Img5 from '../assets/img5.svg'


const { Meta } = Card;

const App = () => (
    <Card
        hoverable
        style={{ width: 410 }}
        cover={<img alt="example"  src={Img5} />}
    >
        <div className=' w-44'>
            <p className='text-lg font-semibold'>Pendidikan</p>
            <p className='text-md'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do e</p>
        </div>
        {/* <Meta className='bg-red-700 w-full' title="Pendidikan" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do e" /> */}

        <button className='w-full text-white h-10 bg-green-500 rounded-xl mt-5'>Lihat Lebih Lanjut</button>
    </Card>
);

export default App;