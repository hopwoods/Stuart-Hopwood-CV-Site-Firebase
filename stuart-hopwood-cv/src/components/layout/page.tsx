import React, { ReactNode } from "react";
import { Banner, Content, Footer, Navbar } from "../../components/layout";
import { RouterListener } from "../../security/routerListener";

export type PageProps = {
    fullscreen: boolean;
    id: string;
    BannerContent: React.FC;
    children: ReactNode
}
export function Page({ id, fullscreen, BannerContent, children }: PageProps) {
    return (
        <RouterListener>
            <Banner id={id} fullscreen={fullscreen}>
                <BannerContent />
            </Banner>
            <Navbar />
            <Content>
                {children}
            </Content>
            <Footer />
        </RouterListener>
    );
}