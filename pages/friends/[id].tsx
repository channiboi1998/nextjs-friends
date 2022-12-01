import { Container, Image } from 'semantic-ui-react'
import FriendStyle from '../../styles/Friend.module.css'
import Link from 'next/link'
export const getServerSideProps = async (context: any) => {
    const response = await fetch('https://reqres.in/api/users/' + context.params.id);
    const data = await response.json();

    return {
        props: {
            data
        }
    }

}

const friend = ({ data }: any) => {
    return (
        <Container className={FriendStyle.container}>
            <h1>{data.data.first_name} {data.data.last_name}</h1>
            <Image src={data.data.avatar}/>
            <p>{data.data.email}</p>
            <Link href='/'>Go Back</Link>
        </Container>
    )
}

export default friend