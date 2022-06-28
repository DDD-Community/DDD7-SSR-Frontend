import { NextPage } from 'next';
import DefaultLayout from 'src/domains/layout/DefaultLayout';
import client, { setAuthToken } from 'src/domains/shared/api/client';

const TestPage: NextPage = () => {
  async function getToken() {
    const token = localStorage.getItem('dewsToken');
    if (!token) return;
    setAuthToken(token);
    const data = await client.get('/me');
    console.log(data);
  }
  return (
    <DefaultLayout>
      <button onClick={getToken}>test</button>;
    </DefaultLayout>
  );
};

export default TestPage;
