import { FC } from "react";
import { StoryItemImage, StoryImageContainer } from "./StoryStyles";
import { University } from "../../ts/interfaces/University";

import abat_oliba from '../../assets/images/uni/abat_oliba_logo.png'
import bioetica from '../../assets/images/uni/bioetica_logo.jpg'
import blanquerna from '../../assets/images/uni/blanquerna_logo.jpg'
import cei from '../../assets/images/uni/cei_logo.jpg'
import cesda from '../../assets/images/uni/cesda_logo.jpg'
import cett from '../../assets/images/uni/cett_logo.jpg'
import davinci from '../../assets/images/uni/davinci_logo.jpg'
import eae from '../../assets/images/uni/eae_logo.jpg'
import eatm from '../../assets/images/uni/eatm_logo.png'
import eina from '../../assets/images/uni/eina_logo.jpg'
import enti from '../../assets/images/uni/enti_logo.png'
import eram from '../../assets/images/uni/eram_logo.png'
import esade from '../../assets/images/uni/esade_logo.jpg'
import escac from '../../assets/images/uni/escac_logo.webp'
import esci from '../../assets/images/uni/esci_logo.png'
import escodi from '../../assets/images/uni/escodi_logo.jpg'
import escolamassana from '../../assets/images/uni/escolamassana_logo.png'
import esdi from '../../assets/images/uni/esdi_logo.jpg'
import eshob from '../../assets/images/uni/eshob_logo.jpg'
import esic from '../../assets/images/uni/esic_logo.jpg'
import escrbcc from '../../assets/images/uni/escrbcc_logo.jpg'
import esrp from '../../assets/images/uni/esrp_logo.jpg'
import medite from '../../assets/images/uni/mediterrani_logo.png'
import eufb from '../../assets/images/uni/eufb_logo.png'
import euht from '../../assets/images/uni/euht_logo.jpg'
import eui from '../../assets/images/uni/eui_logo.png'
import euit from '../../assets/images/uni/euit_logo.png'
import euncet from '../../assets/images/uni/euncet_logo.jpg'
import euroaula from '../../assets/images/uni/euroaula_logo.jpg'
import euses from '../../assets/images/uni/euses_logo.png'
import euss from '../../assets/images/uni/euss_logo.jpg'
import filo from '../../assets/images/uni/filo_logo.jpg'
import gbsb from '../../assets/images/uni/gbsb_logo.jpg'
import gimbernat from '../../assets/images/uni/gimbernat_logo.png'
import guttmann from '../../assets/images/uni/guttmann_logo.jpg'
import harbour from '../../assets/images/uni/harbour_logo.png'
import iaac from '../../assets/images/uni/iaac_logo.jpg'
import idep from '../../assets/images/uni/idep_logo.jpg'
import iese from '../../assets/images/uni/iese_logo.png'
import igema from '../../assets/images/uni/igema_logo.png'
import inefc from '../../assets/images/uni/inefc_logo.jpg'
import iqs from '../../assets/images/uni/iqs_logo.jpg'
import ispc from '../../assets/images/uni/ispc_logo.jpg'
import lasalle from '../../assets/images/uni/lasalle_logo.jpg'
import liceu from '../../assets/images/uni/liceu_logo.jpg'
import llotja from '../../assets/images/uni/llotja_logo.png'
import next from '../../assets/images/uni/next_logo.png'
import ostelea from '../../assets/images/uni/ostelea_logo.png'
import pere from '../../assets/images/uni/pere_logo.jpg'
import eurl from '../../assets/images/uni/eurl_logo.jpg'
import santotomas from '../../assets/images/uni/santotomas_logo.jpeg'
import tecnocampus from '../../assets/images/uni/tecnocampus_logo.png'
import uab from '../../assets/images/uni/uab_logo.png'
import ub from '../../assets/images/uni/ub_logo.png'
import udg from '../../assets/images/uni/udg_logo.jpg'
import udl from '../../assets/images/uni/udl_logo.png'
import uibs from '../../assets/images/uni/uibs_logo.jpg'
import uic from '../../assets/images/uni/uic_logo.png'
import uniba from '../../assets/images/uni/uniba_logo.png'
import upc from '../../assets/images/uni/upc_logo.png'
import upf from '../../assets/images/uni/upf_logo.png'
import urv from '../../assets/images/uni/urv_logo.png'
import uvic from '../../assets/images/uni/uvic_logo.jpeg';
import { UniversityImage } from "../../ts/enums/UniversityImage";
import { useAppSelector } from "../../app/hooks";
import { maskUniversitiesWithContentToSeeByTheUser } from "./StoryScroll";
import { myLatestStoriesIds } from "../../features/story/storyAPI";
import { selectLastStoryIdsPerUniversity } from "../../features/story/storySlice";

type StoryImageProperties = {
    university: University,
}

export const StoryImage: FC<StoryImageProperties> = ({ university }) => {
    const { image } = university
    const profileImage = getUniversityImage(image)

    const apiLatestStoriesIds = useAppSelector(selectLastStoryIdsPerUniversity)

    const stories = maskUniversitiesWithContentToSeeByTheUser(myLatestStoriesIds, apiLatestStoriesIds)

    const noContent = !stories.includes(university.id)

    return <StoryImageContainer noContent={noContent}>
        <StoryItemImage alt='' src={profileImage} noContent={noContent} />
    </StoryImageContainer>
}

const getUniversityImage = (name: string) => {
    switch (name.split('.')[0] as UniversityImage) {
        case UniversityImage.upc: return upc
        case UniversityImage.euncet: return euncet
        case UniversityImage.uic: return uic
        case UniversityImage.ub: return ub
        case UniversityImage.cei: return cei
        case UniversityImage.cett: return cett
        case UniversityImage.enti: return enti
        case UniversityImage.escac: return escac
        case UniversityImage.esrp: return esrp
        case UniversityImage.escodi: return escodi
        case UniversityImage.ispc: return ispc
        case UniversityImage.uniba: return uniba
        case UniversityImage.eina: return eina
        case UniversityImage.escolamassana: return escolamassana
        case UniversityImage.eui: return eui
        case UniversityImage.gimbernat: return gimbernat
        case UniversityImage.euss: return euss
        case UniversityImage.euit: return euit
        case UniversityImage.guttmann: return guttmann
        case UniversityImage.uab: return uab
        case UniversityImage.upf: return upf
        case UniversityImage.esci: return esci
        case UniversityImage.tecnocampus: return tecnocampus
        case UniversityImage.udl: return udl
        case UniversityImage.eurl: return eurl
        case UniversityImage.inefc: return inefc
        case UniversityImage.ostelea: return ostelea
        case UniversityImage.next: return next
        case UniversityImage.uvic: return uvic
        case UniversityImage.udg: return udg
        case UniversityImage.euses: return euses
        case UniversityImage.euroaula: return euroaula
        case UniversityImage.euht: return euht
        case UniversityImage.eram: return eram
        case UniversityImage.eufb: return eufb
        case UniversityImage.mediterrani: return medite
        case UniversityImage.blanquerna: return blanquerna
        case UniversityImage.iqs: return iqs
        case UniversityImage.lasalle: return lasalle
        case UniversityImage.filo: return filo
        case UniversityImage.esade: return esade
        case UniversityImage.pere: return pere
        case UniversityImage.bioetica: return bioetica
        case UniversityImage.esdi: return esdi
        case UniversityImage.eatm: return eatm
        case UniversityImage.abat_oliba: return abat_oliba
        case UniversityImage.eshob: return eshob
        case UniversityImage.idep: return idep
        case UniversityImage.santotomas: return santotomas
        case UniversityImage.urv: return urv
        case UniversityImage.cesda: return cesda
        case UniversityImage.igema: return igema
        case UniversityImage.iaac: return iaac
        case UniversityImage.harbour: return harbour
        case UniversityImage.escrbcc: return escrbcc
        case UniversityImage.esic: return esic
        case UniversityImage.iese: return iese
        case UniversityImage.gbsb: return gbsb
        case UniversityImage.llotja: return llotja
        case UniversityImage.liceu: return liceu
        case UniversityImage.eae: return eae
        case UniversityImage.uibs: return uibs
        case UniversityImage.davinci: return davinci
    }

}