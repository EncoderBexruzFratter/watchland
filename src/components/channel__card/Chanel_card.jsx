import { CheckCircle } from '@mui/icons-material'
import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Chanel_card({ video }) {
    return (
        <Box Sx={{
            boxShadow: 'none',
            orderRadius: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: { xs: '356px', md: '320px' },
            height: '326px',
            margin: 'auto',
        }}

        >
            <Link to={`/chanel/${video?.snippet?.channelId}`}>
                <CardContent sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: "center",
                    alignItems: 'center',
                }}>
                    <CardMedia
                        image={video?.snippet?.thumbnails?.default?.url} alt={video?.snippet?.title}
                        sx={{
                            borderRadius: '50%',
                            height: '180px',
                            width: '180px',
                            mb: 2,
                            border: '1px solid #e3e3e3',
                        }}
                    />
                    <Typography variant={'h6'}>
                        {video?.snippet?.title}
                        <CheckCircle sx={{
                            fontSize: "14px",
                            color: "gray",
                            ml: "5px"
                        }} />
                    </Typography>
                    {video.statistics?.subscriberCount && (
                        <Typography sx={{
                            fontSize: "15px",
                            fontWeight: 500,
                            color: "gray"
                        }}>
                            {parseInt(video.statistics?.subscriberCount).toLocaleString("en-US")} {" "} Subscribers
                        </Typography>
                    )}
                </CardContent>
            </Link>
        </Box>
    )
}
