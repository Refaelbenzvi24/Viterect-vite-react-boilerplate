import NestedRoute, {RouteConfigComponentProps} from "../../components/NestedRoute";
import Card from "../../components/UI/Cards/Card";

export default ({route}: RouteConfigComponentProps) => {
	return (
	  <div className="py-10 w-full" dir="ltr">
		  <div className="mx-auto px-5 prose">
				  <NestedRoute route={route}/>
		  </div>
	  </div>
	);
}
