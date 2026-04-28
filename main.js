import { Gantt } from "@bryntum/gantt";

const gantt = new Gantt({
  appendTo: document.body,

  project: {
    transport: {
      load: {
        url: "data/data.json",
      },
    },
    autoLoad: true,
  },

  columns: [{ type: "name", width: 250, text: "Tasks" }],
});
