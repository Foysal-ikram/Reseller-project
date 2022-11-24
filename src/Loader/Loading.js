import React from 'react';
import { BounceLoader } from 'react-spinners';

const Loading = () => {
    return (
        <div className='flex justify-center item-center mt-24'>
            <div className="sweet-loading ">
                <BounceLoader color="#36d7b7" />
            </div>
        </div>
    );
};

export default Loading;