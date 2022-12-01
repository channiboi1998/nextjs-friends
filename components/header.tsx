import React from 'react'
import Link from 'next/link'
import { Container, Grid } from 'semantic-ui-react'
import HeaderStyle from '../styles/Header.module.css'

const header = () => {
    return (
        <Container fluid className={HeaderStyle.header}>
            <Container>
                <Grid verticalAlign='middle' columns={2} centered>
                    <Grid.Row>
                        <Grid.Column>
                            <Link href='/'className={HeaderStyle.logoText}>Friends</Link>
                        </Grid.Column>
                        <Grid.Column  className={HeaderStyle.navLinks} textAlign='right'>
                            <Link href='/' className={HeaderStyle.links}>Home</Link>
                            <Link href='https://www.linkedin.com/in/christian-verzosa-4917341a1/' className={HeaderStyle.links}>LinkedIn</Link>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </Container>
    )
}

export default header