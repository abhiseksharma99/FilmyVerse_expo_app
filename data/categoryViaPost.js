const images = [
    {
      id: 1,
      genre:'Action',
      url: "https://i.pinimg.com/474x/b9/2c/18/b92c18da47e2fe56b53d5bed85ec11cc.jpg",
    },
    {
      id: 2,
      genre:'Action',
      url: "https://i.pinimg.com/474x/22/59/2c/22592cabca13df442bfbeaffad6e3a9e.jpg",
    },
    {
      id: 3,
      genre:'Thriller',
      url: "https://i.pinimg.com/474x/e8/2f/82/e82f828f60f7d210d7c8574595c771e9.jpg",
    },
    {
      id: 4,
      genre:'Thriller',
      url: "https://i.pinimg.com/474x/43/b2/8e/43b28e0d0a17500db07e2bdadf086b37.jpg",
    },
    {
      id: 5,
      genre:'Suspense',
      url: "https://i.pinimg.com/474x/d9/c9/83/d9c983ab65c316308107ac7e296dbb7e.jpg",
    },
    {
      id: 6,
      genre:'Suspense',
      url: "https://i.pinimg.com/474x/05/c0/2c/05c02c0c3ab0eaf7ea098897543b37c2.jpg",
    },
    {
      id: 7,
      genre:'Comedy',
      url: "https://i.pinimg.com/474x/41/c0/1f/41c01f8558cbbf9d3b15b46c0ea1b530.jpg",
    },
    {
      id: 8,
      genre:'Comedy',
      url: "https://i.pinimg.com/474x/e4/3e/1e/e43e1e3d5aad9e0fe5a042838aeeff94.jpg",
    },
    {
      id: 9,
      genre:'Drama',
      url: "https://i.pinimg.com/474x/fe/b4/6d/feb46dcfd088f79f551f8fd91c167377.jpg",
    },
    {
      id: 10,
      genre:'Drama',
      url: "https://i.pinimg.com/474x/23/cc/bf/23ccbf28137082dc795cf308f74f5ec0.jpg",
    },
    {
      id: 11,
      genre:'Romance',
      url: "https://i.pinimg.com/474x/37/5e/31/375e31f84ebb61551836ab4159d2a993.jpg",
    },
    {
      id: 12,
      genre:'Romance',
      url: "https://i.pinimg.com/474x/5b/ab/fb/5babfb8d603000e45234338c932c5742.jpg",
    },
    {
      id: 13,
      genre:'Horror',
      url: "https://i.pinimg.com/474x/66/cb/8e/66cb8e8cc043355b487523c4815e9de4.jpg",
    },
    {
      id: 14,
      genre:'Horror',
      url: "https://i.pinimg.com/474x/69/9f/c3/699fc3953f0bdc9c85351abb7224c7a8.jpg",
    },
    {
      id: 15,
      genre:'Science Fiction',
      url: "https://i.pinimg.com/474x/b3/ba/20/b3ba207cc3273ceb0bdc51aed0ed7744.jpg",
    },
    {
      id: 16,
      genre:'Science Fiction',
      url: "https://i.pinimg.com/474x/3f/94/2a/3f942a0a3858fc8748bbf1278a478b45.jpg",
    },
    {
      id: 17,
      genre:'Fantasy',
      url: "https://i.pinimg.com/474x/66/3b/89/663b89ed029b10c778fdf8d7fe33f0cb.jpg",
    },
    {
      id: 18,
      genre:'Fantasy',
      url: "https://i.pinimg.com/474x/5b/21/6f/5b216f4678e7a943b5df6925df1e725d.jpg",
    },
    {
      id: 19,
      genre:'Documentary',
      url: "https://i.pinimg.com/474x/15/40/be/1540be6e2979e08b65218f396986b085.jpg",
    },
    {
      id: 20,
      genre:'Documentary',
      url: "https://i.pinimg.com/474x/a5/7d/23/a57d23444bf5616330f443d071438ad5.jpg",
    },
    {
      id: 21,
      genre:'Mystery',
      url: "https://i.pinimg.com/474x/09/c9/dc/09c9dcdff764b6c75aac7a6f89bbc490.jpg",
    },
    {
      id: 22,
      genre:'Mystery',
      url: "https://i.pinimg.com/474x/69/89/78/6989785f326469ad6a2f3c9801647cd4.jpg",
    },
    {
      id: 23,
      genre:'Adventure',
      url: "https://i.pinimg.com/474x/c4/c8/62/c4c862be3e31cb5f218a6fab46b91338.jpg",
    },
    {
      id: 24,
      genre:'Adventure',
      url: "https://i.pinimg.com/474x/71/1f/f1/711ff130392ef6c867250a567e4d5ad2.jpg",
    },
    {
      id: 25,
      genre:'Animation',
      url: "https://i.pinimg.com/474x/c2/7c/b8/c27cb80de7d36ea92225ae99ed0ea2cc.jpg",
    },
    {
      id: 26,
      genre:'Animation',
      url: "https://i.pinimg.com/474x/67/b6/90/67b690140f09b858dd942c7a35e434e2.jpg",
    },
    {
      id: 27,
      genre:'Crime',
      url: "https://i.pinimg.com/474x/e0/9b/0e/e09b0eb92a462943ba26fd297e597cd2.jpg",
    },
    {
      id: 28,
      genre:'Crime',
      url: "https://i.pinimg.com/474x/22/5a/3d/225a3df83a7d80a645803f3de5eef352.jpg",
    },
    {
      id: 29,
      genre:'Biography',
      url: "https://i.pinimg.com/474x/84/4f/18/844f18bef2c0d751316e3b54a04d0b64.jpg",
    },
    {
      id: 30,
      genre:'Biography',
      url: "https://i.pinimg.com/474x/86/a9/a6/86a9a68733e8b28c1a86d802ecab2f82.jpg",
    },
    {
      id: 31,
      genre:'Family',
      url: "https://i.pinimg.com/474x/82/51/cd/8251cda06297f839498cd18dfbb529fc.jpg",
    },
    {
      id: 32,
      genre:'Family',
      url: "https://i.pinimg.com/474x/3f/10/95/3f109533b2b1c9fdb8689029a8f95596.jpg",
    },
    {
      id: 33,
      genre:'History',
      url: "https://i.pinimg.com/474x/ea/01/d3/ea01d339a844c4a53589f1acfa799364.jpg",
    },
    {
      id: 34,
      genre:'History',
      url: "https://images.indianexpress.com/2019/11/Tanhaji-005.jpg?w=350",
    },
    {
      id: 35,
      genre:'Musical',
      url: "https://i.pinimg.com/474x/49/3e/2c/493e2c1109f2e72f745eb7880d75e7fe.jpg",
    },
    {
      id: 36,
      genre:'Musical',
      url: "https://i.pinimg.com/474x/0d/59/15/0d591538f59080e1036c1997a95cad85.jpg",
    },
    {
      id: 37,
      genre:'War',
      url: "https://i.pinimg.com/474x/20/b7/d4/20b7d4818567d831faeb3ab4c87d75df.jpg",
    },
    {
      id: 38,
      genre:'War',
      url: "https://i.pinimg.com/474x/b9/c6/b4/b9c6b46c3f81eefffbc4bf3657880fbc.jpg",
    },
    {
      id: 39,
      genre:'Western',
      url: "https://i.pinimg.com/474x/36/64/33/3664332920ad599deb7c0d228e50bac3.jpg",
    },
    {
      id: 40,
      genre:'Western',
      url: "https://i.pinimg.com/474x/d2/3e/a7/d23ea79f4cda5bddc9f992d682c254c9.jpg",
    },
    {
      id: 41,
      genre:'Sports',
      url: "https://i.pinimg.com/474x/79/ce/b6/79ceb6542b4343910f39e8a7d737e94c.jpg",
    },
    {
      id: 42,
      genre:'Sports',
      url: "https://i.pinimg.com/564x/42/d5/33/42d533ba32dff799339b250774f1faa4.jpg",
    },
  ];
  
  export default images;
  