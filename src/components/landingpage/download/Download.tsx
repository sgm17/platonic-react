import { useTranslation } from "react-i18next";
import { DownloadContainer, DownloadImage, DownloadContent, DownloadSection, DownloadHeader, DownloadWrapper, DownloadSubheader, DownloadStores, DownloadLink, DownloadAndroid, DownloadIos, DownloadItem } from "./DownloadStyles"
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import download from "../../../assets/images/download.png"
import downloadAndroid from "../../../assets/images/download-android.png"
import downloadIos from "../../../assets/images/download-apple.svg"

export const Download = () => {
    const { t } = useTranslation();
    const animation = useAnimation()

    const { ref, inView } = useInView({ threshold: 0.2 })

    useEffect(() => {
        if (inView) {
            animation.start({
                x: 0, opacity: 1
            });
        }
    }, [inView, animation])

    return <DownloadSection ref={ref} id="download">
        <DownloadContainer >
            <DownloadWrapper>
                <DownloadImage
                    src={download}
                    alt=""
                    initial={{ x: -40, opacity: 0 }}
                    animate={animation}
                    transition={{ duration: 1 }} />
                <DownloadContent
                    initial={{ x: 40, opacity: 0 }}
                    animate={animation}
                    transition={{ duration: 1 }}
                >
                    <DownloadHeader>
                        {t('download_header')}
                    </DownloadHeader>
                    <DownloadSubheader notlast={true}>
                        {t('download_subheader1')}
                    </DownloadSubheader>
                    <DownloadSubheader notlast={false}>
                        {t('download_subheader2')}
                    </DownloadSubheader>
                    <DownloadStores>
                        <DownloadItem android={false}>
                            <DownloadLink
                                href="https://apps.apple.com/us/app/platonic/id1594149349"
                                target="_blank">
                                <DownloadIos alt="" src={downloadIos} />
                            </DownloadLink>
                        </DownloadItem>
                        <DownloadItem android={true}>
                            <DownloadLink
                                href="https://play.google.com/store/apps/details?id=com.invelex.platonic"
                                target="_blank">
                                <DownloadAndroid alt="" src={downloadAndroid} />
                            </DownloadLink>
                        </DownloadItem>
                    </DownloadStores>
                </DownloadContent>
            </DownloadWrapper>
        </DownloadContainer>
    </DownloadSection>
}