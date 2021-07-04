import { GET_QUERY } from '../src/query';
import { useQuery } from '@apollo/client';
import ReactMarkdown from 'react-markdown';

export default function Home() {
  const { loading, error, data } = useQuery(GET_QUERY);
  console.log(data);
  if (loading) return <>now loading...</>;
  const model = data.sampleModels[0];
  return (
    <div>
      <h1>Lesson GraphCMS</h1>
      <div>
        <h2>{model.title}</h2>
        <ReactMarkdown>{model.markdownContent}</ReactMarkdown>
      </div>
    </div>
  );
}
