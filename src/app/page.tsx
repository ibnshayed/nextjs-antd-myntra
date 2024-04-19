/* eslint-disable @next/next/no-img-element */
"use client";
import {
  HeartOutlined,
  SearchOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Carousel, ConfigProvider, Input } from "antd";

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "360px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

export default function Home() {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return (
    <div>
      {/* header start */}
      <div className="px-20 py-5 flex items-center space-x-20 shadow-md">
        <div>
          <p className="text-4xl text-pink-800">M</p>
        </div>

        <div className="space-x-5 font-bold text-sm">
          <a href="">MEN</a>
          <a href="">WOMEN</a>
          <a href="">KIDS</a>
          <a href="">HOME & LIVING</a>
          <a href="">BEAUTY</a>
          <a href="">
            STUDIO{" "}
            <small>
              <sup>NEW</sup>
            </small>
          </a>
        </div>

        <div>
          <Input
            placeholder="Enter your username"
            prefix={<SearchOutlined />}
            size="large"
            className="rounded-[4px] w-[400px]"
          />
        </div>

        <div className="flex items-center space-x-6 text-sm font-semibold">
          <div className="flex flex-col justify-center items-center">
            <UserOutlined className="text-xl" />
            <p>Profile</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <HeartOutlined className="text-xl" />
            <p>Wishlist</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <ShoppingOutlined className="text-xl" />
            <p>Bag</p>
          </div>
        </div>
      </div>
      {/* header end */}

      {/* banner start */}
      <div className="p-10">
        <ConfigProvider
          theme={{
            components: {
              Carousel: {
                dotActiveWidth: 12,
                dotWidth: 12,
                dotHeight: 12,
                colorBgContainer: "gray",
              },
            },
          }}
        >
          <Carousel
            afterChange={onChange}
            autoplay
            dotPosition="bottom"
            dots={{ className: "-bottom-8" }}
          >
            <div className="m-0 h-[400px]">
              <img
                src={
                  "https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2024/4/15/4b89d243-7166-4074-be50-dd93d458df981713194832826-Sale.jpg"
                }
                alt={"banner1"}
                className="object-fill h-full w-full"
              />
            </div>
            <div className="m-0 h-[400px]">
              <img
                src={
                  "https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/b656a7f4-4688-4997-bb7c-54b78793981e1658752386588-Western-Wear_Desk.jpg"
                }
                alt={"banner2"}
                className="object-fill h-full w-full"
              />
            </div>
            <div className="m-0 h-[400px]">
              <img
                src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/179e278f-77ee-44c2-bf39-9f00b0cd08e01658752429301-Handbags_Desk.jpg"
                alt={"banner3"}
                className="object-fill h-full w-full"
              />
            </div>
            <div className="m-0 h-[400px]">
              <img
                src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/31/4031994d-9092-4aa7-aea1-f52f2ae5194f1654006594976-Activewear_DK.jpg"
                alt="banner4"
                className="object-fill h-full w-full"
              />
            </div>
            <div className="m-0 h-[400px]">
              <img
                src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/31/4031994d-9092-4aa7-aea1-f52f2ae5194f1654006594976-Activewear_DK.jpg"
                alt="banner5"
                className="object-fill h-full w-full"
              />
            </div>
            <div className="m-0 h-[400px]">
              <img
                src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/27/53b4daed-cd2c-4111-86c5-14f737eceb351656325318973-Handbags_Desk.jpg"
                alt="banner6"
                className="object-fill h-full w-full"
              />
            </div>
          </Carousel>
        </ConfigProvider>
      </div>
      {/* banner end */}
    </div>
  );
}
