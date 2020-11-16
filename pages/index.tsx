import React from "react";
import useSWR from "swr";

import App from "../components/app";
import AppSkeleton from "../components/appSkeleton";
import { baseUrl, fetcher } from "../helpers/models";

const TableApp = ({ initialData }): JSX.Element => {
    const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_BASE_URL}/employee`, fetcher, { initialData });

    if (error) return <div>failed to load</div>;
    if (!data) return <AppSkeleton />;

    return <App employeesList={data} />;
};

export async function getServerSideProps() {
    const data = await fetcher(`${process.env.NEXT_PUBLIC_BASE_URL}/employee`);
    return { props: { data } };
}

export default TableApp;
