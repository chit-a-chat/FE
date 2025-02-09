import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { useAccountStore } from "@entities/account";

import { Divider, FlexDiv } from "@shared/ui";

import { useTheme } from "@emotion/react";

import { DropdownItem } from "./DropdownItem";
import { DropdownProfile } from "./DropdownProfile";

export const GNBProfileDropdown = () => {
    const theme = useTheme();
    const { logout } = useAccountStore();
    const navigate = useNavigate();
    const { t } = useTranslation("gnb");
    return (
        <FlexDiv
            direction="column"
            css={{
                boxShadow: theme.shadow.cardShadow,
                gap: "10px",
                padding: "10px",
                backgroundColor: theme.palette.common.white,
                borderRadius: "10px",
            }}
        >
            <DropdownProfile />
            <Divider thickness={2} />
            <DropdownItem
                icon="user"
                label={t("profile.myAccount")}
                onClick={() => {
                    navigate("/profile/my-profile");
                }}
            />
            {/* <DropdownItem icon="messagePlus" label="Your calendar" onClick={() => {}} /> */}
            <DropdownItem
                icon="messagePlus"
                label={t("profile.Reviews")}
                onClick={() => {
                    navigate("/profile/reviews");
                }}
            />
            <DropdownItem
                icon="setting"
                label={t("profile.Settings")}
                onClick={() => {
                    navigate("/profile/setting");
                }}
            />
            <Divider thickness={2} />
            <DropdownItem icon="logout" label={t("profile.Logout")} onClick={logout} />
        </FlexDiv>
    );
};
