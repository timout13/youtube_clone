import { Stack, Box } from "@mui/material";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";

const Videos = ({ videos }) => {
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((item, idx) => (
        <Box key={idx}>
          {console.log(item.id.kind)}
          {item.id.kind === "youtube#video" && <VideoCard video={item} />}
          {item.id.kind === "youtube#channel" && (
            <ChannelCard channelDetail={item} />
          )}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
