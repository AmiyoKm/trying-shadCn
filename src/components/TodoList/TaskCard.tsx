import { Card,CardTitle, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Task } from "@/types";
import { Button } from "@/components/ui/button";


const TaskCard = ({task , onToggle , onDelete}:{ task: Task; onToggle: () => void; onDelete: () => void;}) => {
  return (
    <>

    <Card>
      <CardHeader>
        <CardTitle>Task</CardTitle>
      </CardHeader>
      <CardContent>
        <p style={task.completed ? {textDecoration:'line-through'} : {}  }>{task.title}</p>
      </CardContent>

      <CardFooter>
        <Button onClick={onToggle}>{task.completed ? 'Incomplete' : 'Complete'}</Button>
        <Button  onClick={onDelete}>Delete</Button>
      </CardFooter>

    </Card>
    
    </>
  )
}

export default TaskCard