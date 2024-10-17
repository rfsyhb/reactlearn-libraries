import { useQuery } from '@tanstack/react-query';
import { getTasks } from '../api/api';

export default function TanstackQueryLearn() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['tasks'],
    queryFn: getTasks,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <ul>
        {data.map((task) => (
          <li key={task.id}>{task.name} - {task.completed ? "completed" : "uncompleted"}</li>
        ))}
      </ul>
    </div>
  )
}