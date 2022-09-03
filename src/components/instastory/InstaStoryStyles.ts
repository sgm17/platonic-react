import styled from "styled-components";

export const InstaStoryContainer = styled.div`
    width: 100%;
    height: 100%;
    touch-action: pan-x pan-y;

    position: absolute;
    top: 0;

    background: #000;
`

export const InstaStoryUniversityContainer = styled.div`
    width: 100%;
    height: 100%;

    position: absolute;
    top: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    z-index: 20;
`

export const InstaStoryItemBackground = styled.div<{ background: string }>`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #000;
    text-align: center;

    ${({ background }) => {
        return `background-color: ${background};`
    }}
`

export const InstaStoryItemBody = styled.p`
    font-size: '1.2rem';
    padding: 0 1rem;
    color: #fff;

    user-select: none;
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -o-user-select: none;
`

export const InstaStorySeeMoreCollapsed = styled.div`
    position: absolute;
    bottom: 1rem;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
`

export const InstaStorySeeMoreCollapsedContainer = styled.div`
    display: flex;
    cursor: pointer;
`

export const InstaStorySeeMoreCollapsedFavourite = styled.div`
    position: absolute;
    right: 1rem;
`

export const InstaStorySeeMoreCollapsedText = styled.p`
    font-size: '1rem';
    font-weight: bold;
    text-align: center;
    padding-top: .3rem;
    color: #fff;

    user-select: none;
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -o-user-select: none;
`

export const InstaStoryLoadingContainer = styled.div`
    width: 100%;
    height: 100%;
    touch-action: pan-x pan-y;

    position: absolute;
    top: 0;
    
    background-color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const InstaStorySeeMoreForm = styled.form`
    position: absolute;
    bottom: 1rem;
    width: 100%;
    padding: 0 1rem;
`

export const InstaStorySeeMoreContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
`

export const InstaStorySeeMoreInput = styled.input`
    border: 2px solid #fff;
    border-radius: 30px;
    font-size: 1rem;
    font-weight: 500;
    background: transparent;
    color: #fff;
    width: 100%;
    padding: .8rem .65rem;
    overflow: auto;
    resize: none;
    outline: none;

    &::placeholder {
        color: #fff;
    }
`

export const InstaStoryHeaderContainer = styled.div`
    position: absolute;
    z-index: 1;

    height: 40px;
    width: 100%;

    top: 20px;
    padding: 0 12px;

    display: flex;
    align-items: center;
    flex-direction: row;

    justify-content: space-between;
    z-index: 1000;
`

export const InstaStoryHeaderContent = styled.div`
    height: 40px;

    display: flex;
    flex-direction: row;

    justify-content: center;
    align-items: center;
`

export const InstaStoryHeaderControllContainer = styled.div`
    height: 30px;

    display: flex;
    flex-direction: row;

    padding-left: 0.3rem;
`

export const InstaStoryHeaderControll = styled.div<{ paddingLeft?: string }>`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;

    ${({ paddingLeft }) => {
        if (paddingLeft) return `padding-left: ${paddingLeft};`
    }}
`

export const InstaStoryHeaderImageContainer = styled.div`
    padding-right: 10px;
`

export const InstaStoryHeaderImageBorder = styled.div`
    height: 40px;
    width: 40px;
    border: 2px solid #fff;
    border-radius: 50%;

    padding: 1px;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const InstaStoryHeaderImage = styled.img`
    height: 100%;
    width: 100%;
    border-radius: 50%;
`

export const InstaStoryHeaderTextContainer = styled.span`
    display: flex;
    flex-direction: column;

    user-select: none;
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -o-user-select: none;
`

export const InstaStoryHeaderTextLink = styled.a`
    text-decoration: none;
    color: #fff;
    display: inline;
`

export const InstaStoryHeaderText = styled.p`
    color: #fff;
    margin: 0 0 2px;
    font-size: .65rem;
    font-weight: 500;
`

export const InstaStoryItemSubheaderText = styled.p`
    color: #fff;
    margin: 0;
    font-size: .3rem;
    font-weight: 500;
`

export const InstaStorySeeMoreCollapsedOwner = styled.div`
    position: absolute;
    bottom: 1rem;

    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;

    padding: 0 12px;
`

export const InstaStorySeeMoreCollapsedOwnerItemContainer = styled.div<{ padding?: string }>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    ${({ padding }) => {
        if (padding) return `padding-left: ${padding}`
    }}
`

export const InstaStorySeeMoreCollapsedOwnerIcon = styled.div`
    width: 30px;
    height: 30px;
    margin-right: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const InstaStorySeeMoreCollapsedOwnerText = styled.p`
    font-weight: 500;
    font-size: .9rem;
    color: #fff;
    text-align: center;

    user-select: none;
    -moz-user-select: none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -o-user-select: none;
`

export const InstaEmptyContainer = styled.div`
    height: calc(100vh - 60px);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000;
`

export const InstaEmptyText = styled.p`
    text-align: center;
    color: #fff;
    font-size: 2rem;
`