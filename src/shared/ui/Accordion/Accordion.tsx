import { PropsWithChildren, useLayoutEffect, useRef, useState } from "react";

import { Icon } from "@shared/Icon";

import { useTheme } from "@emotion/react";

import { Text } from "../Text/Text";
import { FlexDiv } from "../components/flexDiv";

type AccordionProps = PropsWithChildren<{ label?: string; isOpen: boolean; onClick?: () => void }>;

export const Accordion = ({ children, label, isOpen, onClick }: AccordionProps) => {
    const theme = useTheme();
    const accordionContentRef = useRef<HTMLDivElement>(null);
    const [contentHeight, setContentHeight] = useState<string | undefined>();
    useLayoutEffect(() => {
        if (accordionContentRef.current) {
            const contentHeight = accordionContentRef.current.scrollHeight;
            const paddingHeight = accordionContentRef.current.offsetHeight;
            setContentHeight(`${contentHeight + paddingHeight}px`);
        }
    }, []);

    return (
        <FlexDiv
            direction="column"
            className={isOpen ? "accordion-open" : "accordion-close"}
            css={{
                boxShadow: theme.shadow.cardShadow,
                backgroundColor: theme.palette.common.white,
                borderRadius: "8px",
            }}
            onClick={onClick}
        >
            <FlexDiv
                direction="row"
                justifyContent="space-between"
                css={{ cursor: "pointer", padding: "12px" }}
            >
                <Text typoVariant="supporting/medium" color={theme.palette.common.black}>
                    {label}
                </Text>
                <Icon
                    type="chevron-up"
                    color={theme.palette.primary[6]}
                    css={{
                        transform: isOpen ? "rotate(180deg)" : undefined,
                        transition: "transform 0.3s ease-in-out",
                    }}
                />
            </FlexDiv>
            <FlexDiv
                className={isOpen ? "accordion-open" : "accordion-close"}
                css={{
                    overflow: "hidden",
                    "&.accordion-open": {
                        height: contentHeight,
                        transition: "height 300ms cubic-bezier(0.4, 0, 0.2, 1)",
                    },
                    "&.accordion-close": {
                        height: 0,
                        transition: "height 300ms cubic-bezier(0.4, 0, 0.2, 1)",
                    },
                }}
            >
                <FlexDiv
                    ref={accordionContentRef}
                    direction="row"
                    css={{
                        flexWrap: "wrap",
                        rowGap: "5px",
                        columnGap: "10px",
                        padding: "0 12px 12px",
                    }}
                >
                    {children}
                </FlexDiv>
            </FlexDiv>
        </FlexDiv>
    );
};
