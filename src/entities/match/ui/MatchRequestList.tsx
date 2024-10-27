import { useLayoutEffect, useRef } from "react";

import { FlexDiv } from "@shared/ui";

import { useTheme } from "@emotion/react";
import { useQuery } from "@tanstack/react-query";

import { useMatchRequests } from "../model/store";
import { MatchUpdateCard } from "./MatchUpdateCard/MatchUpdateCard";

export const MatchRequestList = () => {
    const theme = useTheme();
    const { getMatchRequests } = useMatchRequests();
    const { data: matchRequests } = useQuery({
        queryKey: ["test23"],
        queryFn: getMatchRequests,
        initialData: { matchRequests: [] },
        initialDataUpdatedAt: 0,
    });
    const scrollElement = useRef<HTMLDivElement>(null);
    const mirrorScrollElement = useRef<HTMLDivElement>(null);
    const mirrorScrollChild = useRef<HTMLDivElement>(null);
    useLayoutEffect(() => {
        if (scrollElement.current && mirrorScrollChild.current && mirrorScrollElement.current) {
            const targetElement = scrollElement.current;
            const mirrorElement = mirrorScrollElement.current;
            const mirrorChild = mirrorScrollChild.current;
            const updateScroll = () => {
                if (targetElement.scrollHeight > targetElement.clientHeight) {
                    mirrorElement.style.right = `5px`;
                    mirrorElement.style.top = `105px`;
                    mirrorElement.style.height = `${targetElement.offsetHeight}px`;
                    mirrorChild.style.height = `${targetElement.scrollHeight}px`;
                    mirrorElement.style.display = "block";
                } else {
                    mirrorElement.style.display = "none";
                }
            };
            const scrollEvent = () => {
                mirrorElement.scrollTo({ top: targetElement.scrollTop });
            };
            const scrollEvent2 = () => {
                targetElement.scrollTo({ top: mirrorElement.scrollTop });
            };
            const observer = new ResizeObserver(updateScroll);
            observer.observe(targetElement);
            targetElement.addEventListener("scroll", scrollEvent);
            mirrorElement.addEventListener("scroll", scrollEvent2);

            return () => {
                observer.unobserve(targetElement);
                targetElement.removeEventListener("scroll", scrollEvent);
                mirrorElement.removeEventListener("scroll", scrollEvent2);
            };
        }
    }, []);

    return (
        <>
            <FlexDiv
                direction="column"
                justifyContent="flex-start"
                gap={10}
                css={{
                    position: "relative",
                    overflowY: "auto",
                    paddingTop: "10px 20px",
                    "&::-webkit-scrollbar": {
                        display: "none",
                    },
                    padding: "10px 20px",
                }}
                ref={scrollElement}
            >
                {matchRequests.matchRequests.map((aMatchRequest) => (
                    <MatchUpdateCard
                        key={`match-request-${aMatchRequest.id}`}
                        matchRequest={aMatchRequest}
                    />
                ))}
            </FlexDiv>
            <div
                css={{
                    position: "absolute",
                    width: "10px",
                    overflowY: "auto",
                    "&::-webkit-scrollbar": {
                        width: "10px",
                    },
                    "&::-webkit-scrollbar-thumb": {
                        backgroundColor: theme.palette.grey[1],
                        borderRadius: "100px",
                    },
                    "&::-webkit-scrollbar-track": {
                        backgroundColor: "transparent",
                    },
                    "&::-webkit-scrollbar-corner": {
                        background: "traansparent",
                    },
                }}
                ref={mirrorScrollElement}
            >
                <div css={{ width: "1px", visibility: "hidden" }} ref={mirrorScrollChild} />
            </div>
        </>
    );
};
