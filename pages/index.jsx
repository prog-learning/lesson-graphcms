import { GET_QUERY } from '../src/gql';
import { useQuery } from '@apollo/client';

export default function Home() {
  const { loading, error, data } = useQuery(GET_QUERY);
  console.log(data);
  return (
    <div>
      <h1>Lesson GraphCMS</h1>
    </div>
  );
}
