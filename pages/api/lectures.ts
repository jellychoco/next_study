import type { NextApiRequest, NextApiResponse } from "next";
const mockCategory = {
  id: 0,
  name: "프로그래밍",
};

const mockTags = [
  {
    id: 0,
    title: "평생보장",
  },
  {
    id: 1,
    title: "AWS",
  },
  {
    id: 2,
    title: "DevOps",
  },
];

const data = {
  lectureList: [
    {
      id: 0,
      cagtegory: mockCategory,
      title: "초격차 패키지",
      tags: mockTags,
      description: "상세",
      thumb: "/thumb.jpg",
      isHot: true,
      isNew: true,
    },
  ],
};

type Data = {
  name: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(data);
}
