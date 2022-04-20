const mockResponse = {
  data: {
    results: [
      {
        name: {
          first: "Mariana",
          last: "Alvares",
        },
        picture: {
          large: "https://randomuser.me/api/portraits/men/39.jpg",
        },
        login: {
          username: "alvaresMariana",
        },
      },
    ],
  },
};

export default {
  get: jest.fn().mockResolvedValue(mockResponse),
};
