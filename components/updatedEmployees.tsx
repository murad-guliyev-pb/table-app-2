import Box from "@material-ui/core/Box";
import React from "react";

import { IEmployee } from "../helpers/models";

interface IProps {
    deletedEmployees: IEmployee[];
    editedEmployees: IEmployee[];
}

const UpdatedEmployees: React.FC<IProps> = ({ deletedEmployees, editedEmployees }) => {
    return (
        <>
            <Box>
                Updated: <pre>{JSON.stringify(editedEmployees, null, 4)}</pre>
            </Box>
            <Box marginTop={2}>
                Deleted: <pre>{JSON.stringify(deletedEmployees, null, 4)}</pre>
            </Box>
        </>
    );
};

export default UpdatedEmployees;
