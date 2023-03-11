import axios from 'axios';
import { useEffect, useState } from "react"
import styled from "styled-components"
import Paging from '@/pages/page'
import Gender from '@/pages/gender'
import PagingLayout from '@/pages/pageLayout';
import State from '@/pages/state';

export default function Home() {

  const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
`;

  // 테이블 값
  const [head, setHead] = useState([]);
  const [list, setList] = useState([]);

  // 페이징 값
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  //거주지 값
  const [residence, setResidence] = useState([]);
  const [res_residence, setRes_Residence] = useState({});

  useEffect(() => {
    axios.get('https://random-data-api.com/api/v2/users?size=20')
      .then(function (response) {
        setList(response.data);
        setHead(Object.keys(response.data[0]));
        let state = response.data.map(item => item.address.state);
        setResidence(state)
      })
      .catch(function (error) {
        console.log('실패');
      })
  }, []);

  useEffect(() => {
    let tmp = residence.reduce((acc, item, i) => {
      if (acc[item]) {
        acc[item] += 1;
      } else acc[item] = 1;
      return acc;
    }, {})
    setRes_Residence(tmp)
  }, [residence])
  // useEffect(() => console.log(Object.keys(res_residence)), [res_residence]);

  return (
    <>
      <Layout>
        <PagingLayout head={head} limit={limit} list={list} offset={offset} />
      </Layout>

      <Gender list={list} residence={res_residence} />
      <State residence={residence} />

      <footer>
        <Paging total={list.length} limit={limit} page={page} setPage={setPage} />
      </footer>
    </>
  )
}