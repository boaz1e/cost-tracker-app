exports.getDevelopers = (req, res) => {
  const developers = [
    {
      firstname: "Boaz",
      lastname: "Yunayev",
      id: 111111234,
      email: "boazunive@gmail.com",
    },
    {
      firstname: "Sahar",
      lastname: "Levy",
      id: 111100000,
      email: "xvruii@gmail.com",
    },
  ];
  res.status(200).json(developers);
};
