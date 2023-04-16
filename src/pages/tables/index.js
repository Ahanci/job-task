import { lazy, Suspense } from "react";
import { Loading } from "../../components";

const BrandTable = lazy(() => import("./BrandTable"));
const DesignTable = lazy(() => import("./DesignTable"));
const PatentTable = lazy(() => import("./PatentTable"));

const TablesObj = {
  1: <BrandTable />,
  2: <DesignTable />,
  3: <PatentTable />,
};

const Tables = ({ type }) => {
  return <Suspense fallback={<Loading />}>{TablesObj[type]}</Suspense>;
};

export default Tables;
