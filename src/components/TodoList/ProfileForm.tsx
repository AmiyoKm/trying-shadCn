import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Task } from "../../types";
import { Button } from "@/components/ui/button";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {  useState } from "react";
import TaskCard from "./TaskCard";

const formSchema = z.object({
  title: z.string().min(1, {
    message: "Username must be at least 2 characters.",
  }),
});

export function ProfileForm() {
  // ...
  // 1. Define your form.
  const [tasks, setTasks] = useState<Task[]>([]);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    },
  });

  function ontoggle(id: string) {
   setTasks( (prev) =>
    prev.map(item =>
        item.id === id ? {...item, completed: !item.completed} : item
    )
   )
  }
  function onDelete(id: string) {
    const selectedTask = tasks.filter((task) => id !== task.id);
    if (selectedTask) {
      setTasks(selectedTask);
    }
  }

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    const newTask: Task = {
      id: Date.now().toString(),
      title: values.title,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    console.log(values);
    form.reset()
  }
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Add a Work to do</FormLabel>
                <FormControl>
                  <Input  placeholder="What to do" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Add</Button>
        </form>
      </Form>
      <div className="m-10 flex">
        {tasks.length > 0
          ? tasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                onToggle={() => ontoggle(task.id)}
                onDelete={() => onDelete(task.id)}
              />
            ))
          : null}
      </div>
    </>
  );
}
