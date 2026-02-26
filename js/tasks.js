// tasks.js
// Массив для хранения задач в памяти
let tasks = [];

// Инициализация задач начальными данными
export function initializeTasks(initialTasks) {
    tasks = [...initialTasks];
}

// Получение копии всех задач
export function getTasks() {
    return [...tasks];
}

// Добавление новой задачи
export function addTask(text, priority = 'medium') {
    const newTask = {
        id: Date.now() + Math.random(), // Генерируем уникальный ID
        text: text.trim(),
        completed: false,
        priority: priority,
        createdAt: new Date().toISOString(),
    };
    tasks.push(newTask);
    return newTask;
}

// Обновление приоритета задачи
export function updateTaskPriority(id, newPriority) {
    const task = tasks.find(t => t.id == id);
    if (task) {
        task.priority = newPriority;
    }
}

// Переключение статуса выполнения задачи
export function toggleTask(id) {
    const task = tasks.find(t => t.id == id);
    if (task) {
        task.completed = !task.completed;
    }
}

// Удаление задачи по ID
export function deleteTask(id) {
    tasks = tasks.filter(t => t.id != id);
}

// Очистка всех выполненных задач
export function clearCompleted() {
    tasks = tasks.filter(t => !t.completed);
}

// Получение отфильтрованного списка задач
export function getFilteredTasks(filter) {
    switch (filter) {
        case 'active': // Только активные (невыполненные)
            return tasks.filter(t => !t.completed);
        case 'completed': // Только выполненные
            return tasks.filter(t => t.completed);
        case 'all': // Все задачи
        default:
            return [...tasks];
    }
}