import { FC } from "react"
import ClipLoader from "react-spinners/ClipLoader"
import { LoadingContainer } from "./LoadingStyles"

export type LoadingProperties = {
    loading: boolean,
    color?: string,
    backgroundColor?: string
}

export const Loading: FC<LoadingProperties> = ({ loading, color, backgroundColor }) => {
    return <LoadingContainer backgroundColor={backgroundColor}>
        <ClipLoader loading={loading} color={color ?? '#000'} />
    </LoadingContainer>
}