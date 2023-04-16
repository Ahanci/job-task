import { lazy, Suspense } from "react";
import { Loading } from "../../components";

const TypeA = lazy(() => import("./TypeA"));
const TypeB = lazy(() => import("./TypeB"));
const TypeC = lazy(() => import("./TypeC"));
const TypeD = lazy(() => import("./TypeD"));
const TypeE = lazy(() => import("./TypeE"));

const tasksObj = {
  1: <TypeA />,
  2: <TypeB />,
  3: <TypeC />,
  4: <TypeD />,
  5: <TypeE />,
};

const FormItems = ({ type }) => {
  return <Suspense fallback={<Loading />}>{tasksObj[type]}</Suspense>;
};

export default FormItems;
