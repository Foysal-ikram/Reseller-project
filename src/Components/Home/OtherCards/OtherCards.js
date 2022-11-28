import React from 'react';

const OtherCards = () => {
    return (
        <div className='lg:bg-sky-400 py-8'>
            <div><h1 className='text-center text-4xl font-mono  font-bold mt-20 '>Our Voice</h1></div>
            <div className='grid  lg:grid-cols-3 gap-6  mx-auto  max-w-6xl	 mt-8 mb-28'>
                <div className="card w-full bg-base-100 lg:shadow-xl mx-auto">
                    <figure className="mx-10 h-60 lg:mx-5">
                        <img src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_1084171152_400165.jpg" alt="Shoes" className="w-full lg:rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Office Work</h2>
                        <p className='text-justify'>The Indeed Editorial Team comprises a diverse and talented team of writers, researchers and subject matter experts equipped with Indeed's data and insights to deliver useful tips to help guide your career journey.
                            Many companies are now giving employees the option to either work from home or in the office.
                        </p>

                    </div>
                </div>
                <div className="card w-full bg-base-100 lg:shadow-xl mx-auto">
                    <figure className="mx-10 h-60 lg:mx-5">
                        <img src="https://d2kz9lt0wzv9b2.cloudfront.net/web/image/ict.carousel.image/412/image?ts=1631975697" alt="Shoes" className="w-full lg:rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Build A PC</h2>
                        <p className='text-justify'>Building your first PC can be daunting. The idea of setting a budget, researching the best hardware you can buy within that budget, and then finally assembling those components yourself can be scary the first few times.

                            But don’t worry! Everyone, including professionals out there, started exactly where you are. </p>

                    </div>
                </div><div className="card w-full bg-base-100 lg:shadow-xl mx-auto">
                    <figure className="mx-10 lg:mx-5 h-60">
                        <img src="https://www.bundaberg.qld.gov.au/bundaberg-corporate/images/Diverse_community_group_holding_hands_web_1.jpg" alt="Shoes" className=" w-full lg:rounded-xl h-48" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Our Community</h2>
                        <p className='text-justify'>Community development in local government involves individuals, families with children, youth, seniors, groups and clubs, alliances, businesses, community services and organisations, non-government and government (State and Federal) organisations, ratepayers and residents. </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default OtherCards;