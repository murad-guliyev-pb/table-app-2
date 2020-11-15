import { css } from "@emotion/core";
import { Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import React from "react";

import { IEmployee } from "../../helpers/models";

export interface IProps {
    value: string;
    name: keyof IEmployee;
    errors: Array<keyof IEmployee>;
    isEditing: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const container = css`
    width: 120px;
`;

const text = css`
    color: #f44336;
`;

const TableCell: React.FC<IProps> = ({ value, errors, isEditing, onChange, name }): JSX.Element => {
    const hasError = errors.includes(name);

    const renderInput = () => (
        <>
            <TextField data-testid="input" error={hasError} name={name} value={value} onChange={onChange} />
            {hasError && (
                <Typography css={text} variant="caption" component="p">
                    {hasError && value === "" ? "Is mandatory" : "Invalid format"}
                </Typography>
            )}
        </>
    );
    const renderText = () => (
        <Box paddingY={1}>
            <Typography variant="subtitle1" component="p">
                {value}
            </Typography>
        </Box>
    );

    return <Box css={container}>{isEditing && name !== "id" ? renderInput() : renderText()}</Box>;
};

export default TableCell;
