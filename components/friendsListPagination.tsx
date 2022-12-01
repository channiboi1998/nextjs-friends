import Router from 'next/router'
import React from 'react'
import { Grid, Pagination } from "semantic-ui-react"
const friendsListPagination = ({page, totalPages}: any) => {
    return (
        <Grid columns={2} verticalAlign='middle' centered>
            <Grid.Row>
                <Grid.Column>
                    <h3>Page {page} - {totalPages}</h3>
                </Grid.Column>
                <Grid.Column textAlign='right'>
                    <Pagination
                        boundaryRange={0}
                        defaultActivePage={1}
                        ellipsisItem={null}
                        firstItem={null}
                        lastItem={null}
                        siblingRange={1}
                        totalPages={totalPages ? totalPages : 10 }
                        onPageChange={(event, data) => Router.push('?page=' + data.activePage)}
                    />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

export default friendsListPagination