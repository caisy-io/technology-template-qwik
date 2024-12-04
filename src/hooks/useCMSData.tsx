import { useContext } from "@builder.io/qwik";
import { CMSDataContext } from "../contexts/cms-data";

export const useCMSData = () => {
    return useContext(CMSDataContext);
};