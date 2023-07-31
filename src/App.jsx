import { TwitterFollowCard } from './TwitterFollowCard'

export const App = () => {

    const users = [
        {
            name: "Miguel Ángel Durán",
            userName: "midudev",
            initialIsFollowing: false
        },
        {
            name: "marcozsh",
            userName: "marcozsh",
            initialIsFollowing: true
        },
        {
            name: NaN,
            userName: NaN,
            initialIsFollowing: false
        }

    ]

    console.log(users)
    return (
        <section className="App">
            {
                users?.map(user => {
                    return (
                        <TwitterFollowCard
                            key={user.name}
                            name={user.name}
                            userName={user.userName}
                            initialIsFollowing={user.initialIsFollowing}
                        ></TwitterFollowCard>
                    )
                })
            }
        </section>
    )
}
