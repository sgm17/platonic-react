import { useAppSelector } from "../app/hooks"
import { ProfileItem } from "../components/profile/ProfileItem"
import { selectProfile, selectProfileNotUndefined, selectUserStateLoading } from "../features/user/userSlice";
import { Loading } from "../components/loading/Loading";

export const Profile = () => {

    const user = useAppSelector(selectProfile)
    const userNotUndefined = useAppSelector(selectProfileNotUndefined)
    const loading = useAppSelector(selectUserStateLoading)

    if (!userNotUndefined || loading)
        return <Loading loading={!userNotUndefined || loading} />

    return <ProfileItem user={user!} />
}