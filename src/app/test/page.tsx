import { Progress } from '@/components/ui/progress';
export default function Page() {
  return (
    <div>
      <Progress
        value={10}
        indicatorColor="bg-blue-300"
      />
      <div>
        <Progress
          value={60}
          indicatorColor={'bg-blue-300'}
        />
      </div>
    </div>
  );
}
