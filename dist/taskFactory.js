"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UrgentTasksFactory = exports.PersonalTasksFactory = exports.ProjectTasksFactory = void 0;
const task_1 = require("./task");
class ProjectTasksFactory {
    create(name) {
        return new task_1.ProjectTasks(name);
    }
}
exports.ProjectTasksFactory = ProjectTasksFactory;
class PersonalTasksFactory {
    create(name) {
        return new task_1.PersonalTasks(name);
    }
}
exports.PersonalTasksFactory = PersonalTasksFactory;
class UrgentTasksFactory {
    create(name) {
        return new task_1.UrgentTasks(name);
    }
}
exports.UrgentTasksFactory = UrgentTasksFactory;
//# sourceMappingURL=taskFactory.js.map