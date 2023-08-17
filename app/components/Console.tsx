import Bridge from "./Bridge"

export default function Console({ beeperToken, flyToken }: any) {

    function signOut() {
        window.localStorage.clear()
        location.reload();
    }

    return (
        <div className={"m-20"}>
            <p className={"max-w-3xl mx-auto"}>Press {"\"Deploy\""} to deploy a bridge. Then, in Beeper Desktop, send a message to the bridge bot. You may need to wait a minute for the bridge to initialize before being able to message the bot.</p>
            <p className={"max-w-3xl mx-auto mt-4"}>To experiment with bridges, check out <a target="_blank" href={"https://github.com/beeper/bridge-manager"} rel="noopener noreferrer">https://github.com/beeper/bridge-manager</a>. {"You'll"} also need it to remove bridges from your Beeper account, in addition to deleting the app on Fly.</p>
            <table className={"table-auto mx-auto mt-10"}>
                <thead>
                    <tr>
                        <th className={"border py-2 px-8"}>Name</th>
                        <th className={"border py-2 px-8"}>Start</th>
                        <th className={"border py-2 px-8"}>Console</th>
                        <th className={"border py-2 px-8"}>Bridge Bot ID</th>
                </tr>
                </thead>
                <tbody>
                    <Bridge name={"WhatsApp"} value={"whatsapp"} beeperToken={beeperToken} flyToken={flyToken}/>
                    <Bridge name={"Google Messages"} value={"gmessages"} beeperToken={beeperToken} flyToken={flyToken}/>
                </tbody>
            </table>
            <div className={"text-center"}>
                <button className={"p-2 rounded-md absolute bottom-10 border-2 hover:bg-gray-50"} onClick={signOut}>Sign Out</button>
            </div>
        </div>
    )
}