import { defineStore } from "pinia";

import { createInitialBriefForm } from "../data/briefCreate.config";
import { createInitialProgram } from "../data/briefPrograms.config";
import { createInitialCreativeInputsForm } from "../data/briefCreativeInputs.config";

export const useBriefDraftStore = defineStore("briefDraft", {
  state: () => ({
    code: "BRF-2026-001",
    status: "draft",

    generalInfo: createInitialBriefForm(),

    programs: [createInitialProgram()],

    creativeInputs: createInitialCreativeInputsForm(),
  }),

  getters: {
    totalLeads: (state) => {
      return state.programs.reduce((total, program) => {
        return total + Number(program.requiredLeads || 0);
      }, 0);
    },

    estimatedInvestment: (state) => {
      return state.programs.reduce((total, program) => {
        const leads = Number(program.requiredLeads || 0);
        const leadCost = Number(program.previousLeadCost || 0);

        return total + leads * leadCost;
      }, 0);
    },

    totalPrograms: (state) => {
      return state.programs.length;
    },
  },

  actions: {
    addProgram() {
      this.programs.push(createInitialProgram());
    },

    removeProgram(index) {
      if (this.programs.length === 1) {
        return;
      }

      this.programs.splice(index, 1);
    },
    ensureGeneralInfoStructure() {
      if (!this.generalInfo.authorization) {
        this.generalInfo.authorization = {
          authorizerName: "",
          authorizerEmail: "",
          authorizationMessage: "",
          authorizationSupportFile: null,
        };
      }

      if (
        !Object.prototype.hasOwnProperty.call(
          this.generalInfo,
          "budgetSupportFile",
        )
      ) {
        this.generalInfo.budgetSupportFile = null;
      }
    },
    resetDraft() {
      this.code = "BRF-2026-001";
      this.status = "draft";
      this.generalInfo = createInitialBriefForm();
      this.programs = [createInitialProgram()];
      this.creativeInputs = createInitialCreativeInputsForm();
    },
  },
});
