import { FC, useEffect, useState } from "react"
import { Preferences } from "../components/meet/MeetPreferences"
import { MeetWhat } from "../components/meet/MeetWhat"
import { Container } from "../GlobalStyles"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { retrieveMeets, selectMeetsStateNoData, selectMeetsStateLoading, selectMeetsStateSearching, selectMeets } from "../features/meet/meetSlice"
import { MeetCard } from "../components/meet/MeetCard"
import { Loading } from "../components/loading/Loading"
import { selectOrderedUniversities, selectProfile } from "../features/user/userSlice"

export const Meet = () => {
    const dispatch = useAppDispatch()
    const [preferences, setPreferences] = useState(false)

    const myId = useAppSelector(selectProfile)?.id

    useEffect(() => {
        dispatch(retrieveMeets(myId!))
    }, [dispatch])

    const orderedUniversities = useAppSelector(selectOrderedUniversities)
    const nodata = useAppSelector(selectMeetsStateNoData)
    const loading = useAppSelector(selectMeetsStateLoading)
    const searching = useAppSelector(selectMeetsStateSearching)
    const meets = useAppSelector(selectMeets)
    const active = meets.find((meet) => meet.endsAt > Date.now())

    if (loading)
        return <Loading loading={loading} />

    if (searching)
        return <div>searching</div>

    if (nodata)
        return <Container>
            <MeetWhat setPreferences={setPreferences} />
        </Container>

    if (active === undefined || preferences === true) {
        return <Preferences setPreferences={setPreferences} orderedUniversities={orderedUniversities} />
    }

    return <MeetCard meet={active} />
}