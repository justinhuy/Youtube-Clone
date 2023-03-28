import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { Videos, ChannelCard } from './';
import { fetchFromAPI } from './utils/FetchFromAPI';

const ChannelDetail = () => {
 const [channelDetail, setchannelDetail] = useState(null);
 const [videos, setVideos] = useState([]);
 const { id } = useParams();

 useEffect(() => {
  fetchFromAPI(`channels?part="snippet&id=${id}`).then((data) =>
   setchannelDetail(data?.items[0])
  );
  fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data) =>
   setVideos(data?.items)
  );
 }, [id]);

 return <div>{id}</div>;
};

export default ChannelDetail;
