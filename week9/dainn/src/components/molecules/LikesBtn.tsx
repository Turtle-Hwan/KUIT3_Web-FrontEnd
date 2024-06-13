import React, { useState } from 'react';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import { useParams } from 'react-router-dom';
import useContentLikeMutation from '/Users/dainn/KUIT3_Web-FrontEnd/week9/dainn/src/apis/useContentLikeMutation';

interface Props {
  likeCount: number;
}

const LikesBtn: React.FC<Props> = ({ likeCount }) => {
  // 좋아요 갯수 상태
  const [likeCountState, setLikeCountState] = useState<number>(likeCount);
  const { id } = useParams<{ id: string }>();

  const handleContentLikeClick = async() => {
    console.log("handleContentLikeClick 누름");
     likeMutation.mutate();
     setLikeCountState((prevCount) => prevCount+1);
  }

   const likeMutation = useContentLikeMutation(id!);

  return (
    <div className="font-pretendard items-center flex gap-x-2">
      <div className="cursor-pointer">
        <ThumbUpAltIcon
          width={16}
          height={16}
          sx={{ color: 'black' }}
          className="dark:text-white"
          onClick = {handleContentLikeClick}
          //onClick={() => {}}
        />
      </div>

      <div className="text-black dark:text-white">{likeCountState}</div>
    </div>
  );
};

export default LikesBtn;
