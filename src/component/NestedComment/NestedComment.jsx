import React from 'react'
import NestedReply from './NestedReply'
const a=[
    {
      username: "Akshay Saini",
      comment: "Lorem ipsum dolor sit amet consectetur adip occurence velit",
      replies: [
        {
          username: "Deepika Padukone",
          comment: "Lorem ipsum dolor sit amet consectetur adip occurence velit",
        },
      ],
    },
    {
      username: "Elon Musk",
      comment: "Lorem ipsum dolor sit amet consectetur adip occurence velit",
      replies: [
        {
          username: "Deepika Padukone",
          comment: "Lorem ipsum dolor sit amet consectetur adip occurence velit",
          replies: [
            {
              username: "Deepika Padukone",
              comment:
                "Lorem ipsum dolor sit amet consectetur adip occurence velit",
              replies: [
                {
                  username: "Deepika Padukone",
                  comment:
                    "Lorem ipsum dolor sit amet consectetur adip occurence velit",
                  replies: [
                    {
                      username: "Deepika Padukone",
                      comment:
                        "Lorem ipsum dolor sit amet consectetur adip occurence velit",
                      replies: [
                        {
                          username: "Deepika Padukone",
                          comment:
                            "Lorem ipsum dolor sit amet consectetur adip occurence velit",
                          replies: [
                            {
                              username: "Deepika Padukone",
                              comment:
                                "Lorem ipsum dolor sit amet consectetur adip occurence velit",
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              username: "Deepika Padukone",
              comment:
                "Lorem ipsum dolor sit amet consectetur adip occurence velit",
            },
          ],
        },
        {
          username: "Deepika Padukone",
          comment: "Lorem ipsum dolor sit amet consectetur adip occurence velit",
        },
      ],
    },
    {
      username: "Sachin Tendulkar",
      comment: "Lorem ipsum dolor sit amet consectetur adip occurence velit",
    },
  ];
  
const NestedComment = () => {
  return (
    <div>
        {/* {a.map((data)=>( */}
            <NestedReply data={a}/>
        {/* ))} */}
    </div>
  )
}

export default NestedComment