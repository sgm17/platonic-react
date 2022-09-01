import { ReactElement } from "react"
import { AppbarState } from "../enums/AppbarState"

export type AppbarItemType = {
    to: AppbarState,
    fill: ReactElement,
    outline: ReactElement
}