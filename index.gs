function generateTasks(objSlug) {
  // TODO: make a list with different titles to use and a empty list to fill with tasks
  const titles = ['Research automation tools', 'Submit weekly reports', 'Design database schema', 'E-mail the project', 'Finish all tasks'];
  const tasks = [];
  const today = new Date();
  // TODO: need a for-loop to create 5 task-object 
  for (let i = 1; i <= 5; i++) {
    // TODO: set the dueDate = today + (i * 2)
    const dueDate = new Date(today); 
    dueDate.setDate(today.getDate() + i * 2);
    // TODO: push() to create the array with 3 different keys
    tasks.push({
      taskId: `OBJ-${today.getFullYear()}-999-T0${i}`,
      title: titles[i - 1],
      // TODO: show the task date in format yyyy-mm-dd
      dueDate: dueDate.toLocaleDateString('sv')
    });
  }
  // TODO: return the tasks with JSON array
  return JSON.stringify(tasks, null, 1);
}
Logger.log(generateTasks("interns-gets-starting"));
