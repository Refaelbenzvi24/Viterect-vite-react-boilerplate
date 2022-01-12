// import NestedRoute, {RouteConfigComponentProps} from "../../components/NestedRoute";
import Card from "../../components/UI/Cards/Card";
import {Outlet} from "react-router";

export default () => {
    return (
            <div className="py-10 w-full" dir="ltr">
                <div className="mx-auto px-5 prose">
                    <Outlet/>
                </div>
            </div>
    );
}
