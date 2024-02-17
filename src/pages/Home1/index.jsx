import React from "react";

import { Button, Img, Input, List, PagerIndicator, Text } from "components";

const Home1Page = () => {
  return (
    <>
      <div
        className="bg-black-900 bg-cover bg-no-repeat flex flex-col font-poppins h-[5228px] items-center justify-start mx-auto p-[49px] md:px-10 sm:px-5 w-full"
        style={{ backgroundImage: "url('images/img_home.png')" }}
      >
        <div className="flex flex-col items-start justify-start max-w-[1180px] mb-[147px] mx-auto w-full">
          <header className="flex md:flex-col flex-row md:gap-5 items-center justify-center md:ml-[0] ml-[5px] w-full">
            <PagerIndicator
              className="flex h-[19px] w-16"
              count={3}
              activeCss="inline-block cursor-pointer rounded-[50%] h-[19px] bg-deep_orange-600 w-[19px]"
              activeIndex={1}
              inactiveCss="inline-block cursor-pointer rounded-[50%] h-[19px] bg-deep_orange-600 w-[19px]"
              selectedWrapperCss="inline-block md:ml-[0] mx-[1.17px]"
              unselectedWrapperCss="inline-block md:ml-[0] mx-[1.17px]"
            />
            <ul className="flex sm:flex-col flex-row gap-[41px] sm:hidden items-start justify-start md:ml-[0] ml-[542px] w-auto common-row-list">
              <li>
                <a
                  href="javascript:"
                  className="hover:font-semibold text-deep_orange-600 text-sm"
                >
                  <Text size="txtPoppinsSemiBold14">Home</Text>
                </a>
              </li>
              <li>
                <a
                  href="javascript:"
                  className="hover:font-semibold hover:text-deep_orange-600 text-sm text-white-A700 tracking-[0.28px]"
                >
                  <Text size="txtPoppinsRegular14">About Us</Text>
                </a>
              </li>
              <li>
                <a
                  href="javascript:"
                  className="hover:font-semibold hover:text-deep_orange-600 text-sm text-white-A700 tracking-[0.42px]"
                >
                  <Text size="txtPoppinsRegular14">Portfolio</Text>
                </a>
              </li>
              <li>
                <a
                  href="javascript:"
                  className="hover:font-semibold hover:text-deep_orange-600 text-sm text-white-A700 tracking-[0.42px]"
                >
                  <Text size="txtPoppinsRegular14">Testimony</Text>
                </a>
              </li>
              <li>
                <a
                  href="javascript:"
                  className="hover:font-semibold hover:text-deep_orange-600 text-sm text-white-A700 tracking-[0.42px]"
                >
                  <Text size="txtPoppinsRegular14">News</Text>
                </a>
              </li>
              <li>
                <a
                  href="javascript:"
                  className="hover:font-semibold hover:text-deep_orange-600 text-sm text-white-A700 tracking-[0.42px]"
                >
                  <Text size="txtPoppinsRegular14">Contact</Text>
                </a>
              </li>
            </ul>
          </header>
          <div className="flex flex-col items-center justify-start mt-[104px] w-full">
            <div className="flex flex-col md:gap-10 gap-[110px] items-center justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                <div className="flex md:flex-1 flex-col items-start justify-start w-[46%] md:w-full">
                  <Text
                    className="text-sm text-white-A700 tracking-[0.70px] uppercase"
                    size="txtPoppinsMedium14"
                  >
                    Creative work, creative mind
                  </Text>
                  <Text
                    className="leading-[76.00px] mt-[9px] md:text-5xl text-6xl text-white-A700"
                    size="txtPoppinsSemiBold60"
                  >
                    <>
                      We Are Digital
                      <br />
                      Creative Agency
                    </>
                  </Text>
                  <Text
                    className="leading-[29.00px] mt-[63px] text-lg text-white-A700_99 w-[95%] sm:w-full"
                    size="txtPoppinsRegular18"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabi sed metus id et viverra augue.
                  </Text>
                  <Button
                    className="cursor-pointer font-medium min-w-[163px] mt-14 rounded-[15px] text-center text-sm"
                    color="indigo_A200"
                    size="xs"
                  >
                    Get in Touch
                  </Button>
                </div>
                <div className="bg-gray-500 h-[550px] md:ml-[0] ml-[74px] rounded-[18px] w-[34%]"></div>
                <div className="bg-gray-500 h-[550px] ml-5 md:ml-[0] rounded-[18px] w-[13%]"></div>
              </div>
              <div className="md:gap-10 gap-[75px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between w-[99%] md:w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-row gap-5 items-start justify-between w-full">
                    <Button
                      className="flex h-[70px] items-center justify-center mb-[30px] rounded-[17px] w-[70px]"
                      color="yellow_700"
                      size="xs"
                    >
                      <Img
                        className="h-[38px]"
                        src="images/img_user.svg"
                        alt="user_One"
                      />
                    </Button>
                    <div className="flex flex-col gap-1.5 items-start justify-start">
                      <Text
                        className="text-lg text-yellow-700"
                        size="txtPoppinsMedium18"
                      >
                        Design
                      </Text>
                      <Text
                        className="leading-[22.00px] text-sm text-white-A700_7f w-full"
                        size="txtPoppinsRegular14WhiteA7007f"
                      >
                        Lorem ipsum dolor sit amet, conse adipiscing elit.
                        Curabi sed metus id et viverra augue.
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-row gap-5 items-start justify-between w-full">
                    <Img
                      className="h-[70px] w-[70px]"
                      src="images/img_calendar.svg"
                      alt="calendar"
                    />
                    <div className="flex flex-col gap-1.5 items-start justify-start">
                      <Text
                        className="text-deep_orange-600 text-lg"
                        size="txtPoppinsMedium18Deeporange600"
                      >
                        Development
                      </Text>
                      <Text
                        className="leading-[22.00px] text-sm text-white-A700_7f w-full"
                        size="txtPoppinsRegular14WhiteA7007f"
                      >
                        Lorem ipsum dolor sit amet, conse adipiscing elit.
                        Curabi sed metus id et viverra augue.
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-row gap-5 items-start justify-between w-full">
                    <div className="bg-cyan-900 md:h-[58px] h-[70px] mb-[30px] p-5 relative rounded-[17px] w-[70px]">
                      <Img
                        className="absolute h-[26px] right-[29%] top-[29%] w-[26px]"
                        src="images/img_checkmark.svg"
                        alt="checkmark"
                      />
                      <Img
                        className="absolute h-7 inset-[0] justify-center m-auto w-7"
                        src="images/img_vector.svg"
                        alt="vector"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5 items-start justify-start">
                      <Text
                        className="text-cyan-900 text-lg"
                        size="txtPoppinsMedium18Cyan900"
                      >
                        Testing & QA
                      </Text>
                      <Text
                        className="leading-[22.00px] text-sm text-white-A700_7f w-full"
                        size="txtPoppinsRegular14WhiteA7007f"
                      >
                        Lorem ipsum dolor sit amet, conse adipiscing elit.
                        Curabi sed metus id et viverra augue.
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start mt-[239px] w-[91%] md:w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <div className="bg-gray-500 h-[500px] rounded-[42px] w-[45%]"></div>
              <div className="flex flex-col items-start justify-start">
                <Text
                  className="text-sm text-white-A700 tracking-[0.70px] uppercase"
                  size="txtPoppinsMedium14"
                >
                  About Us
                </Text>
                <Text
                  className="leading-[61.00px] mt-5 text-5xl sm:text-[38px] md:text-[44px] text-white-A700"
                  size="txtPoppinsSemiBold48"
                >
                  <>
                    Design & Develop
                    <br />
                    For Better Solution
                  </>
                </Text>
                <Text
                  className="leading-[25.00px] mt-[55px] text-sm text-white-A700_7f tracking-[0.42px] w-full"
                  size="txtPoppinsRegular14WhiteA7007f"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Commodo amet posuere porta vitae mi accumsan. Ultricies
                  mauris, habitasse nec mauris sagittis imperdiet lobortis
                  porttitor. Ipsum mi sed uta aliquet ut. Turpis viverra
                  volutpat sed eu porta morbi egesta ut hac rutrum ut augue
                  vitae, nec, ut. Nibh nibh quam
                </Text>
                <div className="h-[49px] md:h-[98px] mt-[49px] pr-[9px] relative w-[33%]">
                  <div className="bg-indigo-A200 h-[49px] my-auto rounded-[15px] w-[95%]"></div>
                  <a
                    href="javascript:"
                    className="absolute h-max inset-y-[0] left-[22%] my-auto text-sm text-white-A700 tracking-[0.28px]"
                  >
                    <Text size="txtPoppinsMedium14">Learn More</Text>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start mt-[219px] w-full">
            <div className="flex flex-col md:gap-10 gap-[97px] items-center justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between w-full">
                <div className="flex flex-col items-start justify-start">
                  <Text
                    className="text-sm text-white-A700 tracking-[0.70px] uppercase"
                    size="txtPoppinsMedium14"
                  >
                    Portfolio
                  </Text>
                  <Text
                    className="mt-0.5 text-5xl sm:text-[38px] md:text-[44px] text-white-A700"
                    size="txtPoppinsSemiBold48"
                  >
                    View Our Case Studies
                  </Text>
                </div>
                <div className="flex md:flex-1 flex-col gap-[11px] items-start justify-start md:mt-0 mt-[11px] w-[45%] md:w-full">
                  <Text
                    className="leading-[25.00px] text-black-900_7f text-sm tracking-[0.42px] w-full"
                    size="txtPoppinsRegular14Black9007f"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Commodo amet posuere porta vitae mi accumsan. Ultricies
                    mauris, hab
                  </Text>
                  <div className="flex flex-row gap-[9px] items-center justify-start w-[18%] md:w-full">
                    <a
                      href="javascript:"
                      className="text-indigo-A200 text-sm tracking-[0.84px] uppercase"
                    >
                      <Text size="txtPoppinsMedium14IndigoA200">VIEw All</Text>
                    </a>
                    <Img
                      className="h-2.5"
                      src="images/img_arrowleft.svg"
                      alt="arrowleft"
                    />
                  </div>
                </div>
              </div>
              <List
                className="sm:flex-col flex-row gap-10 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-[99%]"
                orientation="horizontal"
              >
                <div className="bg-gray-500 flex flex-col items-end justify-end p-[29px] sm:px-5 rounded-[31px] w-full">
                  <Button
                    className="flex h-[49px] items-center justify-center mt-[373px] w-[49px]"
                    shape="round"
                  >
                    <Img src="images/img_arrowright.svg" alt="arrowright" />
                  </Button>
                </div>
                <div className="bg-gray-500 flex flex-col items-end justify-end p-[29px] sm:px-5 rounded-[31px] w-full">
                  <Button
                    className="flex h-[49px] items-center justify-center mt-[373px] w-[49px]"
                    shape="round"
                  >
                    <Img src="images/img_arrowright.svg" alt="arrowright" />
                  </Button>
                </div>
                <div className="bg-gray-500 flex flex-col items-end justify-end p-[29px] sm:px-5 rounded-[31px] w-full">
                  <Button
                    className="flex h-[49px] items-center justify-center mt-[373px] w-[49px]"
                    shape="round"
                  >
                    <Img src="images/img_arrowright.svg" alt="arrowright" />
                  </Button>
                </div>
              </List>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start md:ml-[0] ml-[93px] mt-[219px] w-[82%] md:w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <Text
                className="text-center text-sm text-white-A700 tracking-[0.70px] uppercase"
                size="txtPoppinsMedium14"
              >
                Testimony
              </Text>
              <Text
                className="leading-[61.00px] mt-2.5 text-5xl sm:text-[38px] md:text-[44px] text-center text-white-A700 w-[66%] sm:w-full"
                size="txtPoppinsSemiBold48"
              >
                What Do Our Clients Says About Us
              </Text>
              <div className="flex flex-row sm:gap-10 items-start justify-between mt-[43px] w-full">
                <div className="bg-gray-500 h-[60px] rounded-[50%] w-[60px]"></div>
                <div className="bg-gray-500 h-10 mb-[21px] rotate-[180deg] rounded-[50%] w-10"></div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-3 w-[96%] md:w-full">
                <div className="bg-gray-500 h-10 mb-[93px] md:mt-0 mt-[283px] rounded-[50%] w-10"></div>
                <div className="flex flex-col items-center justify-start">
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
                    <div className="bg-gray-500 h-10 mb-[150px] sm:mt-0 mt-[98px] rounded-[50%] w-10"></div>
                    <div className="h-72 md:h-[265px] relative w-[67%] sm:w-full">
                      <div className="absolute backdrop-opacity-[0.5] bg-gradient  blur-[70.00px] flex flex-col h-[266px] inset-x-[0] items-center justify-start mx-auto p-[9px] rounded-[50%] top-[0] w-[266px]">
                        <div className="bg-deep_orange-600 flex flex-col h-[117px] items-center justify-end mb-[131px] p-2 rounded-[58px] w-[117px]">
                          <div className="bg-gray-500 h-[100px] rounded-[50%] w-[100px]"></div>
                        </div>
                      </div>
                      <Text
                        className="absolute bottom-[0] inset-x-[0] leading-[22.00px] mx-auto text-center text-sm text-white-A700 w-full"
                        size="txtPoppinsRegular14"
                      >
                        <>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Est ullamcorper mattis lacus eu, ornare
                          imperdiet men sana in condimentum. Viverra id tortor
                          enim posuere nullam. Vitae tincidunt bibendum quis at
                          viverra etiam enim dictum teb. Sit non accumsan
                          tempus, eu suspendisse quis.
                        </>
                      </Text>
                    </div>
                    <div className="bg-gray-500 h-10 mb-[175px] sm:mt-0 mt-[73px] rotate-[180deg] rounded-[50%] w-10"></div>
                  </div>
                  <Text
                    className="mt-[26px] text-center text-sm text-white-A700 uppercase"
                    size="txtPoppinsMedium14"
                  >
                    James Jokovic
                  </Text>
                  <Text
                    className="text-center text-white-A700 text-xs uppercase"
                    size="txtPoppinsRegular12"
                  >
                    IT Consultant
                  </Text>
                  <PagerIndicator
                    className="flex h-3 justify-center mt-[49px] w-[71px]"
                    count={4}
                    activeCss="inline-block cursor-pointer rounded-[50%] h-3 bg-deep_orange-600 w-3"
                    activeIndex={1}
                    inactiveCss="inline-block cursor-pointer rounded-[50%] h-2.5 bg-white-A700 w-2.5"
                    selectedWrapperCss="inline-block md:ml-[0] mx-[4.50px] sm:ml-[0]"
                    unselectedWrapperCss="inline-block md:ml-[0] mx-[4.50px] sm:ml-[0]"
                  />
                </div>
                <div className="bg-gray-500 h-[60px] mb-[82px] md:mt-0 mt-[274px] rotate-[180deg] rounded-[50%] w-[60px]"></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start ml-2.5 md:ml-[0] mt-[197px] w-[99%] md:w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <Text
                className="text-center text-sm text-white-A700 tracking-[0.70px] uppercase"
                size="txtPoppinsMedium14"
              >
                Blog
              </Text>
              <Text
                className="mt-[3px] text-5xl sm:text-[38px] md:text-[44px] text-center text-deep_orange-600 tracking-[1.44px]"
                size="txtPoppinsSemiBold48Deeporange600"
              >
                Read OurNews
              </Text>
              <div className="gap-[39px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between mt-[75px] w-full">
                <div className="bg-gray-500 h-[241px] rounded-[24px] w-full"></div>
                <div className="bg-gray-500 h-[241px] rounded-[24px] w-full"></div>
                <div className="bg-gray-500 h-[241px] rounded-[24px] w-full"></div>
              </div>
              <List
                className="sm:flex-col flex-row md:gap-10 gap-[111px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center mt-[29px] w-[94%]"
                orientation="horizontal"
              >
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-row gap-[15px] items-start justify-start w-[54%] md:w-full">
                    <Text
                      className="text-white-A700_99 text-xs"
                      size="txtPoppinsMedium12"
                    >
                      09 April,2022
                    </Text>
                    <Text
                      className="text-white-A700_99 text-xs"
                      size="txtPoppinsMedium12"
                    >
                      by Admin
                    </Text>
                  </div>
                  <Text
                    className="leading-[22.00px] mt-2.5 text-sm text-white-A700 w-full"
                    size="txtPoppinsRegular14"
                  >
                    Lorem ipsum dolor sit amet, consecte adipiscing elit ut
                    aliquam{" "}
                  </Text>
                  <Text
                    className="mt-4 text-indigo-A200 text-sm"
                    size="txtPoppinsRegular14IndigoA200"
                  >
                    Read More
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-row gap-[15px] items-start justify-start w-[54%] md:w-full">
                    <Text
                      className="text-white-A700_99 text-xs"
                      size="txtPoppinsMedium12"
                    >
                      09 April,2022
                    </Text>
                    <Text
                      className="text-white-A700_99 text-xs"
                      size="txtPoppinsMedium12"
                    >
                      by Admin
                    </Text>
                  </div>
                  <Text
                    className="leading-[22.00px] mt-2.5 text-sm text-white-A700 w-full"
                    size="txtPoppinsRegular14"
                  >
                    Lorem ipsum dolor sit amet, consecte adipiscing elit ut
                    aliquam{" "}
                  </Text>
                  <Text
                    className="mt-4 text-indigo-A200 text-sm"
                    size="txtPoppinsRegular14IndigoA200"
                  >
                    Read More
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-row gap-[15px] items-start justify-start w-[54%] md:w-full">
                    <Text
                      className="text-white-A700_99 text-xs"
                      size="txtPoppinsMedium12"
                    >
                      09 April,2022
                    </Text>
                    <Text
                      className="text-white-A700_99 text-xs"
                      size="txtPoppinsMedium12"
                    >
                      by Admin
                    </Text>
                  </div>
                  <Text
                    className="leading-[22.00px] mt-2.5 text-sm text-white-A700 w-full"
                    size="txtPoppinsRegular14"
                  >
                    Lorem ipsum dolor sit amet, consecte adipiscing elit ut
                    aliquam{" "}
                  </Text>
                  <Text
                    className="mt-4 text-indigo-A200 text-sm"
                    size="txtPoppinsRegular14IndigoA200"
                  >
                    Read More
                  </Text>
                </div>
              </List>
            </div>
          </div>
          <div className="bg-gradient1  flex md:flex-col flex-row gap-[39px] items-center justify-center md:ml-[0] ml-[11px] mt-[164px] p-[86px] md:px-10 sm:px-5 rounded-[30px] w-[99%] md:w-full">
            <Text
              className="leading-[51.00px] md:ml-[0] ml-[125px] md:mt-0 mt-3.5 sm:text-4xl md:text-[38px] text-[40px] text-white-A700 w-[55%] sm:w-full"
              size="txtPoppinsSemiBold40"
            >
              We Like To Start Your Project With Us
            </Text>
            <Button className="cursor-pointer font-semibold min-w-[164px] mr-[123px] md:mt-0 my-[39px] rounded-[12px] text-center text-sm tracking-[0.28px]">
              Get in Touch
            </Button>
          </div>
          <div className="flex flex-col items-center justify-start md:ml-[0] ml-[11px] mt-[159px] w-[99%] md:w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
              <PagerIndicator
                className="flex h-[19px] md:mt-0 mt-[7px] w-16"
                count={3}
                activeCss="inline-block cursor-pointer rounded-[50%] h-[19px] bg-blue_gray-800 w-[19px]"
                activeIndex={1}
                inactiveCss="inline-block cursor-pointer rounded-[50%] h-[19px] bg-blue_gray-800 w-[19px]"
                selectedWrapperCss="inline-block md:ml-[0] mx-[1.17px] sm:ml-[0]"
                unselectedWrapperCss="inline-block md:ml-[0] mx-[1.17px] sm:ml-[0]"
              />
              <div className="flex flex-col items-start justify-start md:ml-[0] ml-[148px]">
                <Text
                  className="text-lg text-white-A700"
                  size="txtPoppinsMedium18WhiteA700"
                >
                  Our Contact
                </Text>
                <Text
                  className="mt-[30px] text-sm text-white-A700_b2"
                  size="txtPoppinsRegular14WhiteA700b2"
                >
                  Office: 4042 Imperial Road, UK
                </Text>
                <Text
                  className="mt-3.5 text-sm text-white-A700_b2"
                  size="txtPoppinsRegular14WhiteA700b2"
                >
                  Help; (0411) 425 277 / 425
                </Text>
                <Text
                  className="mt-[17px] text-sm text-white-A700_b2"
                  size="txtPoppinsRegular14WhiteA700b2"
                >
                  Email: inbox@finance.com
                </Text>
              </div>
              <div className="flex flex-col gap-[25px] items-start justify-start md:ml-[0] ml-[115px]">
                <Text
                  className="text-lg text-white-A700"
                  size="txtPoppinsMedium18WhiteA700"
                >
                  About Us
                </Text>
                <Text
                  className="leading-[24.00px] text-sm text-white-A700_b2 w-full"
                  size="txtPoppinsRegular14WhiteA700b2"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Commodo amet posuere porta vitae mi accumsan. Ultricies{" "}
                </Text>
              </div>
              <div className="flex md:flex-1 flex-col gap-[27px] justify-start md:ml-[0] ml-[122px] w-1/4 md:w-full">
                <div className="flex flex-col gap-[17px] justify-start w-full">
                  <Text
                    className="ml-2.5 md:ml-[0] text-lg text-white-A700"
                    size="txtPoppinsMedium18WhiteA700"
                  >
                    Subscribe
                  </Text>
                  <Input
                    name="groupThree"
                    placeholder="Your Email"
                    className="p-0 placeholder:text-black-900_cc text-left text-sm w-full"
                    wrapClassName="flex w-full"
                    type="email"
                    suffix={
                      <Img
                        className="mt-px mb-auto h-5 ml-[35px]"
                        src="images/img_fluentsend20filled.svg"
                        alt="fluent:send-20-filled"
                      />
                    }
                  ></Input>
                </div>
                <div className="flex flex-col gap-3 items-start justify-start md:ml-[0] ml-[7px] w-[38%] md:w-full">
                  <Text
                    className="md:ml-[0] ml-[3px] text-lg text-white-A700"
                    size="txtPoppinsMedium18WhiteA700"
                  >
                    Follow Us
                  </Text>
                  <div className="flex flex-row items-center justify-between w-full">
                    <Img
                      className="h-[26px] w-[26px]"
                      src="images/img_bxlfacebooksquare.svg"
                      alt="bxlfacebooksqua"
                    />
                    <Img
                      className="h-[23px]"
                      src="images/img_fa6brandstwittersquare.svg"
                      alt="fa6brandstwitte"
                    />
                    <Img
                      className="h-[22px] w-[22px]"
                      src="images/img_akariconsinstagramfill.svg"
                      alt="akariconsinstag"
                    />
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

export default Home1Page;
