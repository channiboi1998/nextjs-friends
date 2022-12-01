import Head from 'next/head'
import { Container } from 'semantic-ui-react'
import FriendsList from '../components/friends/friendsList'
import IndexStyle from '../styles/Index.module.css'
import FriendsListPagination from '../components/friendsListPagination'

export const getServerSideProps = async (context: any) => {
    let { page } = context.query;
    if (!page) {
        page = 1;
    }
    const response = await fetch('https://reqres.in/api/users?per_page=4&page=' + page);
    const data = await response.json();
    return {
        props: {
            data
        }
    }
}

export default function Home({data}: any) {
    return (
        <Container className={IndexStyle.container}>
            <Head>
                <title>Friends</title>
            </Head>
            <FriendsListPagination page={data.page} totalPages={data.total_pages} />
            <FriendsList friends={data.data} />
        </Container>
    )
}