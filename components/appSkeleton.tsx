import { css } from "@emotion/core";
import { Container, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableRow } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import React from "react";

const container = css`
    width: 100%;
`;

const header = css`
    width: 100%;
    margin-bottom: 40px;
`;

const search = css`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 16px;
`;

const buttons = css`
    display: flex;
    justify-content: flex-end;
    margin-top: 16px;

    span:first-of-type {
        margin-right: 16px;
    }
`;

const AppSkeleton = () => {
    const renderCell = () => (
        <TableCell>
            <Skeleton variant="rect" height={30} />
        </TableCell>
    );

    const renderRow = () => (
        <TableRow>
            {renderCell()}
            {renderCell()}
            {renderCell()}
            {renderCell()}
            {renderCell()}
            {renderCell()}
        </TableRow>
    );

    return (
        <div css={container}>
            <div css={header}>
                <Skeleton variant="rect" height={65} />
            </div>
            <Container maxWidth={"lg"}>
                <div css={search}>
                    <Grid container direction="row" justify="flex-end" alignItems="flex-end">
                        <Skeleton variant="rect" width={200} height={30} />
                    </Grid>
                </div>
                <TableContainer component={Paper} elevation={2} variant="outlined">
                    <Table>
                        <TableBody>
                            {renderRow()}
                            {renderRow()}
                            {renderRow()}
                            {renderRow()}
                            {renderRow()}
                            {renderRow()}
                        </TableBody>
                    </Table>
                </TableContainer>
                <div css={buttons}>
                    <Grid container direction="row" justify="flex-end" alignItems="baseline">
                        <Skeleton variant="rect" width={120} height={30} />
                        <Skeleton variant="rect" width={120} height={30} />
                    </Grid>
                </div>
            </Container>
        </div>
    );
};

export default AppSkeleton;
