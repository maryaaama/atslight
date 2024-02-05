import "@mantine/carousel/styles.css";
import { Carousel } from "@mantine/carousel";
import { MantineProvider } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { FaCheck as NextIcon, FaTimes as PrevIcon } from "react-icons/fa";
import { useState } from "react";
import Logo from "../../image/logo.png";

export default function Slider() {
  const navigate = useNavigate();
  const [first, setFirst] = useState(1);

  const [currentSlide, setCurrentSlide] = useState(0);
  const handleLastSlideClick = () => {
    setFirst(0);
    if (currentSlide === 2) {
      navigate("/signin");
    }
  };

  return (
    <MantineProvider>
      <div className="h-screen flex">
        <Carousel
          dir="ltr"
          withIndicators
          height={200}
          nextControlIcon={
            <NextIcon
              className="absolute bottom-5 right-3 w-5 text-2xl font-black text-green-700	"
              onClick={handleLastSlideClick}
            />
          }
          previousControlIcon={
            <PrevIcon
              className={`absolute left-3 bottom-5 text-2xl text-red-700 ${
                first && "opacity-0 cursor-default"
              }`}
            />
          }
          className="w-full h-full flex-1"
          onSlideChange={(slideIndex) => {
            setCurrentSlide(slideIndex);
          }}
        >
          <Carousel.Slide className="bg-yellow-300/100 w-9 h-screen flex justify-center items-center text-center">
            <div className="w-full lg:w-1/2 h-80 overflow-hidden ">
              <img src={Logo} alt="..." className="m-auto w-36" />
              <h1 className="font-bold pb-4 text-white">بازار کار</h1>
              <p className="px-5 text-white text-sm">
                موتور جستجوی مشاغل ایران به صورت هوشمند تمامی آگهی های شغلی را
                از منابع مختلف جمع آوری می کند
              </p>
            </div>
          </Carousel.Slide>
          <Carousel.Slide className="bg-sky-500/75 w-9 h-screen flex justify-center items-center text-center">
            <div className="w-full lg:w-1/2 h-80 overflow-hidden">
              <img src={Logo} alt="..." className="m-auto w-36" />
              <h1 className="font-bold pb-4 text-white">کارجو پلاس</h1>
              <p className="px-5 text-white text-sm">
                شبکه اجتماعی کارجوپلاس به کارجوها و کارفرمایان در مراحل مخلتف
                استخدام مانند نوشتن رزومه، جستجوی کارجو، موتور جستجوی آگهی،
                تحلیل بازار کار و تست های شخصیت شناسی و آزمون های مهارت های نرم
                و فروم تخصصی کار خدمات ارائه می کند و به آن ها کمک می کند تا
                زمان و هزینه کمتری در مراحل استخدام صرف کنند
              </p>
            </div>
          </Carousel.Slide>
          <Carousel.Slide
            className="bg-orange-300 w-9 h-screen flex justify-center items-center text-center"
            onClick={handleLastSlideClick}
            id="last"
          >
            <div className="w-full lg:w-1/2 h-80 overflow-hidden">
              <img src={Logo} alt="..." className="m-auto w-36" />
              <h1 className="font-bold pb-4 text-white">استخدام</h1>
              <p className="px-5 text-white text-sm">
                استودیو کارجو+ جایی است که مجموعه ای از خدمات و نرم افزار های
                کاربردی در حوزه منابع انسانی و استخدام توسعه داده می شود
              </p>
            </div>
          </Carousel.Slide>
        </Carousel>
      </div>
    </MantineProvider>
  );
}
