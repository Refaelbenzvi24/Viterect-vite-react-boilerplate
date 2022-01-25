import Tab from "../components/UI/Tabs/Tab";
import Tabs from "../components/UI/Tabs/Tabs";
import Error404 from "../components/UI/ErrorPages/404"
import Error403 from "../components/UI/ErrorPages/403"
import Error404ServerSide from "../components/UI/ErrorPages/404ServerSide"

export default () => {
    const [tab, setTab] = useState('404')

    return (
            <div>
                <div className={"flex justify-center pt-5"}>
                    <Tabs>
                        <Tab onClick={() => setTab('404')}>
                            404
                        </Tab>
                        <Tab onClick={() => setTab('403')}>
                            403
                        </Tab>
                        <Tab onClick={() => setTab('404ServerSide')}>
                            404 Server Side
                        </Tab>
                    </Tabs>
                </div>

                <div className="absolute w-full h-full top-0">
                    <Pages tab={tab}/>
                </div>

            </div>
    )
}

const Pages = ({tab}: { tab: string }) => {
    if (tab === '404') {
        return <Error404/>
    } else if (tab === '403') {
        return <Error403/>
    } else if (tab === '404ServerSide') {
        return <Error404ServerSide/>
    } else {
        return <></>
    }
}
