import React, { useRef, useState } from "react";

import { Button, Img, Text } from "components";

const FrameFourPage = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const videoRef =useRef(null);
  const [progress, setProgress] = useState(0);

  const handleInputChange =(e) =>{
    e.preventDefault();
    setSearchTerm(e.target.value);
  }

  const handleSearch = ()=>{
   fetchData();
  }

  const fetchData = () =>{
    setLoading(true);
    setError(null);

    fetch('https://localhost:3000/search?query=${searchTerm}')
    .then(( response) =>{
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) =>{
      setSearchResults(data);
      setLoading(false)
    })
    .catch((error) =>{
      setError('Error fetching data. Please try again later');
      setLoading(false)
    })
  }

  const handlevideoUpdate = ()=>{
    const video =videoRef.current;
    const currentTime = video.currentTime;
    const duration = video.duration;
    const progressPercentage = (currentTime / duration) * 100;
    setProgress(progressPercentage)
  }
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto pb-48 w-full">
        <div className="flex flex-col justify-start w-full">
          <div className="h-[1100px] md:px-5 relative w-full">
            <Img
              className="h-[1100px] m-auto object-cover w-full"
              src="images/img_rectangle66.png"
              alt="rectangleSixtySix"
            />
            <div className="absolute flex flex-col justify-start right-[6%] top-[4%] w-[66%]">
              <div className="flex sm:flex-col flex-row gap-[52px] items-start justify-end md:ml-[0] ml-[612px] w-[45%] md:w-full">
                <Text
                  className="mb-0.5 text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                  size="txtInterRegular24"
                >
                  Home{" "}
                </Text>
                <Text
                  className="sm:mt-0 mt-[3px] text-2xl md:text-[22px] text-white-A700 sm:text-xl whitespace-nowrap"
                  size="txtInterRegular24"
                >
                  my account{" "}
                </Text>
                <Text
                  className="mb-[3px] text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                  size="txtInterRegular24"
                >
                  Live
                </Text>
                <Text
                  className="mb-0.5 text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                  size="txtInterRegular24"
                >
                  Lessons
                </Text>
              </div>
              <Text
                className="leading-[57.00px] mr-[449px] mt-[297px] md:text-5xl text-[64px] text-center text-white-A700 w-3/5 sm:w-full"
                size="txtInterRegular64"
              >
                Learn from Industry Experts
              </Text>
              <Text
                className="md:ml-[0] ml-[5px] mt-10 text-[15px] text-gray-50 "
                size="txtInterRegular15"
              >
                welcome to v-teach. we offer comprehensive lessons from form one
                to form 4
              </Text>
              <Text
                className="bg-white-A700 h-[25px] justify-center md:ml-[0] ml-[206px] mr-[700px] mt-[100px] sm:px-5 px-[35px] py-0.5 rounded-[12px] text-[15px] text-center text-light_blue-800 w-[202px]"
                size="txtInterRegular15Lightblue800"
              >
                View All Courses
              </Text>
            </div>
          </div>
          <Text
            className="md:ml-[0] ml-[550px] mt-36 sm:text-[31px] md:text-[33px] text-[35px] text-blue_gray-800 "
            size="txtInterRegular35"
          >
            Our Most Popular Courses
          </Text>
          <div className="flex sm:flex-col flex-row gap-6 items-center justify-center md:ml-[0] ml-[550px] mt-[100px] md:px-5 w-[28%] md:w-full">
            <div>
              <input
                className="bg-gray-200 flex flex-col items-center justify-center pt-[5px] px-[5px] rounded-[18px] shadow-bs w-[100%] h-[100%] sm:w-full"
                type="text"
                value={searchTerm}
                onChange={handleInputChange}
              />
            </div>
            <div className="md:h-9 h-[30px] sm:mt-0 mt-1.5 relative w-[24%] sm:w-full">
              <Button
                className="bg-indigo-400 border border-blue-700_01 border-solid cursor-pointer min-w-[150px] py-2 mt-[-100px] rounded text-center text-sm text-white-A700"
                onClick={handleSearch}
              >
                Search
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center px-4 justify-start h-[70%] md:ml-[0] ml-[80px] mt-[100px] md:px-5 w-[87%] md:w-full">
            <div className="md:gap-5 gap-40 px-4 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
              <div
                className="bg-cover bg-no-repeat flex flex-col relative w-full h-[500px]"
                style={{ backgroundImage: "url('images/img_group16.svg')" }}
              >
                <div className="flex flex-col items-center justify-start mx-auto w-full">
                  <div className="flex flex-col md:gap-10 gap-[113px] items-center justify-start w-full">
                    <Img
                      className="h-[196px] md:h-auto object-cover w-full"
                      src="images/img_image.png"
                      alt="image"
                    />
                    <div className="flex flex-col gap-[20px] items-center justify-start w-[92%] md:w-full">
                      <Button className="bg-indigo-400 border border-blue-700_01 border-solid cursor-pointer min-w-[280px] py-2 mt-[-100px] rounded text-center text-sm text-white-A700">
                        See more...
                      </Button>
                      <div className="bg-indigo-50 h-[7px] rounded-[3px] w-full"></div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[13px] items-start justify-start mb-[122px] ml-[15px] mt-[-NaNpx] z-[1]">
                  <Text
                    className="text-blue_gray-800 text-xl"
                    size="txtInterRegular20"
                  >
                    Introduction to chemistry
                  </Text>
                  <Text
                    className="leading-[22.00px] text-[15px] text-blue_gray-900"
                    size="txtInterRegular15Bluegray900"
                  >
                    <>
                      A comprehensive course covering all you
                      <br />
                      need to know about introduction to chem
                    </>
                  </Text>
                </div>
                <Text
                  className="mb-[33px] ml-auto mr-[41px] mt-[-100.86px] text-light_blue-A700 text-xs uppercase z-[1]"
                  size="txtInterRegular12"
                >
                  0% Complete
                </Text>
                <div className="w-full h-2 bg-gray-300 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500"
                    style={{ width: `${progress}%` }}
                  />
                  <video
                    ref={videoRef}
                    src="your_video_url.mp4" 
                    className="hidden"
                    onTimeUpdate={handlevideoUpdate}
                  />
                </div>
                <div className="flex items-center justify-end mb-8 h-screen">
                  <div className="bg-orange-400 text-white px-4 py-2 rounded text-xl font-bold shadow-lg">
                    Ksh. 300
                  </div>
                </div>
              </div>
              <div
                className="bg-cover bg-no-repeat flex flex-col relative w-full h-[500px]"
                style={{ backgroundImage: "url('images/img_group16.svg')" }}
              >
                <div className="flex flex-col items-center justify-start mx-auto w-full">
                  <div className="flex flex-col md:gap-10 gap-[113px] items-center justify-start w-full">
                    <Img
                      className="h-[196px] md:h-auto object-cover w-full"
                      src="images/img_image.png"
                      alt="image"
                    />
                    <div className="flex flex-col gap-[20px] items-center justify-start w-[92%] md:w-full">
                      <Button className="bg-indigo-400 border border-blue-700_01 border-solid cursor-pointer min-w-[280px] py-2 mt-[-100px] rounded text-center text-sm text-white-A700">
                        See more...
                      </Button>
                      <div className="bg-indigo-50 h-[7px] rounded-[3px] w-full"></div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[13px] items-start justify-start mb-[122px] ml-[15px] mt-[-NaNpx] z-[1]">
                  <Text
                    className="text-blue_gray-800 text-xl"
                    size="txtInterRegular20"
                  >
                    Introduction to chemistry
                  </Text>
                  <Text
                    className="leading-[22.00px] text-[15px] text-blue_gray-900"
                    size="txtInterRegular15Bluegray900"
                  >
                    <>
                      A comprehensive course covering all you
                      <br />
                      need to know about introduction to chem
                    </>
                  </Text>
                </div>
                <Text
                  className="mb-[33px] ml-auto mr-[41px] mt-[-100.86px] text-light_blue-A700 text-xs uppercase z-[1]"
                  size="txtInterRegular12"
                >
                  0% Complete
                </Text>
                <div className="flex items-center justify-end mb-8 h-screen">
                  <div className="bg-blue-500 text-white px-4 py-2 rounded text-xl font-bold shadow-lg">
                    Free
                  </div>
                </div>
              </div>

              <div
                className="bg-cover bg-no-repeat flex flex-col relative w-full h-[500px]"
                style={{ backgroundImage: "url('images/img_group16.svg')" }}
              >
                <div className="flex flex-col items-center justify-start mx-auto w-full">
                  <div className="flex flex-col md:gap-10 gap-[113px] items-center justify-start w-full">
                    <Img
                      className="h-[196px] md:h-auto object-cover w-full"
                      src="images/img_image.png"
                      alt="image"
                    />
                    <div className="flex flex-col gap-[20px] items-center justify-start w-[92%] md:w-full">
                      <Button className="bg-indigo-400 border border-blue-700_01 border-solid cursor-pointer min-w-[280px] py-2 mt-[-100px] rounded text-center text-sm text-white-A700">
                        See more...
                      </Button>
                      <div className="bg-indigo-50 h-[7px] rounded-[3px] w-full"></div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[13px] items-start justify-start mb-[122px] ml-[15px] mt-[-NaNpx] z-[1]">
                  <Text
                    className="text-blue_gray-800 text-xl"
                    size="txtInterRegular20"
                  >
                    Introduction to chemistry
                  </Text>
                  <Text
                    className="leading-[22.00px] text-[15px] text-blue_gray-900"
                    size="txtInterRegular15Bluegray900"
                  >
                    <>
                      A comprehensive course covering all you
                      <br />
                      need to know about introduction to chem
                    </>
                  </Text>
                </div>
                <Text
                  className="mb-[33px] ml-auto mr-[41px] mt-[-100.86px] text-light_blue-A700 text-xs uppercase z-[1]"
                  size="txtInterRegular12"
                >
                  0% Complete
                </Text>
                <div className="flex items-center justify-end mb-8 h-screen">
                  <div className="bg-orange-400 text-white px-4 py-2 rounded text-xl font-bold shadow-lg">
                    Ksh. 300
                  </div>
                </div>
              </div>
              <div
                className="bg-cover bg-no-repeat flex flex-col relative w-full h-[500px]"
                style={{ backgroundImage: "url('images/img_group16.svg')" }}
              >
                <div className="flex flex-col items-center justify-start mx-auto w-full">
                  <div className="flex flex-col md:gap-10 gap-[113px] items-center justify-start w-full">
                    <Img
                      className="h-[196px] md:h-auto object-cover w-full"
                      src="images/img_image.png"
                      alt="image"
                    />
                    <div className="flex flex-col gap-[20px] items-center justify-start w-[92%] md:w-full">
                      <Button className="bg-indigo-400 border border-blue-700_01 border-solid cursor-pointer min-w-[280px] py-2 mt-[-100px] rounded text-center text-sm text-white-A700">
                        See more...
                      </Button>
                      <div className="bg-indigo-50 h-[7px] rounded-[3px] w-full"></div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[13px] items-start justify-start mb-[122px] ml-[15px] mt-[-NaNpx] z-[1]">
                  <Text
                    className="text-blue_gray-800 text-xl"
                    size="txtInterRegular20"
                  >
                    Introduction to chemistry
                  </Text>
                  <Text
                    className="leading-[22.00px] text-[15px] text-blue_gray-900"
                    size="txtInterRegular15Bluegray900"
                  >
                    <>
                      A comprehensive course covering all you
                      <br />
                      need to know about introduction to chem
                    </>
                  </Text>
                </div>
                <Text
                  className="mb-[33px] ml-auto mr-[41px] mt-[-100.86px] text-light_blue-A700 text-xs uppercase z-[1]"
                  size="txtInterRegular12"
                >
                  0% Complete
                </Text>
                <div className="flex items-center justify-end mb-8 h-screen">
                  <div className="bg-orange-400 text-white px-4 py-2 rounded text-xl font-bold shadow-lg">
                    Ksh. 300
                  </div>
                </div>
              </div>
              <div
                className="bg-cover bg-no-repeat flex flex-col relative w-full h-[500px]"
                style={{ backgroundImage: "url('images/img_group16.svg')" }}
              >
                <div className="flex flex-col items-center justify-start mx-auto w-full">
                  <div className="flex flex-col md:gap-10 gap-[113px] items-center justify-start w-full">
                    <Img
                      className="h-[196px] md:h-auto object-cover w-full"
                      src="images/img_image.png"
                      alt="image"
                    />
                    <div className="flex flex-col gap-[20px] items-center justify-start w-[92%] md:w-full">
                      <Button className="bg-indigo-400 border border-blue-700_01 border-solid cursor-pointer min-w-[280px] py-2 mt-[-100px] rounded text-center text-sm text-white-A700">
                        See more...
                      </Button>
                      <div className="bg-indigo-50 h-[7px] rounded-[3px] w-full"></div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[13px] items-start justify-start mb-[122px] ml-[15px] mt-[-NaNpx] z-[1]">
                  <Text
                    className="text-blue_gray-800 text-xl"
                    size="txtInterRegular20"
                  >
                    Introduction to chemistry
                  </Text>
                  <Text
                    className="leading-[22.00px] text-[15px] text-blue_gray-900"
                    size="txtInterRegular15Bluegray900"
                  >
                    <>
                      A comprehensive course covering all you
                      <br />
                      need to know about introduction to chem
                    </>
                  </Text>
                </div>
                <Text
                  className="mb-[33px] ml-auto mr-[41px] mt-[-100.86px] text-light_blue-A700 text-xs uppercase z-[1]"
                  size="txtInterRegular12"
                >
                  0% Complete
                </Text>
                <div className="flex items-center justify-end mb-8 h-screen">
                  <div className="bg-orange-400 text-white px-4 py-2 rounded text-xl font-bold shadow-lg">
                    Ksh. 300
                  </div>
                </div>
              </div>
              <div
                className="bg-cover bg-no-repeat flex flex-col relative w-full h-[500px]"
                style={{ backgroundImage: "url('images/img_group16.svg')" }}
              >
                <div className="flex flex-col items-center justify-start mx-auto w-full">
                  <div className="flex flex-col md:gap-10 gap-[113px] items-center justify-start w-full">
                    <Img
                      className="h-[196px] md:h-auto object-cover w-full"
                      src="images/img_image.png"
                      alt="image"
                    />
                    <div className="flex flex-col gap-[20px] items-center justify-start w-[92%] md:w-full">
                      <Button className="bg-indigo-400 border border-blue-700_01 border-solid cursor-pointer min-w-[280px] py-2 mt-[-100px] rounded text-center text-sm text-white-A700">
                        See more...
                      </Button>
                      <div className="bg-indigo-50 h-[7px] rounded-[3px] w-full"></div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[13px] items-start justify-start mb-[122px] ml-[15px] mt-[-NaNpx] z-[1]">
                  <Text
                    className="text-blue_gray-800 text-xl"
                    size="txtInterRegular20"
                  >
                    Introduction to chemistry
                  </Text>
                  <Text
                    className="leading-[22.00px] text-[15px] text-blue_gray-900"
                    size="txtInterRegular15Bluegray900"
                  >
                    <>
                      A comprehensive course covering all you
                      <br />
                      need to know about introduction to chem
                    </>
                  </Text>
                </div>
                <Text
                  className="mb-[33px] ml-auto mr-[41px] mt-[-100.86px] text-light_blue-A700 text-xs uppercase z-[1]"
                  size="txtInterRegular12"
                >
                  0% Complete
                </Text>
                <div className="flex items-center justify-end mb-8 h-screen">
                  <div className="bg-orange-400 text-white px-4 py-2 rounded text-xl font-bold shadow-lg">
                    Ksh. 300
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FrameFourPage;
