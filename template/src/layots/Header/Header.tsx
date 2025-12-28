import SearchBar from "@features/SearchBar/SearchBar";
import Icon from "@shared/Icon/icon";
import React from "react";
import HeartIcon from "@assets/icons/heart.svg?url"
import NotificationIcon from "@assets/icons/notification.svg?url"
import SettingIcon from "@assets/icons/setting.svg?url"


type HeaderProps = {
    logo?: string
    onClick?: () => void
}

const HeaderMy: React.FC<HeaderProps> = ({logo, onClick}) => {
        return(
            <header className="inline  w-full h-[clamp(100px,50vw,124px)] items-center pt-10 border-b-[0.3px]">
                <div className="flex w-full justify-between gap-">
                    <section className="flex justify-between items-center gap-16">
                            <h1 className="text-[clamp(14px,10vw,40px)] font-bold text-[#3563E9]">{logo}</h1>
                            <SearchBar onclick={onClick}/>
                    </section>
                        <section className="flex px-10 gap-5 justify-end items-center">
                            <div className="grid justify-center items-center rounded-2xl bg-white border-[#C3D4E9] border-[0.3px] inset w-[clamp(30px,3vw,40px)] h-[clamp(30px,3vw,40px)]">
                                    <Icon 
                                    path={HeartIcon} 
                                    isUse={false}
                                    flagAnimation={true}
                                    width={{min: "16px", preferred: "2vw", max: "24px"}}
                                    height={{min: "16px", preferred: "2vw", max: "24px"}}
                                    />
                            </div>
                            <div className="grid justify-center items-center rounded-2xl bg-white border-[#C3D4E9] border-[0.3px] inset w-[clamp(30px,3vw,40px)] h-[clamp(30px,3vw,40px)]">
                                <Icon 
                                path={NotificationIcon} 
                                 isUse={false}
                                flagAnimation={true}
                                 width={{min: "16px", preferred: "2vw", max: "24px"}}
                                height={{min: "16px", preferred: "2vw", max: "24px"}}
                                />
                            </div>
                            <div className="grid justify-center items-center rounded-2xl bg-white border-[#C3D4E9] border-[0.3px] inset w-[clamp(30px,3vw,40px)] h-[clamp(30px,3vw,40px)]">
                                <Icon 
                                path={SettingIcon} 
                                isUse={false}
                                flagAnimation={true}
                                 width={{min: "16px", preferred: "2vw", max: "24px"}}
                                height={{min: "16px", preferred: "2vw", max: "24px"}}
                                />
                            </div>
                        </section>
                </div>
            </header>
        )
}


export default HeaderMy