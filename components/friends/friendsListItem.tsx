import Link from 'next/link'
import React from 'react'
import { Grid, Card, Image } from 'semantic-ui-react'

import friendsListStyle from '../../styles/FriendsList.module.css'

const friendsListItem = ({ friend }: any) => {
    return (
        <Grid.Column className={friendsListStyle.friend}>
            <Card>
                <Image src={friend.avatar} wrapped ui={false} />
                <Card.Content>
                    <Card.Header>
                        <Link href={`/friends/${friend.id}`}>
                            {friend.first_name} {friend.last_name}
                        </Link>
                    </Card.Header>
                    <Card.Meta>
                        <span>{friend.email}</span>
                    </Card.Meta>
                </Card.Content>
            </Card>
        </Grid.Column>
    )
}

export default friendsListItem