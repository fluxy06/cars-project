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

const Header: React.FC<HeaderProps> = ({logo, onClick}) => {
        return(
            <header className="w-full h-[clamp(100px,50vw,124px)]">
                <div className="flex w-full justify-between">
                    <section className="flex justify-between items-center gap-20">
                            <h1 className="text-[clamp(14px,10vw,40px)] font-semibold text-[#3563E9]">{logo}</h1>
                            <SearchBar onclick={onClick}/>
                    </section>
                        <section className="flex px-10 gap-20 justify-end items-center">
                            <div className="grid justify-center items-center rounded-2xl bg-white border-[#C3D4E9] border-[0.3px] inset w-[clamp(30px,3vw,40px)] h-[clamp(30px,3vw,40px)]">
                                    <Icon 
                                    path={HeartIcon} 
                                    isUse={true}
                                    flagAnimation={true}
                                    width={{min: "16px", preferred: "2vw", max: "24px"}}
                                    height={{min: "16px", preferred: "2vw", max: "24px"}}
                                    />
                            </div>
                            <div className="grid justify-center items-center rounded-2xl bg-white border-[#C3D4E9] border-[0.3px] inset w-[clamp(30px,3vw,40px)] h-[clamp(30px,3vw,40px)]">
                                <Icon 
                                path={NotificationIcon} 
                                 isUse={true}
                                flagAnimation={true}
                                 width={{min: "16px", preferred: "2vw", max: "24px"}}
                                height={{min: "16px", preferred: "2vw", max: "24px"}}
                                />
                            </div>
                            <div className="grid justify-center items-center rounded-2xl bg-white border-[#C3D4E9] border-[0.3px] inset w-[clamp(30px,3vw,40px)] h-[clamp(30px,3vw,40px)]">
                                <Icon 
                                path={SettingIcon} 
                                isUse={true}
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


export default Header