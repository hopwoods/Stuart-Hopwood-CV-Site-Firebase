/** @jsxImportSource @emotion/react */
import React, { ReactNode } from "react";
import { jsx } from "@emotion/react";
import { Navbar, Content, Footer, Banner } from "../../components/layout";

export type PageProps = {
    fullscreen: boolean;
    id: string;
    BannerContent: React.FC;
    children: ReactNode
}
export function Page({ id, fullscreen, BannerContent, children }: PageProps) {

    return (
        <React.Fragment>
            <Banner id={id} fullscreen={fullscreen}>
                <BannerContent />
            </Banner>
            <Navbar />
            <Content>
                {children}
            </Content>
            <Footer />
        </React.Fragment>
    );
}