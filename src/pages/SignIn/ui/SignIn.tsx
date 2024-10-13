import { SignInStatistics } from "@widgets/SignInStatistics";

import { FlexDiv } from "@shared/ui";

import { useTheme } from "@emotion/react";

import { SignInBanner } from "./components/SignInBanner";
import { SignUp } from "./components/SignUp";

export const SignIn = () => {
    const theme = useTheme();
    return (
        <>
            <section
                css={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    margin: "30px",
                    alignItems: "center",
                }}
            >
                <SignInBanner />
                <SignUp />
            </section>
            <section
                css={{
                    flex: 1,
                    display: "flex",
                    borderRadius: "20px",
                    background: `linear-gradient(180deg, ${theme.palette.primary[1]}66 0%, ${theme.palette.blue[1]}66 83%)`,
                    margin: "30px 30px 30px 10px",
                }}
            >
                <SignInStatistics>
                    <SignInStatistics.Card>
                        <FlexDiv gap={6} direction="column" alignItems="start">
                            <SignInStatistics.Card.Title>Total members</SignInStatistics.Card.Title>
                            <FlexDiv gap={2} direction="column" alignItems="start">
                                <SignInStatistics.Card.Value>8.9K</SignInStatistics.Card.Value>
                                <SignInStatistics.Card.SupportText>
                                    (10% increased since Feb)
                                </SignInStatistics.Card.SupportText>
                            </FlexDiv>
                        </FlexDiv>
                        <SignInStatistics.Card.Statistics></SignInStatistics.Card.Statistics>
                    </SignInStatistics.Card>
                    <SignInStatistics.Card>
                        <FlexDiv gap={6} direction="column" alignItems="start">
                            <SignInStatistics.Card.Title>
                                Number of likes
                            </SignInStatistics.Card.Title>
                            <FlexDiv gap={2} direction="column" alignItems="start">
                                <SignInStatistics.Card.Value>10K</SignInStatistics.Card.Value>
                                <SignInStatistics.Card.SupportText>
                                    (10% increased since Feb)
                                </SignInStatistics.Card.SupportText>
                            </FlexDiv>
                        </FlexDiv>
                        <SignInStatistics.Card.Heart></SignInStatistics.Card.Heart>
                    </SignInStatistics.Card>
                    <SignInStatistics.Card>
                        <FlexDiv gap={6} direction="column" alignItems="start">
                            <SignInStatistics.Card.Title>
                                Number of matches
                            </SignInStatistics.Card.Title>
                            <FlexDiv gap={2} direction="column" alignItems="start">
                                <SignInStatistics.Card.Value>7.7K</SignInStatistics.Card.Value>
                                <SignInStatistics.Card.SupportText>
                                    (10% increased since Feb)
                                </SignInStatistics.Card.SupportText>
                            </FlexDiv>
                        </FlexDiv>
                        <SignInStatistics.Card.Arrow></SignInStatistics.Card.Arrow>
                    </SignInStatistics.Card>
                    <SignInStatistics.Card>
                        <FlexDiv gap={10} direction="column" alignItems="start">
                            <SignInStatistics.Card.ReviewContent>
                                “Chit a chat is making my life so enjoyable and exciting! Highly
                                recommend!”
                            </SignInStatistics.Card.ReviewContent>
                            <FlexDiv gap={10} direction="row" justifyContent="start">
                                <SignInStatistics.Card.ProfileImage src="https://images.unsplash.com/photo-1712847331925-bf0e3fd2b7ae?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                                <SignInStatistics.Card.ProfileName>
                                    Nadia Anderson
                                </SignInStatistics.Card.ProfileName>
                            </FlexDiv>
                        </FlexDiv>
                    </SignInStatistics.Card>
                    <SignInStatistics.Card>
                        <FlexDiv gap={6} direction="column" alignItems="start">
                            <SignInStatistics.Card.Title>Total members</SignInStatistics.Card.Title>
                            <FlexDiv gap={2} direction="column" alignItems="start">
                                <SignInStatistics.Card.Value>8.9K</SignInStatistics.Card.Value>
                                <SignInStatistics.Card.SupportText>
                                    (10% increased since Feb)
                                </SignInStatistics.Card.SupportText>
                            </FlexDiv>
                        </FlexDiv>
                        <SignInStatistics.Card.Statistics></SignInStatistics.Card.Statistics>
                    </SignInStatistics.Card>
                    <SignInStatistics.Card>
                        <FlexDiv gap={6} direction="column" alignItems="start">
                            <SignInStatistics.Card.Title>
                                Number of likes
                            </SignInStatistics.Card.Title>
                            <FlexDiv gap={2} direction="column" alignItems="start">
                                <SignInStatistics.Card.Value>10K</SignInStatistics.Card.Value>
                                <SignInStatistics.Card.SupportText>
                                    (10% increased since Feb)
                                </SignInStatistics.Card.SupportText>
                            </FlexDiv>
                        </FlexDiv>
                        <SignInStatistics.Card.Heart></SignInStatistics.Card.Heart>
                    </SignInStatistics.Card>
                    <SignInStatistics.Card>
                        <FlexDiv gap={6} direction="column" alignItems="start">
                            <SignInStatistics.Card.Title>
                                Number of matches
                            </SignInStatistics.Card.Title>
                            <FlexDiv gap={2} direction="column" alignItems="start">
                                <SignInStatistics.Card.Value>7.7K</SignInStatistics.Card.Value>
                                <SignInStatistics.Card.SupportText>
                                    (10% increased since Feb)
                                </SignInStatistics.Card.SupportText>
                            </FlexDiv>
                        </FlexDiv>
                        <SignInStatistics.Card.Arrow></SignInStatistics.Card.Arrow>
                    </SignInStatistics.Card>
                    <SignInStatistics.Card>
                        <FlexDiv gap={10} direction="column" alignItems="start">
                            <SignInStatistics.Card.ReviewContent>
                                “Chit a chat is making my life so enjoyable and exciting! Highly
                                recommend!”
                            </SignInStatistics.Card.ReviewContent>
                            <FlexDiv gap={10} direction="row" justifyContent="start">
                                <SignInStatistics.Card.ProfileImage src="https://images.unsplash.com/photo-1712847331925-bf0e3fd2b7ae?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                                <SignInStatistics.Card.ProfileName>
                                    Nadia Anderson
                                </SignInStatistics.Card.ProfileName>
                            </FlexDiv>
                        </FlexDiv>
                    </SignInStatistics.Card>
                </SignInStatistics>
            </section>
        </>
    );
};
