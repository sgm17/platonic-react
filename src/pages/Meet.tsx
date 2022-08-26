import { useState } from "react"
import { Preferences } from "../components/preferences/Preferences"
import { WhatMeet } from "../components/whatmeet/WhatMeet"
import { WhatMeetSection } from "../components/whatmeet/WhatMeetStyles"
import { AiOutlineLoading } from 'react-icons/ai'
import { Found } from "../components/found/Found"

export const Meet = () => {
    const [meet, setMeet] = useState(false)
    const [search, setSearch] = useState(false)
    const [found, setFound] = useState(false)

    if (search) {
        return <div style={{ width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <AiOutlineLoading size={'50px'} />
        </div>
    }

    if (found) {
        return <Found />
    }

    if (meet) {
        return <Preferences setSearch={setSearch} setFound={setFound} />
    }

    return <WhatMeetSection>
        <WhatMeet setMeet={setMeet} />
    </WhatMeetSection>
}