import { useQuery } from '@tanstack/react-query';
import { getTasks } from '../../../api/api';

export default function TanstackQueryLearn() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['tasks'],
    queryFn: getTasks,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="max-w-screen-md mx-auto p-4 overflow-y-auto overflow-hidden">
      <ul className="flex flex-col ">
        {data.map((task) => (
          <li
            key={task.id}
            className="bg-white text-bg p-4 my-2 shadow rounded-md h-28 w-full flex flex-col justify-between"
          >
            <p>{task.name}</p>
            <p>{task.completed ? 'completed' : 'uncompleted'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
