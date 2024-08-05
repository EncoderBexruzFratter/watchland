import { Avatar, Card, CardContent, CardMedia, Stack, Typography } from '@mui/material';
import { colors } from "../../constants/colors";
import moment from 'moment';
import { CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const VideoCard = ({ video }) => {
    return (
        <Card className='card' sx={{ width: { xs: '100%', sm: "360px", md: "350px" }, backgroundColor: colors.body, borderRadius: 0, }}>
            <Link to={`/video/${video.id.videoId}`}>
                <CardMedia
                    component="img"
                    image={video?.snippet?.thumbnails?.high?.url}
                    alt={video?.snippet?.title}
                    sx={{ width: "100%", objectFit: "cover", display: "block", height: "180px" }}
                />
            </Link>
            <CardContent sx={{ background: "transparent", height: "200px", position: "relative" }}>
                <Link to={`/video/${video.id.videoId}`}>
                    <Typography mt={"40px"} mb={"5px"} sx={{ opacity: "0.4" }}>
                        {moment(video?.snippet?.publishedAt).fromNow()}
                    </Typography>
                    <Typography variant="h6" sx={{ fontSize: "16px", color: colors.primary, mb: "5px", fontWeight: "bold" }}>
                        {video?.snippet?.title.slice(0, 50)}
                    </Typography>
                    <Typography variant="subtitle2" sx={{ opacity: "0.6", color: colors.primary, mb: "5px", fontWeight: "bold" }}>
                        {video?.snippet?.description.slice(0, 70)}
                    </Typography>
                </Link>
                <Link to={`/chanel/${video?.snippet?.channelId}`}>
                <Stack direction={"row"} position={"absolute"} top={"10px"} alignItems={"center"} gap={"5px"}>
                    <Avatar src={video?.snippet?.thumbnails?.high?.url} />
                    <Typography variant="subtitle2" color={"gray"} sx={{ opacity: "0.6", fontWeight: "bold" }}>
                        {video?.snippet?.channelTitle}
                        <CheckCircle sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                    </Typography>
                </Stack>
                </Link>

            </CardContent>
        </Card>
    );
}

export default VideoCard
