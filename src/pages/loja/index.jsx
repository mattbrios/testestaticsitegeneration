/* eslint-disable @next/next/no-img-element */
import { Typography } from "@mui/material";
import Layout from "../../components/Layout";

export default function Loja (props) {
  console.log(props)
  return (
    <Layout>
      <img src={props.avatar_url} alt={props.name} style={{ border: "1px solid gray", width: 120, borderRadius: '1rem' }} />
      <Typography variant="h6">
        Login {props.login}
      </Typography>
      <Typography variant="h6">
        Name {props.name}
      </Typography>
      <Typography variant="h6">
        Blog {props.blog}
      </Typography>
      <Typography variant="h6">
        Public Repos: {props.public_repos}
      </Typography>
    </Layout>
  )
}

export const getStaticProps = async () => {
  let apiResult;
  await fetch('https://api.github.com/users/mattbrios').then(res => res.json()).then((result) => {
    apiResult = result;
  })
  return {
    props: apiResult,
    revalidate: 60 * 30
  };
}