import { defineStore } from "pinia";

export const useMoovStore = defineStore("moovProgressBar", {
  state: () => ({
    progress: {
      progressBar25: false,
      progressBar50: true,
      progressBar75: false,
      progressBar100: false,
    },
  }),
  actions: {
    zero() {
      Object.keys(this.progress).forEach((element) => {
        this.progress[element] = false;
      });
    },
    add5() {
      Object.keys(this.progress).forEach((element, index) => {
        if (this.progress[element] == true) {
        }
      });
    },
    add10() {},
  },
});
