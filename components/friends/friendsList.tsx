import React from 'react'
import { Grid } from 'semantic-ui-react'
import FriendsListItem from './friendsListItem'

const friendsList = ({friends} : any) => {

    return (
        <Grid columns={4}>
            <Grid.Row>
                {friends.map((friend:any) => <FriendsListItem key={friend.id} friend={friend} />)}
            </Grid.Row>
        </Grid>
    )
}

export default friendsList