exports.getDevelopers = (req, res) => {
  const developers = [
    {
      firstname: "Boaz",
      lastname: "Yunayev",
      id: 322271271,
      email: "boazunive@gmail.com",
    },
  ];
  res.status(200).json(developers);
};
