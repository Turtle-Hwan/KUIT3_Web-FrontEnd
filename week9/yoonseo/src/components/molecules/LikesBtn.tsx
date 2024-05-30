import React, { useState } from 'react';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import useContentLikeMutation from '../../apis/useContentLikeMutation';

interface Props {
  id: string;
  likeCount: number;
}

const LikesBtn: React.FC<Props> = ({ id, likeCount }) => {
  // 좋아요 갯수 상태
  const [likeCountState, setLikeCountState] = useState<number>(likeCount);
  const { mutate } = useContentLikeMutation();

  const handleClick = () => {
    mutate({ id, currentLikeCount: likeCountState }, {
      onSuccess: () => {
        setLikeCountState(prev => prev + 1);
      }
    });
  };

  return (
    <div className="font-pretendard items-center flex gap-x-2">
      <div className="cursor-pointer">
        <ThumbUpAltIcon
          width={16}
          height={16}
          sx={{ color: 'black' }}
          className="dark:text-white"
          onClick={handleClick}
        />
      </div>

      <div className="text-black dark:text-white">{likeCountState}</div>
    </div>
  );
};

export default LikesBtn;
