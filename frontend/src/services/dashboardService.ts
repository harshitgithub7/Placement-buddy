export const dashboardService = {
  getStudentData: async () => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    return {
      atsScore: 78,
      appliedCompanies: 5,
      upcomingInterviews: 2,
      opportunities: [
        { id: 1, company: "Google", role: "SDE Intern" },
        { id: 2, company: "Amazon", role: "Frontend Developer" },
      ],
    };
  },
};