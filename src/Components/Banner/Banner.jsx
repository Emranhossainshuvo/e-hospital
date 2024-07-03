
const Banner = () => {
    return (
        <div>
            {/* banner image */}
            <div className="flex justify-center items-center mt-10">

                <img src="https://i.ibb.co/yS72sqg/Rectangle-5.png" alt="" />
            </div>
            {/* banner stats */}
            <div>
                <div>
                    <h4>Comprehensive Care for Every Patient</h4>
                </div>
                <div className="flex gap-[20px]">
                    <div className="bg-[#fbfbfb] rounded-[24px]">
                        <h3 className="font-semibold text-3xl">90%</h3>
                        <p>Patient satisfaction rate, reflecting our commitment.</p>
                        <img src="https://i.ibb.co/R3W1xwX/icons8-pie-chart-80.png" alt="" />
                    </div>
                    <div className="bg-[#fffff5] rounded-[24px]">
                        <h3 className="font-semibold text-3xl">500+</h3>
                        <p>Board-certified doctors</p>
                        <img src="https://i.ibb.co/7vmFF73/icons8-documents-80.png" alt="" />
                    </div>
                    <div className="bg-[#fbfbfb] rounded-[24px]">
                        <h3 className="font-semibold text-3xl">4.8</h3>
                        <p>Over 20,000 Patient</p>
                        <div>
                                <h5>user faces</h5>
                        </div>
                    </div>
                    <div className="bg-[#fffff5] rounded-[24px]">
                        <h3 className="font-semibold text-3xl">$500</h3>
                        <p>Money spend
                        for poor patient</p>
                        <img src="https://i.ibb.co/wM47yv8/icons8-coins-80.png" alt="" />
                    </div>
                    <div className="bg-[#fbfbfb] rounded-[24px]">
                        <h3 className="font-semibold text-3xl">50+</h3>
                        <p>Free lession video 
                        for patient</p>
                        <img src="https://i.ibb.co/2vCYD0S/icons8-video-call-80.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;