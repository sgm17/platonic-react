import { useEffect, useState } from "react"
import { Preferences } from "../components/meet/MeetPreferences"
import { MeetWhat } from "../components/meet/MeetWhat"
import { Found } from "../components/found/Found"
import { Container } from "../GlobalStyles"
import { ClipLoader } from "react-spinners"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { myId } from "../components/instastory/InstaStoryUniversity"
import { retrieveMeets, selectMeetsStateNoData, selectMeetsStateLoading, selectMeetsStateSearching, selectMeets } from "../features/meet/meetSlice"
import { MeetCard } from "../components/meet/MeetCard"

export type MeetWhatProperties = {
    setPreferences: Function
}

export type PreferencesProperties = {
    setPreferences: Function
}

export const Meet = () => {
    const dispatch = useAppDispatch()
    const [preferences, setPreferences] = useState(false)

    useEffect(() => {
        dispatch(retrieveMeets(myId))
    }, [dispatch])

    const nodata = useAppSelector(selectMeetsStateNoData)
    const loading = useAppSelector(selectMeetsStateLoading)
    const searching = useAppSelector(selectMeetsStateSearching)
    const meets = useAppSelector(selectMeets)
    const active = meets.find((meet) => meet.endsAt > Date.now())

    if (loading)
        return <div style={{ height: '100vh', width: '100%', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
            <ClipLoader loading={loading} color='#000' size={'150px'} />
        </div>

    if (searching)
        return <div>searching</div>

    if (nodata)
        return <Container>
            <MeetWhat setPreferences={setPreferences} />
        </Container>

    if (active === undefined || preferences === true) {
        return <Preferences setPreferences={setPreferences} />
    }

    return <MeetCard meet={active} />
}