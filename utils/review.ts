interface ReviewType {
    id: number;
    review: string;
    reviewer: string;
    star: string;
  }
  
  export const ReviewData: ReviewType[] = [
    {
        id: 1,
        star: "./images/star.png",
        review: "We had a great partnership where they committed to getting the work done",
        reviewer: "CEO & Founder, Startup Company"
      },
    
      {
        id: 2,
        star: "./images/star.png",
        review: "We had a great partnership where they committed to getting the work done",
        reviewer: "CEO & Founder, Startup Company"
      },
    
      {
        id: 3,
        review: "We had a great partnership where they committed to getting the work done",
        reviewer: "Earnest",
        star: "./images/star.png",
      },
    
      {
        id: 4,
        review: "We had a great partnership where they committed to getting the work done",
        reviewer: "Josh",
        star: "./images/star.png",
      },
    
      {
        id: 5,
        review: "We had a great partnership where they committed to getting the work done",
        reviewer: "Jude",
        star: "./images/star.png",
      }
  ];
  