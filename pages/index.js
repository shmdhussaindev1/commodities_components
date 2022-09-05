import CommoditiesList from "../components/CommoditiesList";
import dummyData from "../dummyData/commoditiesList.json";
export default function IndexPage() {
	return <CommoditiesList componentData={dummyData}></CommoditiesList>;
}
